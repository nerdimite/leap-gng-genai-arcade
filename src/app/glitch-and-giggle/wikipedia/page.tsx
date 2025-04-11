"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RulesCard } from "@/components/RulesCard";
import { WikipediaGameplay } from "@/components/wikipedia/gameplay";

export default function WikipediaSpeedRunPage() {
  const [gameStarted, setGameStarted] = useState(false);
  const router = useRouter();

  // Game rules for Wikipedia Speed Run
  const gameRules = [
    "This is a classic wikipedia speedrun but with an AI twist and a few extra rules.",
    "You will be given a starting Wikipedia article and a hint or riddle to guess the target/destination article.",
    "Navigate from the starting article to the target by clicking only on links within Wikipedia articles.",
    "The game tracks your path and number of clicks.",
    "Try to reach the target in as few clicks as possible and as fast as possible to earn the highest points.",
  ];

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleRestartGame = () => {
    setGameStarted(false);
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
        BACK TO LEVELS
      </button>

      {!gameStarted ? (
        <RulesCard
          title="WIKIPEDIA SPEED RUN"
          duration="5-10 minutes"
          rules={gameRules}
          onStart={handleStartGame}
        />
      ) : (
        <WikipediaGameplay onRestart={handleRestartGame} />
      )}
    </div>
  );
}
