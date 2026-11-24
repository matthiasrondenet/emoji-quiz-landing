import React, { useEffect, useRef, useState } from 'react';
import { quiz } from '../copy/quiz.ts';
import { useI18n } from '../i18n.tsx';

export const Quiz: React.FC = () => {
  const { lang } = useI18n();
  const t = quiz[lang];
  const [index, setIndex] = useState(0);
  // Index of the chosen option, so the state survives a language switch.
  const [picked, setPicked] = useState<number | null>(null);
  const [solved, setSolved] = useState(0);
  const [run, setRun] = useState(0);
  const nextRef = useRef<HTMLButtonElement>(null);

  const puzzle = t.puzzles[index];
  const answered = picked !== null;
  const last = index === t.puzzles.length - 1;

  useEffect(() => {
    if (answered) nextRef.current?.focus({ preventScroll: true });
  }, [answered]);

  const pick = (option: number) => {
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

  const stateOf = (option: number) => {
    if (!answered) return '';
    if (option === puzzle.answer) return ' right';
    return option === picked ? ' wrong' : '';
  };

  return (
    <div className="try">
      <div>
        <div className="eyebrow">{t.eyebrow}</div>
        <h2>{t.title}</h2>
        <p>{t.text}</p>
        <div className="score" aria-live="polite">
          <span>{t.solved(solved)}</span>
          <span>{t.inARow(run)}</span>
        </div>
      </div>
      <div className="board">
        <div className="board-top">
          <span>{t.puzzleOf(index + 1, t.puzzles.length)}</span>
          <span className="board-cat">{t.categories[puzzle.category]}</span>
        </div>
        <div className="board-emoji" aria-label={t.emojiClue}>
          {puzzle.emojis}
        </div>
        <div className="choices">
          {puzzle.options.map((option, i) => (
            <button
              key={option}
              type="button"
              className={`choice${stateOf(i)}`}
              disabled={answered}
              onClick={() => pick(i)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="board-foot">
          <span className="verdict" aria-live="polite">
            {answered ? (picked === puzzle.answer ? t.nailedIt : t.itWas(puzzle.options[puzzle.answer])) : ''}
          </span>
          {answered && (
            <button ref={nextRef} type="button" className="btn btn-coral next" onClick={next}>
              {last ? t.playAgain : t.next}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
