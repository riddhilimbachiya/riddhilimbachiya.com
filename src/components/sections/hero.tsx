import Image from 'next/image';
import Riddhi from '/public/images/riddhi.png';
import RiddhiMobile from '/public/images/riddhi-mobile.png';
import Typography from '@/components/general/typography';
import Social from '../general/social';

const Hero = () => {
  return (
    <section className="w-full py-24 flex justify-center max-lg:py-16 max-lg:pt-0">
      <div className="w-full max-w-[1120px] px-8 flex justify-between items-center max-lg:max-full max-lg:flex-col max-lg:p-4 max-lg:pt-0 max-xl:w-full gap-8">
        <div className="flex flex-col gap-12 max-lg:order-1">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Typography variant="body1" className="font-medium">
                Heyyo👋, I'm
              </Typography>
              <Typography
                variant="h1"
                className="uppercase bg-gradient-to-r from-pink-100 to-sky-100 bg-[length:100%_14px] bg-no-repeat bg-bottom w-fit">
                Riddhi Limbachiya
              </Typography>
            </div>
            <div className="flex gap-1 flex-col">
              <Typography variant="body1" className="font-medium">
                A curiosity driven frontend developer with design chops.🎨
              </Typography>
              <Typography variant="body1" className="font-medium">
                I believe its OK to be you, You is dope.!😉
              </Typography>
            </div>
          </div>
          <Social variant="light" />
        </div>
        <div className="max-w-[400px] max-h-[450px] overflow-hidden rounded-[168px] rounded-bl max-lg:order-0 max-lg:rounded-[40px] max-lg:rounded-bl max-lg:max-w-full w-full max-lg:max-h-[800px]">
          <Image
            src={Riddhi}
            alt="Riddhi's photo"
            className="max-lg:bottom-0 max-lg:hidden"
          />
          <Image
            src={RiddhiMobile}
            alt="Riddhi's photo"
            className="max-lg:flex hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
