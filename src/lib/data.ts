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
import IllustrationScraye from '/public/images/illustration-scraye.svg';
import IllustrationLantern from '/public/images/illustration-lantern.svg';
import IllustrationMokoboko from '/public/images/illustration-mokoboko.svg';

import AvatarNoren from '/public/images/avatar-noren.png';
import AvatarEugen from '/public/images/avatar-eugen.png';

export const NAV_LINKS = [
  {
    label: 'Work',
    href: '#about',
  },
  {
    label: 'Journey',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
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
    testimonial: `“Riddhi has been an incredible asset to our team and a joy to work with. She leads the project with responsibility and initiative, consistently enhancing features and offering thoughtful suggestions. Her ability to explain technical details to non-technical clients and deliver excellent demos on time is remarkable. Always supportive and collaborative, she truly elevates the team's performance. I’m grateful to have her on board!”`,
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
