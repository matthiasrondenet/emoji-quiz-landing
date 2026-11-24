import type { Localized } from './types.ts';

interface Privacy {
  documentTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  lead: string;
  lastUpdated: string;
  appliesTo: string;
  tocLabel: string;
  toc: Record<'who' | 'collect' | 'public' | 'providers' | 'retention' | 'rights' | 'children' | 'contact', string>;
  glanceTitle: string;
  glanceNote: string;
  glance: { b: string; text: string }[];
  glanceFoot: string;
  whoTitle: string;
  /** {developer} is replaced with the publisher name. */
  whoText: string;
  whoReach: string;
  collectTitle: string;
  collectIntro: string;
  tableHead: [string, string, string, string];
  /** Data, examples, why, legal basis. */
  collected: [string, string, string, string][];
  collectOutro: string;
  publicTitle: string;
  publicText: string;
  providersTitle: string;
  providersIntro: string;
  /** {host} is replaced with the hosting provider. */
  providers: string[];
  providersOutro: string;
  retentionTitle: string;
  retention: string[];
  rightsTitle: string;
  rightsText: string;
  childrenTitle: string;
  childrenText: string;
  contactTitle: string;
}

export const privacy: Localized<Privacy> = {
  en: {
    documentTitle: 'Privacy policy — Emoji Quiz',
    description: 'What data Emoji Quiz collects, why, who we share it with, and how you stay in control.',
    eyebrow: 'Legal',
    title: 'Privacy policy',
    lead: 'What data Emoji Quiz collects, why, who we share it with, and how you stay in control.',
    lastUpdated: 'Last updated:',
    appliesTo: 'Applies to the Emoji Quiz Android app and this website',
    tocLabel: 'On this page',
    toc: {
      who: 'Who we are',
      collect: 'What we collect',
      public: 'What other players see',
      providers: 'Service providers',
      retention: 'How long we keep data',
      rights: 'Your rights',
      children: 'Children',
      contact: 'Contact',
    },
    glanceTitle: 'At a glance',
    glanceNote: 'This matches what we declare in the Google Play “Data safety” section.',
    glance: [
      { b: 'We collect', text: 'A username and avatar, your game progress, and crash diagnostics' },
      { b: 'We never ask', text: 'for your email, real name, phone number or location' },
      { b: 'We never sell', text: 'your data, and we show no third-party ads' },
    ],
    glanceFoot: 'Data is encrypted in transit (HTTPS/TLS).',
    whoTitle: 'Who we are',
    whoText:
      'Emoji Quiz is published by {developer}. We are the data controller for personal data processed through the app and this website.',
    whoReach: 'You can reach us at',
    collectTitle: 'What we collect',
    collectIntro:
      'There is no email or password sign-up. You pick a username and avatar, and the app gives you a secret code to restore your profile on another device.',
    tableHead: ['Data', 'Examples', 'Why', 'Legal basis'],
    collected: [
      ['Profile', 'Username, avatar, secret recovery code', 'Create your profile and let you restore it on a new device', 'Contract'],
      ['Game activity', 'Puzzles answered, hints used, XP, level, streak, badges, coins', 'Run the game, award rewards and rank the leaderboards', 'Contract'],
      ['Notifications', 'Push token, reminder settings', 'Send the daily and streak reminders you turned on', 'Consent'],
      ['Diagnostics', 'Device model, Android and app version, crash logs', 'Fix bugs, keep the app stable', 'Legitimate interest'],
      ['Technical data', 'IP address', 'Protect the service from abuse (rate limiting)', 'Legitimate interest'],
    ],
    collectOutro:
      'We do not collect your name, email, precise location, contacts, photos, microphone audio or files.',
    publicTitle: 'What other players see',
    publicText:
      'Your username, avatar, level, XP, badges and rank appear on the leaderboards. Nothing else from your profile is shown.',
    providersTitle: 'Service providers',
    providersIntro:
      'We share data only with providers that help us run the app, under contracts that require them to protect it:',
    providers: [
      '**Google Play**: distribution of the app',
      '**{host}**: hosting of our servers and database',
      '**Firebase Crashlytics**: crash reporting',
      '**Expo and Google Firebase**: delivery of push notifications, if you enable reminders',
    ],
    providersOutro: 'We do not sell personal data or share it with advertisers or data brokers.',
    retentionTitle: 'How long we keep data',
    retention: [
      '**Profile and game data:** while your profile is active, deleted within 30 days after you ask us to delete it',
      '**Crash reports:** up to 90 days',
    ],
    rightsTitle: 'Your rights',
    rightsText:
      'Under the GDPR you can access, correct, delete or export your data, object to its use, and withdraw consent at any time. Write to us and we reply within one month. You can also complain to your data protection authority (in France, the CNIL: cnil.fr). To delete your profile, see [Delete your account](deleteAccount).',
    childrenTitle: 'Children',
    childrenText:
      'Emoji Quiz is not directed at children under 13. In France, players under 15 need a parent’s consent where processing relies on consent.',
    contactTitle: 'Contact',
  },
  fr: {
    documentTitle: 'Politique de confidentialité — Emoji Quiz',
    description:
      'Les données qu’Emoji Quiz collecte, pourquoi, avec qui elles sont partagées, et comment vous gardez la main.',
    eyebrow: 'Mentions légales',
    title: 'Politique de confidentialité',
    lead: 'Les données qu’Emoji Quiz collecte, pourquoi, avec qui nous les partageons, et comment vous gardez la main.',
    lastUpdated: 'Dernière mise à jour :',
    appliesTo: 'S’applique à l’application Android Emoji Quiz et à ce site web',
    tocLabel: 'Sur cette page',
    toc: {
      who: 'Qui sommes-nous',
      collect: 'Ce que nous collectons',
      public: 'Ce que voient les autres joueurs',
      providers: 'Prestataires',
      retention: 'Durée de conservation',
      rights: 'Vos droits',
      children: 'Enfants',
      contact: 'Contact',
    },
    glanceTitle: 'En bref',
    glanceNote: 'Cela correspond à ce que nous déclarons dans la section « Sécurité des données » de Google Play.',
    glance: [
      { b: 'Nous collectons', text: 'un pseudo et un avatar, votre progression de jeu et des diagnostics de plantage' },
      { b: 'Nous ne demandons jamais', text: 'votre e-mail, votre nom réel, votre numéro de téléphone ou votre position' },
      { b: 'Nous ne vendons jamais', text: 'vos données, et nous n’affichons aucune publicité de tiers' },
    ],
    glanceFoot: 'Les données sont chiffrées pendant leur transmission (HTTPS/TLS).',
    whoTitle: 'Qui sommes-nous',
    whoText:
      'Emoji Quiz est édité par {developer}. Nous sommes le responsable du traitement des données personnelles traitées via l’application et ce site web.',
    whoReach: 'Vous pouvez nous joindre à l’adresse',
    collectTitle: 'Ce que nous collectons',
    collectIntro:
      'Il n’y a pas d’inscription par e-mail ni par mot de passe. Vous choisissez un pseudo et un avatar, et l’application vous donne un code secret pour restaurer votre profil sur un autre appareil.',
    tableHead: ['Données', 'Exemples', 'Pourquoi', 'Base légale'],
    collected: [
      ['Profil', 'Pseudo, avatar, code secret de récupération', 'Créer votre profil et vous permettre de le restaurer sur un nouvel appareil', 'Contrat'],
      ['Activité de jeu', 'Énigmes résolues, indices utilisés, XP, niveau, série, badges, pièces', 'Faire fonctionner le jeu, attribuer les récompenses et établir les classements', 'Contrat'],
      ['Notifications', 'Jeton de notification push, réglages des rappels', 'Envoyer les rappels quotidiens et de série que vous avez activés', 'Consentement'],
      ['Diagnostics', 'Modèle d’appareil, version d’Android et de l’application, journaux de plantage', 'Corriger les bugs et garder l’application stable', 'Intérêt légitime'],
      ['Données techniques', 'Adresse IP', 'Protéger le service contre les abus (limitation de débit)', 'Intérêt légitime'],
    ],
    collectOutro:
      'Nous ne collectons ni votre nom, ni votre e-mail, ni votre position précise, ni vos contacts, photos, enregistrements du micro ou fichiers.',
    publicTitle: 'Ce que voient les autres joueurs',
    publicText:
      'Votre pseudo, votre avatar, votre niveau, votre XP, vos badges et votre rang apparaissent dans les classements. Rien d’autre de votre profil n’est affiché.',
    providersTitle: 'Prestataires',
    providersIntro:
      'Nous ne partageons des données qu’avec les prestataires qui nous aident à faire fonctionner l’application, dans le cadre de contrats qui les obligent à les protéger :',
    providers: [
      '**Google Play** : distribution de l’application',
      '**{host}** : hébergement de nos serveurs et de notre base de données',
      '**Firebase Crashlytics** : rapports de plantage',
      '**Expo et Google Firebase** : envoi des notifications push, si vous activez les rappels',
    ],
    providersOutro:
      'Nous ne vendons pas les données personnelles et ne les partageons ni avec des annonceurs ni avec des courtiers en données.',
    retentionTitle: 'Durée de conservation',
    retention: [
      '**Profil et données de jeu :** tant que votre profil est actif, puis supprimées dans les 30 jours suivant votre demande de suppression',
      '**Rapports de plantage :** jusqu’à 90 jours',
    ],
    rightsTitle: 'Vos droits',
    rightsText:
      'Conformément au RGPD, vous pouvez accéder à vos données, les rectifier, les supprimer ou les exporter, vous opposer à leur utilisation et retirer votre consentement à tout moment. Écrivez-nous : nous répondons dans un délai d’un mois. Vous pouvez également introduire une réclamation auprès de votre autorité de protection des données (en France, la CNIL : cnil.fr). Pour supprimer votre profil, consultez [Supprimer votre compte](deleteAccount).',
    childrenTitle: 'Enfants',
    childrenText:
      'Emoji Quiz ne s’adresse pas aux enfants de moins de 13 ans. En France, les joueurs de moins de 15 ans doivent obtenir l’accord d’un parent lorsque le traitement repose sur le consentement.',
    contactTitle: 'Contact',
  },
};
