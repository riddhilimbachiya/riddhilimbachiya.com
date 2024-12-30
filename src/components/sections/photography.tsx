import Image from 'next/image';

import { PHOTOS } from '@/lib/data';
import Typography from '../general/typography';

const Photography = () => {
  return (
    <section className="w-full py-24 px-10 flex flex-col gap-16 items-center max-md:py-16 justify-center">
      <div className="flex flex-col justify-center gap-4 items-center max-w-7xl px-8">
        <Typography variant="h2" component="h2">
          PHOTOGRAPHY
        </Typography>
        <Typography variant="body1" className="text-center">
          Explore a mix of moments that catch my eye – from candid shots to
          peaceful landscapes. It’s all about seeing things from a fresh
          perspective. Dive in and enjoy!
        </Typography>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {PHOTOS.map((photo) => (
          <Image
            src={photo.photo}
            alt={photo.alt}
            key={photo.alt}
            width={590}
          />
        ))}
      </div>
    </section>
  );
};

export default Photography;
