import type { Metadata } from 'next';

import Journey from '@/components/sections/journey';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Testimonials from '@/components/sections/testimonials';
import Work from '@/components/sections/work';
import PersonalProjects from '@/components/sections/personal-projects';
import Companies from '@/components/general/companies';

export const metadata: Metadata = {
  title: 'Riddhi Limbachiya | Senior Design/Product Engineer | Product Thinking, Design & Code',
  description:
    'Senior Design/Product Engineer with 8 years in B2B SaaS startups. Owns the full product loop — product thinking, UX design, and frontend engineering in React & Next.js. One person, no handoffs. Available for US, UK, AU remote.',
  alternates: { canonical: 'https://riddhilimbachiya.com' },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Journey />
      <Work />
      <PersonalProjects />
      <Testimonials />
      <Companies />
      <Footer />
    </main>
  );
}
