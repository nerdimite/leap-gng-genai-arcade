"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconTrophy, IconRefresh, IconHome } from "@tabler/icons-react";
import ReactConfetti from "react-confetti";
import { useTeam } from "@/contexts/TeamContext";

type CrosswordResultProps = {
  score: number;
  maxScore: number;
  onRestart: () => void;
};

export function CrosswordResult({
  score,
  maxScore,
  onRestart,
}: CrosswordResultProps) {
  const { team, updateTeamScore, updateTeamLevel } = useTeam();
  const percentage = Math.round((score / maxScore) * 100);
  const [confettiPieces, setConfettiPieces] = useState(1000);

  // Window dimensions for confetti
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Update team score and level when the crossword is completed
  useEffect(() => {
    if (team) {
      const teamLevel = parseInt(team.currentLevel, 10);
      const currentGameLevel = 3; // Prompt Puzzler is level 3

      // Convert score to integer for consistency
      const normalizedScore = Math.round(score);

      // Only update if the new score is higher than the current team score
      if (normalizedScore > team.score) {
        updateTeamScore(normalizedScore);
      }

      // If this is the current level and they got a good score, unlock the next level
      if (teamLevel === currentGameLevel && percentage >= 70 && teamLevel < 4) {
        // Unlock next level
        updateTeamLevel((teamLevel + 1).toString());
      }
    }
  }, [score, percentage, team, updateTeamScore, updateTeamLevel]);

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

  // Start confetti and fade it out
  useEffect(() => {
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
  }, []);

  let message = "";
  let messageClass = "";

  if (percentage === 100) {
    message = "Perfect! You're a crossword master!";
    messageClass = "text-yellow-400";
  } else if (percentage >= 80) {
    message = "Excellent! Great word skills!";
    messageClass = "text-green-400";
  } else if (percentage >= 60) {
    message = "Good job! You have solid AI knowledge!";
    messageClass = "text-cyan-400";
  } else if (percentage >= 40) {
    message = "Not bad! Keep practicing!";
    messageClass = "text-blue-400";
  } else {
    message = "AI vocabulary can be tricky! Keep learning!";
    messageClass = "text-purple-400";
  }

  // Handle restart with confetti cleanup
  const handleRestart = () => {
    setConfettiPieces(0);
    onRestart();
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-2 border-cyan-500 text-white">
      {/* Confetti overlay */}
      {confettiPieces > 0 && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={true}
          numberOfPieces={confettiPieces}
          gravity={0.15}
          opacity={confettiPieces / 1000} // Also fade opacity as pieces reduce
          colors={["#f3cc30", "#71f6ff", "#ff71a3", "#01c0f0", "#8a86e9"]}
        />
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-[family-name:var(--font-vt323)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          CROSSWORD COMPLETE!
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center space-y-6">
        <div className="bg-gray-700 p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center">
          <IconTrophy size={40} className="text-yellow-400 mb-2" />
          <span className="text-4xl font-bold text-white">{score}</span>
          <span className="text-lg text-gray-300">{percentage}%</span>
        </div>

        <div className="text-center">
          <h3 className={`text-2xl font-bold mb-2 ${messageClass}`}>
            {message}
          </h3>
          <p className="text-gray-300">
            You scored {score} out of {maxScore} points.
          </p>
        </div>

        {percentage >= 70 && team && parseInt(team.currentLevel, 10) === 3 && (
          <div className="bg-green-900/30 p-4 rounded-md border border-green-500 text-center w-full">
            <p className="text-green-400 font-bold mb-1">Level 4 Unlocked!</p>
            <p className="text-gray-300">
              You can now play the Visual Puzzler level!
            </p>
          </div>
        )}

        <div className="bg-gray-700 p-4 rounded-md w-full">
          <h3 className="text-xl text-cyan-400 mb-2">Fun AI Crossword Fact</h3>
          <p className="text-gray-200">
            Many modern crossword puzzles now include AI-related terms as
            they&apos;ve become more mainstream. Terms like &quot;neural
            networks&quot; and &quot;machine learning&quot; are appearing more
            frequently in puzzles worldwide!
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center gap-4">
        <Button
          onClick={handleRestart}
          className="px-8 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold flex items-center gap-2"
        >
          <IconRefresh size={20} />
          Play Again
        </Button>

        <Button
          onClick={() => (window.location.href = "/glitch-and-giggle")}
          className="px-8 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold flex items-center gap-2"
        >
          <IconHome size={20} />
          Back to Levels
        </Button>
      </CardFooter>
    </Card>
  );
}
