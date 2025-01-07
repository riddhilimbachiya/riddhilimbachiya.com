import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import Header from '@/components/layout/header';

const montserrat = Montserrat({ subsets: ['latin'] });

const title = 'Riddhi Limbachiya | Frontend Developer From India.';
const description =
  'A curiosity driven frontend developer with design chops, from Ahmedabad, India.';
const url = 'https://riddhilimbachiya.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ['Frontend Developer', 'React Developer', 'Next.js Developer'],
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
        className={`${montserrat.className} flex justify-center w-full flex-col`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
