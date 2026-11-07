import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const CSP =
  "default-src 'self'; script-src 'self'; img-src 'self' data:; style-src 'self'; font-src 'self'; base-uri 'none'; form-action 'none'";

// Production only: the dev server injects inline scripts that this policy would block.
const contentSecurityPolicy = (): Plugin => ({
  name: 'content-security-policy',
  apply: 'build',
  transformIndexHtml: (html) =>
    html.replace(
      '</head>',
      `  <meta http-equiv="Content-Security-Policy" content="${CSP}" />\n  </head>`
    ),
});

const page = (path: string) => resolve(import.meta.dirname, path);

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), contentSecurityPolicy()],
  build: {
    rollupOptions: {
      input: {
        main: page('index.html'),
        privacy: page('privacy/index.html'),
        terms: page('terms/index.html'),
        deleteAccount: page('delete-account/index.html'),
        support: page('support/index.html'),
      },
    },
  },
});
