import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API endpoint to calculate Crossword game scores
export async function GET(req: NextRequest) {
  try {
    // Get team name from query params
    const searchParams = req.nextUrl.searchParams;
    const teamName = searchParams.get("teamName");

    // Query filter - if teamName is provided, filter by it
    const whereClause = teamName
      ? { teamName, completed: true }
      : { completed: true };

    // Fetch completed Crossword game states
    const completedGames = await prisma.crosswordGameState.findMany({
      where: whereClause,
      orderBy: {
        completedAt: "asc",
      },
    });

    if (completedGames.length === 0) {
      // Return a response with zero scores rather than an error
      return NextResponse.json({
        totalScore: 0,
        gamesCompleted: 0,
        gameResults: [],
        averageTimePerGame: 0,
        dataComplete: true,
      });
    }

    // Calculate scores for each game
    const gameResults = completedGames.map((game) => {
      // Time-based scoring: 180 points max, reduced by 1 point per second
      const timeScore = 30 + Math.max(0, 500 - Math.min(500, game.timeTaken));

      return {
        gameId: game.id.toString(),
        isCorrect: game.isCorrect,
        timeTaken: game.timeTaken,
        timeScore: timeScore,
        completed: game.completed,
        completedAt: game.completedAt,
      };
    });

    // Calculate aggregate metrics
    const totalScore = gameResults.reduce(
      (sum, game) => sum + game.timeScore,
      0
    );

    const correctGames = gameResults.filter((g) => g.isCorrect).length;

    const totalTimeTaken = completedGames.reduce(
      (sum, game) => sum + game.timeTaken,
      0
    );

    const averageTimePerGame =
      completedGames.length > 0
        ? Math.round(totalTimeTaken / completedGames.length)
        : 0;

    // Check if data is complete
    const dataComplete = completedGames.every(
      (game) => game.timeTaken !== undefined && game.isCorrect !== undefined
    );

    if (!dataComplete) {
      console.warn(
        "Incomplete crossword data for team: ",
        teamName || "all teams"
      );
    }

    return NextResponse.json({
      totalScore,
      gamesCompleted: gameResults.length,
      correctGames,
      gameResults,
      averageTimePerGame,
      dataComplete,
    });
  } catch (error) {
    console.error("Error calculating Crossword game scores:", error);
    return NextResponse.json(
      { error: "Failed to calculate game scores" },
      { status: 500 }
    );
  }
}
