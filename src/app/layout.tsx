import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';

import './globals.css';
import Header from '@/components/layout/header';
import { PostHogProvider } from '@/components/providers/posthog-provider';

const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const title = 'Riddhi Limbachiya | Product Engineer helping startups ship 0→1 products';
const description =
  'I help startups ship products end-to-end, from UX, frontend to AI-powered interfaces';
const url = 'https://riddhilimbachiya.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ['Frontend Developer', 'Product Engineer', 'UX Designer', 'AI Engineer', 'React Developer', 'Next.js Developer'],
  creator: 'Riddhi Limbachiya',
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/images/open-graph-riddhi.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/open-graph-riddhi.png'],
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
        <PostHogProvider>
          <Header />
          <main>{children}</main>
        </PostHogProvider>
      </body>
    </html>
  );
}
