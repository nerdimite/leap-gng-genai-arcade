"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useUser } from "@clerk/nextjs";

type Team = {
  id: number;
  name: string;
  currentLevel: string;
  score: number;
  createdAt: string;
  updatedAt: string;
};

interface TeamContextType {
  team: Team | null;
  isLoading: boolean;
  error: string | null;
  updateTeamScore: (newScore: number) => Promise<void>;
  updateTeamLevel: (newLevel: string) => Promise<void>;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({ children }: { children: ReactNode }) {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [team, setTeam] = useState<Team | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load team data when user is loaded
  useEffect(() => {
    async function loadTeam() {
      if (!isUserLoaded || !user) return;

      try {
        setIsLoading(true);
        // Use username or email as team name
        const teamName = user.username || "anonymous";

        const response = await fetch(
          `/api/team?name=${encodeURIComponent(teamName)}`
        );

        if (!response.ok) {
          throw new Error("Failed to load team data");
        }

        const data = await response.json();
        setTeam(data.team);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    }

    loadTeam();
  }, [user, isUserLoaded]);

  // Update team score
  const updateTeamScore = async (newScore: number) => {
    if (!team) return;

    try {
      const response = await fetch("/api/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamName: team.name,
          score: newScore,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update team score");
      }

      const data = await response.json();
      setTeam(data.team);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  // Update team level
  const updateTeamLevel = async (newLevel: string) => {
    if (!team) return;

    try {
      const response = await fetch("/api/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamName: team.name,
          level: newLevel,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update team level");
      }

      const data = await response.json();
      setTeam(data.team);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <TeamContext.Provider
      value={{ team, isLoading, error, updateTeamScore, updateTeamLevel }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
}
