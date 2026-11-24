import React from 'react';
import { common } from '../copy/common.ts';
import { home } from '../copy/home.ts';
import { useI18n } from '../i18n.tsx';
import { shot, type ShotName } from '../shots.ts';
import { useDocumentMeta } from '../useDocumentMeta.ts';
import { Layout } from './Layout.tsx';
import { PlayButton } from './PlayButton.tsx';
import { Quiz } from './Quiz.tsx';
import { Rich } from './Rich.tsx';

const STICKERS = [
  { emoji: '🍿', css: { top: '2%', left: '4%', rotate: '-9deg' } },
  { emoji: '🎬', css: { top: '18%', right: '2%', rotate: '11deg' } },
  { emoji: '🎤', css: { bottom: '20%', left: 0, rotate: '6deg' } },
  { emoji: '📚', css: { bottom: '4%', right: '8%', rotate: '-6deg' } },
];

const FEATURE_STYLE: { color: string; img: ShotName }[] = [
  { color: 'var(--lilac)', img: 'home' },
  { color: 'var(--sun)', img: 'streak' },
  { color: 'var(--mint)', img: 'result' },
  { color: 'var(--coral)', img: 'leaderboard' },
];

const CATEGORY_STYLE = [
  { emoji: '🎬', count: 145, color: '#F4A285' },
  { emoji: '📺', count: 178, color: '#9FDEC9' },
  { emoji: '🎵', count: 178, color: '#F6DA86' },
  { emoji: '📚', count: 155, color: '#C6B6EC' },
];

const SCREEN_IMAGES: ShotName[] = ['home', 'puzzle', 'categories', 'profile', 'puzzle-dark'];

export const Home: React.FC = () => {
  const { lang } = useI18n();
  const t = home[lang];
  const c = common[lang];
  useDocumentMeta(c.documentTitle, c.description);

  return (
    <Layout home>
      <section className="hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>
              {t.heroTitle[0]}
              <em>{t.heroTitle[1]}</em>
              {t.heroTitle[2]}
            </h1>
            <p className="lead">{t.lead}</p>
            <div className="hero-actions">
              <PlayButton />
              <a className="btn btn-ghost" href="#play">
                {t.tryFirst}
              </a>
            </div>
            <ul className="hero-facts">
              {t.facts.map((fact) => (
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
              <img src={shot('puzzle', lang)} alt={t.heroAlt} width={340} height={720} />
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
            <div className="eyebrow">{t.featuresEyebrow}</div>
            <h2>{t.featuresTitle}</h2>
          </div>
          <div className="features">
            {t.features.map((f, i) => (
              <div key={f.tag} className="feature">
                <div>
                  <span className="tag" style={{ background: FEATURE_STYLE[i].color }}>
                    {f.tag}
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
                <img
                  className="shot"
                  src={shot(FEATURE_STYLE[i].img, lang)}
                  alt={f.alt}
                  loading="lazy"
                  width={340}
                  height={720}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{t.categoriesEyebrow}</div>
            <h2>{t.categoriesTitle}</h2>
          </div>
          <div className="cats">
            {CATEGORY_STYLE.map((cat, i) => (
              <div key={cat.emoji} className="cat" style={{ background: cat.color }}>
                <div className="e" aria-hidden="true">
                  {cat.emoji}
                </div>
                <b>{cat.count}</b>
                <span>{t.categoryLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{t.screensEyebrow}</div>
            <h2>{t.screensTitle}</h2>
          </div>
          <div className="strip">
            {t.screens.map((s, i) => (
              <figure key={s.title}>
                <div className="phone">
                  <img src={shot(SCREEN_IMAGES[i], lang)} alt={s.alt} loading="lazy" width={340} height={720} />
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
            <div className="eyebrow">{t.faqEyebrow}</div>
            <h2>{t.faqTitle}</h2>
          </div>
          <div className="faq">
            {t.faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>
                  <Rich text={item.a} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--flush-bottom">
        <div className="wrap">
          <div className="cta-band">
            <h2>{t.cta}</h2>
            <PlayButton />
          </div>
        </div>
      </section>
    </Layout>
  );
};
