"use client";

import { useState, useEffect } from "react";
import { IconTrophy } from "@tabler/icons-react";
import { GameResultsBase } from "@/components/GameResultsBase";
import { useTeam } from "@/contexts/TeamContext";

type RoundScore = {
  gameId: string;
  targetPage: string;
  clicks: number;
  timeTaken: number;
  timeScore: number;
  clickScore: number;
  roundScore: number;
};

type ScoreData = {
  totalScore: number;
  roundsCompleted: number;
  roundScores: RoundScore[];
};

type WikipediaResultProps = {
  clicks: number;
  timeTaken: number;
  totalRounds: number;
  onRestart: () => void;
};

export function WikipediaResult({
  clicks,
  timeTaken,
  totalRounds,
  onRestart,
}: Readonly<WikipediaResultProps>) {
  // Wikipedia game is level 1
  const currentGameLevel = 4;
  const { team } = useTeam();
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch score data from API
  useEffect(() => {
    const fetchScores = async () => {
      if (!team?.name) return;

      try {
        setIsLoading(true);
        const response = await fetch(
          `/api/wikipedia-game/score?teamName=${encodeURIComponent(team.name)}`
        );

        if (response.ok) {
          const data = await response.json();
          setScoreData(data);
        } else {
          console.error("Failed to fetch score data:", await response.text());
        }
      } catch (error) {
        console.error("Error fetching scores:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScores();
  }, [team?.name]);

  // Custom feedback messages for Wikipedia game
  const feedbackMessages = {
    excellent: "Amazing! You're a Wikipedia navigation expert!",
    good: "Great job! You found a good path!",
    average: "Good navigation skills! Keep practicing!",
    poor: "Wikipedia can be tricky! Try to find more direct paths next time.",
  };

  // Display loading state while fetching scores
  if (isLoading) {
    return (
      <GameResultsBase
        score={0}
        currentGameLevel={currentGameLevel}
        title="CALCULATING SCORE..."
        feedbackMessages={feedbackMessages}
        onRestart={onRestart}
      >
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </GameResultsBase>
    );
  }

  // Calculate last round scores to display
  const lastRound = scoreData?.roundScores[scoreData.roundScores.length - 1];
  const score = scoreData?.totalScore || 0;

  return (
    <GameResultsBase
      score={score}
      currentGameLevel={currentGameLevel}
      title="GAME COMPLETE!"
      feedbackMessages={feedbackMessages}
      onRestart={onRestart}
    >
      <div className="flex flex-col items-center space-y-6">
        <p className="text-white text-lg">
          Congratulations! You&apos;ve completed all Wikipedia navigation
          challenges!
        </p>
      </div>
    </GameResultsBase>
  );
}
