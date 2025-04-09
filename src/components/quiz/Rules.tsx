"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type RulesProps = {
  onStart: () => void;
};

export function Rules({ onStart }: RulesProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-2 border-cyan-500 text-white">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-[family-name:var(--font-vt323)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          AI TRIVIA CHALLENGE
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Test your knowledge about artificial intelligence!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-700 p-4 rounded-md">
          <h3 className="text-xl text-yellow-400 mb-2">How to Play</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              You will be presented with 5 challenging questions about AI
              history and technology
            </li>
            <li>Choose the correct answer from the multiple-choice options</li>
            <li>Each correct answer earns you points</li>
            <li>
              Try to answer all questions correctly to achieve the highest score
            </li>
            <li>
              At the end, you'll see your final score and how you compare to
              others
            </li>
          </ul>
        </div>

        <div className="bg-gray-700 p-4 rounded-md">
          <h3 className="text-xl text-green-400 mb-2">Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Read each question carefully before selecting your answer</li>
            <li>If you're unsure, make your best educated guess</li>
            <li>
              Pay attention to specific dates and names mentioned in the
              questions
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={onStart}
          className="px-8 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg"
        >
          START QUIZ
        </Button>
      </CardFooter>
    </Card>
  );
}
