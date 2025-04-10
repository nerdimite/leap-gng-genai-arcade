import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API endpoint to calculate Quiz game scores
export async function GET(req: NextRequest) {
  try {
    // Get team name from query params
    const searchParams = req.nextUrl.searchParams;
    const teamName = searchParams.get("teamName");

    // Query filter - if teamName is provided, filter by it
    const whereClause = teamName
      ? { teamName, completed: true }
      : { completed: true };

    // Fetch completed Quiz game states
    const completedGames = await prisma.quizGameState.findMany({
      where: whereClause,
      orderBy: {
        completedAt: "asc",
      },
    });

    if (completedGames.length === 0) {
      // Return a response with zero scores rather than an error
      return NextResponse.json({
        totalScore: 0,
        questionsAnswered: 0,
        correctAnswers: 0,
        questionScores: [],
        averageTimePerQuestion: 0,
        dataComplete: true,
      });
    }

    // Calculate scores for each question
    const questionScores = completedGames.map((game) => {
      // If answer is incorrect, score is 0 regardless of time
      const basePoints = game.isCorrect ? 10 : 0;
      const timeBonus = game.isCorrect
        ? Math.max(0, 10 - Math.min(10, game.timeTaken))
        : 0;
      const questionScore = basePoints + timeBonus;

      return {
        questionId: game.questionId,
        question: "", // Note: Question text needs to be retrieved from another source
        isCorrect: game.isCorrect,
        timeTaken: game.timeTaken,
        basePoints: basePoints,
        timeBonus: timeBonus,
        questionScore: questionScore,
      };
    });

    // Calculate aggregate metrics
    const totalScore = questionScores.reduce(
      (sum, question) => sum + question.questionScore,
      0
    );

    const correctAnswers = questionScores.filter((q) => q.isCorrect).length;

    const totalTimeTaken = completedGames.reduce(
      (sum, game) => sum + game.timeTaken,
      0
    );

    const averageTimePerQuestion =
      completedGames.length > 0
        ? parseFloat((totalTimeTaken / completedGames.length).toFixed(1))
        : 0;

    // Check if data is complete (can be extended with more checks as needed)
    const dataComplete = completedGames.every(
      (game) =>
        game.questionId &&
        game.timeTaken !== undefined &&
        game.isCorrect !== undefined
    );

    if (!dataComplete) {
      console.warn("Incomplete quiz data for team: ", teamName || "all teams");
    }

    return NextResponse.json({
      totalScore,
      questionsAnswered: questionScores.length,
      correctAnswers,
      questionScores,
      averageTimePerQuestion,
      dataComplete,
    });
  } catch (error) {
    console.error("Error calculating Quiz game scores:", error);
    return NextResponse.json(
      { error: "Failed to calculate game scores" },
      { status: 500 }
    );
  }
}
