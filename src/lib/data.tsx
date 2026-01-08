import { Figma, Github, Linkedin, Medium, X } from 'iconoir-react';

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
import LogoVercel from '/public/icons/icon-vercel.svg';
import LogoVercelAIElements from '/public/icons/icon-vercel-ai-elements.svg';
import LogoCursor from '/public/icons/icon-cursor.svg';
import LogoShadcn from '/public/icons/icon-shadcn.svg';

import IllustrationFiskil from '/public/images/illustration-fiskil.svg';
import IllustrationLantern from '/public/images/illustration-lantern.svg';
import IllustrationMokoboko from '/public/images/illustration-mokoboko.svg';
import IllustrationScraye from '/public/images/illustration-scraye.svg';
import IllustrationDSy from '/public/images/illustration-dsy.svg';
import IllustrationChatInterfaces from '/public/images/illustration-chat-interface.svg';

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
import React from 'react';

export const NAV_LINKS = [
  {
    children: 'What I Do',
    href: '#what-i-do',
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
    label: 'Tailwind Css',
    icon: LogoTailwindCss,
  },
  {
    label: 'Shadcn',
    icon: LogoShadcn,
  },
  {
    label: 'Vercel',
    icon: LogoVercel,
  },
  {
    label: 'Vercel AI Elements',
    icon: LogoVercelAIElements,
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
    label: 'Figma / Figma Make / Figma MCP',
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
    label: 'Firebase',
    icon: LogoFirebase,
  },
  {
    label: 'Cursor',
    icon: LogoCursor,
  },
];

