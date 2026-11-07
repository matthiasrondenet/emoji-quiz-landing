import React from 'react';

// Highlights unfilled "[LIKE THIS]" values so they stand out; real values render as plain text.
export const Placeholder: React.FC<{ children: string }> = ({ children }) =>
  children.startsWith('[') ? <span className="ph">{children}</span> : <>{children}</>;
