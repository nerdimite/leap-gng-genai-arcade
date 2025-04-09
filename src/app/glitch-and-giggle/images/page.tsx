"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RulesCard } from "@/components/RulesCard";
import { ImageQuestion } from "@/components/image-quiz/ImageQuestion";
import { Result } from "@/components/quiz/Result";
import { IconArrowLeft } from "@tabler/icons-react";

// Image quiz questions data
const imageQuizData = [
  {
    id: 1,
    imageUrl: "/images/placeholder-1.jpg", // Placeholder - will be replaced
    correctAnswer: "neural network",
    acceptableAnswers: ["neural network", "deep learning", "neural net"],
    hint: "This architecture forms the backbone of modern AI systems",
  },
  {
    id: 2,
    imageUrl: "/images/placeholder-2.jpg", // Placeholder - will be replaced
    correctAnswer: "gpt",
    acceptableAnswers: ["gpt", "transformer", "language model", "llm"],
    hint: "This revolutionary architecture changed how AI understands language",
  },
  {
    id: 3,
    imageUrl: "/images/placeholder-3.jpg", // Placeholder - will be replaced
    correctAnswer: "computer vision",
    acceptableAnswers: [
      "computer vision",
      "image recognition",
      "object detection",
    ],
    hint: "This field enables machines to 'see' the world like we do",
  },
  {
    id: 4,
    imageUrl: "/images/placeholder-4.jpg", // Placeholder - will be replaced
    correctAnswer: "generative ai",
    acceptableAnswers: ["generative ai", "generative model", "gen ai"],
    hint: "This type of AI creates new content rather than just analyzing existing data",
  },
  {
    id: 5,
    imageUrl: "/images/placeholder-5.jpg", // Placeholder - will be replaced
    correctAnswer: "robotics",
    acceptableAnswers: ["robotics", "robot", "automation"],
    hint: "This field combines AI with physical interaction in the real world",
  },
];

// Game rules
const gameRules = [
  "You will be shown 5 AI-related images.",
  "Type your answer in the text box provided.",
  "Be specific but don't worry about exact wording - we accept multiple variations of the correct answer.",
  "You can use the hint button if you're stuck, but try without it first!",
  "Each correct answer earns you points.",
  "Try to get all 5 correct to achieve the highest score.",
];

// Game states
type GameState = "rules" | "playing" | "results";

export default function ImageQuizPage() {
  const [gameState, setGameState] = useState<GameState>("rules");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleStartGame = () => {
    setGameState("playing");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or results
    if (currentQuestionIndex < imageQuizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState("results");
    }
  };

  const handleRestart = () => {
    setGameState("rules");
    setCurrentQuestionIndex(0);
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
          title="AI VISUAL CHALLENGE"
          duration="5-10 minutes"
          rules={gameRules}
          onStart={handleStartGame}
        />
      )}

      {gameState === "playing" && (
        <ImageQuestion
          data={imageQuizData[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={imageQuizData.length}
        />
      )}

      {gameState === "results" && (
        <Result
          score={score}
          totalQuestions={imageQuizData.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
