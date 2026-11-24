import type { Localized } from './types.ts';

interface DeleteAccount {
  documentTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  lead: string;
  developer: string;
  step1: string;
  step1Title: string;
  /** Rich markup. */
  step1Items: string[];
  step1Note: string;
  step2: string;
  step2Title: string;
  step2Text: string;
  /** Pre-filled email, line by line. */
  template: string;
  step2Note: string;
  keepTitle: string;
  deletedTitle: string;
  deleted: string[];
  keptTitle: string;
  kept: string[];
  closing: string;
}

export const deleteAccount: Localized<DeleteAccount> = {
  en: {
    documentTitle: 'Delete your account — Emoji Quiz',
    description: 'How to delete your Emoji Quiz account and its data, with or without the app.',
    eyebrow: 'Account & data',
    title: 'Delete your Emoji Quiz account',
    lead: 'Ask us to delete your profile and its data at any time, with or without the app installed.',
    developer: 'Developer:',
    step1: 'Step 1',
    step1Title: 'Find your username',
    step1Items: [
      'Open Emoji Quiz and tap the **You** tab.',
      'Your username is shown at the top of your profile.',
    ],
    step1Note: 'Already uninstalled the app? Use the username you remember, it is all we need.',
    step2: 'Step 2',
    step2Title: 'Email us',
    step2Text: 'Send us your request. Your profile has no email attached, so the username identifies it.',
    template: 'Subject: Delete my Emoji Quiz account\nPlease delete my profile and its data.\nUsername: your_username',
    step2Note:
      'We may ask a question only the profile owner can answer. We confirm by email and finish within 30 days.',
    keepTitle: 'What gets deleted, and what we keep',
    deletedTitle: 'Deleted within 30 days',
    deleted: [
      'Profile: username, avatar, secret code',
      'Progress: XP, level, streak, badges, coins',
      'Your leaderboard entries',
      'Notification settings and push token',
    ],
    keptTitle: 'Kept, and why',
    kept: [
      '**Anonymous statistics** that no longer identify you',
      '**Backups**: overwritten within 30 days',
      '**Crash reports**: expire on their own after 90 days',
    ],
    closing:
      'Deleted progress and coins can’t be restored. Uninstalling the app does not delete your profile. Want to keep your profile but change something? [Contact support](support).',
  },
  fr: {
    documentTitle: 'Supprimer ton compte — Emoji Quiz',
    description:
      'Comment supprimer ton compte Emoji Quiz et ses données, avec ou sans l’application.',
    eyebrow: 'Compte et données',
    title: 'Supprimer ton compte Emoji Quiz',
    lead: 'Demande-nous à tout moment de supprimer ton profil et ses données, avec ou sans l’application installée.',
    developer: 'Éditeur :',
    step1: 'Étape 1',
    step1Title: 'Retrouve ton pseudo',
    step1Items: [
      'Ouvre Emoji Quiz et touche l’onglet **Toi**.',
      'Ton pseudo s’affiche en haut de ton profil.',
    ],
    step1Note: 'Tu as déjà désinstallé l’application ? Utilise le pseudo dont tu te souviens, c’est tout ce qu’il nous faut.',
    step2: 'Étape 2',
    step2Title: 'Écris-nous',
    step2Text:
      'Envoie-nous ta demande. Ton profil n’est associé à aucune adresse e-mail : c’est le pseudo qui l’identifie.',
    template: 'Objet : Supprimer mon compte Emoji Quiz\nMerci de supprimer mon profil et ses données.\nPseudo : ton_pseudo',
    step2Note:
      'Nous pouvons te poser une question à laquelle seul le propriétaire du profil sait répondre. Nous confirmons par e-mail et terminons sous 30 jours.',
    keepTitle: 'Ce qui est supprimé, et ce que nous conservons',
    deletedTitle: 'Supprimé sous 30 jours',
    deleted: [
      'Profil : pseudo, avatar, code secret',
      'Progression : XP, niveau, série, badges, pièces',
      'Tes entrées dans les classements',
      'Réglages de notifications et jeton push',
    ],
    keptTitle: 'Conservé, et pourquoi',
    kept: [
      '**Statistiques anonymes** qui ne t’identifient plus',
      '**Sauvegardes** : écrasées sous 30 jours',
      '**Rapports de plantage** : expirent d’eux-mêmes après 90 jours',
    ],
    closing:
      'La progression et les pièces supprimées ne peuvent pas être restaurées. Désinstaller l’application ne supprime pas ton profil. Tu veux garder ton profil mais modifier quelque chose ? [Contacte l’assistance](support).',
  },
};
