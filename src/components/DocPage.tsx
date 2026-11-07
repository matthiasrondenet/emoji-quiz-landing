import React from 'react';
import { Layout } from './Layout.tsx';

export interface TocItem {
  id: string;
  label: string;
}

interface DocPageProps {
  eyebrow: string;
  title: string;
  lead: string;
  meta?: React.ReactNode;
  toc?: TocItem[];
  children: React.ReactNode;
}

export const DocHero: React.FC<Omit<DocPageProps, 'toc' | 'children'>> = ({
  eyebrow,
  title,
  lead,
  meta,
}) => (
  <div className="doc-hero">
    <div className="wrap">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      {meta && <div className="doc-meta">{meta}</div>}
    </div>
  </div>
);

export const DocPage: React.FC<DocPageProps> = ({ toc, children, ...hero }) => (
  <Layout>
    <DocHero {...hero} />
    <div className="wrap doc-layout">
      {toc && (
        <nav className="toc" aria-label="On this page">
          <b>On this page</b>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}
      <article className="doc">{children}</article>
    </div>
  </Layout>
);
