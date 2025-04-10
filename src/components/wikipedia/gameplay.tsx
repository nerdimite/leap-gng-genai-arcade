"use client";

import { useState, useEffect, useRef } from "react";
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
import { useRouter } from "next/navigation";
import { useTeam } from "@/contexts/TeamContext";
import { Timer } from "@/components/Timer";
import { WikipediaResult } from "./WikipediaResult";

type WikipediaGameplayProps = {
  onRestart: () => void;
};

type GameConfig = {
  gameId: string;
  startPage: string;
  hint: string;
  order: number;
  isFinal: boolean;
  noMoreGames?: boolean;
};

export function WikipediaGameplay({ onRestart }: WikipediaGameplayProps) {
  const router = useRouter();
  const { team } = useTeam();
  const [clicks, setClicks] = useState(0);
  const [currentPage, setCurrentPage] = useState("");
  const [targetHint, setTargetHint] = useState("");
  const [gameId, setGameId] = useState<string>("");
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
  const [showRoundCompleteDialog, setShowRoundCompleteDialog] = useState(false);
  const [currentTargetPage, setCurrentTargetPage] = useState("");

  // Track visited pages history
  const [pageHistory, setPageHistory] = useState<string[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);

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
          // Record game state if team is available
          if (team) {
            recordGameState(data.targetPage, clicks, gameTime);
          }

          // Stop the timer
          setIsTimerRunning(false);

          // Save the current target page for display
          setCurrentTargetPage(data.targetPage || "");

          // If it's the final round, show the final results screen
          if (data.isFinal) {
            setGameCompleted(true);
          } else {
            // For non-final rounds, show the round completion dialog
            setShowRoundCompleteDialog(true);
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
          // Check if this page is already the last one in the history to prevent duplicates
          setPageHistory((prev) => {
            // Don't add duplicate entries
            if (prev.length > 0 && prev[prev.length - 1] === newPage) {
              return prev;
            }
            return [...prev, newPage];
          });

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
      }

      if (event.data && event.data.type === "WIKI_PAGE_LOADED") {
        // Resume timer once page is loaded
        setPageLoaded(true);

        if (!gameCompleted && !showRoundCompleteDialog) {
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
  }, [gameCompleted, showRoundCompleteDialog]);

  // Handle when user manually quits to main menu via the restart button
  const handleRestart = () => {
    setClicks(0);
    setGameCompleted(false);
    setShowRoundCompleteDialog(false);
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
      // Close the round complete dialog
      setShowRoundCompleteDialog(false);

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

  // If game is completed, show the final result component
  if (gameCompleted) {
    return (
      <WikipediaResult
        clicks={clicks}
        timeTaken={gameTime}
        totalRounds={totalRounds}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Target hint display */}
      <div className="bg-yellow-400 p-2 rounded-md mb-4">
        <p className="font-[family-name:var(--font-vt323)] text-black">
          TARGET HINT: <span className="font-bold">{targetHint}</span>
        </p>
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

      {/* Round Complete Dialog */}
      <Dialog
        open={showRoundCompleteDialog}
        onOpenChange={setShowRoundCompleteDialog}
      >
        <DialogContent className="bg-gray-800 border-2 border-cyan-500 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-[family-name:var(--font-vt323)] text-cyan-300 flex items-center justify-center gap-2">
              <IconTrophy className="text-yellow-400" />
              ROUND COMPLETE!
              <IconTrophy className="text-yellow-400" />
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-white mb-4 text-lg">
              You found the{" "}
              <span className="text-cyan-300 font-bold">
                {currentTargetPage.replace(/_/g, " ")}
              </span>{" "}
              page!
            </p>
            <div className="bg-gray-700 p-4 rounded mb-6 grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-purple-400 text-xl font-bold">
                  {roundNumber}/{totalRounds}
                </div>
                <div className="text-xs text-gray-300">ROUND</div>
              </div>

              <div className="text-center">
                <div className="text-yellow-400 text-xl font-bold">
                  {clicks}
                </div>
                <div className="text-xs text-gray-300">CLICKS</div>
              </div>

              <div className="text-center">
                <div className="text-cyan-400 text-xl font-bold">
                  {gameTime}
                </div>
                <div className="text-xs text-gray-300">SECONDS</div>
              </div>
            </div>

            <Button
              onClick={handleNextRound}
              className="px-8 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold flex items-center gap-2"
            >
              NEXT ROUND
              <IconArrowRight size={20} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
