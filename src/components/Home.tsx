import React from 'react';
import { PATHS } from '../constants.ts';
import categoriesImg from '../screenshots/categories.webp';
import homeImg from '../screenshots/home.webp';
import leaderboardImg from '../screenshots/leaderboard.webp';
import profileImg from '../screenshots/profile.webp';
import puzzleDarkImg from '../screenshots/puzzle-dark.webp';
import puzzleImg from '../screenshots/puzzle.webp';
import resultImg from '../screenshots/result.webp';
import streakImg from '../screenshots/streak.webp';
import { Layout } from './Layout.tsx';
import { PlayButton } from './PlayButton.tsx';
import { Quiz } from './Quiz.tsx';

const STICKERS = [
  { emoji: '🍿', css: { top: '2%', left: '4%', rotate: '-9deg' } },
  { emoji: '🎬', css: { top: '18%', right: '2%', rotate: '11deg' } },
  { emoji: '🎤', css: { bottom: '20%', left: 0, rotate: '6deg' } },
  { emoji: '📚', css: { bottom: '4%', right: '8%', rotate: '-6deg' } },
];

const FACTS = ['650+ puzzles', '4 categories', 'New challenge every day', 'Light & dark mode'];

const FEATURES = [
  {
    tag: 'Daily challenge',
    color: 'var(--lilac)',
    title: 'One featured puzzle every day',
    text: 'A new featured puzzle every day with a countdown. Solve it to earn XP and keep your streak alive.',
    img: homeImg,
    alt: "Home screen with today's challenge",
  },
  {
    tag: 'Streaks',
    color: 'var(--sun)',
    title: "Don't break the chain",
    text: 'Play every day to grow your streak, and hit milestones for bonus XP.',
    img: streakImg,
    alt: 'Streak calendar showing a 26-day streak',
  },
  {
    tag: 'Badges & levels',
    color: 'var(--mint)',
    title: "Level up to Director's Cut",
    text: 'Earn XP with every solve, level up and collect badges, from Week Warrior to Flawless.',
    img: resultImg,
    alt: 'Result screen: The Lion King solved, Flawless badge unlocked',
  },
  {
    tag: 'Leaderboards',
    color: 'var(--coral)',
    title: 'Climb the big board',
    text: 'Weekly and all-time leaderboards show how you stack up against other players.',
    img: leaderboardImg,
    alt: 'Weekly leaderboard podium',
  },
];

const CATEGORIES = [
  { emoji: '🎬', count: 145, label: 'Movies', color: '#F4A285' },
  { emoji: '📺', count: 178, label: 'TV shows', color: '#9FDEC9' },
  { emoji: '🎵', count: 178, label: 'Music', color: '#F6DA86' },
  { emoji: '📚', count: 155, label: 'Books', color: '#C6B6EC' },
];

const SCREENS = [
  { img: homeImg, alt: 'Home screen', title: 'Today', text: 'Your level, streak and daily challenge' },
  { img: puzzleImg, alt: 'Puzzle screen', title: 'The puzzle', text: 'Spell it with letter tiles' },
  { img: categoriesImg, alt: 'Categories screen', title: 'Browse', text: 'Movies, TV, music, books' },
  { img: profileImg, alt: 'Profile with badges', title: 'Your profile', text: 'Stats and trophy case' },
  { img: puzzleDarkImg, alt: 'Puzzle screen in dark mode', title: 'Dark mode', text: 'For late-night sessions' },
];

export const Home: React.FC = () => (
  <Layout home>
    <section className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow">Free on Android</div>
          <h1>
            Guess the <em>flick</em> from the emojis.
          </h1>
          <p className="lead">
            Four or five emojis, one title. Crack movies, TV shows, songs and books, earn XP, and
            keep your daily streak burning.
          </p>
          <div className="hero-actions">
            <PlayButton />
            <a className="btn btn-ghost" href="#play">
              Try a puzzle first
            </a>
          </div>
          <ul className="hero-facts">
            {FACTS.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
        <div className="hero-visual">
          {STICKERS.map((s) => (
            <span key={s.emoji} className="sticker" style={s.css} aria-hidden="true">
              {s.emoji}
            </span>
          ))}
          <div className="phone tilt">
            <img
              src={puzzleImg}
              alt="Emoji Quiz puzzle screen: lion and crown emojis with letter tiles spelling THE LION"
              width={340}
              height={720}
            />
          </div>
        </div>
      </div>
    </section>

    <section id="play" className="section">
      <div className="wrap">
        <Quiz />
      </div>
    </section>

    <section id="features" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Why people keep playing</div>
          <h2>A quick puzzle a day, and a reason to come back tomorrow.</h2>
        </div>
        <div className="features">
          {FEATURES.map((f) => (
            <div key={f.tag} className="feature">
              <div>
                <span className="tag" style={{ background: f.color }}>
                  {f.tag}
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
              <img className="shot" src={f.img} alt={f.alt} loading="lazy" width={340} height={720} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--flush">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Pick your poison</div>
          <h2>Four categories, 650+ puzzles.</h2>
        </div>
        <div className="cats">
          {CATEGORIES.map((c) => (
            <div key={c.label} className="cat" style={{ background: c.color }}>
              <div className="e" aria-hidden="true">
                {c.emoji}
              </div>
              <b>{c.count}</b>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Inside the app</div>
          <h2>Have a look around.</h2>
        </div>
        <div className="strip">
          {SCREENS.map((s) => (
            <figure key={s.title}>
              <div className="phone">
                <img src={s.img} alt={s.alt} loading="lazy" width={340} height={720} />
              </div>
              <figcaption>
                {s.title}
                <span>{s.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section id="faq" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">FAQ</div>
          <h2>Good questions.</h2>
        </div>
        <div className="faq">
          <details>
            <summary>Is Emoji Quiz free?</summary>
            <p>Yes. The game is free to download and play, and nothing in it is sold for real money.</p>
          </details>
          <details>
            <summary>Do I need an account?</summary>
            <p>
              No email or password needed. Pick a username and avatar and start playing. Your profile
              comes with a secret code: keep it, it lets you restore your progress on a new phone.
            </p>
          </details>
          <details>
            <summary>How does the daily challenge work?</summary>
            <p>
              Each day a new featured puzzle appears on the home screen with a countdown. Solve it
              to earn XP and keep your streak going.
            </p>
          </details>
          <details>
            <summary>What happens if I miss a day?</summary>
            <p>
              Your current streak resets, but your level, XP and badges stay. Turn on the daily
              reminder to get a nudge at the time you choose.
            </p>
          </details>
          <details>
            <summary>What are coins for?</summary>
            <p>
              Coins pay for hints when you&apos;re stuck: a letter, the category, the length and
              more. They have no cash value, and you can solve any puzzle without them.
            </p>
          </details>
          <details>
            <summary>I changed phone and lost my progress.</summary>
            <p>
              Restore your profile with your secret code from the welcome screen. Need a hand?{' '}
              <a href={PATHS.support}>Contact support</a>.
            </p>
          </details>
          <details>
            <summary>How do I delete my account?</summary>
            <p>
              Send us a request by email.{' '}
              <a href={PATHS.deleteAccount}>See how account deletion works</a>.
            </p>
          </details>
        </div>
      </div>
    </section>

    <section className="section section--flush-bottom">
      <div className="wrap">
        <div className="cta-band">
          <h2>Your streak starts today.</h2>
          <PlayButton />
        </div>
      </div>
    </section>
  </Layout>
);
