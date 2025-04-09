"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconHelpCircle, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

// Countdown timer constant
const QUESTION_TIMER = 15; // 15 seconds per question

type ImageQuestionData = {
  id: number;
  imageUrl: string;
  hint: string;
  question?: string; // Make question optional to match API response
};

type ImageQuestionProps = {
  data: ImageQuestionData;
  onAnswer: (answer: string) => void; // Changed to pass string answer
  currentQuestion: number;
  totalQuestions: number | string; // Accept string for "?" case
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
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIMER);
  const startTimeRef = useRef(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start the timer when the component mounts or when the question changes
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Don't start timer if feedback is being shown
    if (feedback.show) return;

    startTimeRef.current = Date.now();

    // Set up the countdown timer
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = Math.max(0, QUESTION_TIMER - elapsed);
      setTimeLeft(remaining);

      // Automatically submit empty answer if time runs out
      if (remaining === 0 && !feedback.show) {
        clearInterval(timerRef.current!);
        handleTimeUp();
      }
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [data, feedback.show]);

  const handleTimeUp = () => {
    // Show timeout feedback
    setFeedback({
      show: true,
      correct: false,
      message: "Time's up! Moving to the next question...",
    });

    // Wait a bit before moving to the next question
    setTimeout(() => {
      onAnswer(""); // Pass empty answer as timeout
      setUserAnswer("");
      setShowHint(false);
      setFeedback({ show: false, correct: false, message: "" });
      setTimeLeft(QUESTION_TIMER);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Don't process empty answers
    if (!userAnswer.trim()) return;

    // Stop the timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Submit the answer to parent component for API validation
    onAnswer(userAnswer);

    // Clear the input and reset state
    setUserAnswer("");
    setShowHint(false);
    setTimeLeft(QUESTION_TIMER);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-2 border-cyan-500 text-white">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl text-cyan-300 font-semibold">
            Question {currentQuestion}/{totalQuestions}
          </h2>
          <span className="text-gray-300">Time left: {timeLeft}s</span>
        </div>

        <div className="mb-4">
          <Progress
            value={(timeLeft / QUESTION_TIMER) * 100}
            className="h-2 bg-gray-700 [&>*]:bg-cyan-500"
          />
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-cyan-300 hover:text-cyan-100 hover:bg-gray-700 ml-auto block mb-2"
          onClick={() => setShowHint(!showHint)}
        >
          <IconHelpCircle className="w-5 h-5 mr-1" />
          {showHint ? "Hide Hint" : "Show Hint"}
        </Button>

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
                {data.question || "What is this?"}
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
