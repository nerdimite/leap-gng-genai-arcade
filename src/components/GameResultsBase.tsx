"use client";

import { useState, useEffect, ReactNode } from "react";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import { useTeam } from "@/contexts/TeamContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconTrophy } from "@tabler/icons-react";

type GameResultsBaseProps = {
  score: number;
  currentGameLevel: number;
  title: string;
  children?: ReactNode;
  onRestart?: () => void;
  customActions?: ReactNode;
  feedbackMessages?: {
    excellent: string;
    good: string;
    average: string;
    poor: string;
  };
  hideBackToLevels?: boolean;
  unlockMessage?: string;
};

export function GameResultsBase({
  score,
  currentGameLevel,
  title,
  children,
  customActions,
  feedbackMessages = {
    excellent: "Excellent! You're an AI expert!",
    good: "Great job! You know your AI well!",
    average: "Not bad! Keep learning about AI!",
    poor: "Time to brush up on your AI knowledge!",
  },
  hideBackToLevels = false,
  unlockMessage,
}: Readonly<GameResultsBaseProps>) {
  const { team, updateTeamScore, updateTeamLevel } = useTeam();
  const router = useRouter();
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
    if (score >= 60) {
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
  }, [score]);

  // Update team score and level in the database when the game is completed
  useEffect(() => {
    if (team) {
      const teamLevel = parseInt(team.currentLevel, 10);

      // Always update the score to the highest achieved
      if (score > team.score) {
        updateTeamScore(score);
      }

      // Fixed bug: Only unlock the next level if this is the current level AND the next level would be currentGameLevel + 1
      // This prevents skipping levels or unlocking already unlocked levels
      if (
        teamLevel === currentGameLevel &&
        teamLevel < 5 &&
        currentGameLevel + 1 > teamLevel
      ) {
        // Unlock next level
        updateTeamLevel((teamLevel + 1).toString());
      }
    }
  }, [score, team, updateTeamScore, updateTeamLevel, currentGameLevel]);

  const handleBackToLevels = () => {
    router.push("/glitch-and-giggle");
  };

  // Determine feedback message based on percentage
  const getFeedbackMessage = () => {
    if (score >= 90) {
      return feedbackMessages.excellent;
    } else if (score >= 70) {
      return feedbackMessages.good;
    } else if (score >= 50) {
      return feedbackMessages.average;
    } else {
      return feedbackMessages.poor;
    }
  };

  // Generate custom unlock message or use the default
  const getUnlockMessage = () => {
    if (unlockMessage) return unlockMessage;

    const nextLevel = currentGameLevel + 1;
    let levelName = "";

    // Map level numbers to their names
    switch (nextLevel) {
      case 2:
        levelName = "Neural Blitz";
        break;
      case 3:
        levelName = "Prompt Puzzler";
        break;
      case 4:
        levelName = "Visual Puzzler";
        break;
      default:
        levelName = "next";
    }

    return `You can now play the ${levelName} level!`;
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
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center space-y-6">
        <div className="text-center">
          <p className="text-xl">You scored</p>
          <div className="text-center flex items-center justify-center gap-2">
            <IconTrophy size={50} className="text-yellow-400 mx-auto" />
            <div>
              <div className="text-4xl font-bold text-white">{score}</div>
              <div className="text-sm text-gray-300">POINTS</div>
            </div>
          </div>
        </div>

        {children}

        <p
          className={`text-lg ${
            score >= 70
              ? "text-green-400"
              : score >= 50
              ? "text-yellow-400"
              : "text-red-400"
          }`}
        >
          {getFeedbackMessage()}
        </p>

        {team && parseInt(team.currentLevel, 10) === currentGameLevel && (
          <div className="bg-green-900/30 p-4 rounded-md border border-green-500 text-center w-full">
            {currentGameLevel + 1 > 4 ? (
              <>
                <p className="text-green-400 font-bold mb-1">
                  All Levels Complete!
                </p>
                <p className="text-gray-300">
                  You can check your leaderboard standings now!
                </p>
              </>
            ) : (
              <>
                <p className="text-green-400 font-bold mb-1">
                  Level {currentGameLevel + 1} Unlocked!
                </p>
                <p className="text-gray-300">{getUnlockMessage()}</p>
              </>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center gap-4">
        {!hideBackToLevels && (
          <Button
            onClick={handleBackToLevels}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold px-6 py-2"
          >
            Back to Levels
          </Button>
        )}

        {customActions}
      </CardFooter>
    </Card>
  );
}
