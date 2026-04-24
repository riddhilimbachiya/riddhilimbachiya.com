import { Figma, Github, Linkedin, Medium, X } from "iconoir-react";

import LogoJavaScript from "/public/icons/icon-javascript.svg";
import LogoTypeScript from "/public/icons/icon-typescript.svg";
import LogoReact from "/public/icons/icon-react.svg";
import LogoNextjs from "/public/icons/icon-nextjs.svg";
import LogoNodejs from "/public/icons/icon-nodejs.svg";
import LogoExpressjs from "/public/icons/icon-expressjs.svg";
import LogoMongoDB from "/public/icons/icon-mongodb.svg";
import LogoSass from "/public/icons/icon-sass.svg";
import LogoTailwindCss from "/public/icons/icon-tailwindcss.svg";
import LogoFigma from "/public/icons/icon-figma.svg";
import LogoStorybook from "/public/icons/icon-storybook.svg";
import LogoCypress from "/public/icons/icon-cypress.svg";
import LogoFirebase from "/public/icons/icon-firebase.svg";
import LogoRedux from "/public/icons/icon-redux.svg";
import LogoJest from "/public/icons/icon-jest.svg";
import LogoMUI from "/public/icons/icon-mui.svg";

import LogoFiskil from "/public/icons/logo-fiskil.svg";
import LogoShosho from "/public/icons/logo-shosho.svg";
import LogoAccenture from "/public/icons/logo-accenture.svg";
import LogoLantern from "/public/icons/logo-lantern.svg";
import LogoGreenApex from "/public/icons/logo-greenapex.svg";
import LogoVercel from "/public/icons/icon-vercel.svg";
import LogoVercelAIElements from "/public/icons/icon-vercel-ai-elements.svg";
import LogoCursor from "/public/icons/icon-cursor.svg";
import LogoShadcn from "/public/icons/icon-shadcn.svg";
import LogoRAG from "/public/icons/icon-rag.svg";

import IllustrationFiskil from "/public/images/illustration-fiskil.svg";
import IllustrationLantern from "/public/images/illustration-lantern.svg";
import IllustrationMokoboko from "/public/images/illustration-mokoboko.svg";
import IllustrationScraye from "/public/images/illustration-scraye.svg";
import IllustrationDSy from "/public/images/illustration-dsy.svg";
import IllustrationChatInterfaces from "/public/images/illustration-chat-interface.svg";

import AvatarNoren from "/public/images/avatar-noren.png";
import AvatarEugen from "/public/images/avatar-eugen.png";

import Photo1 from "/public/images/photo1.png";
import Photo2 from "/public/images/photo2.png";
import Photo3 from "/public/images/photo3.png";
import Photo4 from "/public/images/photo4.png";
import Photo5 from "/public/images/photo5.png";
import Photo6 from "/public/images/photo6.png";
import Photo7 from "/public/images/photo7.png";
import Photo8 from "/public/images/photo8.png";
import Photo9 from "/public/images/photo9.png";
import Photo10 from "/public/images/photo10.png";
import Photo11 from "/public/images/photo11.png";
import Photo12 from "/public/images/photo12.png";
import Photo13 from "/public/images/photo13.png";
import Photo14 from "/public/images/photo14.png";
import React from "react";
import Typography from "@/components/general/typography";

export const NAV_LINKS = [
  {
    children: "What I Do",
    href: "#what-i-do",
  },
  {
    children: "Work",
    href: "#work",
  },
  {
    children: "Testimonials",
    href: "#testimonials",
  },
  {
    children: "Contact",
    href: "#contact",
  },
];

