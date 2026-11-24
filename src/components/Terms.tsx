import React from 'react';
import { DEVELOPER, LAST_UPDATED } from '../constants.ts';
import { terms } from '../copy/terms.ts';
import { formatDate } from '../formatDate.ts';
import { useI18n } from '../i18n.tsx';
import { useDocumentMeta } from '../useDocumentMeta.ts';
import { DocPage } from './DocPage.tsx';
import { Placeholder } from './Placeholder.tsx';
import { Rich } from './Rich.tsx';

const fill = (text: string) => text.replace('{developer}', DEVELOPER);

export const Terms: React.FC = () => {
  const { lang } = useI18n();
  const t = terms[lang];
  useDocumentMeta(t.documentTitle, t.description);

  return (
    <DocPage
      eyebrow={t.eyebrow}
      title={t.title}
      lead={t.lead}
      tocLabel={t.tocLabel}
      toc={t.sections.map((s) => ({ id: s.id, label: s.title }))}
      meta={
        <span>
          {t.lastUpdated} <Placeholder>{formatDate(LAST_UPDATED, lang)}</Placeholder>
        </span>
      }
    >
      <p>{fill(t.intro)}</p>

      {t.sections.map((section) => (
        <React.Fragment key={section.id}>
          <h2 id={section.id}>{section.title}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p}>
              <Rich text={fill(p)} />
            </p>
          ))}
          {section.items && (
            <ul>
              {section.items.map((item) => (
                <li key={item}>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          )}
        </React.Fragment>
      ))}
    </DocPage>
  );
};
