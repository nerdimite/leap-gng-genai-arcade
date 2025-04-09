import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API endpoint to record Wikipedia game state
export async function POST(req: NextRequest) {
  try {
    const { teamName, targetPage, clicks, timeTaken } = await req.json();

    // Validate required fields
    if (!teamName || !targetPage) {
      return NextResponse.json(
        { error: "Missing required fields: teamName and targetPage" },
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

    // Create or update the Wikipedia game state
    const result = await prisma.wikipediaGameState.upsert({
      where: {
        teamName_targetPage: {
          teamName,
          targetPage,
        },
      },
      update: {
        clicks,
        timeTaken,
        completed: true,
        completedAt: new Date(),
      },
      create: {
        teamName,
        targetPage,
        clicks,
        timeTaken,
        completed: true,
        completedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error recording Wikipedia game state:", error);
    return NextResponse.json(
      { error: "Failed to record game state" },
      { status: 500 }
    );
  }
}