export const SKILLS = [
  {
    label: "JavaScript",
    icon: LogoJavaScript,
  },
  {
    label: "TypeScript",
    icon: LogoTypeScript,
  },
  {
    label: "React",
    icon: LogoReact,
  },
  {
    label: "Next.js",
    icon: LogoNextjs,
  },
  {
    label: "Tailwind Css",
    icon: LogoTailwindCss,
  },
  {
    label: "Shadcn",
    icon: LogoShadcn,
  },
  {
    label: "Vercel",
    icon: LogoVercel,
  },
  {
    label: "Vercel AI SDK",
    icon: LogoVercelAIElements,
  },
  {
    label: "Vercel AI Elements",
    icon: LogoVercelAIElements,
  },
  {
    label: "RAG",
    icon: LogoRAG,
  },
  {
    label: "Scss",
    icon: LogoSass,
  },
  {
    label: "MUI",
    icon: LogoMUI,
  },
  {
    label: "Figma",
    icon: LogoFigma,
  },
  {
    label: "Storybook",
    icon: LogoStorybook,
  },
  {
    label: "Cypress",
    icon: LogoCypress,
  },
  {
    label: "Jest",
    icon: LogoJest,
  },
  {
    label: "Node.js",
    icon: LogoNodejs,
  },
  {
    label: "Express.js",
    icon: LogoExpressjs,
  },
  {
    label: "MongoDB",
    icon: LogoMongoDB,
  },
  {
    label: "Firebase",
    icon: LogoFirebase,
  },
  {
    label: "Redux",
    icon: LogoRedux,
  },
  {
    label: "Cursor",
    icon: LogoCursor,
  },
];

export const JOURNEY_SKILLS = [
  {
    label: "Next.js",
    icon: LogoNextjs,
  },
  {
    label: "React",
    icon: LogoReact,
  },
  {
    label: "Tailwind Css",
    icon: LogoTailwindCss,
  },
  {
    label: "Shadcn",
    icon: LogoShadcn,
  },
  {
    label: "Vercel AI SDK",
    icon: LogoVercelAIElements,
  },
  {
    label: "RAG",
    icon: LogoRAG,
  },
  {
    label: "Node.js",
    icon: LogoNodejs,
  },
  {
    label: "Firebase",
    icon: LogoFirebase,
  },
  {
    label: "Figma",
    icon: LogoFigma,
  },
  {
    label: "Cursor",
    icon: LogoCursor,
  },
  {
    label: "Vercel",
    icon: LogoVercel,
  },
  {
    label: "Storybook",
    icon: LogoStorybook,
  },
];

