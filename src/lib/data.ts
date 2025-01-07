import { Figma, Github, Medium, X } from 'iconoir-react';

import LogoJavaScript from '/public/icons/icon-javascript.svg';
import LogoTypeScript from '/public/icons/icon-typescript.svg';
import LogoReact from '/public/icons/icon-react.svg';
import LogoNextjs from '/public/icons/icon-nextjs.svg';
import LogoNodejs from '/public/icons/icon-nodejs.svg';
import LogoExpressjs from '/public/icons/icon-expressjs.svg';
import LogoMongoDB from '/public/icons/icon-mongodb.svg';
import LogoSass from '/public/icons/icon-sass.svg';
import LogoTailwindCss from '/public/icons/icon-tailwindcss.svg';
import LogoFigma from '/public/icons/icon-figma.svg';
import LogoStorybook from '/public/icons/icon-storybook.svg';
import LogoCypress from '/public/icons/icon-cypress.svg';
import LogoFirebase from '/public/icons/icon-firebase.svg';
import LogoRedux from '/public/icons/icon-redux.svg';
import LogoJest from '/public/icons/icon-jest.svg';
import LogoMUI from '/public/icons/icon-mui.svg';

import LogoFiskil from '/public/icons/logo-fiskil.svg';
import LogoShosho from '/public/icons/logo-shosho.svg';
import LogoAccenture from '/public/icons/logo-accenture.svg';
import LogoLantern from '/public/icons/logo-lantern.svg';
import LogoGreenApex from '/public/icons/logo-greenapex.svg';

import IllustrationFiskil from '/public/images/illustration-fiskil.svg';
import IllustrationLantern from '/public/images/illustration-lantern.svg';
import IllustrationMokoboko from '/public/images/illustration-mokoboko.svg';
import IllustrationScraye from '/public/images/illustration-scraye.svg';

import AvatarNoren from '/public/images/avatar-noren.png';
import AvatarEugen from '/public/images/avatar-eugen.png';

import Photo1 from '/public/images/photo1.png';
import Photo2 from '/public/images/photo2.png';
import Photo3 from '/public/images/photo3.png';
import Photo4 from '/public/images/photo4.png';
import Photo5 from '/public/images/photo5.png';
import Photo6 from '/public/images/photo6.png';
import Photo7 from '/public/images/photo7.png';
import Photo8 from '/public/images/photo8.png';
import Photo9 from '/public/images/photo9.png';
import Photo10 from '/public/images/photo10.png';
import Photo11 from '/public/images/photo11.png';
import Photo12 from '/public/images/photo12.png';
import Photo13 from '/public/images/photo13.png';
import Photo14 from '/public/images/photo14.png';

export const NAV_LINKS = [
  {
    children: 'Journey',
    href: '#journey',
  },
  {
    children: 'Work',
    href: '#work',
  },
  {
    children: 'Testimonials',
    href: '#testimonials',
  },
  {
    children: 'Contact',
    href: '#contact',
  },
];

export const SKILLS = [
  {
    label: 'JavaScript',
    icon: LogoJavaScript,
  },
  {
    label: 'TypeScript',
    icon: LogoTypeScript,
  },
  {
    label: 'React',
    icon: LogoReact,
  },
  {
    label: 'Next.js',
    icon: LogoNextjs,
  },
  {
    label: 'Redux',
    icon: LogoRedux,
  },
  {
    label: 'Firebase',
    icon: LogoFirebase,
  },
  {
    label: 'Node.js',
    icon: LogoNodejs,
  },
  {
    label: 'Express.js',
    icon: LogoExpressjs,
  },
  {
    label: 'MongoDB',
    icon: LogoMongoDB,
  },
  {
    label: 'Tailwind Css',
    icon: LogoTailwindCss,
  },
  {
    label: 'Scss',
    icon: LogoSass,
  },
  {
    label: 'MUI',
    icon: LogoMUI,
  },
  {
    label: 'Figma',
    icon: LogoFigma,
  },
  {
    label: 'Storybook',
    icon: LogoStorybook,
  },
  {
    label: 'Cypress',
    icon: LogoCypress,
  },
  {
    label: 'Jest',
    icon: LogoJest,
  },
];

