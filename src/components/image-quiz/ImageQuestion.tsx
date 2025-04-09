"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconHelpCircle, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { validateAnswer } from "@/utils/answerValidation";

type ImageQuestionData = {
  id: number;
  imageUrl: string;
  correctAnswer: string;
  acceptableAnswers: string[];
  hint: string;
};

type ImageQuestionProps = {
  data: ImageQuestionData;
  onAnswer: (isCorrect: boolean) => void;
  currentQuestion: number;
  totalQuestions: number;
};

export function ImageQuestion({
  data,
  onAnswer,
  currentQuestion,
  totalQuestions,
}: ImageQuestionProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<{
    show: boolean;
    correct: boolean;
    message: string;
  }>({
    show: false,
    correct: false,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Don't process empty answers
    if (!userAnswer.trim()) return;

    // Use the validation utility with flexible matching
    const isCorrect = validateAnswer(
      userAnswer,
      data.acceptableAnswers,
      "flexible"
    );

    // Show feedback
    setFeedback({
      show: true,
      correct: isCorrect,
      message: isCorrect
        ? "Correct! Well done!"
        : "Sorry, that's not right. Try again on the next one!",
    });

    // Wait a bit before moving to the next question
    setTimeout(() => {
      onAnswer(isCorrect);
      setUserAnswer("");
      setShowHint(false);
      setFeedback({ show: false, correct: false, message: "" });
    }, 2000);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-2 border-cyan-500 text-white">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl text-cyan-300 font-semibold">
            Question {currentQuestion}/{totalQuestions}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            className="text-cyan-300 hover:text-cyan-100 hover:bg-gray-700"
            onClick={() => setShowHint(!showHint)}
          >
            <IconHelpCircle className="w-5 h-5 mr-1" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>
        </div>

        {/* Image container */}
        <div className="w-full relative mb-6 bg-gray-900 rounded-md overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image
              src={data.imageUrl}
              alt="AI Visual Challenge Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Hint */}
        {showHint && (
          <div className="mb-4 p-3 bg-gray-700 rounded-md">
            <p className="text-cyan-200">
              <span className="font-bold">Hint:</span> {data.hint}
            </p>
          </div>
        )}

        {/* Answer form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="answer"
                className="block text-lg mb-2 text-cyan-200"
              >
                What is this?
              </label>
              <div className="flex gap-2">
                <Input
                  id="answer"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  disabled={feedback.show}
                />
                <Button
                  type="submit"
                  disabled={feedback.show || !userAnswer.trim()}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                >
                  <IconArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </form>

        {/* Feedback */}
        {feedback.show && (
          <div
            className={`mt-6 p-4 rounded-md ${
              feedback.correct
                ? "bg-green-800 text-green-100"
                : "bg-red-800 text-red-100"
            }`}
          >
            <p className="text-lg">{feedback.message}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
