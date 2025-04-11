"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTeam } from "@/contexts/TeamContext";
import { Progress } from "@/components/ui/progress";

export type QuestionData = {
  id: number;
  question: string;
  correctAnswer: string;
  explanation: string;
  hint?: string; // Optional hint for difficult questions
};

// New interface for API-based quiz questions
export interface ApiQuestionData {
  quizId: string;
  question: string;
  hint?: string;
  order: number;
  isFinal: boolean;
  explanation?: string;
  correctAnswer?: string;
}

type QuestionProps = {
  data: ApiQuestionData;
  onAnswer: (isCorrect: boolean) => void;
  currentQuestion: number;
  totalQuestions: number | string;
};

// Constants
const QUESTION_TIMER = 20;

export function Question({
  data,
  onAnswer,
  currentQuestion,
  totalQuestions,
}: QuestionProps) {
  const { team } = useTeam();
  const [userAnswer, setUserAnswer] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIMER);
  const [explanation, setExplanation] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const startTimeRef = useRef(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start the timer when the component mounts
  useEffect(() => {
    // Clear any existing timer when component mounts or updates
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Don't start timer if already answered
    if (hasAnswered) return;

    startTimeRef.current = Date.now();

    // Set up the countdown timer
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = Math.max(0, QUESTION_TIMER - elapsed);
      setTimeLeft(remaining);

      // Automatically move to the next question if time runs out
      if (remaining === 0 && !hasAnswered) {
        clearInterval(timerRef.current!);
        validateWithApi("");
      }
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [data, hasAnswered]);

  // API validation function
  const validateWithApi = async (answer: string) => {
    try {
      // Record start time for this question
      const timeTaken = Math.floor((Date.now() - startTimeRef.current) / 1000);

      // Call validate API
      const validateResponse = await fetch("/api/quiz-game/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answer,
          quizId: data.quizId,
        }),
      });

      const validationResult = await validateResponse.json();

      setIsCorrect(validationResult.isCorrect);
      setExplanation(validationResult.explanation);
      if (!validationResult.isCorrect) {
        setCorrectAnswer(validationResult.correctAnswer);
      }
      setHasAnswered(true);

      // Record the game state in the database
      if (team) {
        await fetch("/api/quiz-game/record", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teamName: team.name,
            questionId: data.quizId,
            timeTaken,
            isCorrect: validationResult.isCorrect,
          }),
        });
      }
    } catch (error) {
      console.error("Error validating answer:", error);
    }
  };

  const handleSubmit = () => {
    if (!userAnswer.trim() && !hasAnswered) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    validateWithApi(userAnswer);
  };

  // Handle moving to the next question
  const handleNext = () => {
    onAnswer(isCorrect);
    // Reset state for next question
    setUserAnswer("");
    setHasAnswered(false);
    setShowHint(false);
    setTimeLeft(QUESTION_TIMER);
    startTimeRef.current = Date.now();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !hasAnswered) {
      handleSubmit();
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-2 border-cyan-500 text-white">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300">
            Question {currentQuestion} of {totalQuestions}
          </span>
          <span className="text-gray-300">Time left: {timeLeft}s</span>
        </div>
        <div className="mb-4">
          <Progress
            value={(timeLeft / QUESTION_TIMER) * 100}
            className="h-2 bg-gray-700 [&>*]:bg-cyan-500"
          />
        </div>
        <CardTitle className="text-2xl text-cyan-300">
          {data.question}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <div className="mb-2 text-gray-300">Type your answer:</div>
          <div className="flex gap-2">
            <Input
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={hasAnswered}
              placeholder="Enter your answer here..."
              className="bg-gray-700 border-gray-600 text-white"
            />
            {data.hint && !hasAnswered && (
              <Button
                onClick={() => setShowHint(!showHint)}
                variant="outline"
                className="border-yellow-500 text-yellow-700"
              >
                Hint
              </Button>
            )}
          </div>
          {showHint && data.hint && (
            <div className="mt-2 text-yellow-400 text-sm italic">
              Hint: {data.hint}
            </div>
          )}
        </div>

        {hasAnswered && (
          <div
            className={`p-4 rounded-md ${
              isCorrect ? "bg-green-900/20" : "bg-red-900/20"
            }`}
          >
            <h3
              className={`font-bold mb-2 ${
                isCorrect ? "text-green-400" : "text-red-400"
              }`}
            >
              {isCorrect ? "Correct!" : "Incorrect!"}
            </h3>
            {!isCorrect && correctAnswer && (
              <p className="text-gray-200 mb-2">
                Correct answer: {correctAnswer}
              </p>
            )}
            {explanation && <p className="text-gray-200 mt-2">{explanation}</p>}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        {!hasAnswered ? (
          <Button
            onClick={handleSubmit}
            disabled={!userAnswer.trim()}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold"
          >
            Submit Answer
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold"
          >
            Next Question
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
