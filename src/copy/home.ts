import type { Localized } from './types.ts';

interface Feature {
  tag: string;
  title: string;
  text: string;
  alt: string;
}

interface Screen {
  alt: string;
  title: string;
  text: string;
}

interface Faq {
  q: string;
  a: string;
}

interface Home {
  eyebrow: string;
  /** Before, highlighted word, after. */
  heroTitle: [string, string, string];
  lead: string;
  tryFirst: string;
  heroAlt: string;
  facts: string[];
  featuresEyebrow: string;
  featuresTitle: string;
  features: [Feature, Feature, Feature, Feature];
  categoriesEyebrow: string;
  categoriesTitle: string;
  categoryLabels: [string, string, string, string];
  screensEyebrow: string;
  screensTitle: string;
  screens: [Screen, Screen, Screen, Screen, Screen];
  faqEyebrow: string;
  faqTitle: string;
  faq: Faq[];
  cta: string;
}

export const home: Localized<Home> = {
  en: {
    eyebrow: 'Free on Android',
    heroTitle: ['Guess the ', 'flick', ' from the emojis.'],
    lead: 'Four or five emojis, one title. Crack movies, TV shows, songs and books, earn XP, and keep your daily streak burning.',
    tryFirst: 'Try a puzzle first',
    heroAlt: 'Emoji Quiz puzzle screen: lion and crown emojis with letter tiles spelling THE LION',
    facts: ['650+ puzzles', '4 categories', 'New challenge every day', 'Light & dark mode'],
    featuresEyebrow: 'Why people keep playing',
    featuresTitle: 'A quick puzzle a day, and a reason to come back tomorrow.',
    features: [
      {
        tag: 'Daily challenge',
        title: 'One featured puzzle every day',
        text: 'A new featured puzzle every day with a countdown. Solve it to earn XP and keep your streak alive.',
        alt: 'Home screen with today’s challenge',
      },
      {
        tag: 'Streaks',
        title: 'Don’t break the chain',
        text: 'Play every day to grow your streak, and hit milestones for bonus XP.',
        alt: 'Streak calendar showing a 26-day streak',
      },
      {
        tag: 'Badges & levels',
        title: 'Level up to Director’s Cut',
        text: 'Earn XP with every solve, level up and collect badges, from Week Warrior to Flawless.',
        alt: 'Result screen: The Lion King solved, Flawless badge unlocked',
      },
      {
        tag: 'Leaderboards',
        title: 'Climb the big board',
        text: 'Weekly and all-time leaderboards show how you stack up against other players.',
        alt: 'Weekly leaderboard podium',
      },
    ],
    categoriesEyebrow: 'Pick your poison',
    categoriesTitle: 'Four categories, 650+ puzzles.',
    categoryLabels: ['Movies', 'TV shows', 'Music', 'Books'],
    screensEyebrow: 'Inside the app',
    screensTitle: 'Have a look around.',
    screens: [
      { alt: 'Home screen', title: 'Today', text: 'Your level, streak and daily challenge' },
      { alt: 'Puzzle screen', title: 'The puzzle', text: 'Spell it with letter tiles' },
      { alt: 'Categories screen', title: 'Browse', text: 'Movies, TV, music, books' },
      { alt: 'Profile with badges', title: 'Your profile', text: 'Stats and trophy case' },
      { alt: 'Puzzle screen in dark mode', title: 'Dark mode', text: 'For late-night sessions' },
    ],
    faqEyebrow: 'FAQ',
    faqTitle: 'Good questions.',
    faq: [
      {
        q: 'Is Emoji Quiz free?',
        a: 'Yes. The game is free to download and play, and nothing in it is sold for real money.',
      },
      {
        q: 'Do I need an account?',
        a: 'No email or password needed. Pick a username and avatar and start playing. Your profile comes with a secret code: keep it, it lets you restore your progress on a new phone.',
      },
      {
        q: 'How does the daily challenge work?',
        a: 'Each day a new featured puzzle appears on the home screen with a countdown. Solve it to earn XP and keep your streak going.',
      },
      {
        q: 'What happens if I miss a day?',
        a: 'Your current streak resets, but your level, XP and badges stay. Turn on the daily reminder to get a nudge at the time you choose.',
      },
      {
        q: 'What are coins for?',
        a: 'Coins pay for hints when you’re stuck: a letter, the category, the length and more. They have no cash value, and you can solve any puzzle without them.',
      },
      {
        q: 'I changed phone and lost my progress.',
        a: 'Restore your profile with your secret code from the welcome screen. Need a hand? [Contact support](support).',
      },
      {
        q: 'How do I delete my account?',
        a: 'Send us a request by email. [See how account deletion works](deleteAccount).',
      },
    ],
    cta: 'Your streak starts today.',
  },
  fr: {
    eyebrow: 'Gratuit sur Android',
    heroTitle: ['Devine le ', 'film', ' grâce aux emojis.'],
    lead: 'Quatre ou cinq emojis, un titre. Résous des énigmes sur les films, séries, chansons et livres, gagne de l’XP et garde ta série quotidienne en feu.',
    tryFirst: 'Tester une énigme d’abord',
    heroAlt: 'Écran d’énigme Emoji Quiz : emojis de lion et de couronne avec des tuiles de lettres formant LE ROI LION',
    facts: ['650+ énigmes', '4 catégories', 'Un nouveau défi chaque jour', 'Mode clair et sombre'],
    featuresEyebrow: 'Pourquoi on y revient',
    featuresTitle: 'Une énigme rapide par jour, et une raison de revenir demain.',
    features: [
      {
        tag: 'Défi du jour',
        title: 'Une énigme à l’honneur chaque jour',
        text: 'Une nouvelle énigme à l’honneur chaque jour, avec un compte à rebours. Résous-la pour gagner de l’XP et garder ta série en vie.',
        alt: 'Écran d’accueil avec le défi du jour',
      },
      {
        tag: 'Séries',
        title: 'Ne casse pas la chaîne',
        text: 'Joue tous les jours pour allonger ta série et franchis des paliers pour gagner de l’XP bonus.',
        alt: 'Calendrier de série montrant une série de 26 jours',
      },
      {
        tag: 'Badges et niveaux',
        title: 'Monte jusqu’à « Version du réalisateur »',
        text: 'Gagne de l’XP à chaque énigme résolue, monte de niveau et collectionne les badges, de Guerrier de la semaine à Sans faute.',
        alt: 'Écran de résultat : Le Roi Lion résolu, badge Sans faute débloqué',
      },
      {
        tag: 'Classements',
        title: 'Grimpe au classement',
        text: 'Les classements de la semaine et de tous les temps te montrent où tu te situes face aux autres joueurs.',
        alt: 'Podium du classement de la semaine',
      },
    ],
    categoriesEyebrow: 'Choisis ton poison',
    categoriesTitle: 'Quatre catégories, plus de 650 énigmes.',
    categoryLabels: ['Films', 'Séries TV', 'Musique', 'Livres'],
    screensEyebrow: 'Dans l’app',
    screensTitle: 'Fais un petit tour.',
    screens: [
      { alt: 'Écran d’accueil', title: 'Aujourd’hui', text: 'Ton niveau, ta série et le défi du jour' },
      { alt: 'Écran d’énigme', title: 'L’énigme', text: 'Épelle-la avec des tuiles de lettres' },
      { alt: 'Écran des catégories', title: 'Parcourir', text: 'Films, séries, musique, livres' },
      { alt: 'Profil avec badges', title: 'Ton profil', text: 'Statistiques et vitrine de trophées' },
      { alt: 'Écran d’énigme en mode sombre', title: 'Mode sombre', text: 'Pour les parties tardives' },
    ],
    faqEyebrow: 'FAQ',
    faqTitle: 'Bonnes questions.',
    faq: [
      {
        q: 'Emoji Quiz est-il gratuit ?',
        a: 'Oui. Le jeu se télécharge et se joue gratuitement, et rien n’y est vendu contre de l’argent réel.',
      },
      {
        q: 'Ai-je besoin d’un compte ?',
        a: 'Pas d’e-mail ni de mot de passe. Choisis un pseudo et un avatar, et c’est parti. Ton profil est associé à un code secret : garde-le, il te permet de retrouver ta progression sur un nouveau téléphone.',
      },
      {
        q: 'Comment fonctionne le défi du jour ?',
        a: 'Chaque jour, une nouvelle énigme apparaît sur l’écran d’accueil avec un compte à rebours. Résous-la pour gagner de l’XP et garder ta série.',
      },
      {
        q: 'Que se passe-t-il si je rate un jour ?',
        a: 'Ta série en cours repart de zéro, mais ton niveau, ton XP et tes badges restent. Active le rappel quotidien pour recevoir un petit coup de pouce à l’heure de ton choix.',
      },
      {
        q: 'À quoi servent les pièces ?',
        a: 'Les pièces paient les indices quand tu bloques : une lettre, la catégorie, la longueur et plus encore. Elles n’ont aucune valeur monétaire, et tu peux résoudre n’importe quelle énigme sans elles.',
      },
      {
        q: 'J’ai changé de téléphone et perdu ma progression.',
        a: 'Restaure ton profil avec ton code secret depuis l’écran de bienvenue. Besoin d’aide ? [Contacte l’assistance](support).',
      },
      {
        q: 'Comment supprimer mon compte ?',
        a: 'Envoie-nous une demande par e-mail. [Voir comment fonctionne la suppression du compte](deleteAccount).',
      },
    ],
    cta: 'Ta série commence aujourd’hui.',
  },
};
