/* eslint-disable react-hooks/exhaustive-deps */
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
  "You will be shown an image which you need to decode into a word(s) related to AI.",
  "Type your answer in the text box provided.",
  "Be specific but don't worry about exact wording - we accept multiple variations of the correct answer.",
  "You have 30 seconds to answer each question.",
  "Each correct answer earns you points.",
  "Try to answer all questions correctly and with speed to achieve the highest score!",
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
  const [finalScore, setFinalScore] = useState<number>(0);
  const { team } = useTeam();
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const router = useRouter();
  const currentGameLevel = 3; // Visual Puzzler is level 3

  // Get score from the API when game state changes to results
  useEffect(() => {
    console.log("gameState", gameState);
    if (gameState === "results" && team) {
      console.log("getScore");
      getScore();
    }
  }, [gameState, team]);

  // Function to get score from the API
  const getScore = async () => {
    try {
      const response = await fetch(
        `/api/image-quiz-game/score?teamName=${encodeURIComponent(
          team?.name ?? ""
        )}`
      );
      if (response.ok) {
        const data = await response.json();
        setFinalScore(data.totalScore);
      } else {
        console.error("Failed to fetch score");
        setFinalScore(score);
      }
    } catch (error) {
      console.error("Error fetching score:", error);
      setFinalScore(score);
    }
  };

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
    setFinalScore(0);
    setQuestionsAnswered(0);
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
          title="IMAGE QUIZ CHALLENGE"
          duration="2.5 minutes"
          rules={gameRules}
          onStart={handleStartGame}
        />
      )}

      {gameState === "playing" && currentQuestion && (
        <ImageQuestion
          data={{
            id: currentQuestion.order,
            imageUrl: currentQuestion.imageUrl,
            hint: currentQuestion.hint ?? "",
            question: currentQuestion.question,
          }}
          onAnswer={handleAnswer}
          currentQuestion={questionsAnswered + 1}
          totalQuestions={currentQuestion.isFinal ? questionsAnswered + 1 : "?"}
        />
      )}

      {gameState === "results" && (
        <GameResultsBase
          score={finalScore}
          currentGameLevel={currentGameLevel}
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