export const PROJECTS = [
  {
    name: "Fiskil",
    link: "Fiskil",
    description:
      "Fiskil is a B2B data-sharing platform serving finance and energy institutions across multiple markets (US, UK, AU,LATAM & EU).",
    techs: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind Css",
      "Storybook",
      "Vercel AI SDK",
      "Cypress",
      "Storybook",
      "Jest",
      "Firebase",
    ],
    previewImage: IllustrationFiskil,
    color: {
      bgColor: "#DEDFEF",
      borderColor: "#ADAFD0",
    },
    colorClass: {
      bgColor: "bg-indigo-100",
      borderColor: "border-indigo-700",
    },
    isDescriptionOnLeft: false,
    href: "https://www.fiskil.com/",
    modalContent: {
      role: "Senior Product Engineer - UX, Frontend & AI integrations",
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              RAG-powered Docs & Support AI Assistant
            </h4>
            <Typography className="text-sm" variant="body1">
              Designed and built it end-to-end - from a real-time conversational
              UI (streaming responses, states, animations) to a RAG pipeline and
              agent that automates support ticket creation.
              <br />
              <br />A single system powering two use cases:
            </Typography>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Docs Assistant</span> -
                developers ask questions in plain language, get answers from
                product docs, API guides, and knowledge bases.
              </li>
              <li>
                <span className="font-semibold">Support Assistant</span> -
                answers common questions instantly and auto-creates tickets when
                needed.
              </li>
              <li>
                Currently in internal use, not yet live for users.{" "}
                <a
                  href="https://drive.google.com/file/d/1DQo5eV1_fEOunCQ9wUkgUb95vaJqr1pV/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-500"
                >
                  Watch the demo →
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">UX &amp; Design</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Design process</span> - Turned
                rough requirements into clear, intuitive flows - defining user
                journeys, interactions, and overall product experience.
              </li>
              <li>
                <span className="font-semibold">Build UI</span> - Built
                responsive, pixel-perfect interfaces with scalable components
                and a consistent design system.
              </li>
              <li>
                <span className="font-semibold">Animations & interactions</span>{" "}
                - designed and built animations, micro-interactions, and smooth
                transitions across the platform that makes product feel alive
                and effortless.
              </li>
              <li>
                <span className="font-semibold">Led decisions</span> - Led UX,
                UI, and frontend decisions across products, working closely with
                the CEO.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">B2B Fintech Platform</h4>

            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Multi-product dashboard</span> -
                Designed and built a platform with two products, multi-team
                architecture, three-tier role-based access, Firebase auth with
                MFA, role-adaptive onboarding, and Stripe payments.
              </li>

              <li>
                <span className="font-semibold">Frontend architecture</span> -
                Built the core application foundation with a central app context handling authentication, global state, and parallel API orchestration across users, teams, products, and subscriptions. Designed a scalable API layer with caching, error handling, lazy loading, code splitting, and performance optimization across dozens of screens.
              </li>

              <li>
                <span className="font-semibold">
                  Customer-facing apps
                </span>{" "}
                - Each product has its own customer-facing app with multi-step
                flows, built inside a monorepo using shared logic and a reusable
                codebase across the entire system.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Website, Blog &amp; Growth
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Website</span> - built the
                multi-region site (US, UK, AU, LATAM) with Next.js that has region-specific content per market,
                SSR for fast
                rendering, accessible responsive UI and animations.{" "}
                <a
                  href="https://www.fiskil.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-500"
                >
                  See website →
                </a>
              </li>
              <li>
                <span className="font-semibold">Blog</span> - designed and
                integrated with a CMS so the team publishes without a developer.{" "}
                <a
                  href="https://blog.fiskil.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-500"
                >
                  See blog →
                </a>
              </li>
              <li>
                <span className="font-semibold">SEO</span> - optimized for both
                Google and AI tools.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Design System &amp; Analytics
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Design system</span> - built a
                company-wide system - components, patterns, and tokens - shipped
                as a standalone library used across every product. 30% faster
                dev time.
              </li>
              <li>
                <span className="font-semibold">Analytics</span> - set up
                tracking and experiments to see where users drop off and what to
                fix. Used data to reduce churn and drive product decisions.
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  },
  {
    name: "Lantern",
    link: "Lantern",
    description:
      "Lantern is a data-heavy B2B & AI platform that helps sales teams close deals faster by consolidating customer data, prospect information, and intent signals into a unified interface.",
    techs: ["TypeScript", "React", "Tailwind Css", "Scss"],
    previewImage: IllustrationLantern,
    color: {
      bgColor: "#EBE5ED",
      borderColor: "#C6B3CF",
    },
    colorClass: {
      bgColor: "bg-purple-100",
      borderColor: "border-purple-700",
    },
    isDescriptionOnLeft: false,
    href: "https://www.withlantern.com/",
    modalContent: {
      role: "Frontend Developer & UI Lead",
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Data heavy B2B Platform
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Dashboard</span> - built a
                visually complex data-heavy B2B dashboard supporting three
                distinct user roles, each with tailored views, permissions, and
                workflows.
              </li>
              <li>
                <span className="font-semibold">Density</span> - one of the most
                component-dense and visually complex platforms I&apos;ve worked
                on.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              AI & Data Visualization
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">AI chat</span> - built AI chat
                interface for the platform, integrating AI-powered features via
                OpenAI API to enhance key workflows.
              </li>
              <li>
                <span className="font-semibold">Core table system</span> -
                highly customizable, UI-dense table for large datasets with rich
                cell layouts, optimized with TanStack Table + React Query and
                virtualization.
              </li>
              <li>
                <span className="font-semibold">Data visualizations</span> -
                built charts using Recharts (D3 wrapper) to make complex data
                actionable.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Design System & Leadership
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Design system</span> - built a
                scalable system with multiple component variants tailored for a
                data-heavy platform.
              </li>
              <li>
                <span className="font-semibold">Team lead</span> - led 3 junior
                developers as UI lead while remaining hands-on with architecture
                and core components.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Marketing</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Website</span> - built
                Lantern&apos;s initial marketing website, establishing their
                public-facing presence.
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
      challenges:
        "Handling and displaying large amounts of customer data efficiently while maintaining a smooth user experience required careful optimization and lazy loading strategies.",
      outcome:
        "Improved page load times by 40% and increased user engagement by 35%.",
    },
  },
  {
    name: "Mokoboko",
    link: "Mokoboko",
    description:
      "A Pilates booking platform for users to book classes and manage appointments, paired with a multi-tenant admin portal that lets businesses customize branding, availability, and settings across clients.",
    techs: ["TypeScript", "Next.js", "Tailwind Css"],
    previewImage: IllustrationMokoboko,
    color: {
      bgColor: "#D1D7CE",
      borderColor: "#A8B0A4",
    },
    colorClass: {
      bgColor: "bg-green-100",
      borderColor: "border-green-700",
    },
    isDescriptionOnLeft: true,
    href: "https://mokoboko.xyz/",
    modalContent: {
      role: "Full Stack Developer",
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Admin & Multi-Tenant Platform
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Multi-tenant</span> - built an
                admin portal enabling multiple businesses to use the same
                booking app with their own branding, settings, and
                configurations.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              End-User Booking Application
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Booking app</span> - full-stack
                Pilates booking app using Next.js with a custom Calendly-style
                calendar for selecting and booking time slots.
              </li>
              <li>
                <span className="font-semibold">Payment flows</span> -
                integrated Acuity&apos;s scheduling APIs and designed custom
                payment flows with fallback logic for cases their beta APIs
                didn&apos;t support.
              </li>
              <li>
                <span className="font-semibold">End to end</span> - owned the
                complete flow from booking UX and frontend logic to backend
                integrations and data handling.
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  },
  {
    name: "Scraye",
    link: "Scraye",
    description:
      "Scraye is a housing platform that makes life easier across the UK, seamlessly connecting buyers, renters, owners, and agents. It simplifies selling, renting, and managing properties, all in one place.",
    techs: [
      "TypeScript",
      "React",
      "Redux",
      "Tailwind Css",
      "MUI",
      "Storybook",
      "Cypress",
    ],
    previewImage: IllustrationScraye,
    color: {
      bgColor: "#E2EAEE",
      borderColor: "#B6C1C6",
    },
    colorClass: {
      bgColor: "bg-sky-100",
      borderColor: "border-sky-700",
    },
    isDescriptionOnLeft: true,
    href: "https://www.scraye.com/",
    modalContent: {
      role: "Frontend Developer & Project Lead",
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Product & Features</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Product ownership</span> - led
                end-to-end development using React and MUI, from initial
                implementation to delivery.
              </li>
              <li>
                <span className="font-semibold">Interactive features</span> - 3D
                house viewing, custom calendar integration, and media support
                (photos and videos).
              </li>
              <li>
                <span className="font-semibold">Storybook</span> - set up and
                maintained component documentation to ensure UI consistency
                across the project.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Client Collaboration & Business Scope
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Non-technical client</span> -
                worked directly with the client, translating UK property renting
                and lending requirements into practical product features and UX
                decisions.
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
    name: "DSy - Design System made Easy",
    link: "DSy",
    description:
      "A visual design system builder that lets developers and indie makers define colors, themes, and build components quickly without needing a designer.",
    techs: ["TypeScript", "Next.js", "React", "Tailwind Css", "Vercel"],
    previewImage: IllustrationDSy, // You can replace with actual image
    color: {
      bgColor: "#e5e5e5",
      borderColor: "#a3a3a3",
    },
    colorClass: {
      bgColor: "bg-neutral-200",
      borderColor: "border-neutral-400",
    },
    isDescriptionOnLeft: false,
    href: "https://dsystudio.xyz",
    modalContent: {
      role: "Founder",
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
    name: "yap - AI Chat Interfaces",
    link: "Chat Interfaces",
    description:
      "A plug-and-play AI Chat templates built on the Vercel AI SDK.Streaming, errors, loading states - all handled. So you can ship AI products fast.",
    techs: [
      "TypeScript",
      "Next.js",
      "Tailwind Css",
      "Vercel AI Elements",
      "Vercel",
    ],
    previewImage: IllustrationChatInterfaces, // You can replace with actual image
    color: {
      bgColor: "#f4e4ea",
      borderColor: "#e4b2c6",
    },
    colorClass: {
      bgColor: "bg-rose-100",
      borderColor: "border-rose-700",
    },
    isDescriptionOnLeft: false,
    href: "https://aichats.dsystudio.xyz",
    modalContent: {
      role: "Founder",
      duration: "2024",
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Motivation & Problem</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">UX makes or breaks AI</span> -
                if the chat feels jerky, confusing, or unreliable, users lose
                trust and leave - even if the product is well built.
              </li>
              <li>
                <span className="font-semibold">The hard part</span> - the
                hardest part isn&apos;t the model or API, it&apos;s getting the
                chat UX right.
              </li>
              <li>
                <span className="font-semibold">Details matter</span> - smooth
                streaming with mixed content, clear loading transitions,
                reliable auto-scroll, and proper error states make or break the
                experience.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Solution & Product</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Chat templates</span> - building
                production-ready templates with Next.js and Vercel AI SDK that
                solve what most AI apps need.
              </li>
              <li>
                <span className="font-semibold">Out of the box</span> -
                streaming, loading transitions, error states, retries, and
                auto-scroll handled so users never feel stuck.
              </li>
              <li>
                <span className="font-semibold">Plug and play</span> - add your
                model&apos;s API key and get a production-ready AI chat
                interface in minutes.
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
    name: "Eugen Esanu",
    company: "Founder, Shosho Design",
    testimonial: `“Riddhi is a very good front-end developer. The amount of hard word she put into our Design System (building, maintaining and polishing) is very high. I would recommend her with full confidence on any project that requires a good React developer. We've hired and fired many, but she is of very few that remained with us. We will hire 100% for our next project as she is an amazing addition to any team. Don't skip on her as your next potential hire!”`,
    avatar: AvatarEugen,
  },
  {
    name: "Noren Machelart",
    company: "Product Owner, Scraye",
    testimonial: `“Riddhi has been an incredible asset to our team and a joy to work with. She leads the project with responsibility and initiative, consistently enhancing features and offering thoughtful suggestions. Her ability to explain technical details to non-technical clients and deliver excellent demos on time is remarkable. Always supportive and collaborative, she truly elevates the team's performance. She creates a happy environment around her, and the fun thing is, each team member loves to work with her. I'm grateful to have her on board!”`,
    avatar: AvatarNoren,
  },
];

export const COMPANIESANDCLIENTS = [
  {
    name: "Fiskil",
    logo: LogoFiskil,
  },
  {
    name: "Shosho",
    logo: LogoShosho,
  },
  {
    name: "Accenture",
    logo: LogoAccenture,
  },
  {
    name: "Green Apex",
    logo: LogoGreenApex,
  },
  {
    name: "Lantern",
    logo: LogoLantern,
  },
];

export const FOOTERLINKS = [
  {
    label: "GITHUB",
    href: "",
  },
  {
    label: "FIGMA",
    href: "",
  },
  {
    label: "TWITTER",
    href: "",
  },
  {
    label: "CV",
    href: "",
  },
];

export const BIT_OF_ME = [
  {
    emoji: "🎨",
    text: "I like to draw, paint or read whenever I get the chance.",
  },
  {
    emoji: "💎",
    text: "Antique items and diamonds have my heart. Guess I’m into rare things – just like me😜!",
  },
  {
    emoji: "🌌",
    text: "I find peace and a sense of something bigger and dreamier when I gaze at the night sky.",
  },
  {
    emoji: "😂",
    text: "I’m all about funny videos – I can never stop laughing, even on the second watch.",
  },
  {
    emoji: "📸",
    text: "I take great joy in photography – whether it's capturing the beauty of the world around me, candid moments with loved ones, or simply a portrait of myself. 💖 Every photo holds a memory, preserving the essence of life’s most meaningful moments.",
  },
];

export const PHOTOS = [
  {
    photo: Photo1,
    alt: "London eye",
  },
  {
    photo: Photo2,
    alt: "Isle of sky way",
  },
  {
    photo: Photo3,
    alt: "Paul Cathedral",
  },
  {
    photo: Photo4,
    alt: "Regent Street",
  },
  {
    photo: Photo5,
    alt: "Scott Monument",
  },
  {
    photo: Photo6,
    alt: "Big ben",
  },
  {
    photo: Photo7,
    alt: "Isle of Skye on way",
  },
  {
    photo: Photo8,
    alt: "Durdle door",
  },
  {
    photo: Photo9,
    alt: "Isle of Skye on the go",
  },
  {
    photo: Photo10,
    alt: "Isle of Skye Pod",
  },
  {
    photo: Photo11,
    alt: "Bath Spa Bed",
  },
  {
    photo: Photo12,
    alt: "Bath Spa",
  },
  {
    photo: Photo13,
    alt: "Shards",
  },
  {
    photo: Photo14,
    alt: "Big ben at night",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/riddhi-limbachiya/",
  },
  {
    label: "Github",
    icon: Github,
    href: "https://github.com/riddhilimbachiya",
  },
  {
    label: "Figma",
    icon: Figma,
    href: "https://www.figma.com/community/file/1458512251907556084",
  },
  {
    label: "X",
    icon: X,
    href: "https://x.com/limbachiyariddh",
  },
  // {
  //   label: 'Medium',
  //   icon: Medium,
  //   href: 'https://medium.com/@riddhiilimbachiya',
  // },
];
