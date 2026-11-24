import React from 'react';
import { PATHS } from '../constants.ts';

// Tiny inline markup for translated copy: **bold**, [label](pathKey) for internal links, and
// a newline for a line break. pathKey is a key of PATHS (home, privacy, terms, deleteAccount, support).
const TOKEN = /\*\*(.+?)\*\*|\[(.+?)\]\((\w+)\)/g;

const lines = (text: string, key: string): React.ReactNode[] =>
  text.split('\n').flatMap((line, i) => (i === 0 ? [line] : [<br key={`${key}-br${i}`} />, line]));

export const Rich: React.FC<{ text: string }> = ({ text }) => {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    if (match.index > last) nodes.push(...lines(text.slice(last, match.index), `t${last}`));
    const [, bold, label, target] = match;
    if (bold) {
      nodes.push(<strong key={match.index}>{bold}</strong>);
    } else if (target && target in PATHS) {
      nodes.push(
        <a key={match.index} href={PATHS[target as keyof typeof PATHS]}>
          {label}
        </a>
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(...lines(text.slice(last), `t${last}`));
  return <>{nodes}</>;
};
