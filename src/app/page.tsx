import AboutMe from '@/components/sections/about-me';
import Hero from '@/components/sections/hero';
import Work from '@/components/sections/work';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutMe />
      <Work />
    </main>
  );
}
