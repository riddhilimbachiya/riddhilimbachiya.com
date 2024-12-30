import Image from 'next/image';

import { COMPANIESANDCLIENTS } from '@/lib/data';
import { twMerge } from 'tailwind-merge';
import Typography from './typography';
import LogoSign from '/public/icons/logo-sign.svg';
import { Copy, Mail } from 'iconoir-react';
import Link from '../navigation/link';

const Companies = () => {
  return (
    <div
      className="bg-zinc-950 w-full flex flex-col justify-center"
      id="contact">
      <div className="py-24 flex flex-col items-center gap-24 max-md:py-16">
        <div className="flex max-xl:flex-col">
          {COMPANIESANDCLIENTS.map((company, i) => (
            <div
              className={twMerge(
                i === COMPANIESANDCLIENTS.length - 1
                  ? 'border-r'
                  : 'max-xl:border-r max-xl:border-b-0',
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
          {/* <Typography
            variant="body1"
            className="text-white uppercase text-center"> */}
          <Link
            href="mailto:riddhiilimbachiya@gmail.com"
            className="text-white uppercase text-center hover:no-underline"
            variant="dark">
            {' '}
            riddhiilimbachiya@gmail.com
          </Link>
          {/* </Typography> */}
          <Image src={LogoSign} alt={"Riddhi's sign"} />
        </div>
      </div>
    </div>
  );
};
export default Companies;
