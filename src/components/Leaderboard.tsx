"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type GameScores = {
  level1: number; // Wikipedia
  level2: number; // Quiz
  level3: number; // Crossword
  level4: number; // Image Quiz
};

type GameStats = {
  level1: {
    roundsCompleted: number;
  };
  level2: {
    questionsAnswered: number;
    correctAnswers: number;
  };
  level3: {
    completed: boolean;
  };
  level4: {
    questionsAnswered: number;
    correctAnswers: number;
  };
};

type Team = {
  id: number;
  name: string;
  currentLevel: string;
  scores: GameScores;
  stats: GameStats;
  totalScore: number;
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

  // Function to format scores neatly
  const formatScore = (score: number) => {
    return score.toLocaleString();
  };

  // Function to render level stats as a subtitle
  // const renderLevelStats = (
  //   team: Team,
  //   level: "level1" | "level2" | "level3" | "level4"
  // ) => {
  //   if (level === "level1") {
  //     return team.stats.level1.roundsCompleted > 0
  //       ? `${team.stats.level1.roundsCompleted} rounds`
  //       : null;
  //   } else if (level === "level2") {
  //     return team.stats.level2.questionsAnswered > 0
  //       ? `${team.stats.level2.correctAnswers}/${team.stats.level2.questionsAnswered} correct`
  //       : null;
  //   } else if (level === "level3") {
  //     return team.stats.level3.completed ? "Completed" : null;
  //   } else if (level === "level4") {
  //     return team.stats.level4.questionsAnswered > 0
  //       ? `${team.stats.level4.correctAnswers}/${team.stats.level4.questionsAnswered} correct`
  //       : null;
  //   }
  //   return null;
  // };

  // Function to render the appropriate content based on state
  const renderContent = () => {
    if (isLoading) {
      return <div className="text-center py-4">Loading leaderboard...</div>;
    }

    if (error) {
      return <div className="text-center text-red-400 py-4">{error}</div>;
    }

    if (teams.length === 0) {
      return (
        <div className="text-center py-4">No teams yet. Be the first!</div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-700">
              <TableHead className="text-cyan-300">Rank</TableHead>
              <TableHead className="text-cyan-300">Team</TableHead>
              <TableHead className="text-cyan-300">
                Level 1 (Wikipedia)
              </TableHead>
              <TableHead className="text-cyan-300">Level 2 (Quiz)</TableHead>
              <TableHead className="text-cyan-300">
                Level 3 (Crossword)
              </TableHead>
              <TableHead className="text-cyan-300">
                Level 4 (Image Quiz)
              </TableHead>
              <TableHead className="text-cyan-300">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team, index) => (
              <TableRow
                key={team.id}
                className="hover:bg-gray-700 border-b border-gray-700"
              >
                <TableCell className="font-bold">{index + 1}</TableCell>
                <TableCell className="font-medium">{team.name}</TableCell>
                <TableCell>
                  <div className="font-medium">
                    {formatScore(team.scores.level1)}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">
                    {formatScore(team.scores.level2)}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">
                    {formatScore(team.scores.level3)}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">
                    {formatScore(team.scores.level4)}
                  </div>
                </TableCell>
                <TableCell className="font-bold text-cyan-300">
                  {formatScore(team.totalScore)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <Card className="w-full mx-auto bg-gray-800 border-2 border-cyan-500 text-white">
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
}
