"use client";

import { IconTrophy } from "@tabler/icons-react";
import { GameResultsBase } from "@/components/GameResultsBase";

type CrosswordResultProps = {
  score: number;
  onRestart: () => void;
};

export function CrosswordResult({
  score,
  onRestart,
}: Readonly<CrosswordResultProps>) {
  const currentGameLevel = 2; // Prompt Puzzler is level 2

  // Custom feedback messages based on crossword performance
  const feedbackMessages = {
    excellent: "Perfect! You're a crossword master!",
    good: "Excellent! Great word skills!",
    average: "Good job! You have solid AI knowledge!",
    poor: "AI vocabulary can be tricky! Keep learning!",
  };

  return (
    <GameResultsBase
      score={score}
      currentGameLevel={currentGameLevel}
      title="CROSSWORD COMPLETE!"
      feedbackMessages={feedbackMessages}
      onRestart={onRestart}
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="bg-gray-700 p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center">
          <IconTrophy size={40} className="text-yellow-400 mb-2" />
          <span className="text-4xl font-bold text-white">{score}</span>
        </div>

        <div className="bg-gray-700 p-4 rounded-md w-full">
          <h3 className="text-xl text-cyan-400 mb-2">Fun AI Crossword Fact</h3>
          <p className="text-gray-200">
            Many modern crossword puzzles now include AI-related terms as
            they&apos;ve become more mainstream. Terms like &quot;neural
            networks&quot; and &quot;machine learning&quot; are appearing more
            frequently in puzzles worldwide!
          </p>
        </div>
      </div>
    </GameResultsBase>
  );
}
