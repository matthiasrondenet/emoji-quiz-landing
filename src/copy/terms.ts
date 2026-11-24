import type { Localized } from './types.ts';

interface Section {
  id: string;
  title: string;
  /** Paragraphs and list items use the Rich markup. {developer} is replaced with the publisher name. */
  paragraphs?: string[];
  items?: string[];
}

interface Terms {
  documentTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  lead: string;
  lastUpdated: string;
  tocLabel: string;
  intro: string;
  sections: Section[];
}

export const terms: Localized<Terms> = {
  en: {
    documentTitle: 'Terms of use — Emoji Quiz',
    description: 'The rules for playing Emoji Quiz, buying coins and keeping the leaderboards fair.',
    eyebrow: 'Legal',
    title: 'Terms of use',
    lead: 'The rules for playing Emoji Quiz and keeping the leaderboards fair.',
    lastUpdated: 'Last updated:',
    tocLabel: 'On this page',
    intro:
      'These terms are a contract between you and {developer}. By creating a profile or playing, you accept them.',
    sections: [
      {
        id: 'who',
        title: 'Who can play',
        paragraphs: [
          'You must be at least 13. If you are under 18, a parent or guardian must agree to these terms for you. Usernames must not impersonate anyone or be offensive.',
        ],
      },
      {
        id: 'account',
        title: 'Your profile and coins',
        items: [
          'Your profile is protected by a secret code. Keep it private: anyone who has it can restore your profile, and we cannot recover it for you if you lose it.',
          'Coins are an in-game currency used for hints. They have no cash value and cannot be exchanged, transferred or sold.',
          'The game is free to play. Nothing in the app is sold for real money.',
        ],
      },
      {
        id: 'fair',
        title: 'Fair play',
        paragraphs: [
          'No cheating, bots, bug exploits, leaderboard manipulation or harassment. We may reset scores, remove rewards obtained unfairly, or ban accounts.',
        ],
      },
      {
        id: 'content',
        title: 'Puzzle content',
        paragraphs: [
          'Puzzles refer to films, series, songs, artists and books for trivia only. Those titles belong to their owners, who do not sponsor or endorse Emoji Quiz. The app’s design, code and puzzle selection belong to {developer}.',
        ],
      },
      {
        id: 'end',
        title: 'Ending your profile',
        paragraphs: [
          'You can [delete your account](deleteAccount) at any time. We may close a profile that seriously or repeatedly breaks these terms. If we stop offering the game, we give at least 30 days’ notice in the app.',
        ],
      },
      {
        id: 'law',
        title: 'Law and disputes',
        paragraphs: [
          'These terms are governed by French law; EU residents keep the mandatory protections of their own country. Please contact us first so we can try to sort things out.',
        ],
      },
    ],
  },
  fr: {
    documentTitle: 'Conditions d’utilisation — Emoji Quiz',
    description:
      'Les règles pour jouer à Emoji Quiz, acheter des pièces et garder des classements équitables.',
    eyebrow: 'Mentions légales',
    title: 'Conditions d’utilisation',
    lead: 'Les règles pour jouer à Emoji Quiz et garder des classements équitables.',
    lastUpdated: 'Dernière mise à jour :',
    tocLabel: 'Sur cette page',
    intro:
      'Les présentes conditions constituent un contrat entre vous et {developer}. En créant un profil ou en jouant, vous les acceptez.',
    sections: [
      {
        id: 'who',
        title: 'Qui peut jouer',
        paragraphs: [
          'Vous devez avoir au moins 13 ans. Si vous avez moins de 18 ans, un parent ou un tuteur légal doit accepter ces conditions en votre nom. Les pseudos ne doivent usurper l’identité de personne ni être offensants.',
        ],
      },
      {
        id: 'account',
        title: 'Votre profil et les pièces',
        items: [
          'Votre profil est protégé par un code secret. Gardez-le confidentiel : toute personne qui le possède peut restaurer votre profil, et nous ne pouvons pas le récupérer pour vous si vous le perdez.',
          'Les pièces sont une monnaie du jeu servant à obtenir des indices. Elles n’ont aucune valeur monétaire et ne peuvent être ni échangées, ni transférées, ni vendues.',
          'Le jeu est gratuit. Rien dans l’application n’est vendu contre de l’argent réel.',
        ],
      },
      {
        id: 'fair',
        title: 'Fair-play',
        paragraphs: [
          'Pas de triche, de bots, d’exploitation de bugs, de manipulation des classements ni de harcèlement. Nous pouvons réinitialiser des scores, retirer des récompenses obtenues de manière déloyale ou bannir des comptes.',
        ],
      },
      {
        id: 'content',
        title: 'Contenu des énigmes',
        paragraphs: [
          'Les énigmes mentionnent des films, séries, chansons, artistes et livres à titre de culture générale uniquement. Ces titres appartiennent à leurs propriétaires, qui ne parrainent ni ne soutiennent Emoji Quiz. Le design, le code et la sélection d’énigmes de l’application appartiennent à {developer}.',
        ],
      },
      {
        id: 'end',
        title: 'Fin de votre profil',
        paragraphs: [
          'Vous pouvez [supprimer votre compte](deleteAccount) à tout moment. Nous pouvons fermer un profil qui enfreint gravement ou de façon répétée ces conditions. Si nous cessons de proposer le jeu, nous vous en informons dans l’application avec un préavis d’au moins 30 jours.',
        ],
      },
      {
        id: 'law',
        title: 'Droit applicable et litiges',
        paragraphs: [
          'Les présentes conditions sont régies par le droit français ; les résidents de l’UE conservent les protections impératives de leur pays. Merci de nous contacter d’abord afin que nous essayions de régler le problème à l’amiable.',
        ],
      },
    ],
  },
};
