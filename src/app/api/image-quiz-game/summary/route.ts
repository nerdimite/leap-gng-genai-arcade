import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API endpoint to get image quiz game summary statistics
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const teamName = url.searchParams.get("teamName");

    if (!teamName) {
      return NextResponse.json(
        { error: "Team name is required" },
        { status: 400 }
      );
    }

    // Check if the team exists
    const team = await prisma.team.findUnique({
      where: { name: teamName },
    });

    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    // Get all image quiz game states for the team
    const imageQuizStates = await prisma.imageQuizGameState.findMany({
      where: {
        teamName,
      },
    });

    // Calculate summary statistics
    const totalQuestions = imageQuizStates.length;
    const totalCorrect = imageQuizStates.filter(
      (state) => state.isCorrect
    ).length;
    const averageTimeTaken = totalQuestions
      ? Math.round(
          imageQuizStates.reduce((sum, state) => sum + state.timeTaken, 0) /
            totalQuestions
        )
      : 0;

    return NextResponse.json({
      totalQuestions,
      totalCorrect,
      averageTimeTaken,
      accuracy: totalQuestions
        ? Math.round((totalCorrect / totalQuestions) * 100)
        : 0,
    });
  } catch (error) {
    console.error("Error getting image quiz game summary:", error);
    return NextResponse.json(
      { error: "Failed to get image quiz game summary" },
      { status: 500 }
    );
  }
}
