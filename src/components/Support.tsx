import React from 'react';
import { PATHS, SUPPORT_EMAIL } from '../constants.ts';
import { CopyButton } from './CopyButton.tsx';
import { Layout } from './Layout.tsx';
import { Placeholder } from './Placeholder.tsx';

const CARDS = [
  {
    tag: 'Progress & streaks',
    color: '#9FDEC9',
    items: [
      {
        q: 'I lost my streak',
        a: "Streaks follow your phone's local day. If it reset after you played, email us the date and we'll check.",
      },
      {
        q: 'New phone, no progress',
        a: 'On the welcome screen choose to restore your profile and enter your secret code. Find it beforehand in You › Profile.',
      },
    ],
  },
  {
    tag: 'Puzzles',
    color: '#C6B6EC',
    items: [
      {
        q: 'An answer looks wrong',
        a: 'Send us the emojis, the category and the answer you expected. We review every report.',
      },
      {
        q: 'I ran out of coins',
        a: 'Coins pay for hints. You can still solve every puzzle without them.',
      },
    ],
  },
  {
    tag: 'Account',
    color: '#F6DA86',
    items: [
      {
        q: 'Change my username or avatar',
        a: 'Open the You tab and tap Edit profile.',
      },
      {
        q: 'I lost my secret code',
        a: "We can't recover a lost code, and it is the only way to restore a profile on a new device. Keep it somewhere safe.",
      },
      { q: 'Delete my account', a: null },
    ],
  },
];

export const Support: React.FC = () => (
  <Layout current="support">
    <div className="support-hero">
      <div className="wrap">
        <div className="intro">
          <div className="eyebrow">Help &amp; support</div>
          <h1>Stuck on more than a puzzle?</h1>
          <p className="lead">
            Write to us and a real person will answer, usually within two business days.
          </p>
        </div>
        <div className="mail-card">
          <span className="eyebrow">Email us</span>
          <code>
            <Placeholder>{SUPPORT_EMAIL}</Placeholder>
          </code>
          <p>
            Include your username, phone model and Android version, and a screenshot if something
            looks wrong.
          </p>
          <CopyButton text={SUPPORT_EMAIL} className="btn btn-coral" />
        </div>
      </div>
    </div>

    <div className="wrap">
      <div className="help-grid">
        {CARDS.map((card) => (
          <section key={card.tag} className="help-card">
            <span className="tag" style={{ background: card.color }}>
              {card.tag}
            </span>
            {card.items.map((item) => (
              <React.Fragment key={item.q}>
                <h3>{item.q}</h3>
                <p>
                  {item.a ?? (
                    <>
                      See <a href={PATHS.deleteAccount}>how to delete your account</a>.
                    </>
                  )}
                </p>
              </React.Fragment>
            ))}
          </section>
        ))}
      </div>
    </div>
  </Layout>
);
