import AboutMe from '@/components/sections/journey';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import Testimonials from '@/components/sections/testimonials';
import Work from '@/components/sections/work';
import Companies from '@/components/general/companies';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutMe />
      <Work />
      <Testimonials />
      <Companies />
      <Footer />
    </main>
  );
}
