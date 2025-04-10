"use client";

type CrosswordGridDisplayProps = {
  grid: string[][];
  crosswordData: {
    rows: number;
    cols: number;
    across: {
      number: number;
      clue: string;
      answer: string;
      row: number;
      col: number;
      length: number;
    }[];
    down: {
      number: number;
      clue: string;
      answer: string;
      row: number;
      col: number;
      length: number;
    }[];
  };
  selectedCell: { row: number; col: number } | null;
  direction: "across" | "down";
  isCellBlack: (row: number, col: number) => boolean;
  getCellNumber: (row: number, col: number) => number | null;
  handleCellClick: (row: number, col: number) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
};

export function CrosswordGridDisplay({
  grid,
  crosswordData,
  selectedCell,
  direction,
  isCellBlack,
  getCellNumber,
  handleCellClick,
  handleKeyDown,
}: Readonly<CrosswordGridDisplayProps>) {
  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="grid grid-cols-8 gap-1 w-full max-w-md"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {Array(crosswordData.rows)
          .fill(null)
          .map((_, rowIndex) =>
            Array(crosswordData.cols)
              .fill(null)
              .map((_, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`
                  h-12 w-12 p-0 relative border 
                  ${
                    isCellBlack(rowIndex, colIndex)
                      ? "bg-gray-900 border-gray-900"
                      : "bg-white border-gray-400 cursor-pointer"
                  }
                  ${
                    selectedCell?.row === rowIndex &&
                    selectedCell?.col === colIndex
                      ? "border-3 border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                      : ""
                  }
                  ${
                    selectedCell &&
                    ((direction === "across" &&
                      selectedCell.row === rowIndex &&
                      !isCellBlack(rowIndex, colIndex)) ||
                      (direction === "down" &&
                        selectedCell.col === colIndex &&
                        !isCellBlack(rowIndex, colIndex)))
                      ? "bg-cyan-100"
                      : ""
                  }
                `}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {!isCellBlack(rowIndex, colIndex) && (
                    <>
                      {getCellNumber(rowIndex, colIndex) && (
                        <span className="absolute top-0 left-0.5 text-xs text-gray-700">
                          {getCellNumber(rowIndex, colIndex)}
                        </span>
                      )}
                      <span className="flex items-center justify-center h-full text-xl text-black font-bold">
                        {grid[rowIndex][colIndex]}
                      </span>
                    </>
                  )}
                </div>
              ))
          )}
      </div>
    </div>
  );
}
