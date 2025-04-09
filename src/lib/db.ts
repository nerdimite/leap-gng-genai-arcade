import { PrismaClient } from "../generated/prisma";

// Create a singleton PrismaClient instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/**
 * Gets a team by name or creates a new one if it doesn't exist
 */
export async function getOrCreateTeam(teamName: string) {
  // Look for existing team
  const existingTeam = await prisma.team.findUnique({
    where: { name: teamName },
  });

  // If team exists, return it
  if (existingTeam) {
    return existingTeam;
  }

  // Otherwise, create a new team with default values
  return prisma.team.create({
    data: {
      name: teamName,
      currentLevel: "1",
      score: 0,
    },
  });
}

/**
 * Updates a team's score
 */
export async function updateTeamScore(teamName: string, newScore: number) {
  return prisma.team.update({
    where: { name: teamName },
    data: { score: newScore },
  });
}

/**
 * Updates a team's current level
 */
export async function updateTeamLevel(teamName: string, newLevel: string) {
  return prisma.team.update({
    where: { name: teamName },
    data: { currentLevel: newLevel },
  });
}

/**
 * Gets the leaderboard (top teams by score)
 */
export async function getLeaderboard(limit = 10) {
  return prisma.team.findMany({
    orderBy: { score: "desc" },
    take: limit,
  });
}
