import { NextRequest, NextResponse } from "next/server";
import { getOrCreateTeam, updateTeamScore, updateTeamLevel } from "@/lib/db";

/**
 * GET /api/team?name=teamName
 * Get a team by name or create if it doesn't exist
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const teamName = searchParams.get("name");

  if (!teamName) {
    return NextResponse.json(
      { error: "Team name is required" },
      { status: 400 }
    );
  }

  try {
    const team = await getOrCreateTeam(teamName);
    return NextResponse.json({ team });
  } catch (error) {
    console.error("Error getting/creating team:", error);
    return NextResponse.json(
      { error: "Failed to get or create team" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/team
 * Update team level
 */
export async function POST(request: NextRequest) {
  try {
    const { teamName, level } = await request.json();

    if (!teamName) {
      return NextResponse.json(
        { error: "Team name is required" },
        { status: 400 }
      );
    }

    let team;

    // Recalculate the total score by fetching from leaderboard API
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
      const leaderboardResponse = await fetch(`${baseUrl}/api/leaderboard`);

      if (leaderboardResponse.ok) {
        const leaderboardData = await leaderboardResponse.json();
        const teamData = leaderboardData.teams.find(
          (t: { name: string; totalScore: number }) => t.name === teamName
        );

        if (teamData) {
          // Update the team's score with the total score from leaderboard
          team = await updateTeamScore(teamName, teamData.totalScore);
        }
      }
    } catch (error) {
      console.error("Error updating team score from leaderboard:", error);
      // Continue without failing the whole request
    }

    // Update level if provided
    if (level !== undefined) {
      team = await updateTeamLevel(teamName, level);
    }

    return NextResponse.json({ team });
  } catch (error) {
    console.error("Error updating team:", error);
    return NextResponse.json(
      { error: "Failed to update team" },
      { status: 500 }
    );
  }
}
