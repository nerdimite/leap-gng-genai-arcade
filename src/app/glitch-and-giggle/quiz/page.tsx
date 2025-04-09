"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RulesCard } from "@/components/RulesCard";
import { Question, QuestionData } from "@/components/quiz/Question";
import { Result } from "@/components/quiz/Result";
import { IconArrowLeft } from "@tabler/icons-react";

// Quiz questions
const quizQuestions: QuestionData[] = [
  {
    id: 1,
    question:
      "Which AI-powered voice assistant was the first to be introduced to smartphones?",
    correctAnswer: "Siri",
    explanation:
      "Siri was introduced in 2011 with the iPhone 4S, becoming the first major voice assistant on smartphones.",
    hint: "It was released by Apple in 2011",
  },
  {
    id: 2,
    question:
      "What was the first-ever AI-generated painting sold at an auction?",
    correctAnswer: "Portrait of Edmond de Belamy",
    explanation:
      "The 'Portrait of Edmond de Belamy' was sold for $432,500 at Christie's auction in 2018, becoming the first AI-generated artwork sold at a major auction house.",
    hint: "It was sold for $432,500 at Christie's auction house",
  },
  {
    id: 3,
    question:
      "What was the name of the AI model that OpenAI initially decided not to release fully because they thought it was too powerful?",
    correctAnswer: "GPT-2",
    explanation:
      "OpenAI held back the full version of GPT-2 in 2019 due to concerns about potential misuse of the technology.",
    hint: "It was a predecessor to GPT-3",
  },
  {
    id: 4,
    question:
      "What AI-powered software was once trained using Reddit conversations, making it unexpectedly sarcastic and funny?",
    correctAnswer: "Tay AI",
    explanation:
      "Tay AI was an experiment by Microsoft, but it had to be shut down within a day because it started generating offensive content after learning from some users' inputs.",
    hint: "It was a Microsoft chatbot",
  },
  {
    id: 5,
    question:
      "Which AI-generated song featuring which two artists went viral—despite neither of them actually recording it?",
    correctAnswer: "Heart on My Sleeve",
    explanation:
      "'Heart on My Sleeve' was created by an anonymous AI artist and featured AI-generated vocals mimicking Drake and The Weeknd. It got millions of plays before being removed from streaming platforms!",
    hint: "It featured AI-generated vocals of Drake and The Weeknd",
  },
];

// Game rules for AI Trivia Challenge
const gameRules = [
  "You will be presented with 5 challenging questions about AI history and technology.",
  "Choose the correct answer from the multiple-choice options.",
  "Each correct answer earns you points.",
  "Try to answer all questions correctly to achieve the highest score.",
  "At the end, you'll see your final score and how you compare to others.",
  "Pay attention to specific dates and names mentioned in the questions.",
];

// Game states
type GameState = "rules" | "playing" | "results";

export default function QuizPage() {
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
    if (currentQuestionIndex < quizQuestions.length - 1) {
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
          title="AI TRIVIA CHALLENGE"
          duration="5-10 minutes"
          rules={gameRules}
          onStart={handleStartGame}
        />
      )}

      {gameState === "playing" && (
        <Question
          data={quizQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
        />
      )}

      {gameState === "results" && (
        <Result
          score={score}
          totalQuestions={quizQuestions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
