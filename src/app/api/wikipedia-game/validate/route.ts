import { NextRequest, NextResponse } from "next/server";

// Define the game configuration interface
interface GameConfig {
  startPage: string;
  targetPage: string;
  hint: string;
  order: number;
  isFinal?: boolean;
}

// Game configuration data - stored server-side
const GAMES: Record<string, GameConfig> = {
  embeddings: {
    startPage: "Artificial_intelligence",
    targetPage: "Word embedding",
    hint: "Find the article about embeddings",
    order: 1,
  },
  "neural-networks": {
    startPage: "Artificial_intelligence",
    targetPage: "Generative artificial intelligence",
    hint: "Find the article about brain-inspired computing models",
    order: 2,
  },
  "quantum-computing": {
    startPage: "Artificial_intelligence",
    targetPage: "Stable Diffusion",
    hint: "Find the article about computing using quantum-mechanical phenomena",
    order: 3,
    isFinal: true,
  },
  // Add more game configurations as needed
};

// Default game ID
const DEFAULT_GAME = "embeddings";

// API to list available games without exposing answers
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const gameId = url.searchParams.get("gameId");
    const getNextGame = url.searchParams.get("getNextGame");

    // If requesting the next game after a specific game ID
    if (getNextGame && GAMES[getNextGame]) {
      const currentGame = GAMES[getNextGame];
      const currentOrder = currentGame.order;

      // Find the game with the next order number
      const nextGame = Object.entries(GAMES).find(
        ([, config]) => config.order === currentOrder + 1
      );

      if (nextGame) {
        const [nextGameId, nextGameConfig] = nextGame;
        return NextResponse.json({
          gameId: nextGameId,
          startPage: nextGameConfig.startPage,
          hint: nextGameConfig.hint,
          isFinal: nextGameConfig.isFinal || false,
          order: nextGameConfig.order,
        });
      } else {
        // No more games
        return NextResponse.json({
          noMoreGames: true,
        });
      }
    }

    // If a specific game is requested, return that game's config without the target
    if (gameId) {
      const gameConfig = GAMES[gameId];

      if (!gameConfig) {
        return NextResponse.json({ error: "Invalid game ID" }, { status: 400 });
      }

      return NextResponse.json({
        gameId,
        startPage: gameConfig.startPage,
        hint: gameConfig.hint,
        isFinal: gameConfig.isFinal || false,
        order: gameConfig.order,
      });
    }

    // If no specific game is requested, return the first game by order
    const firstGame = Object.entries(GAMES).sort(
      (a, b) => a[1].order - b[1].order
    )[0];
    const [firstGameId, firstGameConfig] = firstGame;

    return NextResponse.json({
      gameId: firstGameId,
      startPage: firstGameConfig.startPage,
      hint: firstGameConfig.hint,
      isFinal: firstGameConfig.isFinal || false,
      order: firstGameConfig.order,
    });
  } catch (error) {
    console.error("Error in game config API:", error);
    return NextResponse.json(
      { error: "Failed to get game configuration" },
      { status: 500 }
    );
  }
}

// API to validate if a target has been reached
export async function POST(req: NextRequest) {
  try {
    const { page, gameId = DEFAULT_GAME } = await req.json();

    if (!page) {
      return NextResponse.json(
        { error: "No page parameter provided" },
        { status: 400 }
      );
    }

    // Get the game configuration
    const gameConfig = GAMES[gameId];

    if (!gameConfig) {
      return NextResponse.json({ error: "Invalid game ID" }, { status: 400 });
    }

    // Format both pages to ensure case-insensitive comparison
    const currentPageName = decodeURIComponent(
      page.replace(/_/g, " ")
    ).toLowerCase();

    const targetPageName = gameConfig.targetPage.toLowerCase();

    // Check if the page matches the target
    const isCorrect = currentPageName === targetPageName;

    return NextResponse.json({
      isCorrect,
      gameId,
      isFinal: gameConfig.isFinal || false,
      // Only include target info if the answer is correct
      ...(isCorrect && { targetPage: gameConfig.targetPage }),
    });
  } catch (error) {
    console.error("Error in validate API:", error);
    return NextResponse.json(
      { error: "Failed to validate page" },
      { status: 500 }
    );
  }
}
