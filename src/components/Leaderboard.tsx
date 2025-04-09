"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Team = {
  id: number;
  name: string;
  currentLevel: string;
  score: number;
  createdAt: string;
  updatedAt: string;
};

export function Leaderboard() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/leaderboard");

        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard");
        }

        const data = await response.json();
        setTeams(data.teams || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchLeaderboard();

    // Refresh leaderboard every 30 seconds
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 border-2 border-cyan-500 text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-cyan-300 text-center">
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-4">Loading leaderboard...</div>
        ) : error ? (
          <div className="text-center text-red-400 py-4">{error}</div>
        ) : teams.length === 0 ? (
          <div className="text-center py-4">No teams yet. Be the first!</div>
        ) : (
          <div className="space-y-2">
            {teams.map((team, index) => (
              <div
                key={team.id}
                className="flex justify-between items-center p-3 rounded-md bg-gray-700"
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-xl">{index + 1}</span>
                  <span className="text-md font-medium">{team.name}</span>
                </div>
                <span className="font-bold text-cyan-300">{team.score}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
