import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { COMPANIESANDCLIENTS } from '@/lib/data';
import Typography from '@/components/general/typography';
import LogoSign from '/public/icons/logo-sign.svg';
import Link from '@/components/navigation/link';
import Social from '../general/social';

const Footer = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  return (
    <div className="bg-zinc-950 w-full flex flex-col justify-center">
      <div className="py-24 flex flex-col items-center gap-24 max-md:py-16">
        <div className="flex max-xl:flex-col">
          {COMPANIESANDCLIENTS.map((company, i) => (
            <div
              className={twMerge(
                i === COMPANIESANDCLIENTS.length - 1
                  ? 'border-r'
                  : 'max-md:border-r',
                'w-48 h-48 border-zinc-800 border-l border-y flex justify-center items-center'
              )}>
              <Image src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <Typography variant="h2" className="text-white text-center">
            Lets build beautiful, <br />
            meaningful things together.!
          </Typography>
          <Typography
            variant="body1"
            className="text-white uppercase text-center">
            riddhiilimbachiya@gmail.com
          </Typography>
          <Image src={LogoSign} alt={"Riddhi's sign"} />
        </div>
      </div>
      <div className="w-full flex justify-center border-t border-zinc-800">
        <div className="w-full max-w-7xl flex justify-between px-8 py-4 max-md:flex-col max-md:gap-4 max-md:items-center">
          <Typography variant="body1" className="text-white max-md:order-2">
            Copyright {new Date().getFullYear()}
          </Typography>
          <Typography variant="body1" className="text-white max-md:order-0">
            <Link label="Designed" href="/" variant={variant} /> and{' '}
            <Link label="Coded" href="/" variant={variant} /> Riddhi Limbachiya
            ❤️
          </Typography>
          <div className="flex gap-6 max-md:order-1">
            <Social variant={variant} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
