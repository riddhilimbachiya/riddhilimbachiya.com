import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import Typography from '@/components/general/typography';
import LogoClientLove from '/public/icons/icon-client-love.svg';

type ClientProps = {
  name: string;
  avatar: StaticImageData;
  testimonial: string;
  company: string;
};

const Client = ({ name, avatar, testimonial, company }: ClientProps) => {
  return (
    <div className="w-full max-w-lg flex flex-col gap-6">
      <Image src={LogoClientLove} alt="Client love icon" />
      <Typography variant="body1">{testimonial}</Typography>
      <div className="flex gap-6 items-center">
        <Image src={avatar} alt="" width={70} height={70} />
        <div className="flex flex-col">
          <Typography variant="body1" className="font-semibold">
            {name}
          </Typography>
          <Typography variant="body2">{company}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Client;
