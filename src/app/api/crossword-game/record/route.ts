import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API endpoint to record Crossword game state
export async function POST(req: NextRequest) {
  try {
    const { teamName, timeTaken, isCorrect } = await req.json();

    // Validate required fields
    if (!teamName) {
      return NextResponse.json(
        { error: "Missing required field: teamName" },
        { status: 400 }
      );
    }

    // Check if the team exists
    const team = await prisma.team.findUnique({
      where: { name: teamName },
    });

    // If team doesn't exist, create it
    if (!team) {
      await prisma.team.create({
        data: { name: teamName },
      });
    }

    // Create or update the Crossword game state
    const result = await prisma.crosswordGameState.upsert({
      where: {
        teamName,
      },
      update: {
        timeTaken,
        completed: true,
        isCorrect: isCorrect || false,
        completedAt: new Date(),
      },
      create: {
        teamName,
        timeTaken,
        completed: true,
        isCorrect: isCorrect || false,
        completedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error recording Crossword game state:", error);
    return NextResponse.json(
      { error: "Failed to record game state" },
      { status: 500 }
    );
  }
}
