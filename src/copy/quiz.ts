import type { Localized } from './types.ts';

export type CategoryKey = 'movie' | 'tv' | 'music' | 'book';

export interface Puzzle {
  emojis: string;
  category: CategoryKey;
  options: string[];
  /** Index of the right option. */
  answer: number;
}

interface QuizCopy {
  eyebrow: string;
  title: string;
  text: string;
  solved: (n: number) => string;
  inARow: (n: number) => string;
  puzzleOf: (n: number, total: number) => string;
  emojiClue: string;
  nailedIt: string;
  itWas: (answer: string) => string;
  playAgain: string;
  next: string;
  categories: Record<CategoryKey, string>;
  puzzles: Puzzle[];
}

export const quiz: Localized<QuizCopy> = {
  en: {
    eyebrow: 'Try one right here',
    title: 'No download needed for this one.',
    text: 'Read the emojis, pick the title. In the app you spell it out with letter tiles against the clock, with hints when you’re stuck.',
    solved: (n) => `${n} solved`,
    inARow: (n) => `🔥 ${n} in a row`,
    puzzleOf: (n, total) => `Puzzle ${n} / ${total}`,
    emojiClue: 'Emoji clue',
    nailedIt: 'Nailed it!',
    itWas: (answer) => `It was ${answer}.`,
    playAgain: 'Play again ↺',
    next: 'Next puzzle →',
    categories: { movie: 'Movie', tv: 'TV', music: 'Music', book: 'Book' },
    puzzles: [
      { emojis: '🦁👑', category: 'movie', options: ['Madagascar', 'The Lion King', 'Robin Hood', 'Zootopia'], answer: 1 },
      { emojis: '🚢🧊💔', category: 'movie', options: ['Titanic', 'Frozen', 'Life of Pi', 'The Abyss'], answer: 0 },
      { emojis: '🧽🍍🌊', category: 'tv', options: ['Finding Nemo', 'Moana', 'SpongeBob', 'Aquaman'], answer: 2 },
      { emojis: '👑🎤🎸', category: 'music', options: ['Prince', 'Queen', 'Madonna', 'ABBA'], answer: 1 },
      { emojis: '🐺🏰❄️🐉', category: 'tv', options: ['The Witcher', 'Vikings', 'Frozen', 'Game of Thrones'], answer: 3 },
      { emojis: '👧🐰⏰🎩', category: 'book', options: ['Peter Pan', 'Matilda', 'Alice in Wonderland', 'Coraline'], answer: 2 },
      { emojis: '🦖🏝️🚙', category: 'movie', options: ['Jurassic Park', 'King Kong', 'Jumanji', 'Godzilla'], answer: 0 },
      { emojis: '🧙‍♂️💍🌋', category: 'movie', options: ['Harry Potter', 'The Lord of the Rings', 'Narnia', 'Willow'], answer: 1 },
    ],
  },
  fr: {
    eyebrow: 'Essaie-en une ici',
    title: 'Pas besoin de télécharger pour celle-ci.',
    text: 'Lis les emojis, choisis le titre. Dans l’app, tu l’épelles avec des tuiles de lettres, contre la montre, avec des indices si tu bloques.',
    solved: (n) => `${n} ${n > 1 ? 'résolues' : 'résolue'}`,
    inARow: (n) => `🔥 ${n} d’affilée`,
    puzzleOf: (n, total) => `Énigme ${n} / ${total}`,
    emojiClue: 'Indice en emojis',
    nailedIt: 'Bien joué !',
    itWas: (answer) => `C’était ${answer}.`,
    playAgain: 'Rejouer ↺',
    next: 'Énigme suivante →',
    categories: { movie: 'Film', tv: 'Série', music: 'Musique', book: 'Livre' },
    puzzles: [
      { emojis: '🦁👑', category: 'movie', options: ['Madagascar', 'Le Roi Lion', 'Robin des Bois', 'Zootopie'], answer: 1 },
      { emojis: '🚢🧊💔', category: 'movie', options: ['Titanic', 'La Reine des neiges', 'L’Odyssée de Pi', 'Abyss'], answer: 0 },
      { emojis: '🧽🍍🌊', category: 'tv', options: ['Le Monde de Nemo', 'Vaiana', 'Bob l’éponge', 'Aquaman'], answer: 2 },
      { emojis: '👑🎤🎸', category: 'music', options: ['Prince', 'Queen', 'Madonna', 'ABBA'], answer: 1 },
      { emojis: '🐺🏰❄️🐉', category: 'tv', options: ['The Witcher', 'Vikings', 'La Reine des neiges', 'Game of Thrones'], answer: 3 },
      { emojis: '👧🐰⏰🎩', category: 'book', options: ['Peter Pan', 'Matilda', 'Alice au pays des merveilles', 'Coraline'], answer: 2 },
      { emojis: '🦖🏝️🚙', category: 'movie', options: ['Jurassic Park', 'King Kong', 'Jumanji', 'Godzilla'], answer: 0 },
      { emojis: '🧙‍♂️💍🌋', category: 'movie', options: ['Harry Potter', 'Le Seigneur des anneaux', 'Narnia', 'Willow'], answer: 1 },
    ],
  },
};
