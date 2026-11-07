import React from 'react';
import { DEVELOPER, PATHS, SUPPORT_EMAIL } from '../constants.ts';
import { CopyButton } from './CopyButton.tsx';
import { DocHero } from './DocPage.tsx';
import { Layout } from './Layout.tsx';
import { Placeholder } from './Placeholder.tsx';

export const DeleteAccount: React.FC = () => (
  <Layout>
    <DocHero
      eyebrow="Account & data"
      title="Delete your Emoji Quiz account"
      lead="Ask us to delete your profile and its data at any time, with or without the app installed."
      meta={<span>Developer: {DEVELOPER}</span>}
    />

    <div className="wrap options">
      <section className="option">
        <div className="eyebrow">Step 1</div>
        <h2>Find your username</h2>
        <ol className="steps doc-steps">
          <li>
            <span>
              Open Emoji Quiz and tap the <strong>You</strong> tab.
            </span>
          </li>
          <li>
            <span>Your username is shown at the top of your profile.</span>
          </li>
        </ol>
        <p className="muted">
          Already uninstalled the app? Use the username you remember, it is all we need.
        </p>
      </section>

      <section className="option">
        <div className="eyebrow">Step 2</div>
        <h2>Email us</h2>
        <p>Send us your request. Your profile has no email attached, so the username identifies it.</p>
        <div className="copy-row">
          <code>
            <Placeholder>{SUPPORT_EMAIL}</Placeholder>
          </code>
          <CopyButton text={SUPPORT_EMAIL} />
        </div>
        <div className="template">
          {'Subject: Delete my Emoji Quiz account\nPlease delete my profile and its data.\nUsername: your_username'}
        </div>
        <p className="muted">
          We may ask a question only the profile owner can answer. We confirm by email and finish
          within 30 days.
        </p>
      </section>
    </div>

    <div className="wrap wide">
      <h2>What gets deleted, and what we keep</h2>
      <div className="two-col">
        <div>
          <h3>Deleted within 30 days</h3>
          <ul>
            <li>Profile: username, avatar, secret code</li>
            <li>Progress: XP, level, streak, badges, coins</li>
            <li>Your leaderboard entries</li>
            <li>Notification settings and push token</li>
          </ul>
        </div>
        <div>
          <h3>Kept, and why</h3>
          <ul>
            <li>
              <strong>Anonymous statistics</strong> that no longer identify you
            </li>
            <li>
              <strong>Backups</strong>: overwritten within 30 days
            </li>
            <li>
              <strong>Crash reports</strong>: expire on their own after 90 days
            </li>
          </ul>
        </div>
      </div>
      <p className="doc-note">
        Deleted progress and coins can&apos;t be restored. Uninstalling the app does not delete your
        profile. Want to keep your profile but change something? <a href={PATHS.support}>Contact support</a>.
      </p>
    </div>
  </Layout>
);
