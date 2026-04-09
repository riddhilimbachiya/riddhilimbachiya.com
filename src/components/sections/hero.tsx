'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import Typography from '@/components/general/typography';
import Social from '@/components/general/social';

import Riddhi from '/public/images/riddhi.jpg';

const Hero = () => {
  return (
    <section className="w-full pb-24 pt-16 flex justify-center max-lg:py-16 max-lg:pt-0">
      <div className="w-full max-w-[1120px] px-8 flex justify-between items-center max-lg:max-full max-lg:flex-col max-lg:p-4 max-lg:pt-0 max-xl:w-full gap-8">
        <motion.div
          className="flex flex-col gap-12 max-lg:order-1"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Typography variant="body1" className="font-medium">
                Heyyo👋, I&apos;m
              </Typography>
              <Typography
                variant="h1"
                className="uppercase bg-gradient-to-r from-yellow-50 to-rose-100 bg-[length:100%_14px] bg-no-repeat bg-bottom w-fit">
                Riddhi Limbachiya
              </Typography>
            </div>
            <div className="flex gap-1 flex-col">
              <Typography variant="body1" className="font-medium">
                Product Engineer - UX, Frontend, AI &amp; Growth.
              </Typography>
              <Typography variant="body1" className="font-medium">
                I believe it&apos;s OK to be you, You is dope.!😉
              </Typography>
            </div>
          </div>
          <Social variant="light" />
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-[168px] rounded-bl max-lg:order-0 max-lg:rounded-[40px] max-lg:rounded-bl max-h-[450px] max-md:max-h-auto"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}>
          <Image src={Riddhi} alt="Riddhi's photo" width={400} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
