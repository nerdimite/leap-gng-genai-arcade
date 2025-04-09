"use client";

type CrosswordCluesProps = {
  crosswordData: {
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
};

export function CrosswordClues({ crosswordData }: CrosswordCluesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-xl font-bold text-cyan-300 mb-2">Across</h3>
        <ul className="space-y-1">
          {crosswordData.across.map((clue) => (
            <li key={`across-${clue.number}`} className="text-gray-200">
              <span className="font-bold mr-2">{clue.number}.</span>
              {clue.clue}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-cyan-300 mb-2">Down</h3>
        <ul className="space-y-1">
          {crosswordData.down.map((clue) => (
            <li key={`down-${clue.number}`} className="text-gray-200">
              <span className="font-bold mr-2">{clue.number}.</span>
              {clue.clue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
