import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API endpoint to get quiz game summary statistics
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const teamName = url.searchParams.get("teamName");

    if (!teamName) {
      return NextResponse.json(
        { error: "Missing required parameter: teamName" },
        { status: 400 }
      );
    }

    // Get all quiz game states for the team
    const quizStates = await prisma.quizGameState.findMany({
      where: {
        teamName,
        completed: true,
      },
    });

    // Calculate summary statistics
    const totalQuestions = quizStates.length;
    const totalCorrect = quizStates.filter((state) => state.isCorrect).length;
    const correctPercentage =
      totalQuestions > 0
        ? Math.round((totalCorrect / totalQuestions) * 100)
        : 0;

    return NextResponse.json({
      totalQuestions,
      totalCorrect,
      correctPercentage,
    });
  } catch (error) {
    console.error("Error getting quiz game summary:", error);
    return NextResponse.json(
      { error: "Failed to get quiz game summary" },
      { status: 500 }
    );
  }
}
