import React from 'react';
import { PLAY_URL } from '../constants.ts';
import { common } from '../copy/common.ts';
import { useI18n } from '../i18n.tsx';

export const PlayButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { lang } = useI18n();
  const c = common[lang];
  return compact ? (
    <a className="btn btn-coral head-cta" href={PLAY_URL} target="_blank" rel="noopener noreferrer">
      {c.getApp}
    </a>
  ) : (
    <a className="btn btn-ink play-btn" href={PLAY_URL} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 3.2v17.6c0 .7.8 1.1 1.4.7l14-8.8c.5-.3.5-1.1 0-1.4l-14-8.8C5.8 2.1 5 2.5 5 3.2z"
          fill="currentColor"
        />
      </svg>
      <span>
        <small>{c.getItOn}</small>
        <b>Google Play</b>
      </span>
    </a>
  );
};
