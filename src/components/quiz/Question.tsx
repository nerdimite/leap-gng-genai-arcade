"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { validateAnswer } from "@/utils/answerValidation";

export type QuestionData = {
  id: number;
  question: string;
  correctAnswer: string;
  explanation: string;
  hint?: string; // Optional hint for difficult questions
};

type QuestionProps = {
  data: QuestionData;
  onAnswer: (isCorrect: boolean) => void;
  currentQuestion: number;
  totalQuestions: number;
};

export function Question({
  data,
  onAnswer,
  currentQuestion,
  totalQuestions,
}: QuestionProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;

    // Use the shared validation utility with flexible matching
    const correct = validateAnswer(
      userAnswer,
      [data.correctAnswer],
      "flexible"
    );
    setIsCorrect(correct);
    setHasAnswered(true);
  };

  // Handle moving to the next question
  const handleNext = () => {
    onAnswer(isCorrect);
    // Reset state for next question
    setUserAnswer("");
    setHasAnswered(false);
    setShowHint(false);
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
            <p className="text-gray-200">
              The correct answer is:{" "}
              <span className="text-cyan-300 font-medium">
                {data.correctAnswer}
              </span>
            </p>
            <p className="text-gray-200 mt-2">{data.explanation}</p>
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
