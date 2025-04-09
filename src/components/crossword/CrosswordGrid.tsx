"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CrosswordGridDisplay } from "./CrosswordGridDisplay";
import { CrosswordClues } from "./CrosswordClues";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type CrosswordGridProps = {
  onComplete: (score: number) => void;
};

// Sample crossword data based on the provided puzzle image
const crosswordData = {
  size: 8,
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

export function CrosswordGrid({ onComplete }: CrosswordGridProps) {
  const [grid, setGrid] = useState(
    Array(crosswordData.size)
      .fill(null)
      .map(() => Array(crosswordData.size).fill(""))
  );
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [direction, setDirection] = useState<"across" | "down">("across");
  const [scoreDialog, setScoreDialog] = useState({
    open: false,
    correct: 0,
    total: 0,
    score: 0,
  });

  // This would handle cell click in a real implementation
  const handleCellClick = (row: number, col: number) => {
    if (isCellBlack(row, col)) return;

    // Toggle direction if clicking the same cell
    if (selectedCell?.row === row && selectedCell?.col === col) {
      setDirection((prev) => (prev === "across" ? "down" : "across"));
    } else {
      setSelectedCell({ row, col });
    }
  };

  // Handle keyboard input
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!selectedCell) return;
    const { row, col } = selectedCell;

    // Handle letter keys
    if (e.key.match(/^[a-zA-Z]$/)) {
      const newGrid = [...grid];
      newGrid[row][col] = e.key.toUpperCase();
      setGrid(newGrid);

      // Move to the next cell based on direction
      moveToNextCell();
    }
    // Handle backspace/delete
    else if (e.key === "Backspace" || e.key === "Delete") {
      const newGrid = [...grid];
      newGrid[row][col] = "";
      setGrid(newGrid);

      // Move to the previous cell if backspace
      if (e.key === "Backspace") {
        moveToPrevCell();
      }
    }
    // Handle arrow keys
    else if (e.key.startsWith("Arrow")) {
      e.preventDefault();
      moveWithArrowKey(e.key);
    }
  };

  // Move to the next cell in the current direction
  const moveToNextCell = () => {
    if (!selectedCell) return;
    const { row, col } = selectedCell;

    if (direction === "across") {
      // Try to move right
      const nextCol = findNextValidCell(row, col, 0, 1);
      if (nextCol !== null) {
        setSelectedCell({ row, col: nextCol });
      }
    } else {
      // Try to move down
      const nextRow = findNextValidCell(row, col, 1, 0);
      if (nextRow !== null) {
        setSelectedCell({ row: nextRow, col });
      }
    }
  };

  // Move to the previous cell in the current direction
  const moveToPrevCell = () => {
    if (!selectedCell) return;
    const { row, col } = selectedCell;

    if (direction === "across") {
      // Try to move left
      const prevCol = findNextValidCell(row, col, 0, -1);
      if (prevCol !== null) {
        setSelectedCell({ row, col: prevCol });
      }
    } else {
      // Try to move up
      const prevRow = findNextValidCell(row, col, -1, 0);
      if (prevRow !== null) {
        setSelectedCell({ row: prevRow, col });
      }
    }
  };

  // Find the next valid cell in a direction (returns null if none found)
  const findNextValidCell = (
    row: number,
    col: number,
    rowDelta: number,
    colDelta: number
  ) => {
    let nextRow = row + rowDelta;
    let nextCol = col + colDelta;

    while (
      nextRow >= 0 &&
      nextRow < crosswordData.size &&
      nextCol >= 0 &&
      nextCol < crosswordData.size
    ) {
      if (!isCellBlack(nextRow, nextCol)) {
        return rowDelta !== 0 ? nextRow : nextCol;
      }
      nextRow += rowDelta;
      nextCol += colDelta;
    }

    return null;
  };

  // Handle arrow key navigation
  const moveWithArrowKey = (arrowKey: string) => {
    if (!selectedCell) return;
    const { row, col } = selectedCell;

    let nextRow = row;
    let nextCol = col;

    switch (arrowKey) {
      case "ArrowRight":
        nextCol = findNextValidCell(row, col, 0, 1) ?? col;
        break;
      case "ArrowLeft":
        nextCol = findNextValidCell(row, col, 0, -1) ?? col;
        break;
      case "ArrowDown":
        nextRow = findNextValidCell(row, col, 1, 0) ?? row;
        break;
      case "ArrowUp":
        nextRow = findNextValidCell(row, col, -1, 0) ?? row;
        break;
    }

    if (nextRow !== row || nextCol !== col) {
      setSelectedCell({ row: nextRow, col: nextCol });
      // Set direction based on arrow key
      if (arrowKey === "ArrowRight" || arrowKey === "ArrowLeft") {
        setDirection("across");
      } else {
        setDirection("down");
      }
    }
  };

  // Check answers against the solution
  const checkProgress = () => {
    // Create a matrix to track which cells have been counted
    const countedCells = Array(crosswordData.size)
      .fill(null)
      .map(() => Array(crosswordData.size).fill(false));

    let correct = 0;
    let total = 0;

    // Check across words
    crosswordData.across.forEach((word) => {
      for (let i = 0; i < word.length; i++) {
        const cell = grid[word.row][word.col + i];
        const expected = word.answer[i];
        const isCorrect = cell === expected;

        // Mark this cell as counted
        if (!countedCells[word.row][word.col + i]) {
          countedCells[word.row][word.col + i] = true;
          total++;
          if (isCorrect) correct++;
        }
      }
    });

    // Check down words
    crosswordData.down.forEach((word) => {
      for (let i = 0; i < word.length; i++) {
        const cell = grid[word.row + i][word.col];
        const expected = word.answer[i];
        const isCorrect = cell === expected;

        // Only count cells that haven't been counted yet
        if (!countedCells[word.row + i][word.col]) {
          countedCells[word.row + i][word.col] = true;
          total++;
          if (isCorrect) correct++;
        }
      }
    });

    const score = Math.round((correct / total) * 100);

    // If everything is correct, complete the puzzle
    if (correct === total && correct === 20) {
      // Ensure we have exactly 20 letters
      onComplete(100);
    } else {
      // Show score in dialog instead of alert
      setScoreDialog({
        open: true,
        correct,
        total,
        score,
      });
    }
  };

  // Check if a cell should be black (not part of any word)
  const isCellBlack = (row: number, col: number) => {
    // Check if this cell is part of any word
    const isPartOfAcross = crosswordData.across.some((word) => {
      const endCol = word.col + word.length - 1;
      return row === word.row && col >= word.col && col <= endCol;
    });

    const isPartOfDown = crosswordData.down.some((word) => {
      const endRow = word.row + word.length - 1;
      return col === word.col && row >= word.row && row <= endRow;
    });

    return !isPartOfAcross && !isPartOfDown;
  };

  // Get the number that should be displayed in a cell
  const getCellNumber = (row: number, col: number) => {
    const acrossWord = crosswordData.across.find(
      (word) => word.row === row && word.col === col
    );
    const downWord = crosswordData.down.find(
      (word) => word.col === col && word.row === row
    );

    if (acrossWord) return acrossWord.number;
    if (downWord) return downWord.number;
    return null;
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-2 border-cyan-500 text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-cyan-300">
          AI Crossword Puzzle
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <CrosswordGridDisplay
          grid={grid}
          crosswordData={crosswordData}
          selectedCell={selectedCell}
          direction={direction}
          isCellBlack={isCellBlack}
          getCellNumber={getCellNumber}
          handleCellClick={handleCellClick}
          handleKeyDown={handleKeyDown}
        />

        <div className="text-center text-sm text-gray-400">
          <p>
            Click a square and type to enter letters. Click again to change
            direction.
          </p>
          <p>Use arrow keys to navigate between squares.</p>
        </div>

        <CrosswordClues crosswordData={crosswordData} />

        {/* Buttons */}
        <div className="flex justify-center pt-4">
          <Button
            onClick={checkProgress}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold"
          >
            Check Answers
          </Button>
        </div>

        {/* Score Dialog */}
        <AlertDialog
          open={scoreDialog.open}
          onOpenChange={(open) => setScoreDialog((prev) => ({ ...prev, open }))}
        >
          <AlertDialogContent className="bg-gray-800 border-cyan-500 text-white">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-cyan-300">
                Your Progress
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-200">
                You&apos;ve filled in {scoreDialog.correct} out of{" "}
                {scoreDialog.total} letters correctly.
                <span className="block mt-2 text-xl font-bold text-cyan-300">
                  Score: {scoreDialog.score}%
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                Keep Going!
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}
