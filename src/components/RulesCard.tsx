"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type RulesCardProps = {
  title: string;
  duration: string;
  rules: string[];
  onStart: () => void;
  className?: string;
};

export function RulesCard({
  title,
  duration,
  rules,
  onStart,
  className = "",
}: RulesCardProps) {
  return (
    <Card
      className={`border-4 border-gray-700 bg-gray-800 max-w-2xl mx-auto ${className}`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="font-[family-name:var(--font-vt323)] text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-yellow-500"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 7l0 5l3 3" />
          </svg>
          <span className="font-medium">Duration: {duration}</span>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
          <h3 className="text-xl font-[family-name:var(--font-vt323)] text-yellow-400 mb-3">
            GAME RULES
          </h3>
          <ul className="space-y-2">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center bg-pink-600 text-white h-6 w-6 rounded-md text-sm font-bold mr-2 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-200">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center pt-2 pb-6">
        <Button
          variant="glitch"
          size="lg"
          onClick={onStart}
          className="w-full max-w-xs"
        >
          START GAME
        </Button>
      </CardFooter>
    </Card>
  );
}
