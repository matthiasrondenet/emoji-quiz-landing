import React from 'react';
import { SUPPORT_EMAIL } from '../constants.ts';
import { support } from '../copy/support.ts';
import { useI18n } from '../i18n.tsx';
import { useDocumentMeta } from '../useDocumentMeta.ts';
import { CopyButton } from './CopyButton.tsx';
import { Layout } from './Layout.tsx';
import { Placeholder } from './Placeholder.tsx';
import { Rich } from './Rich.tsx';

export const Support: React.FC = () => {
  const { lang } = useI18n();
  const t = support[lang];
  useDocumentMeta(t.documentTitle, t.description);

  return (
    <Layout current="support">
      <div className="support-hero">
        <div className="wrap">
          <div className="intro">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>{t.title}</h1>
            <p className="lead">{t.lead}</p>
          </div>
          <div className="mail-card">
            <span className="eyebrow">{t.emailUs}</span>
            <code>
              <Placeholder>{SUPPORT_EMAIL}</Placeholder>
            </code>
            <p>{t.emailTip}</p>
            <CopyButton text={SUPPORT_EMAIL} className="btn btn-coral" />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="help-grid">
          {t.cards.map((card) => (
            <section key={card.tag} className="help-card">
              <span className="tag" style={{ background: card.color }}>
                {card.tag}
              </span>
              {card.items.map((item) => (
                <React.Fragment key={item.q}>
                  <h3>{item.q}</h3>
                  <p>
                    <Rich text={item.a} />
                  </p>
                </React.Fragment>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};
