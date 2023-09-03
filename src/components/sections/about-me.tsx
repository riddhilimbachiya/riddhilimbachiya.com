import Typography from '@/components/general/typography';
import Skill from '../general/skill';
import { SKILLS } from '@/lib/data';

const AboutMe = () => {
  return (
    <div className="bg-zinc-50 w-full flex justify-center">
      <div className="flex max-w-2xl py-24 px-8 flex-col gap-8 justify-center items-center">
        <Typography
          variant="h2"
          className="uppercase w-full flex justify-center">
          A bit 'bout me
        </Typography>
        <div className="flex flex-col gap-6">
          <Typography variant="body1">
            Thanks for stopping by! For past 4 years I have been working as
            frontend developer and designer with various companies.I started my
            career with co-orporate compaines as an employee,then i switched to
            freelancing since 2 years now, enjoying my time as freelancer and
            learning a lot.
          </Typography>
          <Typography variant="body1">
            Currently I work with a cool and exciting company named Fiskil💜 as
            a freelancer from my beautiful country India.Freedom and flexibility
            is what is most prior to me, which is why i enjoy working here.
          </Typography>
          <Typography variant="body1">
            I am also learning Figma nowadays, goal is to become Web designer🪄
            along with developer. I practice with Figma by replicating existing
            websites and also fun qoutes and templates,this is my first website
            I made with Figma by my own.
          </Typography>
          <Typography variant="body1">
            Here’s some tech and frameworks I love and work with:
          </Typography>
          <div className="flex gap-3 flex-wrap">
            {SKILLS.map((skill) => (
              <Skill icon={skill.icon} label={skill.label} variant="md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
