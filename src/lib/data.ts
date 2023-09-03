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

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectScraye from '/public/images/project-scraye.png';
import ProjectLantern from '/public/images/project-lantern.png';

export const NAV_LINKS = [
  {
    label: 'about',
    href: '#about',
  },
  {
    label: 'work',
    href: '#work',
  },
  {
    label: 'testimonials',
    href: '#testimonials',
  },
  {
    label: 'contact',
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
    label: 'Sass/Scss',
    icon: LogoSass,
  },
  {
    label: 'Tailwind Css',
    icon: LogoTailwindCss,
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
];

export const PROJECTS = [
  {
    name: 'Fiskil',
    description:
      'Connecting your product with open finance. Integrate with Fiskil to easily access real-time banking and energy data that elevates your customers experience',
    techs: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind Css',
      'Sass/Scss',
      'Cypress',
      'Storybook',
    ],
    previewImage: ProjectFiskil,
    color: 'bg-purple',
    isDescriptionOnLeft: false,
  },
  {
    name: 'Scraye',
    description:
      'Connecting your product with open finance. Integrate with Fiskil to easily access real-time banking and energy data that elevates your customers experience',
    techs: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind Css',
      'Sass/Scss',
      'Cypress',
      'Storybook',
    ],
    previewImage: ProjectScraye,
    color: 'bg-red',
    isDescriptionOnLeft: true,
  },
  {
    name: 'Lantern',
    description:
      'Connecting your product with open finance. Integrate with Fiskil to easily access real-time banking and energy data that elevates your customers experience',
    techs: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind Css',
      'Sass/Scss',
      'Cypress',
      'Storybook',
    ],
    previewImage: ProjectLantern,
    color: 'bg-purple',
    isDescriptionOnLeft: false,
  },
];
