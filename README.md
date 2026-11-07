# Emoji Quiz — landing page

Vite + React + TypeScript site for the Emoji Quiz Android app. Five static pages: home (with a playable demo puzzle), privacy policy, terms of use, delete account, and support. Light and dark themes follow the system setting.

## Commands

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build into dist/
npm run lint
```

## Before going live

Fill in the placeholders in `src/constants.ts` (they render highlighted in yellow): `SUPPORT_EMAIL`, `POSTAL_ADDRESS`, `LAST_UPDATED`, `CONSUMER_MEDIATOR`, `HOSTING_PROVIDER`. Check `PLAY_URL` once the Play listing exists.

## Deployment

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`). The workflow sets `VITE_BASE=/emoji-quiz-landing/`; use `/` with a custom domain.

Screenshots live in `src/screenshots/`.
