"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Leaderboard } from "@/components/Leaderboard";
import { TeamStatus } from "@/components/TeamStatus";

export default function LeaderboardPage() {
  const router = useRouter();

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

      <h1
        className="text-4xl md:text-5xl font-bold text-center font-[family-name:var(--font-vt323)] 
        text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500
        drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] mb-8"
      >
        LEADERBOARD
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <TeamStatus />
        </div>
        <div className="md:col-span-2">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}
