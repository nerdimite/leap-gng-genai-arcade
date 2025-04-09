import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API endpoint to calculate Image Quiz game scores
export async function GET(req: NextRequest) {
  try {
    // Get team name from query params
    const searchParams = req.nextUrl.searchParams;
    const teamName = searchParams.get("teamName");

    // Query filter - if teamName is provided, filter by it
    const whereClause = teamName
      ? { teamName, completed: true }
      : { completed: true };

    // Fetch completed Image Quiz game states
    const completedGames = await prisma.imageQuizGameState.findMany({
      where: whereClause,
      orderBy: {
        completedAt: "asc",
      },
    });

    if (completedGames.length === 0) {
      // Return a response with zero scores rather than an error
      return NextResponse.json({
        totalScore: 0,
        imagesAnswered: 0,
        correctAnswers: 0,
        imageScores: [],
        averageTimePerImage: 0,
        dataComplete: true,
      });
    }

    // Calculate scores for each image
    const imageScores = completedGames.map((game) => {
      // If answer is incorrect, score is 0 regardless of time
      const basePoints = game.isCorrect ? 5 : 0;
      const timeBonus = game.isCorrect
        ? Math.max(0, 10 - Math.min(10, game.timeTaken))
        : 0;
      const imageScore = basePoints + timeBonus;

      return {
        imageId: game.imageId,
        image: "", // Note: Image details need to be retrieved from another source
        isCorrect: game.isCorrect,
        timeTaken: game.timeTaken,
        basePoints: basePoints,
        timeBonus: timeBonus,
        imageScore: imageScore,
      };
    });

    // Calculate aggregate metrics
    const totalScore = imageScores.reduce(
      (sum, image) => sum + image.imageScore,
      0
    );

    const correctAnswers = imageScores.filter((i) => i.isCorrect).length;

    const totalTimeTaken = completedGames.reduce(
      (sum, game) => sum + game.timeTaken,
      0
    );

    const averageTimePerImage =
      completedGames.length > 0
        ? parseFloat((totalTimeTaken / completedGames.length).toFixed(1))
        : 0;

    // Check if data is complete (can be extended with more checks as needed)
    const dataComplete = completedGames.every(
      (game) =>
        game.imageId &&
        game.timeTaken !== undefined &&
        game.isCorrect !== undefined
    );

    if (!dataComplete) {
      console.warn(
        "Incomplete image quiz data for team: ",
        teamName || "all teams"
      );
    }

    return NextResponse.json({
      totalScore,
      imagesAnswered: imageScores.length,
      correctAnswers,
      imageScores,
      averageTimePerImage,
      dataComplete,
    });
  } catch (error) {
    console.error("Error calculating Image Quiz game scores:", error);
    return NextResponse.json(
      { error: "Failed to calculate game scores" },
      { status: 500 }
    );
  }
}
