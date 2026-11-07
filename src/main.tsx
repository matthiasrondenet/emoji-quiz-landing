import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/inter';
import './index.css';
import './pages.css';
import { DeleteAccount } from './components/DeleteAccount.tsx';
import { Home } from './components/Home.tsx';
import { Privacy } from './components/Privacy.tsx';
import { Support } from './components/Support.tsx';
import { Terms } from './components/Terms.tsx';

const pages: Record<string, React.FC> = {
  home: Home,
  privacy: Privacy,
  terms: Terms,
  'delete-account': DeleteAccount,
  support: Support,
};

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');
const Page = pages[document.body.dataset.page ?? 'home'] ?? Home;

createRoot(root).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
