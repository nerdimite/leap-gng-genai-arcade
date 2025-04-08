"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IconHistory, IconRefresh, IconTrophy } from "@tabler/icons-react";
import ReactConfetti from "react-confetti";

type WikipediaGameplayProps = {
  onRestart: () => void;
};

export function WikipediaGameplay({ onRestart }: WikipediaGameplayProps) {
  const [clicks, setClicks] = useState(0);
  const [currentPage, setCurrentPage] = useState("Artificial_intelligence");
  const [targetHint, setTargetHint] = useState(
    "Find the article about embeddings"
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isFirstLoad = useRef(true);
  const lastClickTime = useRef(0);
  const CLICK_COOLDOWN = 1000; // 1 second cooldown between clicks

  // Target page and game state
  const TARGET_PAGE = "Word embedding";
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showWinDialog, setShowWinDialog] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState(0);

  // Track visited pages history
  const [pageHistory, setPageHistory] = useState<string[]>([
    "Artificial_intelligence",
  ]);
  const [historyOpen, setHistoryOpen] = useState(false);

  // Window dimensions for confetti
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

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

  // Check if reached target page
  useEffect(() => {
    // Compare case-insensitive to make it more forgiving
    const currentPageName = decodeURIComponent(
      currentPage.replace(/_/g, " ")
    ).toLowerCase();
    const targetPageName = TARGET_PAGE.toLowerCase();

    if (currentPageName === targetPageName && !gameCompleted) {
      setGameCompleted(true);
      setShowWinDialog(true);
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
  }, [currentPage, gameCompleted]);

  // Listen for messages from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Handle navigation events from the Wikipedia iframe
      if (event.data && event.data.type === "WIKI_NAVIGATION") {
        const newPage = event.data.page;
        setCurrentPage(newPage);

        const now = Date.now();
        // Only increment clicks if it's not the first load and cooldown period has passed
        if (!isFirstLoad.current) {
          if (now - lastClickTime.current >= CLICK_COOLDOWN) {
            setClicks((prev) => prev + 1);
            // Add to history only if it's a counted click
            setPageHistory((prev) => [...prev, newPage]);
            lastClickTime.current = now;
          }
        } else {
          isFirstLoad.current = false;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  // Handle game restart
  const handleRestart = () => {
    setClicks(0);
    setCurrentPage("Artificial_intelligence");
    setPageHistory(["Artificial_intelligence"]);
    setGameCompleted(false);
    setConfettiPieces(0);
    isFirstLoad.current = true;
    lastClickTime.current = 0;
    onRestart();
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
          <p className="font-[family-name:var(--font-vt323)] text-black tex">
            TARGET HINT: <span className="font-bold">{targetHint}</span>
          </p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-3 mb-4">
        <div className="flex justify-between items-center">
          <p className="text-white font-[family-name:var(--font-vt323)]">
            CURRENT:{" "}
            <span className="text-cyan-400">
              {decodeURIComponent(currentPage.replace(/_/g, " "))}
            </span>
          </p>
          <p className="text-white font-[family-name:var(--font-vt323)]">
            CLICKS: <span className="text-yellow-400">{clicks}</span>
          </p>
        </div>
      </div>

      {/* Wikipedia content iframe */}
      <div className="bg-white rounded-lg h-[60vh] p-0 mb-4 overflow-hidden">
        <iframe
          ref={iframeRef}
          src={`/api/wikipedia?page=${currentPage}`}
          className="w-full h-full border-none"
          title="Wikipedia Content"
        />
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
              CHALLENGE COMPLETE!
              <IconTrophy className="text-yellow-400" />
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-white mb-4 text-lg">
              You found the {TARGET_PAGE} page!
            </p>
            <p className="text-gray-300 mb-6">
              It took you{" "}
              <span className="text-yellow-400 font-bold">{clicks} clicks</span>{" "}
              through the wikipedia pages to find it.
            </p>
            <Button
              onClick={handleRestart}
              variant="outline"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
            >
              Play Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
