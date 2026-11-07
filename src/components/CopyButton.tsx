import React, { useState } from 'react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text, className = 'btn btn-ink btn-sm' }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        // Clipboard unavailable (insecure context or permission denied): the address stays selectable.
      });
  };

  return (
    <button type="button" className={className} onClick={copy} aria-live="polite">
      {copied ? 'Copied ✓' : 'Copy address'}
    </button>
  );
};
