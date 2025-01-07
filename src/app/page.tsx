import Head from 'next/head';

import AboutMe from '@/components/sections/journey';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Testimonials from '@/components/sections/testimonials';
import Work from '@/components/sections/work';
import Companies from '@/components/general/companies';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <meta property="og:image" content="/images/open-graph-riddhi.png" />
      </Head>
      <Hero />
      <AboutMe />
      <Work />
      <Testimonials />
      <Companies />
      <Footer />
    </main>
  );
}
