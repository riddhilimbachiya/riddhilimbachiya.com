import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';

import './globals.css';
import Header from '@/components/layout/header';
import { PostHogProvider } from '@/components/providers/posthog-provider';

const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const title = 'Riddhi Limbachiya | Senior Design/Product Engineer | Product Thinking, Design & Code';
const description =
  'Senior Design/Product Engineer with 8 years in B2B SaaS startups. Owns the full product loop — product thinking, UX design, and frontend engineering in React & Next.js. One person, no handoffs. Available for US, UK, AU remote.';
const url = 'https://riddhilimbachiya.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Senior Design/Product Engineer',
    'Design Engineer',
    'Product Engineer who designs',
    'Frontend Engineer who designs',
    'Designer who codes',
    'Full product loop engineer',
    'Product thinking design engineering',
    'React Next.js designer developer',
    'UX engineer',
    'B2B SaaS startup engineer',
    'AI integration engineer',
    'RAG engineer',
    'Design systems engineer',
    'Hire design engineer remote',
    '0 to 1 product engineer',
    'Riddhi Limbachiya',
  ],
  creator: 'Riddhi Limbachiya',
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: 'Riddhi Limbachiya',
    images: [{ url: '/images/open-graph-riddhi.png', width: 1200, height: 630, alt: 'Riddhi Limbachiya – Senior Design/Product Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/open-graph-riddhi.png'],
    creator: '@limbachiyariddh',
  },
  other: {
    'theme-color': '#000000',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Riddhi Limbachiya',
  jobTitle: 'Senior Design/Product Engineer',
  description:
    'Senior Design/Product Engineer with 8 years in B2B SaaS startups. Takes rough requirements, shapes UX, designs interfaces, and builds them in React & Next.js. Full product loop in one person.',
  url: 'https://riddhilimbachiya.com',
  email: 'riddhiilimbachiya@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/riddhi-limbachiya/',
    'https://github.com/riddhilimbachiya',
    'https://x.com/limbachiyariddh',
    'https://www.figma.com/community/file/1458512251907556084',
  ],
  knowsAbout: [
    'Product Design',
    'UX Design',
    'User Interface Design',
    'Frontend Engineering',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Design Systems',
    'Figma',
    'AI Integration',
    'RAG',
    'B2B SaaS',
    'Product Thinking',
    'Feature Specification',
    'Framer Motion',
    'Node.js',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance / Contract – Open to Full-time',
  },
  workLocation: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Senior Design/Product Engineer',
    occupationalCategory: '15-1252.00',
    skills: 'Product Thinking, UX Design, Frontend Engineering, React, Next.js, AI Integration',
  },
  image: 'https://riddhilimbachiya.com/images/riddhi.jpg',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Riddhi Limbachiya',
  url: 'https://riddhilimbachiya.com',
  description:
    'Portfolio of Riddhi Limbachiya — Senior Design/Product Engineer specializing in product thinking, UX design, frontend engineering, and AI integration for B2B SaaS startups.',
};

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Riddhi Limbachiya',
    jobTitle: 'Senior Design/Product Engineer',
    url: 'https://riddhilimbachiya.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${inter.variable} flex justify-center w-full flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <PostHogProvider>
          <Header />
          <main>{children}</main>
        </PostHogProvider>
      </body>
    </html>
  );
}
