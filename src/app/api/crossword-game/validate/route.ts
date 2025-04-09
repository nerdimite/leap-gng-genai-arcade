import { NextRequest, NextResponse } from "next/server";

// Crossword puzzle configuration
const CROSSWORD_DATA = {
  across: [
    {
      number: 2,
      clue: "This Amazon pal lives in your speakers and loves to help... just shout out her name!",
      answer: "ALEXA",
      row: 1,
      col: 0,
      length: 5,
    },
    {
      number: 3,
      clue: "This IBM brainiac aced a famous game show, proving AI's got smarts and trivia skills!",
      answer: "WATSON",
      row: 4,
      col: 0,
      length: 6,
    },
  ],
  down: [
    {
      number: 1,
      clue: "The secret word that makes your smart speaker perk up its digital ears!",
      answer: "WAKEWORD",
      row: 0,
      col: 0,
      length: 8,
    },
    {
      number: 4,
      clue: "Wanna chat with Apple's brain? Just say her name!",
      answer: "SIRI",
      row: 4,
      col: 3,
      length: 4,
    },
  ],
};

// API to get crossword clues without answers
export async function GET(req: NextRequest) {
  try {
    // Return the crossword puzzle configuration without answers
    const clues = {
      across: CROSSWORD_DATA.across.map(
        ({ number, clue, row, col, length }) => ({
          number,
          clue,
          row,
          col,
          length,
        })
      ),
      down: CROSSWORD_DATA.down.map(({ number, clue, row, col, length }) => ({
        number,
        clue,
        row,
        col,
        length,
      })),
    };

    return NextResponse.json(clues);
  } catch (error) {
    console.error("Error in crossword API:", error);
    return NextResponse.json(
      { error: "Failed to get crossword configuration" },
      { status: 500 }
    );
  }
}

// API to validate crossword answers
export async function POST(req: NextRequest) {
  try {
    const { grid } = await req.json();

    if (!grid) {
      return NextResponse.json({ error: "No grid provided" }, { status: 400 });
    }

    // Track which cells have been counted to avoid double-counting overlapping cells
    const gridSize = 8; // Based on the crossword size
    const countedCells = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(false));

    let correct = 0;
    let total = 0;

    // Check across words
    CROSSWORD_DATA.across.forEach((word) => {
      for (let i = 0; i < word.length; i++) {
        const row = word.row;
        const col = word.col + i;

        // Skip if this cell has already been counted
        if (countedCells[row][col]) continue;

        const cell = grid[row][col];
        const expected = word.answer[i];
        const isCorrect = cell === expected;

        countedCells[row][col] = true;
        total++;
        if (isCorrect) correct++;
      }
    });

    // Check down words
    CROSSWORD_DATA.down.forEach((word) => {
      for (let i = 0; i < word.length; i++) {
        const row = word.row + i;
        const col = word.col;

        // Skip if this cell has already been counted
        if (countedCells[row][col]) continue;

        const cell = grid[row][col];
        const expected = word.answer[i];
        const isCorrect = cell === expected;

        countedCells[row][col] = true;
        total++;
        if (isCorrect) correct++;
      }
    });

    // Check if crossword is complete (all cells correct)
    const isComplete = correct === total;

    return NextResponse.json({
      correct,
      total,
      isComplete,
    });
  } catch (error) {
    console.error("Error in validate API:", error);
    return NextResponse.json(
      { error: "Failed to validate crossword" },
      { status: 500 }
    );
  }
}
