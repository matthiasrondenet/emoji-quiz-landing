import React, { useEffect, useRef, useState } from 'react';

interface Puzzle {
  emojis: string;
  category: string;
  answer: string;
  options: string[];
}

const PUZZLES: Puzzle[] = [
  { emojis: '🦁👑', category: 'Movie', answer: 'The Lion King', options: ['Madagascar', 'The Lion King', 'Robin Hood', 'Zootopia'] },
  { emojis: '🚢🧊💔', category: 'Movie', answer: 'Titanic', options: ['Titanic', 'Frozen', 'Life of Pi', 'The Abyss'] },
  { emojis: '🧽🍍🌊', category: 'TV', answer: 'SpongeBob', options: ['Finding Nemo', 'Moana', 'SpongeBob', 'Aquaman'] },
  { emojis: '👑🎤🎸', category: 'Music', answer: 'Queen', options: ['Prince', 'Queen', 'Madonna', 'ABBA'] },
  { emojis: '🐺🏰❄️🐉', category: 'TV', answer: 'Game of Thrones', options: ['The Witcher', 'Vikings', 'Frozen', 'Game of Thrones'] },
  { emojis: '👧🐰⏰🎩', category: 'Book', answer: 'Alice in Wonderland', options: ['Peter Pan', 'Matilda', 'Alice in Wonderland', 'Coraline'] },
  { emojis: '🦖🏝️🚙', category: 'Movie', answer: 'Jurassic Park', options: ['Jurassic Park', 'King Kong', 'Jumanji', 'Godzilla'] },
  { emojis: '🧙‍♂️💍🌋', category: 'Movie', answer: 'The Lord of the Rings', options: ['Harry Potter', 'The Lord of the Rings', 'Narnia', 'Willow'] },
];

export const Quiz: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [solved, setSolved] = useState(0);
  const [run, setRun] = useState(0);
  const nextRef = useRef<HTMLButtonElement>(null);

  const puzzle = PUZZLES[index];
  const answered = picked !== null;
  const last = index === PUZZLES.length - 1;

  useEffect(() => {
    if (answered) nextRef.current?.focus({ preventScroll: true });
  }, [answered]);

  const pick = (option: string) => {
    if (answered) return;
    setPicked(option);
    if (option === puzzle.answer) {
      setSolved((n) => n + 1);
      setRun((n) => n + 1);
    } else {
      setRun(0);
    }
  };

  const next = () => {
    if (last) {
      setIndex(0);
      setSolved(0);
      setRun(0);
    } else {
      setIndex(index + 1);
    }
    setPicked(null);
  };

  const stateOf = (option: string) => {
    if (!answered) return '';
    if (option === puzzle.answer) return ' right';
    return option === picked ? ' wrong' : '';
  };

  return (
    <div className="try">
      <div>
        <div className="eyebrow">Try one right here</div>
        <h2>No download needed for this one.</h2>
        <p>
          Read the emojis, pick the title. In the app you spell it out with letter tiles against the
          clock, with hints when you&apos;re stuck.
        </p>
        <div className="score" aria-live="polite">
          <span>{solved} solved</span>
          <span>🔥 {run} in a row</span>
        </div>
      </div>
      <div className="board">
        <div className="board-top">
          <span>
            Puzzle {index + 1} / {PUZZLES.length}
          </span>
          <span className="board-cat">{puzzle.category}</span>
        </div>
        <div className="board-emoji" aria-label="Emoji clue">
          {puzzle.emojis}
        </div>
        <div className="choices">
          {puzzle.options.map((option) => (
            <button
              key={option}
              type="button"
              className={`choice${stateOf(option)}`}
              disabled={answered}
              onClick={() => pick(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="board-foot">
          <span className="verdict" aria-live="polite">
            {answered ? (picked === puzzle.answer ? 'Nailed it!' : `It was ${puzzle.answer}.`) : ''}
          </span>
          {answered && (
            <button ref={nextRef} type="button" className="btn btn-coral next" onClick={next}>
              {last ? 'Play again ↺' : 'Next puzzle →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
