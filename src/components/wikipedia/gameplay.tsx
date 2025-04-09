"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  IconHistory,
  IconRefresh,
  IconTrophy,
  IconArrowRight,
} from "@tabler/icons-react";
import ReactConfetti from "react-confetti";
import { useRouter } from "next/navigation";
import { useTeam } from "@/contexts/TeamContext";
import { Timer } from "@/components/Timer";

type WikipediaGameplayProps = {
  onRestart: () => void;
};

type GameConfig = {
  gameId: string;
  startPage: string;
  hint: string;
  isFinal: boolean;
  order: number;
};

export function WikipediaGameplay({ onRestart }: WikipediaGameplayProps) {
  const router = useRouter();
  const { team, updateTeamLevel } = useTeam();
  const [clicks, setClicks] = useState(0);
  const [currentPage, setCurrentPage] = useState("");
  const [targetHint, setTargetHint] = useState("");
  const [gameId, setGameId] = useState<string>("");
  const [isFinalRound, setIsFinalRound] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const totalRounds = 3; // Use a constant instead of state since we don't change it

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isFirstLoad = useRef(true);
  const lastClickTime = useRef(0);
  const CLICK_COOLDOWN = 2000; // Increased to 2 seconds cooldown between clicks
  const pendingNavigation = useRef(false); // Track if navigation is in progress
  const skipNextClickCount = useRef(false); // Flag to skip the next click count

  // State for tracking game timing
  const [gameTime, setGameTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Game state
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showWinDialog, setShowWinDialog] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState(0);
  const [targetPage, setTargetPage] = useState("");

  // Track visited pages history
  const [pageHistory, setPageHistory] = useState<string[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);

  // Window dimensions for confetti
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Initialize game configuration
  useEffect(() => {
    const initializeGame = async () => {
      try {
        // If gameId is empty, get the first game, otherwise continue with the current one
        const url = gameId
          ? `/api/wikipedia-game/validate?gameId=${gameId}`
          : "/api/wikipedia-game/validate";

        const response = await fetch(url);
        const data: GameConfig = await response.json();

        if (data) {
          setGameId(data.gameId);
          setCurrentPage(data.startPage);
          setTargetHint(data.hint);
          setPageHistory([data.startPage]);
          setIsFinalRound(data.isFinal);
          setRoundNumber(data.order);
          setPageLoaded(false); // Reset page loaded state for new round
          setIsTimerRunning(false); // Make sure timer is paused until page loads
          pendingNavigation.current = false;
          skipNextClickCount.current = false;
        }
      } catch (error) {
        console.error("Failed to initialize game:", error);
        // Fallback defaults
        setCurrentPage("Artificial_intelligence");
        setTargetHint("Find the article about embeddings");
        setPageHistory(["Artificial_intelligence"]);
      }
    };

    initializeGame();
  }, [gameId]); // Only re-run when gameId changes

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if reached target page via API
  useEffect(() => {
    const validatePage = async () => {
      if (!currentPage || gameCompleted || !gameId) return;

      try {
        const response = await fetch("/api/wikipedia-game/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: currentPage,
            gameId,
          }),
        });

        const data = await response.json();

        if (data.isCorrect) {
          setGameCompleted(true);
          setShowWinDialog(true);
          setTargetPage(data.targetPage || "");
          setIsFinalRound(data.isFinal);
          setIsTimerRunning(false);

          // Record game state if team is available
          if (team) {
            recordGameState(data.targetPage, clicks, gameTime);
          }

          // Only show confetti if this is the final round
          if (data.isFinal) {
            // Start with more confetti for bigger impact
            setConfettiPieces(1000);

            // Gradually reduce confetti pieces for fade-out effect
            const startFadeOut = () => {
              const fadeInterval = setInterval(() => {
                setConfettiPieces((prev) => {
                  const newValue = prev - 50;
                  if (newValue <= 0) {
                    clearInterval(fadeInterval);
                    return 0;
                  }
                  return newValue;
                });
              }, 100);
            };

            // Start fade out after 5 seconds of full celebration
            setTimeout(startFadeOut, 5000);
          }
        }
      } catch (error) {
        console.error("Failed to validate page:", error);
      }
    };

    validatePage();
  }, [currentPage, gameCompleted, gameId, clicks, team, gameTime]);

  // Record game state to the API
  const recordGameState = async (
    targetPage: string,
    clicks: number,
    timeTaken: number
  ) => {
    try {
      await fetch("/api/wikipedia-game/record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamName: team?.name,
          targetPage,
          clicks,
          timeTaken,
        }),
      });
    } catch (error) {
      console.error("Failed to record game state:", error);
    }
  };

  // Listen for messages from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Handle navigation events from the Wikipedia iframe
      if (event.data && event.data.type === "WIKI_NAVIGATION") {
        const newPage = event.data.page;
        setCurrentPage(newPage);

        // Always update current page, but don't count clicks or start timer yet
        if (!isFirstLoad.current) {
          // Add to history
          setPageHistory((prev) => [...prev, newPage]);

          // Pause timer during page load
          setPageLoaded(false);
          setIsTimerRunning(false);

          // Mark that we have a pending navigation
          pendingNavigation.current = true;

          // If this is a user-initiated navigation, count it as a click
          // unless we're skipping the next click count (from a previous page load)
          const now = Date.now();
          if (
            !skipNextClickCount.current &&
            now - lastClickTime.current >= CLICK_COOLDOWN
          ) {
            setClicks((prev) => prev + 1);
            lastClickTime.current = now;
          }

          // Reset the skip flag
          skipNextClickCount.current = false;
        } else {
          isFirstLoad.current = false;
        }
      } else if (event.data && event.data.type === "WIKI_PAGE_LOADED") {
        // Resume timer once page is loaded
        setPageLoaded(true);

        if (!gameCompleted) {
          setIsTimerRunning(true);

          // If this was an automatic page load navigation, skip the next click count
          if (pendingNavigation.current) {
            skipNextClickCount.current = true;
            pendingNavigation.current = false;
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [gameCompleted]);

  // Handle game completion and update team level
  const completeGameAndUpdateLevel = useCallback(async () => {
    try {
      if (team) {
        // Increment team level when game is completed
        await updateTeamLevel((parseInt(team.currentLevel) + 1).toString());
        console.log("Team level updated successfully");
      }
    } catch (error) {
      console.error("Failed to update team level:", error);
    }
  }, [team, updateTeamLevel]);

  // Handle navigation to Glitch and Giggle (after completing all rounds)
  const navigateToGlitchAndGiggle = async () => {
    // Update level when completing the final round
    if (isFinalRound) {
      await completeGameAndUpdateLevel();
    }
    router.push("/glitch-and-giggle");
  };

  // Handle when user manually quits to main menu via the restart button
  const handleRestart = async () => {
    // If user has completed at least 1 round, update their level
    if (roundNumber > 1) {
      await completeGameAndUpdateLevel();
    }

    setClicks(0);
    setGameCompleted(false);
    setConfettiPieces(0);
    setTargetPage("");
    setGameId(""); // Reset to get the first game
    isFirstLoad.current = true;
    lastClickTime.current = 0;
    setGameTime(0);
    setIsTimerRunning(false); // Don't start timer until page is loaded
    setPageLoaded(false);
    pendingNavigation.current = false;
    skipNextClickCount.current = false;
    onRestart();
  };

  // Handle navigation to next round
  const handleNextRound = async () => {
    try {
      // Get the next game configuration
      const response = await fetch(
        `/api/wikipedia-game/validate?getNextGame=${gameId}`
      );
      const data = await response.json();

      if (data.noMoreGames) {
        // No more rounds, go back to main menu
        router.push("/glitch-and-giggle");
        return;
      }

      // Reset game state for the next round
      setClicks(0);
      setGameCompleted(false);
      setShowWinDialog(false);
      setTargetPage("");
      isFirstLoad.current = true;
      lastClickTime.current = 0;
      setGameId(data.gameId);
      setGameTime(0);
      setIsTimerRunning(false); // Don't start timer until page is loaded
      setPageLoaded(false);
      pendingNavigation.current = false;
      skipNextClickCount.current = false;
    } catch (error) {
      console.error("Failed to load next round:", error);
      // Fallback to main menu if we can't load the next round
      router.push("/glitch-and-giggle");
    }
  };

  return (
    <div className="bg-gray-800 border-4 border-gray-700 rounded-lg p-6 max-w-4xl mx-auto">
      {/* Confetti overlay with dynamic piece count for fading */}
      {confettiPieces > 0 && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={true}
          numberOfPieces={confettiPieces}
          gravity={0.15}
          opacity={confettiPieces / 500} // Also fade opacity as pieces reduce
          colors={["#f3cc30", "#71f6ff", "#ff71a3", "#01c0f0", "#8a86e9"]}
        />
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-[family-name:var(--font-vt323)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          WIKIPEDIA SPEED RUN CHALLENGE
        </h2>
        <div className="bg-yellow-400 p-2 rounded-md">
          <p className="font-[family-name:var(--font-vt323)] text-black">
            TARGET HINT: <span className="font-bold">{targetHint}</span>
          </p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-3 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            {team && (
              <p className="text-white font-[family-name:var(--font-vt323)]">
                TEAM: <span className="text-green-400">{team.name}</span>
              </p>
            )}
            <p className="text-white font-[family-name:var(--font-vt323)]">
              ROUND:{" "}
              <span className="text-purple-400">
                {roundNumber}/{totalRounds}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white font-[family-name:var(--font-vt323)]">
              CURRENT:{" "}
              <span className="text-cyan-400">
                {currentPage
                  ? decodeURIComponent(currentPage.replace(/_/g, " "))
                  : "Loading..."}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-white font-[family-name:var(--font-vt323)]">
              CLICKS: <span className="text-yellow-400">{clicks}</span>
            </p>
            <Timer
              key={`timer-${gameId}`}
              isRunning={isTimerRunning && pageLoaded}
              initialTime={0}
              onTimeChange={setGameTime}
              className="text-white font-[family-name:var(--font-vt323)]"
            />
          </div>
        </div>
      </div>

      {/* Wikipedia content iframe */}
      <div className="bg-white rounded-lg h-[60vh] p-0 mb-4 overflow-hidden">
        {currentPage ? (
          <iframe
            ref={iframeRef}
            src={`/api/wiki-proxy?page=${currentPage}`}
            className="w-full h-full border-none"
            title="Wikipedia Content"
            onLoad={() => {
              // Send a message to self that the page has loaded
              window.postMessage({ type: "WIKI_PAGE_LOADED" }, "*");
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p>Loading...</p>
          </div>
        )}
      </div>

      {/* Game controls */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <Button
            onClick={() => setHistoryOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-none flex items-center gap-2"
            variant="default"
          >
            <IconHistory size={20} />
            <span>HISTORY</span>
          </Button>
        </div>
        <Button
          onClick={handleRestart}
          className="rounded-none"
          variant="destructive"
        >
          <IconRefresh size={20} />
          <span>RESTART</span>
        </Button>
      </div>

      {/* History Dialog */}
      <Dialog open={historyOpen} onOpenChange={setHistoryOpen}>
        <DialogContent className="bg-gray-800 border-2 border-purple-500 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-[family-name:var(--font-vt323)] text-purple-400">
              YOUR JOURNEY
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-300 mb-2">
              Pages visited ({pageHistory.length}):
            </p>
            <div className="bg-gray-900 p-4 rounded max-h-80 overflow-y-auto">
              <ol className="list-decimal pl-5 space-y-2">
                {pageHistory.map((page, index) => (
                  <li key={index} className="text-cyan-300">
                    {decodeURIComponent(page.replace(/_/g, " "))}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Win Dialog */}
      <Dialog open={showWinDialog} onOpenChange={setShowWinDialog}>
        <DialogContent className="bg-gray-800 border-2 border-yellow-500 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-[family-name:var(--font-vt323)] text-yellow-400 flex items-center justify-center gap-2">
              <IconTrophy className="text-yellow-400" />
              {isFinalRound ? "GAME COMPLETE!" : "ROUND COMPLETE!"}
              <IconTrophy className="text-yellow-400" />
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-white mb-4 text-lg">
              You found the {targetPage} page!
            </p>
            <div className="bg-gray-900 p-4 rounded mb-6">
              {team && (
                <p className="text-gray-300">
                  Team:{" "}
                  <span className="text-green-400 font-bold">{team.name}</span>
                </p>
              )}
              <p className="text-gray-300">
                Round:{" "}
                <span className="text-purple-400 font-bold">
                  {roundNumber}/{totalRounds}
                </span>
              </p>
              <p className="text-gray-300">
                Clicks:{" "}
                <span className="text-yellow-400 font-bold">{clicks}</span>
              </p>
              <p className="text-gray-300">
                Time:{" "}
                <span className="text-cyan-400 font-bold">
                  {gameTime} seconds
                </span>
              </p>
            </div>

            {isFinalRound ? (
              <Button
                onClick={navigateToGlitchAndGiggle}
                className="bg-green-500 hover:bg-green-600 text-black font-medium"
              >
                Back to Arcade
              </Button>
            ) : (
              <Button
                onClick={handleNextRound}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium flex items-center gap-2"
              >
                <span>Next Round</span>
                <IconArrowRight size={18} />
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
