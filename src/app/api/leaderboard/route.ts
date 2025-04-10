import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

/**
 * GET /api/leaderboard?limit=10
 * Get the top teams with detailed game scores
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? parseInt(limitParam, 10) : 10;

  try {
    // Get all teams
    const teams = await prisma.team.findMany({
      orderBy: { score: "desc" },
      take: limit,
    });

    // Fetch scores for each team from the individual game APIs
    const teamsWithDetailedScores = await Promise.all(
      teams.map(async (team) => {
        // Level 1: Quiz Game
        const quizResponse = await fetch(
          `${
            process.env.NEXT_PUBLIC_BASE_URL || ""
          }/api/quiz-game/score?teamName=${encodeURIComponent(team.name)}`
        );
        const quizData = await quizResponse.json();
        const quizScore = quizData.totalScore || 0;

        // Level 2: Crossword Game
        const crosswordResponse = await fetch(
          `${
            process.env.NEXT_PUBLIC_BASE_URL || ""
          }/api/crossword-game/score?teamName=${encodeURIComponent(team.name)}`
        );
        const crosswordData = await crosswordResponse.json();
        const crosswordScore = crosswordData.totalScore || 0;

        // Level 3: Image Quiz Game
        const imageQuizResponse = await fetch(
          `${
            process.env.NEXT_PUBLIC_BASE_URL || ""
          }/api/image-quiz-game/score?teamName=${encodeURIComponent(team.name)}`
        );
        const imageQuizData = await imageQuizResponse.json();
        const imageQuizScore = imageQuizData.totalScore || 0;

        // Level 4: Wikipedia Game
        const wikiResponse = await fetch(
          `${
            process.env.NEXT_PUBLIC_BASE_URL || ""
          }/api/wikipedia-game/score?teamName=${encodeURIComponent(team.name)}`
        );
        const wikiData = await wikiResponse.json();
        const wikipediaScore = wikiData.totalScore || 0;

        // Calculate total score
        const totalScore =
          wikipediaScore + quizScore + crosswordScore + imageQuizScore;

        // Get additional game stats for each level
        const wikipediaStats = {
          roundsCompleted: wikiData.roundsCompleted || 0,
        };

        const quizStats = {
          questionsAnswered: quizData.questionsAnswered || 0,
          correctAnswers: quizData.correctAnswers || 0,
        };

        const crosswordStats = {
          completed: crosswordData.completed || false,
        };

        const imageQuizStats = {
          questionsAnswered: imageQuizData.questionsAnswered || 0,
          correctAnswers: imageQuizData.correctAnswers || 0,
        };

        return {
          id: team.id,
          name: team.name,
          currentLevel: team.currentLevel,
          scores: {
            level1: quizScore,
            level2: crosswordScore,
            level3: imageQuizScore,
            level4: wikipediaScore,
          },
          stats: {
            level1: quizStats,
            level2: crosswordStats,
            level3: imageQuizStats,
            level4: wikipediaStats,
          },
          totalScore: totalScore,
          createdAt: team.createdAt,
          updatedAt: team.updatedAt,
        };
      })
    );

    // Sort teams by total score
    teamsWithDetailedScores.sort((a, b) => b.totalScore - a.totalScore);

    return NextResponse.json({ teams: teamsWithDetailedScores });
  } catch (error) {
    console.error("Error getting leaderboard:", error);
    return NextResponse.json(
      { error: "Failed to get leaderboard" },
      { status: 500 }
    );
  }
}
