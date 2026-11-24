import React from 'react';
import { DEVELOPER, PATHS } from '../constants.ts';
import { common } from '../copy/common.ts';
import { useI18n } from '../i18n.tsx';
import { PlayButton } from './PlayButton.tsx';

export const Wordmark: React.FC = () => (
  <span className="wordmark">
    emoji<em>quiz</em>
  </span>
);

const LangSwitch: React.FC = () => {
  const { lang, setLang } = useI18n();
  const c = common[lang];
  return (
    <div className="lang" role="group" aria-label={c.langGroup}>
      <button type="button" aria-pressed={lang === 'en'} lang="en" onClick={() => setLang('en')}>
        EN
      </button>
      <button type="button" aria-pressed={lang === 'fr'} lang="fr" onClick={() => setLang('fr')}>
        FR
      </button>
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  current?: 'support';
}

export const Layout: React.FC<LayoutProps> = ({ children, home = false, current }) => {
  const { lang } = useI18n();
  const c = common[lang];
  const anchor = (hash: string) => (home ? hash : `${PATHS.home}${hash}`);
  return (
    <>
      <a className="skip-link" href="#main">
        {c.skip}
      </a>
      <header className="site-head">
        <div className="wrap">
          <a className="brand" href={PATHS.home} aria-label={c.homeLabel}>
            <span className="brand-icon" aria-hidden="true">
              <span>🎬</span>
              <span>🍿</span>
              <span>👑</span>
              <span>🎤</span>
            </span>
            <Wordmark />
          </a>
          <nav className="nav" aria-label={c.mainNav}>
            <a href={anchor('#play')}>{c.navPlay}</a>
            <a href={anchor('#features')}>{c.navFeatures}</a>
            <a href={anchor('#faq')}>{c.navFaq}</a>
            <a href={PATHS.support} aria-current={current === 'support' ? 'page' : undefined}>
              {c.support}
            </a>
          </nav>
          <LangSwitch />
          <PlayButton compact />
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-foot">
        <div className="wrap">
          <div>
            <a className="brand" href={PATHS.home}>
              <Wordmark />
            </a>
            <p className="foot-note">
              © {new Date().getFullYear()} {DEVELOPER}. {c.rights}
              <br />
              {c.trademarks}
            </p>
          </div>
          <nav className="foot-links" aria-label={c.legalNav}>
            <a href={PATHS.privacy}>{c.privacy}</a>
            <a href={PATHS.terms}>{c.terms}</a>
            <a href={PATHS.deleteAccount}>{c.deleteAccount}</a>
            <a href={PATHS.support}>{c.support}</a>
          </nav>
        </div>
      </footer>
    </>
  );
};
