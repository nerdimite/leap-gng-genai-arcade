import { NextRequest, NextResponse } from "next/server";
import {
  getOrCreateTeam,
  updateTeamScore,
  updateTeamLevel,
  getLeaderboard,
} from "@/lib/db";

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
 * Update team score or level
 */
export async function POST(request: NextRequest) {
  try {
    const { teamName, score, level } = await request.json();

    if (!teamName) {
      return NextResponse.json(
        { error: "Team name is required" },
        { status: 400 }
      );
    }

    let team;

    // Update score if provided
    if (score !== undefined) {
      team = await updateTeamScore(teamName, score);
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
