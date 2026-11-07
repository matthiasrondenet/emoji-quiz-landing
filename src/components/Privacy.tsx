import React from 'react';
import { DEVELOPER, HOSTING_PROVIDER, LAST_UPDATED, PATHS, SUPPORT_EMAIL } from '../constants.ts';
import { DocPage, type TocItem } from './DocPage.tsx';
import { Placeholder } from './Placeholder.tsx';

const TOC: TocItem[] = [
  { id: 'who', label: 'Who we are' },
  { id: 'collect', label: 'What we collect' },
  { id: 'public', label: 'What other players see' },
  { id: 'providers', label: 'Service providers' },
  { id: 'retention', label: 'How long we keep data' },
  { id: 'rights', label: 'Your rights' },
  { id: 'children', label: 'Children' },
  { id: 'contact', label: 'Contact' },
];

const COLLECTED = [
  ['Profile', 'Username, avatar, secret recovery code', 'Create your profile and let you restore it on a new device', 'Contract'],
  ['Game activity', 'Puzzles answered, hints used, XP, level, streak, badges, coins', 'Run the game, award rewards and rank the leaderboards', 'Contract'],
  ['Notifications', 'Push token, reminder settings', 'Send the daily and streak reminders you turned on', 'Consent'],
  ['Diagnostics', 'Device model, Android and app version, crash logs', 'Fix bugs, keep the app stable', 'Legitimate interest'],
  ['Technical data', 'IP address', 'Protect the service from abuse (rate limiting)', 'Legitimate interest'],
];

export const Privacy: React.FC = () => (
  <DocPage
    eyebrow="Legal"
    title="Privacy policy"
    lead="What data Emoji Quiz collects, why, who we share it with, and how you stay in control."
    toc={TOC}
    meta={
      <>
        <span>
          Last updated: <Placeholder>{LAST_UPDATED}</Placeholder>
        </span>
        <span>Applies to the Emoji Quiz Android app and this website</span>
      </>
    }
  >
    <div className="summary-box">
      <h2>At a glance</h2>
      <p>This matches what we declare in the Google Play “Data safety” section.</p>
      <div className="glance">
        <div>
          <b>We collect</b>A username and avatar, your game progress, and crash diagnostics
        </div>
        <div>
          <b>We never ask</b>for your email, real name, phone number or location
        </div>
        <div>
          <b>We never sell</b>your data, and we show no third-party ads
        </div>
      </div>
      <p>Data is encrypted in transit (HTTPS/TLS).</p>
    </div>

    <h2 id="who">Who we are</h2>
    <p>
      Emoji Quiz is published by {DEVELOPER}. We are the data controller for personal data processed
      through the app and this website. You can reach us at{' '}
      <Placeholder>{SUPPORT_EMAIL}</Placeholder>.
    </p>

    <h2 id="collect">What we collect</h2>
    <p>
      There is no email or password sign-up. You pick a username and avatar, and the app gives you a
      secret code to restore your profile on another device.
    </p>
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Examples</th>
            <th>Why</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          {COLLECTED.map(([data, examples, why, basis]) => (
            <tr key={data}>
              <td>
                <strong>{data}</strong>
              </td>
              <td>{examples}</td>
              <td>{why}</td>
              <td>{basis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      We do not collect your name, email, precise location, contacts, photos, microphone audio or
      files.
    </p>

    <h2 id="public">What other players see</h2>
    <p>
      Your username, avatar, level, XP, badges and rank appear on the leaderboards. Nothing else from
      your profile is shown.
    </p>

    <h2 id="providers">Service providers</h2>
    <p>
      We share data only with providers that help us run the app, under contracts that require them
      to protect it:
    </p>
    <ul>
      <li>
        <strong>Google Play</strong>: distribution of the app
      </li>
      <li>
        <strong>{HOSTING_PROVIDER}</strong>: hosting of our servers and database
      </li>
      <li>
        <strong>Firebase Crashlytics</strong>: crash reporting
      </li>
      <li>
        <strong>Expo and Google Firebase</strong>: delivery of push notifications, if you enable
        reminders
      </li>
    </ul>
    <p>We do not sell personal data or share it with advertisers or data brokers.</p>

    <h2 id="retention">How long we keep data</h2>
    <ul>
      <li>
        <strong>Profile and game data:</strong> while your profile is active, deleted within 30 days
        after you ask us to delete it
      </li>
      <li>
        <strong>Crash reports:</strong> up to 90 days
      </li>
    </ul>

    <h2 id="rights">Your rights</h2>
    <p>
      Under the GDPR you can access, correct, delete or export your data, object to its use, and
      withdraw consent at any time. Write to us and we reply within one month. You can also complain
      to your data protection authority (in France, the CNIL: cnil.fr). To delete your profile, see{' '}
      <a href={PATHS.deleteAccount}>Delete your account</a>.
    </p>

    <h2 id="children">Children</h2>
    <p>
      Emoji Quiz is not directed at children under 13. In France, players under 15 need a
      parent&apos;s consent where processing relies on consent.
    </p>

    <h2 id="contact">Contact</h2>
    <p>
      {DEVELOPER}
      <br />
      <Placeholder>{SUPPORT_EMAIL}</Placeholder>
    </p>
  </DocPage>
);
