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
import LogoFramerMotion from "/public/icons/icon-framer-motion.svg";
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
import Link from "next/link";

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
    label: "Framer Motion",
    icon: LogoFramerMotion,
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
    label: "Framer Motion",
    icon: LogoFramerMotion,
  },
  {
    label: "Storybook",
    icon: LogoStorybook,
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
    label: "Vercel",
    icon: LogoVercel,
  },
  {
    label: "Firebase",
    icon: LogoFirebase,
  },
  {
    label: "Node.js",
    icon: LogoNodejs,
  },
  {
    label: "Figma",
    icon: LogoFigma,
  },
  {
    label: "Cursor",
    icon: LogoCursor,
  },
];

export const PROJECTS = [
  {
    name: "Fiskil",
    link: "Fiskil",
    description:
      "B2B fintech platform. From UX flows to code - RAG powered AI assistant, complex multi-product multi-team fintech dashboard, a multi-region marketing site, and a design system.",
    roleHTML: (
      <Typography variant="body2" className="text-zinc-500 text-sm">
        <span>Senior Product Engineer &nbsp;</span>
        {/* <span>
    (Design · Frontend · AI integrations)
    </span> */}
      </Typography>
    ),
    techs: [
      "Figma",
      "Next.js",
      "TypeScript",
      "Tailwind Css",
      "Framer Motion",
      "Storybook",
      "Firebase",
      "Vercel AI SDK",
      "Cypress",
      "Jest",
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
      role: "Product Engineer (UX, Frontend & AI integrations)",
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">AI Integration</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">RAG-powered assistant</span> -
                Design & built end-to-end: real-time conversational UI with
                streaming responses, states, and animations on top of a full RAG
                pipeline and agent.
              </li>
              <li>
                <span className="font-semibold">Docs Assistant</span> -
                Developers query product docs, API guides, and knowledge bases
                in plain language and get instant answers.
              </li>
              <li>
                <span className="font-semibold">Support Assistant</span> -
                Answers common questions instantly and auto-creates support
                tickets when needed.
              </li>
              <li>
                Currently in internal use.{" "}
                <Link
                  href="https://drive.google.com/file/d/1DQo5eV1_fEOunCQ9wUkgUb95vaJqr1pV/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 4ecoration-1 hover:decoration-2 cursor-pointer decoration-zinc-200"
                >
                  Watch the demo →
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              UX Design, UI &amp; Animations
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">UX design</span> - Turned rough
                requirements into clear, intuitive flows - defining user
                journeys, interactions, and overall product experience, working
                closely with the CEO.
              </li>
              <li>
                <span className="font-semibold">UI build</span> - Built
                responsive, pixel-perfect interfaces with Tailwind and scalable
                components across every product.
              </li>
              <li>
                <span className="font-semibold">
                  Animations &amp; interactions
                </span>{" "}
                - Designed and built micro-interactions, smooth transitions, and
                animations that makes the product feel alive and effortless.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Frontend &amp; Platform Engineering
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">B2B Fintech platform</span> -
                Multi-product dashboard with two products, multi-team
                architecture, three-tier role-based access, Firebase auth with
                MFA, role-adaptive onboarding, and Stripe payments.
              </li>
              <li>
                <span className="font-semibold">Core architecture</span> -
                Central app context handling auth, global state, and parallel
                API orchestration across users, teams, products, and
                subscriptions - with caching, error handling, lazy loading, and
                code splitting across dozens of screens.
              </li>
              <li>
                <span className="font-semibold">Customer-facing apps</span> -
                Each product ships its own customer app with multi-step flows,
                built inside a monorepo using shared logic and a reusable
                component library.
              </li>
              <li>
                <span className="font-semibold">Design system</span> -
                Company-wide component library - tokens, patterns, and
                components - shipped as a standalone package used across every
                product. 30% faster dev time.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">
              Website, Blog &amp; Growth
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Multi-region website</span> -
                Built with Next.js for US, UK, AU, and LATAM - region-specific
                content, SSR, accessible responsive UI, and animations.{" "}
                <Link
                  href="https://www.fiskil.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-1 hover:decoration-2 cursor-pointer decoration-zinc-200"
                >
                  See website →
                </Link>
              </li>
              <li>
                <span className="font-semibold">Blog &amp; CMS</span> - Designed
                and integrated so the team publishes without a developer.{" "}
                <Link
                  href="https://blog.fiskil.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-1 hover:decoration-2 cursor-pointer decoration-zinc-200"
                >
                  See blog →
                </Link>
              </li>
              <li>
                <span className="font-semibold">SEO &amp; analytics</span> -
                Optimised for Google and AI tools. Tracking and experiments to
                find drop-off, reduce churn, and drive product decisions with
                data.
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
      "Data-heavy B2B sales platform. Built dashboard with complex tables with rich cell layouts and charts for large sales datasets, and an AI email composer to help sales teams personalise outreach.",
    techs: ["TypeScript", "React", "Tailwind Css", "Framer Motion"],
    roleHTML: (
      <Typography variant="body2" className="text-zinc-500 text-sm">
        <span>Frontend Developer & UI Lead &nbsp;</span>
        {/* <span>  
  (Frontend · AI)
  </span> */}
      </Typography>
    ),
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
      "Pilates booking app with multi-tenant admin portal. Owned everything - booking UX, custom calendar, payment flows, backend integrations, and multi-business configuration.",
    techs: ["TypeScript", "Next.js", "Tailwind Css"],
    roleHTML: (
      <Typography variant="body2" className="text-zinc-500 text-sm">
        <span>Full Stack Developer &nbsp;</span>
        {/* <span>  
  (UI · Frontend · Backend)
  </span> */}
      </Typography>
    ),
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
      "UK property renting and lending platform. Built 3D house viewing, custom calendar, and media support - leading a team of 8 to translate non-technical client requirements into product decisions.",
    roleHTML: (
      <Typography variant="body2" className="text-zinc-500 text-sm">
        <span>Frontend Developer & Project Lead &nbsp;</span>
        {/* <span>  
    (UI · Frontend)
    </span> */}
      </Typography>
    ),
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
    name: "yap - AI Chat Interfaces",
    link: "Chat Interfaces",
    description:
      "Production-ready AI chat templates - plug in your API key and ship in minutes.",
    techs: [
      "TypeScript",
      "Next.js",
      "Tailwind Css",
      "Vercel AI Elements",
      "Vercel",
    ],
    previewImage: IllustrationChatInterfaces,
    color: {
      bgColor: "#EBE5ED",
      borderColor: "#C6B3CF",
    },
    colorClass: {
      bgColor: "bg-purple-100",
      borderColor: "border-purple-700",
    },
    isDescriptionOnLeft: false,
    href: "https://aichats.dsystudio.xyz",
    modalContent: {
      role: "Founder · 2024",
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">How I got here</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">I believe AI is the future</span> -
                every product will have AI in it. And every AI product needs
                a chat interface.
              </li>
              <li>
                <span className="font-semibold">AI can build it - but that's not enough</span> -
                a great chat needs more than just responses. Smooth streaming,
                thoughtful loading states, reliable scroll, proper errors -
                the UX is what makes users trust it.
              </li>
              <li>
                <span className="font-semibold">An AI product is only as good as its chat</span> -
                get that wrong and it doesn't matter how good the model is.
                Users feel it immediately.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">So I built this</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">Plug and play templates</span> -
                production-ready chat interfaces built on Next.js and Vercel
                AI SDK. Add your API key, ship in minutes.
              </li>
              <li>
                <span className="font-semibold">Everything handled</span> -
                streaming, loading, errors, retries, auto-scroll. Built with
                the details that make a chat feel good.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">Where it's at</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                Few interfaces live, website up. Exploring and expanding -
                not sure exactly where it goes but I'm in it.
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  },
  {
    name: "DSy - Design System made Easy",
    link: "DSy",
    description:
      "A visual design system builder - define colours, themes and components in minutes. No designer needed.",
    techs: ["TypeScript", "Next.js", "Tailwind Css", "Vercel"],
    previewImage: IllustrationDSy,
    color: {
      bgColor: "#DEDFEF",
      borderColor: "#ADAFD0",
    },
    colorClass: {
      bgColor: "bg-indigo-100",
      borderColor: "border-indigo-700",
    },
    isDescriptionOnLeft: false,
    href: "https://dsystudio.xyz",
    modalContent: {
      role: "Founder",
      responsibilities: (
        <React.Fragment>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">How I got here</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">I was freelancing across multiple projects</span> -
                some clients had a design system, most had nothing. Every
                time I joined a new project I rebuilt the same components,
                the same colour tokens, the same themes from scratch.
              </li>
              <li>
                <span className="font-semibold">Then I saw the same problem everywhere</span> -
                solo founders and indie makers building products alone had
                no idea how to set up a design system. They'd either skip
                it and ship messy UI or waste days trying to figure it out.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">So I built this</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">A visual design system builder</span> -
                define your colours, themes and components in minutes.
                Consistent, beautiful UI without needing a designer.
              </li>
              <li>
                <span className="font-semibold">Did everything myself</span> -
                built the app, designed the UX, wrote the content, built
                the website, sent prototypes to real developers, spoke to
                people. My first real 0 to 1.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-base mb-1">What happened</h4>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>
                <span className="font-semibold">AI bloomed</span> -
                while I was building, AI changed everything. I could see
                it coming, knew this wouldn't survive it, and made the
                call to shelve it.
              </li>
              <li>
                <span className="font-semibold">Learned more than any client project taught me</span> -
                product thinking, content, talking to users, making hard
                calls. No regrets.
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
