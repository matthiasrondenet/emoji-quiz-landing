import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Lang } from './copy/types.ts';

const STORAGE_KEY = 'emoji-quiz-landing-lang';

interface I18n {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18n | null>(null);

// French for any French browser language, English for everything else.
const detectLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'fr') return saved;
  } catch {
    // Storage can be blocked; fall through to the browser language.
  }
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not persisted; the choice still applies until the page is closed.
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useI18n = (): I18n => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
};
