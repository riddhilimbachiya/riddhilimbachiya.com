import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { COMPANIESANDCLIENTS, FOOTERLINKS } from '@/lib/data';
import Typography from '@/components/general/typography';
import LogoSign from '/public/icons/logo-sign.svg';
import Link from '@/components/navigation/link';

const Footer = () => {
  return (
    <div className="bg-zinc-950 w-full flex flex-col justify-center">
      <div className="py-24 flex flex-col items-center gap-24">
        <div className="flex">
          {COMPANIESANDCLIENTS.map((company, i) => (
            <div
              className={twMerge(
                i === COMPANIESANDCLIENTS.length - 1 ? 'border-r' : '',
                'w-48 h-48 border-zinc-800  border-l border-y flex justify-center items-center'
              )}>
              <Image src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <Typography variant="h3" className="text-white text-center">
            Lets build beautiful, <br />
            meaningful things together.!
          </Typography>
          <Typography variant="body1" className="text-white text-center">
            RIDDHILIMBACHIYA@GMAIL.COM
          </Typography>
          <Image src={LogoSign} alt={"Riddhi's sign"} />
        </div>
      </div>
      <div className="w-full flex justify-center border-t border-zinc-800">
        <div className="w-full max-w-7xl flex justify-between px-8 py-4">
          <Typography variant="body1" className="text-white">
            Copyright 2023 Riddhi Limbachiya ❤️
          </Typography>
          <div className="flex gap-6">
            {FOOTERLINKS.map((link) => (
              <Link label={link.label} href={link.href} variant="dark" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
