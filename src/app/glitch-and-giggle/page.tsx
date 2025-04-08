"use client";

import { useState } from "react";
import { ClerkLoaded, ClerkLoading, useUser } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconLock } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function GlitchAndGigglePage() {
  const { user } = useUser();
  const [points, setPoints] = useState(0);
  const router = useRouter();

  // Game levels data
  const levels = [
    {
      id: 1,
      title: "Wikipedia Speedrun",
      description: "Click through wikipedia articles to reach the end",
      locked: false,
      link: "/glitch-and-giggle/wikipedia",
    },
    {
      id: 2,
      title: "Neural Blitz",
      description: "Rapid fire questions about AI to put you to the test",
      locked: true,
      link: "/glitch-and-giggle/quiz",
    },
    {
      id: 3,
      title: "Prompt Puzzler",
      description: "Not your ordinary monday crossword",
      locked: true,
      link: "/glitch-and-giggle/crossword",
    },
    {
      id: 4,
      title: "Image Classification",
      description: "Recognize the AI concepts illustrated in the image",
      locked: true,
      link: "/glitch-and-giggle/picture-puzzle",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Team Info & Points */}
      <div className="flex justify-between items-center mb-10">
        <div className="bg-purple-800 p-3 border-4 border-purple-600">
          <h2 className="text-xl font-[family-name:var(--font-vt323)]">
            TEAM:{" "}
            <span className="text-yellow-300">
              {user?.username || user?.firstName || "PLAYER 1"}
            </span>
          </h2>
        </div>

        <div className="bg-amber-500 p-3 border-4 border-amber-400">
          <div className="text-xl font-[family-name:var(--font-vt323)] flex items-center">
            <span className="text-black mr-2">POINTS:</span>
            <span className="text-black font-bold">{points}</span>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div className="relative mb-12">
        <h1
          className={`text-4xl md:text-6xl font-bold text-center font-[family-name:var(--font-vt323)] 
          text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500
          drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]
          `}
        >
          GLITCH & GIGGLE CHALLENGE
        </h1>
        {/* Outline text effect for extra visibility */}
        <h1
          className={`text-4xl md:text-6xl font-bold text-center font-[family-name:var(--font-vt323)] 
          absolute top-0 left-0 right-0 
          text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500
          drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]
          `}
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
        >
          GLITCH & GIGGLE CHALLENGE
        </h1>
      </div>

      <ClerkLoading>
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-2xl font-[family-name:var(--font-vt323)] animate-pulse">
            LOADING GAME DATA...
          </p>
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        {/* Game Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level) => (
            <Card
              key={level.id}
              className={`border-4 border-gray-700 overflow-hidden relative 
              ${level.locked ? "bg-gray-900 opacity-80" : "bg-gray-800"}`}
            >
              {/* Level Number Badge */}
              <div className="absolute top-0 left-0 bg-red-600 text-white font-[family-name:var(--font-vt323)] text-xl p-2 px-3">
                LVL {level.id}
              </div>

              <CardHeader
                className={`pb-3 pt-10 ${
                  level.locked ? "text-gray-500" : "text-white"
                }`}
              >
                <CardTitle className="font-[family-name:var(--font-vt323)] text-2xl">
                  {level.title}
                </CardTitle>
                <CardDescription
                  className={`font-medium ${
                    level.locked ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {level.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative pt-0">
                {level.locked && (
                  /* Simple dimmed overlay with lock icon */
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <IconLock className="w-16 h-16 text-yellow-500 opacity-80" />
                  </div>
                )}
              </CardContent>

              <CardFooter className="pt-2 pb-4">
                {level.locked ? (
                  <Button
                    variant="glitch"
                    className="w-full opacity-50 shadow-none"
                    disabled
                  >
                    LOCKED
                  </Button>
                ) : (
                  <Button
                    variant="glitch"
                    className="w-full"
                    onClick={() => router.push(level.link)}
                  >
                    START LEVEL
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </ClerkLoaded>
    </div>
  );
}
