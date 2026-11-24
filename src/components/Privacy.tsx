import React from 'react';
import { DEVELOPER, HOSTING_PROVIDER, LAST_UPDATED, SUPPORT_EMAIL } from '../constants.ts';
import { privacy } from '../copy/privacy.ts';
import { formatDate } from '../formatDate.ts';
import { useI18n } from '../i18n.tsx';
import { useDocumentMeta } from '../useDocumentMeta.ts';
import { DocPage } from './DocPage.tsx';
import { Placeholder } from './Placeholder.tsx';
import { Rich } from './Rich.tsx';

const TOC_IDS = ['who', 'collect', 'public', 'providers', 'retention', 'rights', 'children', 'contact'] as const;

export const Privacy: React.FC = () => {
  const { lang } = useI18n();
  const t = privacy[lang];
  useDocumentMeta(t.documentTitle, t.description);

  return (
    <DocPage
      eyebrow={t.eyebrow}
      title={t.title}
      lead={t.lead}
      tocLabel={t.tocLabel}
      toc={TOC_IDS.map((id) => ({ id, label: t.toc[id] }))}
      meta={
        <>
          <span>
            {t.lastUpdated} <Placeholder>{formatDate(LAST_UPDATED, lang)}</Placeholder>
          </span>
          <span>{t.appliesTo}</span>
        </>
      }
    >
      <div className="summary-box">
        <h2>{t.glanceTitle}</h2>
        <p>{t.glanceNote}</p>
        <div className="glance">
          {t.glance.map((item) => (
            <div key={item.b}>
              <b>{item.b}</b>
              {item.text}
            </div>
          ))}
        </div>
        <p>{t.glanceFoot}</p>
      </div>

      <h2 id="who">{t.whoTitle}</h2>
      <p>
        {t.whoText.replace('{developer}', DEVELOPER)} {t.whoReach} <Placeholder>{SUPPORT_EMAIL}</Placeholder>.
      </p>

      <h2 id="collect">{t.collectTitle}</h2>
      <p>{t.collectIntro}</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              {t.tableHead.map((head) => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.collected.map(([data, examples, why, basis]) => (
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
      <p>{t.collectOutro}</p>

      <h2 id="public">{t.publicTitle}</h2>
      <p>{t.publicText}</p>

      <h2 id="providers">{t.providersTitle}</h2>
      <p>{t.providersIntro}</p>
      <ul>
        {t.providers.map((item) => (
          <li key={item}>
            <Rich text={item.replace('{host}', HOSTING_PROVIDER)} />
          </li>
        ))}
      </ul>
      <p>{t.providersOutro}</p>

      <h2 id="retention">{t.retentionTitle}</h2>
      <ul>
        {t.retention.map((item) => (
          <li key={item}>
            <Rich text={item} />
          </li>
        ))}
      </ul>

      <h2 id="rights">{t.rightsTitle}</h2>
      <p>
        <Rich text={t.rightsText} />
      </p>

      <h2 id="children">{t.childrenTitle}</h2>
      <p>{t.childrenText}</p>

      <h2 id="contact">{t.contactTitle}</h2>
      <p>
        {DEVELOPER}
        <br />
        <Placeholder>{SUPPORT_EMAIL}</Placeholder>
      </p>
    </DocPage>
  );
};
