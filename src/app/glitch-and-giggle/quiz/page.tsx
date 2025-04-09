"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RulesCard } from "@/components/RulesCard";
import { Question, ApiQuestionData } from "@/components/quiz/Question";
import { Result } from "@/components/quiz/Result";
import { IconArrowLeft } from "@tabler/icons-react";

// Updated game rules for AI Trivia Challenge
const gameRules = [
  "You will be presented with 5 challenging questions about AI history and technology.",
  "You have 10 seconds to answer each question.",
  "Type your answer in the input field and submit.",
  "If you don't answer in time, the question will be marked as incorrect.",
  "Each correct answer earns you points.",
  "Try to answer all questions correctly to achieve the highest score!",
];

// Game states
type GameState = "rules" | "playing" | "results";

export default function QuizPage() {
  const [gameState, setGameState] = useState<GameState>("rules");
  const [currentQuestionId, setCurrentQuestionId] = useState("");
  const [currentQuestion, setCurrentQuestion] =
    useState<ApiQuestionData | null>(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(5);
  const [score, setScore] = useState(0);
  const router = useRouter();

  // Load the first question when the game starts
  const loadFirstQuestion = async () => {
    try {
      const response = await fetch("/api/quiz-game/validate");
      const data = await response.json();

      if (data.quizId) {
        setCurrentQuestionId(data.quizId);
        setCurrentQuestion(data);
        setQuestionNumber(1);
        // Count total questions by checking how many are in our API
        const allQuizzesResponse = await fetch("/api/quiz-game/validate");
        const allQuizzesData = await allQuizzesResponse.json();
        if (allQuizzesData.order && allQuizzesData.isFinal) {
          setTotalQuestions(allQuizzesData.order);
        }
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
          duration="5-10 minutes"
          rules={gameRules}
          onStart={handleStartGame}
        />
      )}

      {gameState === "playing" && currentQuestion && (
        <Question
          data={currentQuestion}
          onAnswer={handleAnswer}
          currentQuestion={questionNumber}
          totalQuestions={totalQuestions}
        />
      )}

      {gameState === "results" && (
        <Result
          score={score}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
