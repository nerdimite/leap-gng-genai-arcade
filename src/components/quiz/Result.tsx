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
import { IconTrophy, IconRefresh } from "@tabler/icons-react";
import ReactConfetti from "react-confetti";

type ResultProps = {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

export function Result({ score, totalQuestions, onRestart }: Readonly<ResultProps>) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const [confettiPieces, setConfettiPieces] = useState(1000);

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
    message = "Perfect! You're an AI genius!";
    messageClass = "text-yellow-400";
  } else if (percentage >= 80) {
    message = "Excellent! You really know your AI history!";
    messageClass = "text-green-400";
  } else if (percentage >= 60) {
    message = "Good job! You have solid AI knowledge!";
    messageClass = "text-cyan-400";
  } else if (percentage >= 40) {
    message = "Not bad! Keep learning about AI!";
    messageClass = "text-blue-400";
  } else {
    message = "You've got some studying to do about AI!";
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
          QUIZ COMPLETE!
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center space-y-6">
        <div className="bg-gray-700 p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center">
          <IconTrophy size={40} className="text-yellow-400 mb-2" />
          <span className="text-4xl font-bold text-white">
            {score}/{totalQuestions}
          </span>
          <span className="text-lg text-gray-300">{percentage}%</span>
        </div>

        <div className="text-center">
          <h3 className={`text-2xl font-bold mb-2 ${messageClass}`}>
            {message}
          </h3>
          <p className="text-gray-300">
            You answered {score} out of {totalQuestions} questions correctly.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-md w-full">
          <h3 className="text-xl text-cyan-400 mb-2">Fun AI Fact</h3>
          <p className="text-gray-200">
            The term "artificial intelligence" was first coined by John McCarthy
            in 1956 at the Dartmouth Conference, which is widely considered the
            founding event of AI as a field.
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Button
          onClick={handleRestart}
          className="px-8 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold flex items-center gap-2"
        >
          <IconRefresh size={20} />
          Play Again
        </Button>
      </CardFooter>
    </Card>
  );
}
