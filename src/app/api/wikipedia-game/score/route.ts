import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API endpoint to calculate Wikipedia game scores
export async function GET(req: NextRequest) {
  try {
    // Get team name from query params
    const searchParams = req.nextUrl.searchParams;
    const teamName = searchParams.get("teamName");

    if (!teamName) {
      return NextResponse.json(
        { error: "Missing required query parameter: teamName" },
        { status: 400 }
      );
    }

    // Fetch completed Wikipedia game states for the given team
    const completedGames = await prisma.wikipediaGameState.findMany({
      where: {
        teamName: teamName,
        completed: true,
      },
      orderBy: {
        completedAt: "asc",
      },
    });

    if (completedGames.length === 0) {
      // Return a response with zero scores rather than an error
      return NextResponse.json({
        totalScore: 0,
        roundsCompleted: 0,
        roundScores: [],
      });
    }

    // Calculate scores for each round
    const roundScores = completedGames.map((game) => {
      const timeScore = parseFloat(Math.max(0, 50 - Math.min(50, game.timeTaken / 3)).toFixed(2));
      const clickScore = parseFloat(Math.max(0, 50 - Math.min(50, game.clicks * 5)).toFixed(2));
      const roundScore = parseFloat((timeScore + clickScore).toFixed(2));

      return {
        gameId: game.id.toString(),
        targetPage: game.targetPage,
        clicks: game.clicks,
        timeTaken: game.timeTaken,
        timeScore: timeScore,
        clickScore: clickScore,
        roundScore: roundScore,
      };
    });

    // Calculate total score
    const totalScore = parseFloat(roundScores.reduce(
      (sum, round) => sum + round.roundScore,
      0
    ).toFixed(2));

    return NextResponse.json({
      totalScore,
      roundsCompleted: roundScores.length,
      roundScores,
    });
  } catch (error) {
    console.error("Error calculating Wikipedia game scores:", error);
    return NextResponse.json(
      { error: "Failed to calculate game scores" },
      { status: 500 }
    );
  }
}
