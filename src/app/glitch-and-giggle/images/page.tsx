"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { RulesCard } from "@/components/RulesCard";
import { ImageQuestion } from "@/components/image-quiz/ImageQuestion";
import { GameResultsBase } from "@/components/GameResultsBase";
import { IconArrowLeft } from "@tabler/icons-react";
import { useTeam } from "@/contexts/TeamContext";

// Game rules
const gameRules = [
  "You will be shown AI-related images.",
  "Type your answer in the text box provided.",
  "Be specific but don't worry about exact wording - we accept multiple variations of the correct answer.",
  "You can use the hint button if you're stuck, but try without it first!",
  "Each correct answer earns you points.",
  "Try to get all correct to achieve the highest score.",
  "You have 15 seconds to answer each question.",
];

// Game states
type GameState = "rules" | "playing" | "results";

// Image quiz question interface
interface ImageQuizQuestion {
  imageId: string;
  imageUrl: string;
  question: string;
  hint?: string;
  isFinal: boolean;
  order: number;
}

export default function ImageQuizPage() {
  const [gameState, setGameState] = useState<GameState>("rules");
  const [currentQuestion, setCurrentQuestion] =
    useState<ImageQuizQuestion | null>(null);
  const [score, setScore] = useState(0);
  const { team } = useTeam();
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const router = useRouter();

  // Function to fetch the first or next question
  const fetchQuestion = useCallback(async (currentImageId?: string) => {
    try {
      const url = currentImageId
        ? `/api/image-quiz-game/validate?getNextImage=${currentImageId}`
        : "/api/image-quiz-game/validate";

      const response = await fetch(url);
      const data = await response.json();

      if (data.noMoreQuizzes) {
        // No more questions, show results
        setGameState("results");
        return;
      }

      setCurrentQuestion(data);
      setStartTime(Date.now());
    } catch (error) {
      console.error("Error fetching image quiz question:", error);
    }
  }, []);

  // Initial fetch when game starts
  useEffect(() => {
    if (gameState === "playing" && !currentQuestion) {
      fetchQuestion();
    }
  }, [gameState, currentQuestion, fetchQuestion]);

  const handleStartGame = () => {
    setGameState("playing");
    setScore(0);
    setQuestionsAnswered(0);
    setTotalQuestions(0); // This will be incremented as we go
    fetchQuestion();
  };

  const handleAnswer = async (answer: string) => {
    if (!currentQuestion || !team) return;

    try {
      // Calculate time taken
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);

      // Validate the answer
      const validateResponse = await fetch("/api/image-quiz-game/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answer,
          imageId: currentQuestion.imageId,
        }),
      });

      const validateData = await validateResponse.json();
      const isCorrect = validateData.isCorrect;

      // Record the game state
      await fetch("/api/image-quiz-game/record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          teamName: team.name,
          imageId: currentQuestion.imageId,
          timeTaken,
          isCorrect,
        }),
      });

      // Update score and questions answered
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
      setQuestionsAnswered((prev) => prev + 1);
      setTotalQuestions((prev) => Math.max(prev, questionsAnswered + 1));

      // Get the next question or show results
      if (!validateData.isFinal) {
        fetchQuestion(currentQuestion.imageId);
      } else {
        setGameState("results");
      }
    } catch (error) {
      console.error("Error processing answer:", error);
    }
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

      {gameState === "playing" && currentQuestion && (
        <ImageQuestion
          data={{
            id: currentQuestion.order,
            imageUrl: currentQuestion.imageUrl,
            hint: currentQuestion.hint || "",
            question: currentQuestion.question,
          }}
          onAnswer={handleAnswer}
          currentQuestion={questionsAnswered + 1}
          totalQuestions={currentQuestion.isFinal ? questionsAnswered + 1 : "?"}
        />
      )}

      {gameState === "results" && (
        <GameResultsBase
          score={score}
          maxScore={totalQuestions}
          currentGameLevel={4} // Visual Puzzler is level 4
          title="Visual Challenge Complete!"
          hideBackToLevels={false}
          feedbackMessages={{
            excellent: "Excellent! You really know your AI visuals!",
            good: "Good job! You have a good eye for AI technologies!",
            average: "Not bad! Keep studying those AI diagrams!",
            poor: "Time to brush up on your AI visual recognition!",
          }}
        />
      )}
    </div>
  );
}