export const PROJECTS = [
  {
    name: 'Fiskil',
    description:
      'Fiskil provides advanced data sharing solutions for finance and energy institutions, facilitating seamless sharing and access to real-time customer data.',
    techs: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind Css',
      'Storybook',
      'Cypress',
      'Storybook',
      'Jest',
      'Firebase',
    ],
    previewImage: IllustrationFiskil,
    color: {
      bgColor: '#DEDFEF',
      borderColor: '#ADAFD0',
    },
    colorClass: {
      bgColor: 'bg-indigo-100',
      borderColor: 'border-indigo-700',
    },
    isDescriptionOnLeft: false,
    href: 'https://www.fiskil.com/',
  },
  {
    name: 'Lantern',
    description:
      'Lantern helps you close deals faster and smarter. Consolidate customer, prospect, and intent data, streamline sales tools, and use AI-powered insights.',
    techs: ['TypeScript', 'React', 'Tailwind Css', 'Scss'],
    previewImage: IllustrationLantern,
    color: {
      bgColor: '#EBE5ED',
      borderColor: '#C6B3CF',
    },
    colorClass: {
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-700',
    },
    isDescriptionOnLeft: false,
    href: 'https://www.withlantern.com/',
  },
  {
    name: 'Mokoboko',
    description:
      'Mokoboko makes Pilates and fitness easy by helping you seamlessly book classes, reserve spots, and get reminders before each session.',
    techs: ['TypeScript', 'Next.js', 'Tailwind Css'],
    previewImage: IllustrationMokoboko,
    color: {
      bgColor: '#D1D7CE',
      borderColor: '#A8B0A4',
    },
    colorClass: {
      bgColor: 'bg-green-100',
      borderColor: 'border-green-700',
    },
    isDescriptionOnLeft: true,
    href: 'https://mokoboko.xyz/',
  },
  {
    name: 'Scraye',
    description:
      'Scraye is a housing platform that makes life easier across the UK, seamlessly connecting buyers, renters, owners, and agents. It simplifies selling, renting, and managing properties, all in one place.',
    techs: [
      'TypeScript',
      'React',
      'Redux',
      'Tailwind Css',
      'MUI',
      'Storybook',
      'Cypress',
    ],
    previewImage: IllustrationScraye,
    color: {
      bgColor: '#E2EAEE',
      borderColor: '#B6C1C6',
    },
    colorClass: {
      bgColor: 'bg-sky-100',
      borderColor: 'border-sky-700',
    },
    isDescriptionOnLeft: true,
    href: 'https://www.scraye.com/',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Eugen Esanu',
    company: 'Founder, Shosho Design',
    testimonial: `“Riddhi is a very good front-end developer. The amount of hard word she put into our Design System (building, maintaining and polishing) is very high. I would recommend her with full confidence on any project that requires a good React developer. We've hired and fired many, but she is of very few that remained with us. We will hire 100% for our next project as she is an amazing addition to any team. Don't skip on her as your next potential hire!”`,
    avatar: AvatarEugen,
  },
  {
    name: 'Noren Machelart',
    company: 'Product Owner, Scraye',
    testimonial: `“Riddhi has been an incredible asset to our team and a joy to work with. She leads the project with responsibility and initiative, consistently enhancing features and offering thoughtful suggestions. Her ability to explain technical details to non-technical clients and deliver excellent demos on time is remarkable. Always supportive and collaborative, she truly elevates the team's performance. She creates a happy environment around her, and the fun thing is, each team member loves to work with her. I'm grateful to have her on board!”`,
    avatar: AvatarNoren,
  },
];

export const COMPANIESANDCLIENTS = [
  {
    name: 'Fiskil',
    logo: LogoFiskil,
  },
  {
    name: 'Shosho',
    logo: LogoShosho,
  },
  {
    name: 'Accenture',
    logo: LogoAccenture,
  },
  {
    name: 'Green Apex',
    logo: LogoGreenApex,
  },
  {
    name: 'Lantern',
    logo: LogoLantern,
  },
];

export const FOOTERLINKS = [
  {
    label: 'GITHUB',
    href: '',
  },
  {
    label: 'FIGMA',
    href: '',
  },
  {
    label: 'TWITTER',
    href: '',
  },
  {
    label: 'CV',
    href: '',
  },
];

export const BIT_OF_ME = [
  {
    emoji: '🎨',
    text: 'I like to draw, paint or read whenever I get the chance.',
  },
  {
    emoji: '💎',
    text: 'Antique items and diamonds have my heart. Guess I’m into rare things – just like me😜!',
  },
  {
    emoji: '🌌',
    text: 'I find peace and a sense of something bigger and dreamier when I gaze at the night sky.',
  },
  {
    emoji: '😂',
    text: 'I’m all about funny videos – I can never stop laughing, even on the second watch.',
  },
  {
    emoji: '📸',
    text: "I take great joy in photography – whether it's capturing the beauty of the world around me, candid moments with loved ones, or simply a portrait of myself. 💖 Every photo holds a memory, preserving the essence of life’s most meaningful moments.",
  },
];

export const PHOTOS = [
  {
    photo: Photo1,
    alt: 'London eye',
  },
  {
    photo: Photo2,
    alt: 'Isle of sky way',
  },
  {
    photo: Photo3,
    alt: 'Paul Cathedral',
  },
  {
    photo: Photo4,
    alt: 'Regent Street',
  },
  {
    photo: Photo5,
    alt: 'Scott Monument',
  },
  {
    photo: Photo6,
    alt: 'Big ben',
  },
  {
    photo: Photo7,
    alt: 'Isle of Skye on way',
  },
  {
    photo: Photo8,
    alt: 'Durdle door',
  },
  {
    photo: Photo9,
    alt: 'Isle of Skye on the go',
  },
  {
    photo: Photo10,
    alt: 'Isle of Skye Pod',
  },
  {
    photo: Photo11,
    alt: 'Bath Spa Bed',
  },
  {
    photo: Photo12,
    alt: 'Bath Spa',
  },
  {
    photo: Photo13,
    alt: 'Shards',
  },
  {
    photo: Photo14,
    alt: 'Big ben at night',
  },
];

export const SOCIAL_LINKS = [
  {
    label: 'Github',
    icon: Github,
    href: 'https://github.com/riddhilimbachiya',
  },
  {
    label: 'Figma',
    icon: Figma,
    href: 'https://www.figma.com/community/file/1458512251907556084',
  },
  {
    label: 'X',
    icon: X,
    href: 'https://x.com/limbachiyariddh',
  },
  {
    label: 'Medium',
    icon: Medium,
    href: 'https://medium.com/@riddhiilimbachiya',
  },
];
