import React from 'react';

import Typography from '@/components/general/typography';
import Skill from '@/components/general/skill';
import { SKILLS } from '@/lib/data';

const Journey = () => {
  const skills = SKILLS.filter((skill) => skill.label !== 'Redux');

  return (
    <section className="bg-zinc-50 w-full flex justify-center" id="journey">
      <div className="flex max-w-3xl py-24 px-4 flex-col gap-12 justify-center items-center max-md:py-16">
        <Typography
          variant="h2"
          className="uppercase w-full flex justify-center">
          A BIT &apos;BOUT MY JOURNEY
        </Typography>
        <div className="flex flex-col gap-8">
          <Typography variant="body1">
            I&apos;m a freelance frontend developer based in Ahmedabad, India,
            with almost 6 years of experience. My journey started at an MNC,
            then I moved to a startup where I had the chance to build some cool
            projects that taught me a ton. I began with JavaScript, built apps
            using Angular, and then switched to React, where I had the
            opportunity to work on projects from scratch that really shaped my
            skills in JS and UI development. I don&apos;t dive into the back-end
            too often, but in case you&apos;re wondering, I know Node.js,
            Express & MongoDB. Just a peek behind the curtain!
            <br />
            <br /> I&apos;ve always been passionate about working on projects
            that push me to grow, learn new things, and collaborate with amazing
            people. This led me to take the leap into freelancing, where
            I&apos;ve had the chance to work with awesome clients. Right now,
            I&apos;m working with a cool startup, building sleek UIs with
            Next.js, Typescript, Tailwind and more.
          </Typography>
          <div className="flex flex-col gap-4">
            Here&apos;s some tech and frameworks I love and work with:
            <div className="flex gap-3 flex-wrap">
              {skills.map((skill) => (
                <React.Fragment key={skill.label}>
                  <Skill icon={skill.icon} label={skill.label} variant="md" />
                </React.Fragment>
              ))}
            </div>
          </div>
          <Typography variant="body1">
            <span className="font-semibold text-zinc-900">Fun fact:&nbsp;</span>
            I&apos;ve been learning Figma just for fun, mainly to create
            templates and get a feel for how the tool works. It&apos;s been a
            great way to boost my creativity and help me design UIs more
            intuitively. One day, I thought, what better way to apply my Figma
            knowledge than by designing my own portfolio? And here it is - my
            very first Figma project! 🧨
            <br />
            <br />
            Learning advanced TypeScript is something I&apos;m working on, and I
            try to dedicate time to it whenever I can.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Journey;
