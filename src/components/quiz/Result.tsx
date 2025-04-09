"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTeam } from "@/contexts/TeamContext";
import { useRouter } from "next/navigation";

type ResultProps = {
  score: number;
  totalQuestions: number;
  onRestart?: () => void;
};

type QuizSummary = {
  totalQuestions: number;
  totalCorrect: number;
  correctPercentage: number;
};

export function Result({ score, totalQuestions }: ResultProps) {
  const { team, updateTeamScore, updateTeamLevel } = useTeam();
  const router = useRouter();
  const percentage = Math.round((score / totalQuestions) * 100);
  const [quizSummary, setQuizSummary] = useState<QuizSummary | null>(null);
  const [confettiPieces, setConfettiPieces] = useState(0);

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

  // Start confetti effect if score is good
  useEffect(() => {
    if (percentage >= 70) {
      // Start with full confetti
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
  }, [percentage]);

  // Fetch quiz summary statistics
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

  // Update team score and level in the database when the quiz is completed
  useEffect(() => {
    if (team) {
      const teamLevel = parseInt(team.currentLevel, 10);
      const currentGameLevel = 2; // Neural Blitz is level 2

      // Always update the score to the highest achieved
      if (score > team.score) {
        updateTeamScore(score);
      }

      // Unlock the next level if this is the current level
      if (teamLevel === currentGameLevel && teamLevel < 4) {
        // Unlock next level
        updateTeamLevel((teamLevel + 1).toString());
      }
    }
  }, [score, percentage, team, quizSummary, updateTeamScore, updateTeamLevel]);

  const handleBackToLevels = () => {
    router.push("/glitch-and-giggle");
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-2 border-cyan-500 text-white">
      {/* Enhanced confetti with dynamic pieces and fade effect */}
      {confettiPieces > 0 && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={true}
          numberOfPieces={confettiPieces}
          gravity={0.15}
          opacity={confettiPieces / 1000}
          colors={["#f3cc30", "#71f6ff", "#ff71a3", "#01c0f0", "#8a86e9"]}
        />
      )}

      <CardHeader>
        <CardTitle className="text-2xl text-center text-cyan-300">
          Quiz Completed!
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center space-y-6">
        <div className="text-center">
          <p className="text-4xl font-bold mb-2">
            {score} / {totalQuestions}
          </p>
          <p className="text-xl">You scored {percentage}%</p>
        </div>

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

        <div className="text-center">
          {percentage >= 90 ? (
            <p className="text-green-400 text-lg">
              Excellent! You&apos;re an AI expert!
            </p>
          ) : percentage >= 70 ? (
            <p className="text-green-400 text-lg">
              Great job! You know your AI well!
            </p>
          ) : percentage >= 50 ? (
            <p className="text-yellow-400 text-lg">
              Not bad! Keep learning about AI!
            </p>
          ) : (
            <p className="text-red-400 text-lg">
              Time to brush up on your AI knowledge!
            </p>
          )}
        </div>

        {team && parseInt(team.currentLevel, 10) === 2 && (
          <div className="bg-green-900/30 p-4 rounded-md border border-green-500 text-center w-full">
            <p className="text-green-400 font-bold mb-1">Level 3 Unlocked!</p>
            <p className="text-gray-300">
              You can now play the Prompt Puzzler level!
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center gap-4">
        <Button
          onClick={handleBackToLevels}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold px-6 py-2"
        >
          Back to Levels
        </Button>
      </CardFooter>
    </Card>
  );
}
