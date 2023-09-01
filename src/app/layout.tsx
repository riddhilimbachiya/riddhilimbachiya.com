import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import './globals.css';
import Header from '@/components/layout/header';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Riddhi Limbachiya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} flex justify-center w-full flex-col`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
