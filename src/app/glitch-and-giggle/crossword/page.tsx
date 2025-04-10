"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RulesCard } from "@/components/RulesCard";
import { IconArrowLeft } from "@tabler/icons-react";
import { CrosswordGrid } from "@/components/crossword/CrosswordGrid";
import { CrosswordResult } from "@/components/crossword/CrosswordResult";

// Game rules for AI Crossword Challenge
const gameRules = [
  "Solve the crossword puzzle with AI-related terms and concepts.",
  "Fill in the words by answering the clues provided.",
  "All answers are related to artificial intelligence, machine learning, or data science.",
  "Click on a cell to select it, then type your answer.",
  "Arrow keys can be used to navigate between cells.",
  "Complete the entire crossword to win.",
];

// Game states
type GameState = "rules" | "playing" | "results";

export default function CrosswordPage() {
  const [gameState, setGameState] = useState<GameState>("rules");
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleStartGame = () => {
    setGameState("playing");
    setScore(0);
  };

  const handleComplete = (finalScore: number) => {
    setScore(finalScore);
    setGameState("results");
  };

  const handleRestart = () => {
    setGameState("rules");
    setScore(0);
  };

  const handleBackToMenu = () => {
    router.push("/glitch-and-giggle");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <button
        onClick={handleBackToMenu}
        className="mb-6 text-cyan-400 hover:text-cyan-300 font-[family-name:var(--font-vt323)] text-xl flex items-center"
      >
        <IconArrowLeft className="h-5 w-5 mr-1" />
        BACK TO LEVELS
      </button>

      {gameState === "rules" && (
        <RulesCard
          title="AI CROSSWORD CHALLENGE"
          duration="10-15 minutes"
          rules={gameRules}
          onStart={handleStartGame}
        />
      )}

      {gameState === "playing" && <CrosswordGrid onComplete={handleComplete} />}

      {gameState === "results" && (
        <CrosswordResult score={score} onRestart={handleRestart} />
      )}
    </div>
  );
}
