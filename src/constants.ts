export const DEVELOPER = 'YASD';
export const BASE = import.meta.env.BASE_URL;
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=io.yasd.emojiquiz';

// Contact details used across the legal pages. Values written as '[LIKE THIS]' render highlighted.
export const SUPPORT_EMAIL = 'hello@yasd.io';
export const LAST_UPDATED = 'November 6, 2026';
export const HOSTING_PROVIDER = 'Railway';

export const PATHS = {
  home: BASE,
  privacy: `${BASE}privacy/`,
  terms: `${BASE}terms/`,
  deleteAccount: `${BASE}delete-account/`,
  support: `${BASE}support/`,
} as const;
