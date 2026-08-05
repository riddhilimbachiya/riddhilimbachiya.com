import type { Metadata } from 'next';
import Image from 'next/image';

import { ArrowLeft } from 'iconoir-react';

export const metadata: Metadata = {
  title: 'Beyond the Bio | Riddhi Limbachiya — Senior Design/Product Engineer',
  description:
    'The person behind the product work. 8 years in B2B SaaS startups, self-taught designer, frontend engineer, and product thinker. One person who owns the full loop — design, code, and the decisions in between.',
  alternates: { canonical: 'https://riddhilimbachiya.com/beyond-bio' },
  openGraph: {
    title: 'Beyond the Bio | Riddhi Limbachiya — Senior Design/Product Engineer',
    description:
      'The person behind the product work. 8 years in B2B SaaS startups, self-taught designer, frontend engineer, and product thinker. One person who owns the full loop — design, code, and the decisions in between.',
    url: 'https://riddhilimbachiya.com/beyond-bio',
    images: [{ url: '/images/open-graph-riddhi.png', width: 1200, height: 630, alt: 'Riddhi Limbachiya – Senior Design/Product Engineer' }],
  },
};

import Riddhi from '/public/images/riddhi-beyond-bio.png';
import Footer from '@/components/layout/footer';
import AboutMe from '@/components/sections/about-me';
import Photography from '@/components/sections/photography';
import Link from '@/components/general/link';

const BeyondBio = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-full max-md:mx-4 max-md:rounded-[40px] max-md:rounded-bl overflow-hidden">
        <Image
          src={Riddhi}
          alt="Riddhi"
          width={928}
          className="object-cover max-sm:h-[400px]"
        />
      </div>
      <AboutMe />
      <Photography />
      <Footer variant="light" />
      <div className="fixed bottom-10 left-10 max-lg:invisible">
        <Link href="/">
          <div className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center text-white">
            <ArrowLeft height={16} width={16} />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default BeyondBio;
