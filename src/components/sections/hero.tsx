import Image from 'next/image';
import Riddhi from '/public/images/Riddhi.jpg';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';

const Hero = () => {
  return (
    <div className="w-full py-24 px-20 flex justify-center">
      <div className="w-full max-w-[1120px] px-8 flex justify-between items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Typography variant="body1">Heyyo👋, I'm</Typography>
              <Typography variant="h1">RIDDHI LIMBACHIYA</Typography>
            </div>
            <div className="flex gap-1 flex-col">
              <Typography variant="body1">
                A curiosity driven frontend developer with design chops 🎨.
              </Typography>
              <Typography variant="body1">
                I believe its OK to be you, You is dope.!😉
              </Typography>
            </div>
          </div>
          <Link label="Reach me" href="" />
        </div>
        <div className="max-w-[400px] max-h-[450px] overflow-hidden rounded-[168px] rounded-bl">
          <Image src={Riddhi} alt="Riddhi's photo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
