export type Lang = 'en' | 'fr';

export type Localized<T> = Record<Lang, T>;
