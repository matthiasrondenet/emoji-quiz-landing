import { useEffect } from 'react';

export const useDocumentMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
};
