import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API endpoint to record Image Quiz game state
export async function POST(req: NextRequest) {
  try {
    const { teamName, imageId, timeTaken, isCorrect } = await req.json();

    // Validate required fields
    if (!teamName || !imageId) {
      return NextResponse.json(
        { error: "Missing required fields: teamName and imageId" },
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

    // Create or update the Image Quiz game state
    const result = await prisma.imageQuizGameState.upsert({
      where: {
        teamName_imageId: {
          teamName,
          imageId,
        },
      },
      update: {
        timeTaken,
        completed: true,
        isCorrect: isCorrect || false,
        completedAt: new Date(),
      },
      create: {
        teamName,
        imageId,
        timeTaken,
        completed: true,
        isCorrect: isCorrect || false,
        completedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error recording Image Quiz game state:", error);
    return NextResponse.json(
      { error: "Failed to record game state" },
      { status: 500 }
    );
  }
}
