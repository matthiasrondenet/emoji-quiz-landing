import type { Lang } from './copy/types.ts';

// English screenshots live in src/screenshots/<name>.webp. A French version, if present, goes in
// src/screenshots/fr/<name>.webp and is picked up automatically; otherwise the English one is shown.
const files: Partial<Record<string, string>> = import.meta.glob<string>('./screenshots/**/*.webp', {
  eager: true,
  import: 'default',
});

export type ShotName =
  | 'categories'
  | 'home'
  | 'leaderboard'
  | 'profile'
  | 'puzzle-dark'
  | 'puzzle'
  | 'result'
  | 'streak';

export const shot = (name: ShotName, lang: Lang): string => {
  const localized = lang === 'en' ? undefined : files[`./screenshots/${lang}/${name}.webp`];
  return localized ?? files[`./screenshots/${name}.webp`] ?? '';
};
