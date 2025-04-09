import { NextRequest, NextResponse } from "next/server";
import { getLeaderboard } from "@/lib/db";

/**
 * GET /api/leaderboard?limit=10
 * Get the top teams by score
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? parseInt(limitParam, 10) : 10;

  try {
    const teams = await getLeaderboard(limit);
    return NextResponse.json({ teams });
  } catch (error) {
    console.error("Error getting leaderboard:", error);
    return NextResponse.json(
      { error: "Failed to get leaderboard" },
      { status: 500 }
    );
  }
}
