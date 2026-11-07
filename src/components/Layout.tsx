import React from 'react';
import { DEVELOPER, PATHS } from '../constants.ts';
import { PlayButton } from './PlayButton.tsx';

export const Wordmark: React.FC = () => (
  <span className="wordmark">
    emoji<em>quiz</em>
  </span>
);

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  current?: 'support';
}

export const Layout: React.FC<LayoutProps> = ({ children, home = false, current }) => {
  const anchor = (hash: string) => (home ? hash : `${PATHS.home}${hash}`);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-head">
        <div className="wrap">
          <a className="brand" href={PATHS.home} aria-label="Emoji Quiz home">
            <span className="brand-icon" aria-hidden="true">
              <span>🎬</span>
              <span>🍿</span>
              <span>👑</span>
              <span>🎤</span>
            </span>
            <Wordmark />
          </a>
          <nav className="nav" aria-label="Main">
            <a href={anchor('#play')}>Try a puzzle</a>
            <a href={anchor('#features')}>Features</a>
            <a href={anchor('#faq')}>FAQ</a>
            <a href={PATHS.support} aria-current={current === 'support' ? 'page' : undefined}>
              Support
            </a>
          </nav>
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
              © {new Date().getFullYear()} {DEVELOPER}. All rights reserved.
              <br />
              Movie, TV, music and book titles belong to their owners.
            </p>
          </div>
          <nav className="foot-links" aria-label="Legal">
            <a href={PATHS.privacy}>Privacy policy</a>
            <a href={PATHS.terms}>Terms of use</a>
            <a href={PATHS.deleteAccount}>Delete your account</a>
            <a href={PATHS.support}>Support</a>
          </nav>
        </div>
      </footer>
    </>
  );
};
