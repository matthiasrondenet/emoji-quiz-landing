import React from 'react';
import { DEVELOPER, LAST_UPDATED, PATHS } from '../constants.ts';
import { DocPage, type TocItem } from './DocPage.tsx';
import { Placeholder } from './Placeholder.tsx';

const TOC: TocItem[] = [
  { id: 'who', label: 'Who can play' },
  { id: 'account', label: 'Your profile and coins' },
  { id: 'fair', label: 'Fair play' },
  { id: 'content', label: 'Puzzle content' },
  { id: 'end', label: 'Ending your profile' },
  { id: 'law', label: 'Law and disputes' },
];

export const Terms: React.FC = () => (
  <DocPage
    eyebrow="Legal"
    title="Terms of use"
    lead="The rules for playing Emoji Quiz and keeping the leaderboards fair."
    toc={TOC}
    meta={
      <span>
        Last updated: <Placeholder>{LAST_UPDATED}</Placeholder>
      </span>
    }
  >
    <p>
      These terms are a contract between you and {DEVELOPER}. By creating a profile or playing, you
      accept them.
    </p>

    <h2 id="who">Who can play</h2>
    <p>
      You must be at least 13. If you are under 18, a parent or guardian must agree to these terms
      for you. Usernames must not impersonate anyone or be offensive.
    </p>

    <h2 id="account">Your profile and coins</h2>
    <ul>
      <li>
        Your profile is protected by a secret code. Keep it private: anyone who has it can restore
        your profile, and we cannot recover it for you if you lose it.
      </li>
      <li>
        Coins are an in-game currency used for hints. They have no cash value and cannot be
        exchanged, transferred or sold.
      </li>
      <li>The game is free to play. Nothing in the app is sold for real money.</li>
    </ul>

    <h2 id="fair">Fair play</h2>
    <p>
      No cheating, bots, bug exploits, leaderboard manipulation or harassment. We may reset scores,
      remove rewards obtained unfairly, or ban accounts.
    </p>

    <h2 id="content">Puzzle content</h2>
    <p>
      Puzzles refer to films, series, songs, artists and books for trivia only. Those titles belong
      to their owners, who do not sponsor or endorse Emoji Quiz. The app&apos;s design, code and
      puzzle selection belong to {DEVELOPER}.
    </p>

    <h2 id="end">Ending your profile</h2>
    <p>
      You can <a href={PATHS.deleteAccount}>delete your account</a> at any time. We may close a
      profile that seriously or repeatedly breaks these terms. If we stop offering the game, we give
      at least 30 days&apos; notice in the app.
    </p>

    <h2 id="law">Law and disputes</h2>
    <p>
      These terms are governed by French law; EU residents keep the mandatory protections of their
      own country. Please contact us first so we can try to sort things out.
    </p>
  </DocPage>
);
