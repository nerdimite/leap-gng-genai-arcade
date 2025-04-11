/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RulesCard } from "@/components/RulesCard";
import { Question, ApiQuestionData } from "@/components/quiz/Question";
import { Result } from "@/components/quiz/Result";
import { IconArrowLeft } from "@tabler/icons-react";
import { useTeam } from "@/contexts/TeamContext";

// Updated game rules for AI Trivia Challenge
const gameRules = [
  "You will be presented with challenging questions about AI history and technology.",
  "You have 20 seconds to answer each question.",
  "Type your answer in the input field and submit.",
  "You can also get an hint by clicking the hint button.",
  "If you don't answer in time, the question will be marked as incorrect.",
  "Each correct answer earns you points and your time is recorded.",
  "Try to answer all questions correctly and with speed to achieve the highest score!",
  "The number of questions is a mystery until you reach the end!",
];

// Game states
type GameState = "rules" | "playing" | "results";

export default function QuizPage() {
  const [gameState, setGameState] = useState<GameState>("rules");
  const [currentQuestionId, setCurrentQuestionId] = useState("");
  const [currentQuestion, setCurrentQuestion] =
    useState<ApiQuestionData | null>(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const router = useRouter();
  const { team } = useTeam();

  // Get score from the API when game state changes to results
  useEffect(() => {
    if (gameState === "results") {
      getScore();
    }
  }, [gameState]);

  // Function to get score from the API
  const getScore = async () => {
    if (!team) return;

    try {
      const response = await fetch(
        `/api/quiz-game/score?teamName=${encodeURIComponent(team.name)}`
      );
      if (response.ok) {
        const data = await response.json();
        setFinalScore(data.totalScore);
      } else {
        console.error("Failed to submit score");
        // Fallback to using the local score if API fails
        setFinalScore(score);
      }
    } catch (error) {
      console.error("Error submitting score:", error);
      // Fallback to using the local score if API fails
      setFinalScore(score);
    }
  };

  // Load the first question when the game starts
  const loadFirstQuestion = async () => {
    try {
      const response = await fetch("/api/quiz-game/validate");
      const data = await response.json();

      if (data.quizId) {
        setCurrentQuestionId(data.quizId);
        setCurrentQuestion(data);
        setQuestionNumber(1);
      } else {
        console.error("No quiz data returned from API");
      }
    } catch (error) {
      console.error("Error loading first question:", error);
    }
  };

  // Load the next question
  const loadNextQuestion = async () => {
    if (!currentQuestionId) return;

    try {
      const response = await fetch(
        `/api/quiz-game/validate?getNextQuiz=${currentQuestionId}`
      );
      const data = await response.json();

      if (data.noMoreQuizzes) {
        // No more questions, show results
        setGameState("results");
      } else if (data.quizId) {
        setCurrentQuestionId(data.quizId);
        setCurrentQuestion(data);
        setQuestionNumber((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error loading next question:", error);
      // Switch to results if we can't load the next question
      setGameState("results");
    }
  };

  const handleStartGame = () => {
    setGameState("playing");
    setScore(0);
    loadFirstQuestion();
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    loadNextQuestion();
  };

  const handleRestart = () => {
    setGameState("rules");
    setScore(0);
    setFinalScore(null);
    setCurrentQuestionId("");
    setCurrentQuestion(null);
    setQuestionNumber(1);
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
          title="AI TRIVIA CHALLENGE"
          duration="2 minutes"
          rules={gameRules}
          onStart={handleStartGame}
        />
      )}

      {gameState === "playing" && currentQuestion && (
        <Question
          data={currentQuestion}
          onAnswer={handleAnswer}
          currentQuestion={questionNumber}
          totalQuestions={currentQuestion.isFinal ? questionNumber : "?"}
        />
      )}

      {gameState === "results" && (
        <Result
          score={finalScore ?? score}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
