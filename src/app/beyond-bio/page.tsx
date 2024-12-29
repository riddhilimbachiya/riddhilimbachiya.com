import Image from 'next/image';

import Riddhi from '/public/images/riddhi-beyond-bio.png';
import Footer from '@/components/sections/footer';
import AboutMe from '@/components/sections/about-me';
import Photography from '@/components/sections/photography';

const BeyondBio = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-full max-md:px-4">
        <Image
          src={Riddhi}
          alt="Riddhi"
          width={928}
          className="max-md:rounded-[40px] max-md:rounded-bl-none"
        />
      </div>
      <AboutMe />
      <Photography />
      <Footer variant="light" />
    </main>
  );
};

export default BeyondBio;
