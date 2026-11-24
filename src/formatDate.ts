import type { Lang } from './copy/types.ts';

// Formats an ISO date (2026-11-06) for the language. Anything else, such as a '[PLACEHOLDER]', is returned as is.
export const formatDate = (value: string, lang: Lang): string => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(value));
};
