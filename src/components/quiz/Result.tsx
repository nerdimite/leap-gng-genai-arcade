"use client";

import { useState, useEffect } from "react";
import { GameResultsBase } from "@/components/GameResultsBase";
import { useTeam } from "@/contexts/TeamContext";

type ResultProps = {
  score: number;
  onRestart?: () => void;
};

type QuizSummary = {
  totalQuestions: number;
  totalCorrect: number;
  correctPercentage: number;
};

export function Result({ score, onRestart }: Readonly<ResultProps>) {
  const { team } = useTeam();
  const [quizSummary, setQuizSummary] = useState<QuizSummary | null>(null);
  const currentGameLevel = 1; // Neural Blitz is level 2

  // Fetch score
  useEffect(() => {
    async function fetchQuizSummary() {
      if (!team) return;

      try {
        const response = await fetch(
          `/api/quiz-game/summary?teamName=${encodeURIComponent(team.name)}`
        );
        if (response.ok) {
          const data = await response.json();
          setQuizSummary(data);
        }
      } catch (error) {
        console.error("Error fetching quiz summary:", error);
      }
    }

    fetchQuizSummary();
  }, [team]);

  return (
    <GameResultsBase
      score={score}
      currentGameLevel={currentGameLevel}
      title="Quiz Completed!"
      onRestart={onRestart}
    >
      {quizSummary && (
        <div className="bg-gray-700/50 p-4 rounded-md w-full">
          <h4 className="text-cyan-300 mb-2 font-medium">
            Your Overall Quiz Performance
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-gray-300">Total Questions:</div>
            <div className="text-white font-medium">
              {quizSummary.totalQuestions}
            </div>

            <div className="text-gray-300">Correct Answers:</div>
            <div className="text-white font-medium">
              {quizSummary.totalCorrect}
            </div>

            <div className="text-gray-300">Success Rate:</div>
            <div className="text-white font-medium">
              {quizSummary.correctPercentage}%
            </div>
          </div>
        </div>
      )}
    </GameResultsBase>
  );
}
