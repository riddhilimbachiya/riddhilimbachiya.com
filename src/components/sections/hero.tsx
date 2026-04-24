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
              <div className="relative w-fit">
                <Typography variant="h1" className="uppercase relative z-10">
                  Riddhi Limbachiya
                </Typography>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[60%] overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  transition={{ duration: 0.5, delay: 0.6 }}>
                  <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 600 40"
                    preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="wave1" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="0">
                        <stop offset="0%" stopColor="#ffe2c0" />
                        <stop offset="12%" stopColor="#fcdbee" />
                        <stop offset="25%" stopColor="#d4ddff" />
                        <stop offset="37%" stopColor="#e5e0fe" />
                        <stop offset="50%" stopColor="#ffe2c0" />
                        <stop offset="62%" stopColor="#fcdbee" />
                        <stop offset="75%" stopColor="#d4ddff" />
                        <stop offset="87%" stopColor="#e5e0fe" />
                        <stop offset="100%" stopColor="#ffe2c0" />
                      </linearGradient>
                      <linearGradient id="wave2" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="0">
                        <stop offset="0%" stopColor="#ffe2c0" />
                        <stop offset="12%" stopColor="#fcdbee" />
                        <stop offset="25%" stopColor="#d4ddff" />
                        <stop offset="37%" stopColor="#e5e0fe" />
                        <stop offset="50%" stopColor="#ffe2c0" />
                        <stop offset="62%" stopColor="#fcdbee" />
                        <stop offset="75%" stopColor="#d4ddff" />
                        <stop offset="87%" stopColor="#e5e0fe" />
                        <stop offset="100%" stopColor="#ffe2c0" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <motion.g
                      animate={{ x: [-600, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}>
                      <path
                        d="M0,24 Q100,14 200,26 Q300,34 400,20 Q500,10 600,24 Q700,14 800,26 Q900,34 1000,20 Q1100,10 1200,24 L1200,40 L0,40 Z"
                        fill="url(#wave2)"
                        opacity={0.4}
                      />
                    </motion.g>
                    <motion.g
                      filter="url(#glow)"
                      animate={{ x: [-600, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
                      <path
                        d="M0,22 Q70,6 160,24 Q230,34 300,14 Q380,2 480,28 Q550,36 620,22 Q690,6 780,24 Q850,34 920,14 Q1000,2 1100,28 Q1150,36 1200,22 L1200,40 L0,40 Z"
                        fill="url(#wave1)"
                        opacity={0.9}
                      />
                    </motion.g>
                  </svg>
                </motion.div>
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <Typography variant="body1" className="font-medium">
              Product Engineer who designs🦋!
              </Typography>
              <Typography variant="body1" className="font-medium">
                I believe it&apos;s OK to be you, You is dope!
              </Typography>
            </div>
          </div>
          <Social variant="light" location="hero" />
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
