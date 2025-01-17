import Typography from '@/components/general/typography';
import { BIT_OF_ME } from '@/lib/data';

const AboutMe = () => {
  return (
    <section className="w-full pb-24 pt-16 border-b border-zinc-200 flex justify-center px-4 max-md:py-10">
      <div className="flex flex-col gap-8 max-w-[928px]">
        <Typography variant="h1">Heyyo!</Typography>
        <div className="flex flex-col gap-6">
          <Typography variant="body1">
            It&apos;s Riddhi - bringing the good vibes!🦁
            <br />
            <br />
            A short intro for me would be: I believe in bringing quality to
            every part of life—relationships, experiences, and the work I do 💫.
            I like to think of myself as a creative human that cares about
            details - which, lucky for me, makes me a pretty awesome frontend
            developer too!
            <br />
            <br />
            Although I studied Electronics & Communications, life decided
            I&apos;d be more at home in the IT world, and honestly, I
            couldn&apos;t be happier building cool things every day! 💻
          </Typography>
          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold">
              A little peek into my world
            </Typography>
            <ul className="flex flex-col gap-2">
              {BIT_OF_ME.map((point) => (
                <li className="flex gap-2" key={point.emoji}>
                  <span>{point.emoji}</span>
                  <Typography variant="body1">{point.text}</Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold">
              🧠 Life belief
            </Typography>
            <Typography variant="body1">
              &quot;Genius is knowing when to stop.&quot; - Don&apos;t waste
              your energy on things or people that stir confusion and
              uncertainty. Channel it into what brings clarity, joy, and growth
              - your energy is too precious to be spent elsewhere. 🍁
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
