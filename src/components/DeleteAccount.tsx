import React from 'react';
import { DEVELOPER, SUPPORT_EMAIL } from '../constants.ts';
import { deleteAccount } from '../copy/deleteAccount.ts';
import { useI18n } from '../i18n.tsx';
import { useDocumentMeta } from '../useDocumentMeta.ts';
import { CopyButton } from './CopyButton.tsx';
import { DocHero } from './DocPage.tsx';
import { Layout } from './Layout.tsx';
import { Placeholder } from './Placeholder.tsx';
import { Rich } from './Rich.tsx';

export const DeleteAccount: React.FC = () => {
  const { lang } = useI18n();
  const t = deleteAccount[lang];
  useDocumentMeta(t.documentTitle, t.description);

  return (
    <Layout>
      <DocHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        meta={
          <span>
            {t.developer} {DEVELOPER}
          </span>
        }
      />

      <div className="wrap options">
        <section className="option">
          <div className="eyebrow">{t.step1}</div>
          <h2>{t.step1Title}</h2>
          <ol className="steps doc-steps">
            {t.step1Items.map((item) => (
              <li key={item}>
                <span>
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ol>
          <p className="muted">{t.step1Note}</p>
        </section>

        <section className="option">
          <div className="eyebrow">{t.step2}</div>
          <h2>{t.step2Title}</h2>
          <p>{t.step2Text}</p>
          <div className="copy-row">
            <code>
              <Placeholder>{SUPPORT_EMAIL}</Placeholder>
            </code>
            <CopyButton text={SUPPORT_EMAIL} />
          </div>
          <div className="template">{t.template}</div>
          <p className="muted">{t.step2Note}</p>
        </section>
      </div>

      <div className="wrap wide">
        <h2>{t.keepTitle}</h2>
        <div className="two-col">
          <div>
            <h3>{t.deletedTitle}</h3>
            <ul>
              {t.deleted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t.keptTitle}</h3>
            <ul>
              {t.kept.map((item) => (
                <li key={item}>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="doc-note">
          <Rich text={t.closing} />
        </p>
      </div>
    </Layout>
  );
};
