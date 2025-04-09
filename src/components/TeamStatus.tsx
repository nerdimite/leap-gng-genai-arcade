"use client";

import { useTeam } from "@/contexts/TeamContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TeamStatus() {
  const { team, isLoading, error } = useTeam();

  if (isLoading) {
    return <div className="text-gray-300">Loading team data...</div>;
  }

  if (error) {
    return <div className="text-red-400">Error: {error}</div>;
  }

  if (!team) {
    return <div className="text-yellow-400">No team data available</div>;
  }

  return (
    <Card className="bg-gray-800 border-2 border-cyan-500 text-white">
      <CardHeader>
        <CardTitle className="text-lg text-cyan-300">Team Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-300">Team:</span>
            <span className="font-medium">{team.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Current Level:</span>
            <span className="font-medium">{team.currentLevel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Score:</span>
            <span className="font-bold text-cyan-300">{team.score}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
