import type { Localized } from './types.ts';

export interface HelpCard {
  tag: string;
  color: string;
  /** a uses the Rich markup. */
  items: { q: string; a: string }[];
}

interface Support {
  documentTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  lead: string;
  emailUs: string;
  emailTip: string;
  cards: HelpCard[];
}

export const support: Localized<Support> = {
  en: {
    documentTitle: 'Support — Emoji Quiz',
    description: 'Get help with Emoji Quiz: purchases, streaks, puzzles and your account.',
    eyebrow: 'Help & support',
    title: 'Stuck on more than a puzzle?',
    lead: 'Write to us and a real person will answer, usually within two business days.',
    emailUs: 'Email us',
    emailTip:
      'Include your username, phone model and Android version, and a screenshot if something looks wrong.',
    cards: [
      {
        tag: 'Progress & streaks',
        color: '#9FDEC9',
        items: [
          {
            q: 'I lost my streak',
            a: 'Streaks follow your phone’s local day. If it reset after you played, email us the date and we’ll check.',
          },
          {
            q: 'New phone, no progress',
            a: 'On the welcome screen choose to restore your profile and enter your secret code. Find it beforehand in You › Profile.',
          },
        ],
      },
      {
        tag: 'Puzzles',
        color: '#C6B6EC',
        items: [
          {
            q: 'An answer looks wrong',
            a: 'Send us the emojis, the category and the answer you expected. We review every report.',
          },
          {
            q: 'I ran out of coins',
            a: 'Coins pay for hints. You can still solve every puzzle without them.',
          },
        ],
      },
      {
        tag: 'Account',
        color: '#F6DA86',
        items: [
          { q: 'Change my username or avatar', a: 'Open the You tab and tap Edit profile.' },
          {
            q: 'I lost my secret code',
            a: 'We can’t recover a lost code, and it is the only way to restore a profile on a new device. Keep it somewhere safe.',
          },
          { q: 'Delete my account', a: 'See [how to delete your account](deleteAccount).' },
        ],
      },
    ],
  },
  fr: {
    documentTitle: 'Aide — Emoji Quiz',
    description:
      'Obtiens de l’aide pour Emoji Quiz : achats, séries, énigmes et compte.',
    eyebrow: 'Aide et assistance',
    title: 'Un souci qui dépasse une énigme ?',
    lead: 'Écris-nous et une vraie personne te répondra, généralement sous deux jours ouvrés.',
    emailUs: 'Écris-nous',
    emailTip:
      'Indique ton pseudo, le modèle de ton téléphone, ta version d’Android et, si quelque chose cloche, une capture d’écran.',
    cards: [
      {
        tag: 'Progression et séries',
        color: '#9FDEC9',
        items: [
          {
            q: 'J’ai perdu ma série',
            a: 'Les séries suivent le jour local de ton téléphone. Si elle a été remise à zéro après que tu as joué, envoie-nous la date par e-mail et nous vérifierons.',
          },
          {
            q: 'Nouveau téléphone, plus de progression',
            a: 'Sur l’écran de bienvenue, choisis de restaurer ton profil et saisis ton code secret. Tu peux le retrouver avant dans Toi › Profil.',
          },
        ],
      },
      {
        tag: 'Énigmes',
        color: '#C6B6EC',
        items: [
          {
            q: 'Une réponse me paraît fausse',
            a: 'Envoie-nous les emojis, la catégorie et la réponse que tu attendais. Nous examinons chaque signalement.',
          },
          {
            q: 'Je n’ai plus de pièces',
            a: 'Les pièces paient les indices. Tu peux quand même résoudre toutes les énigmes sans elles.',
          },
        ],
      },
      {
        tag: 'Compte',
        color: '#F6DA86',
        items: [
          { q: 'Changer mon pseudo ou mon avatar', a: 'Ouvre l’onglet Toi et touche Modifier le profil.' },
          {
            q: 'J’ai perdu mon code secret',
            a: 'Nous ne pouvons pas récupérer un code perdu, et c’est le seul moyen de restaurer un profil sur un nouvel appareil. Garde-le en lieu sûr.',
          },
          { q: 'Supprimer mon compte', a: 'Voir [comment supprimer ton compte](deleteAccount).' },
        ],
      },
    ],
  },
};
