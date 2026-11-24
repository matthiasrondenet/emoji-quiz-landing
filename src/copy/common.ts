import type { Localized } from './types.ts';

interface Common {
  skip: string;
  homeLabel: string;
  mainNav: string;
  legalNav: string;
  navPlay: string;
  navFeatures: string;
  navFaq: string;
  support: string;
  getApp: string;
  getItOn: string;
  langGroup: string;
  rights: string;
  trademarks: string;
  privacy: string;
  terms: string;
  deleteAccount: string;
  copy: string;
  copied: string;
  documentTitle: string;
  description: string;
}

export const common: Localized<Common> = {
  en: {
    skip: 'Skip to content',
    homeLabel: 'Emoji Quiz home',
    mainNav: 'Main',
    legalNav: 'Legal',
    navPlay: 'Try a puzzle',
    navFeatures: 'Features',
    navFaq: 'FAQ',
    support: 'Support',
    getApp: 'Get the app',
    getItOn: 'Get it on',
    langGroup: 'Language',
    rights: 'All rights reserved.',
    trademarks: 'Movie, TV, music and book titles belong to their owners.',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    deleteAccount: 'Delete your account',
    copy: 'Copy address',
    copied: 'Copied ✓',
    documentTitle: 'Emoji Quiz — Guess movies, TV, music and books from emojis',
    description: 'Guess movies, TV shows, music and books from emojis. Free on Android.',
  },
  fr: {
    skip: 'Aller au contenu',
    homeLabel: 'Accueil Emoji Quiz',
    mainNav: 'Navigation principale',
    legalNav: 'Informations légales',
    navPlay: 'Tester une énigme',
    navFeatures: 'Fonctionnalités',
    navFaq: 'FAQ',
    support: 'Aide',
    getApp: 'Obtenir l’app',
    getItOn: 'Disponible sur',
    langGroup: 'Langue',
    rights: 'Tous droits réservés.',
    trademarks: 'Les titres de films, séries, musiques et livres appartiennent à leurs propriétaires.',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    deleteAccount: 'Supprimer ton compte',
    copy: 'Copier l’adresse',
    copied: 'Copié ✓',
    documentTitle: 'Emoji Quiz — Devine films, séries, musiques et livres grâce aux emojis',
    description:
      'Devine des films, séries, musiques et livres à partir d’emojis. Gratuit sur Android.',
  },
};