export const PROJECTS = [
  {
    name: 'Fiskil',
    link: 'Fiskil',
    description:
      'Fiskil is an enterprise data-sharing platform serving finance and energy institutions across multiple markets (US, UK, AU).',
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
    modalContent: {
      role: 'Senior Frontend Developer & UX Engineer',
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Multi-Product and Multi-Team Fintech Platform
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Led frontend and UX of the Fiskil Console - unifying two products (each with multiple teams) - into a single dashboard that streamlined workflows, centralized data, and improved feature accessibility.
              </li>
              <li>
                Built complex central state management using React Context + React Query, optimizing API calls, caching, and load performance across multiple products and teams.
              </li>
              <li>
                Implemented RBAC (Role-Based Access Control) to give each user role access to the right features without friction across multiple products and teams.
              </li>
              <li>
                Built Firebase authentication with MFA and onboarding flows, ensuring secure and seamless access for all users.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              UX Leadership & Problem-Solving
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Took high-level requirements and turned them into fully designed
                features, making critical UX decisions that balanced user needs,
                technical constraints, and business goals
              </li>
              <li>
                Leveraged AI tools (Cursor, Figma Make) to prototype and
                validate UX decisions quickly, helping team move fast and
                ensuring informed product choices before engineering investment
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Design System & Scalable Infrastructure
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Built and owned a company-wide design system / component library{' '}
                used across all products and teams, establishing UI consistency
                and reducing development time by ~30%
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Documentation, Blog & Marketing
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Designed and implemented the blog using a CMS and created
                comprehensive multi-product documentation - not just as a
                developer, but owning the complete experience from UX design to
                implementation
              </li>
              <li>
                Built the marketing website with region-specific rendering (US,
                UK, AU), internationalization (i18n), and advanced SEO
                optimizations for both search engines and LLMs
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Leadership & Strategic Execution
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Led UX, UI, and frontend engineering decisions company-wide,
                collaborating directly with the CEO, product managers,
                designers, and backend engineers to shape product direction
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  },
  {
    name: 'Lantern',
    link: 'Lantern',
    description:
      'Lantern is a data-heavy B2B & AI platform that helps sales teams close deals faster by consolidating customer data, prospect information, and intent signals into a unified interface.',
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
    modalContent: {
      role: 'Frontend Developer & UI Lead',
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Data heavy B2B Platform
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Built a visually complex data-heavy B2B dashboard supporting
                three distinct user roles, each with tailored views,
                permissions, and workflows
              </li>
              <li>
                One of the most component-dense and visually complex platforms
                I&apos;ve worked on
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              AI & Data Visualization
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Built AI chat interface for the platform, integrating AI-powered features via the OpenAI API to enhance key workflows.
              </li>
              <li>
                Built a highly customizable, UI-dense core table system for
                large datasets, featuring rich cell layouts and interactions,
                optimized with TanStack Table + React Query and virtualization.
              </li>
              <li>
                Built data visualizations using Recharts(D3 charts wrapper) to
                make complex data actionable
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Design System & Leadership
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Built a scalable design system with multiple component variants
                tailored for a data-heavy platform
              </li>
              <li>
                Led 3 junior developers as UI lead while remaining hands-on with
                architecture and core components
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Marketing</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Built Lantern&apos;s initial marketing website, establishing
                their public-facing presence
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
      challenges:
        'Handling and displaying large amounts of customer data efficiently while maintaining a smooth user experience required careful optimization and lazy loading strategies.',
      outcome:
        'Improved page load times by 40% and increased user engagement by 35%.',
    },
  },
  {
    name: 'Mokoboko',
    link: 'Mokoboko',
    description:
      'A Pilates booking platform for users to book classes and manage appointments, paired with a multi-tenant admin portal that lets businesses customize branding, availability, and settings across clients.',
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
    modalContent: {
      role: 'Full Stack Developer',
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Admin & Multi-Tenant Platform
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Built a multi-tenant admin portal enabling multiple businesses
                to use the same booking app with their own branding, settings,
                and configurations
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              End-User Booking Application
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Developed a full-stack Pilates booking app using Next.js with a
                custom Calendly-style calendar for selecting and booking time
                slots
              </li>
              <li>
                Integrated Acuity&apos;s scheduling APIs via Next.js, and
                designed custom payment flows with fallback logic to handle
                cases Acuity&apos;s beta APIs didn&apos;t support, ensuring
                bookings and payments still worked reliably
              </li>
              <li>
                Owned the complete flow end-to-end - from booking UX and
                frontend logic to backend integrations and data handling
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  },
  {
    name: 'Scraye',
    link: 'Scraye',
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
    modalContent: {
      role: 'Frontend Developer & Project Lead',
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Product & Features</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Led the development of an end-to-end application using React and
                MUI, owning the product from initial implementation to delivery
              </li>
              <li>
                Implemented rich, interactive features including 3D house
                viewing, custom calendar integration, and media support (photos
                and videos)
              </li>
              <li>
                Set up and maintained Storybook to document UI components and
                ensure consistency across the project
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Client Collaboration & Business Scope
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Worked directly with a non-technical client for the first time,
                translating business requirements in UK property renting and
                lending into practical product features and UX decisions
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  },
];

export const PERSONAL_PROJECTS = [
  {
    name: 'DSy - Design System made Easy',
    link: 'DSy',
    description:
      'A visual design system builder that lets developers and indie makers define colors, themes, and build components quickly without needing a designer.',
    techs: ['TypeScript', 'Next.js', 'React', 'Tailwind Css', 'Vercel'],
    previewImage: IllustrationDSy, // You can replace with actual image
    color: {
      bgColor: '#e5e5e5',
      borderColor: '#a3a3a3',
    },
    colorClass: {
      bgColor: 'bg-neutral-200',
      borderColor: 'border-neutral-400',
    },
    isDescriptionOnLeft: false,
    href: 'https://dsystudio.xyz',
    modalContent: {
      role: 'Founder',
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Motivation & Problem</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Frustrated with repetitive UI work on client projects - building
                buttons was easy, but dropdowns, checkboxes, and other
                interactive components often slowed me down
              </li>
              <li>
                On one project, no design system or color palette existed, and
                as a UI lover, I realized how critical a well-structured design
                system is for efficiency and consistency
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Solution & Product</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Built Love Dsy, a visual design system builder that lets
                developers and indie makers define colors, themes, and build
                components quickly without needing a designer
              </li>
              <li>
                It simplifies app development, enables devs who don&apos;t know
                design systems, and helps solo founders create beautiful,
                consistent UI in minutes
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Learning & Growth</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Executing my first product from 0 - 1 taught me lessons beyond
                coding: product strategy, UX thinking, marketing, SEO for AI
                tools, copywriting, and designing tools for real-world usability
              </li>
              <li>
                Executing my first product from 0 - 1 taught me lessons beyond
                coding: product strategy, UX thinking, marketing, SEO for AI
                tools, copywriting, and designing tools for real-world usability
              </li>
              <li>
                It showed me the importance of thinking holistically about
                product, not just features
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  },
  {
    name: 'yap - AI Chat Interfaces',
    link: 'Chat Interfaces',
    description:
      'A plug-and-play AI Chat templates built on the Vercel AI SDK.Streaming, errors, loading states - all handled. So you can ship AI products fast.',
    techs: [
      'TypeScript',
      'Next.js',
      'Tailwind Css',
      'Vercel AI Elements',
      'Vercel',
    ],
    previewImage: IllustrationChatInterfaces, // You can replace with actual image
    color: {
      bgColor: '#f4e4ea',
      borderColor: '#e4b2c6',
    },
    colorClass: {
      bgColor: 'bg-rose-100',
      borderColor: 'border-rose-700',
    },
    isDescriptionOnLeft: false,
    href: 'https://aichats.dsystudio.xyz',
    modalContent: {
      role: 'Founder',
      duration: '2024',
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Motivation & Problem</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                An AI product is only as good as its chat experience. If the chat feels jerky, confusing, or unreliable, users lose trust and leave - even if the rest of the product is well built.
              </li>
              <li>
                While building AI chat interfaces, I realised the hardest part isn&apos;t the model or the API, but getting the chat UX right.
              </li>
              <li>
                Smooth streaming with mixed content (text, code, tables), clear loading → streaming transitions, reliable auto-scroll, and proper error states are small details that make or break the experience.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Solution & Product</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                After testing real-world AI chat patterns, I am working on building chat templates that solve what most AI apps need, built with Next.js and the Vercel AI SDK using modern best practices.
              </li>
              <li>
                These templates handle streaming, loading transitions, error states, retries, and auto-scroll out of the box, so users never feel stuck or confused.
              </li>
              <li>
                Plug in your model&apos;s API key and get a production-ready AI chat interface in minutes - without re-solving the same UX problems again.
              </li>
            </ul>
          </div>
        </React.Fragment>


      ),
    },
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
    label: 'Linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/riddhi-limbachiya/',
  },
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
  // {
  //   label: 'Medium',
  //   icon: Medium,
  //   href: 'https://medium.com/@riddhiilimbachiya',
  // },
];
