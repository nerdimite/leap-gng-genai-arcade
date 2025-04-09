"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CrosswordGridDisplay } from "./CrosswordGridDisplay";
import { CrosswordClues } from "./CrosswordClues";
import { Timer } from "@/components/Timer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useTeam } from "@/contexts/TeamContext";

type CrosswordGridProps = {
  onComplete: (score: number) => void;
};

// Define types that match what's expected by the child components
interface CrosswordWord {
  number: number;
  clue: string;
  answer: string; // Required by the display components but only used for props passing
  row: number;
  col: number;
  length: number;
}

interface CrosswordDataType {
  size: number;
  across: CrosswordWord[];
  down: CrosswordWord[];
}

export function CrosswordGrid({ onComplete }: CrosswordGridProps) {
  const { team } = useTeam();
  const [crosswordData, setCrosswordData] = useState<CrosswordDataType>({
    size: 8,
    across: [],
    down: [],
  });
  const [grid, setGrid] = useState<string[][]>([]);
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
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [gameTime, setGameTime] = useState<number>(0);

  // Fetch crossword data on mount
  useEffect(() => {
    const fetchCrosswordData = async () => {
      try {
        const response = await fetch("/api/crossword-game/validate");
        const data = await response.json();

        // Transform the API data to include dummy answer property
        const transformedData: CrosswordDataType = {
          size: 8,
          across: data.across.map(
            (word: {
              number: number;
              clue: string;
              row: number;
              col: number;
              length: number;
            }) => ({
              ...word,
              answer: new Array(word.length).fill("").join(""), // Empty string with the correct length
            })
          ),
          down: data.down.map(
            (word: {
              number: number;
              clue: string;
              row: number;
              col: number;
              length: number;
            }) => ({
              ...word,
              answer: new Array(word.length).fill("").join(""),
            })
          ),
        };

        setCrosswordData(transformedData);

        // Initialize the grid based on the crossword size
        setGrid(
          Array(8)
            .fill(null)
            .map(() => Array(8).fill(""))
        );
      } catch (error) {
        console.error("Error fetching crossword data:", error);
      }
    };

    fetchCrosswordData();
  }, []);

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

  // Check answers using the API
  const checkProgress = async () => {
    try {
      // Use the timer's tracked time instead of calculating it
      const timeTaken = gameTime;

      // Stop the timer when checking answers
      setIsTimerRunning(false);

      // Call validate API
      const response = await fetch("/api/crossword-game/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grid,
        }),
      });

      const result = await response.json();

      // Record game state if team is available and puzzle is complete
      if (team && result.isComplete) {
        await recordGameState(timeTaken, result.isComplete);

        // Fetch score from the scoring API
        const scoreResponse = await fetch(
          `/api/crossword-game/score?teamName=${encodeURIComponent(team.name)}`
        );
        const scoreResult = await scoreResponse.json();

        // Pass the timeScore from the new scoring API to the completion handler
        onComplete(scoreResult.gameResults[0]?.timeScore || 0);
      } else {
        // Show score dialog and resume timer if not complete
        setScoreDialog({
          open: true,
          correct: result.correct,
          total: result.total,
          score: Math.round((result.correct / result.total) * 100), // Only for progress display
        });
        setIsTimerRunning(true);
      }
    } catch (error) {
      console.error("Error checking crossword:", error);
    }
  };

  // Record game state
  const recordGameState = async (timeTaken: number, isCorrect: boolean) => {
    try {
      await fetch("/api/crossword-game/record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamName: team?.name,
          timeTaken,
          isCorrect,
        }),
      });
    } catch (error) {
      console.error("Failed to record game state:", error);
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
        <div className="flex justify-between items-center">
          <div className="text-lg text-cyan-300 font-bold">
            AI Crossword Challenge
          </div>
          <Timer
            isRunning={isTimerRunning}
            initialTime={0}
            onTimeChange={setGameTime}
            className="text-white"
          />
        </div>

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
          onOpenChange={(open) => {
            setScoreDialog((prev) => ({ ...prev, open }));
            // Resume the timer when dialog is closed
            if (!open) {
              setIsTimerRunning(true);
            }
          }}
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
