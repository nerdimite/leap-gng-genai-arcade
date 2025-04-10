"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
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
import { Trophy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTeam } from "@/contexts/TeamContext";

export default function GlitchAndGigglePage() {
  const { user } = useUser();
  const { team, isLoading } = useTeam();
  const router = useRouter();

  // Game levels data
  const [levels, setLevels] = useState([
    {
      id: "1",
      title: "Wikipedia Speedrun",
      description: "Click through wikipedia articles to reach the end",
      locked: false,
      completed: false,
      link: "/glitch-and-giggle/wikipedia",
    },
    {
      id: "2",
      title: "Neural Blitz",
      description: "Rapid fire questions about AI to put you to the test",
      locked: true,
      completed: false,
      link: "/glitch-and-giggle/quiz",
    },
    {
      id: "3",
      title: "Prompt Puzzler",
      description: "Not your ordinary monday crossword",
      locked: true,
      completed: false,
      link: "/glitch-and-giggle/crossword",
    },
    {
      id: "4",
      title: "Visual Puzzler",
      description: "Recognize the AI concepts illustrated in the image",
      locked: true,
      completed: false,
      link: "/glitch-and-giggle/images",
    },
  ]);

  // Update levels locking based on team's current level
  useEffect(() => {
    if (team) {
      const teamLevel = parseInt(team.currentLevel, 10);

      setLevels((prevLevels) =>
        prevLevels.map((level) => {
          const levelId = parseInt(level.id, 10);
          return {
            ...level,
            locked: levelId > teamLevel,
            completed: levelId < teamLevel,
          };
        })
      );
    }
  }, [team]);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Team Info & Points */}
      <div className="flex justify-between items-center mb-10">
        <div className="bg-purple-800 p-3 border-4 border-purple-600">
          <h2 className="text-xl font-[family-name:var(--font-vt323)]">
            TEAM:{" "}
            <span className="text-yellow-300">
              {team?.name || user?.username || user?.firstName || "PLAYER 1"}
            </span>
          </h2>
        </div>

        <Button
          onClick={() => router.push("/glitch-and-giggle/leaderboard")}
          size="lg"
          variant="glitch"
          className="shadow-[4px_4px_0_0_#FFFF00] hover:shadow-[4px_4px_0_0_#CCCC00] bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
        >
          <Trophy size={30} />
          LEADERBOARD
        </Button>

        <div className="flex gap-4">
          <div className="bg-amber-500 p-3 border-4 border-amber-400">
            <div className="text-xl font-[family-name:var(--font-vt323)] flex items-center">
              <span className="text-black mr-2">POINTS:</span>
              <span className="text-black font-bold">{team?.score || 0}</span>
            </div>
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

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-2xl font-[family-name:var(--font-vt323)] animate-pulse">
            LOADING GAME DATA...
          </p>
        </div>
      ) : (
        /* Game Levels Grid */
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
                ) : level.completed ? (
                  <Button
                    variant="glitch"
                    className="w-full bg-green-700 hover:bg-green-800"
                    disabled
                  >
                    COMPLETED
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
      )}

      {/* Current Level Status */}
      {team && (
        <div className="mt-8 p-4 bg-gray-800 border-2 border-cyan-500 rounded-md">
          <p className="text-cyan-300 font-[family-name:var(--font-vt323)] text-xl">
            CURRENT PROGRESS: LEVEL {team.currentLevel} UNLOCKED
          </p>
          <p className="text-gray-400 mt-2">
            Complete each level to unlock the next challenge!
          </p>
        </div>
      )}
    </div>
  );
}
