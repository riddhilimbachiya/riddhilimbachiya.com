import React from 'react';

import Typography from '@/components/general/typography';
import Skill from '@/components/general/skill';
import { SKILLS } from '@/lib/data';
import Link from 'next/link';

const Journey = () => {
  const skills = SKILLS.filter((skill) => skill.label !== 'Redux');

  return (
    <section className="bg-zinc-50 w-full flex justify-center" id="what-i-do">
      <div className="flex max-w-3xl py-24 px-4 flex-col gap-12 justify-center items-center max-md:py-16">
        <Typography
          variant="h2"
          className="uppercase w-full flex justify-center">
          A BIT ABOUT ME AND WHAT I DO
        </Typography>
        <div className="flex flex-col gap-8">
          <Typography variant="body1">
            I&apos;m a creative frontend developer with about 7 years of
            experience, blending skills in Next.js, React, TypeScript, and
            Tailwind with a solid understanding of UI and UX (and a little
            backend when needed).
            <br /> <br />
            I use this mix to help CEOs, founders, and product teams turn ideas
            into smooth, workable product flows. Even when requirements are
            vague or dropped on me in pieces, I shape them into something that
            makes sense. Tools like Cursor, Figma, and Figma MCP help me
            prototype quickly, test ideas, and guide teams toward confident
            decisions.
            <br /> <br />I also built my own product{' '}
            <Link
              href="https://dsystudio.xyz"
              target="_blank"
              rel="noopener  noreferrer"
              className="underline underline-offset-4 decoration-zinc-200">
              DSy - Design System made Easy
            </Link>{' '}
            , which taught me how a product works end to end - UX,
            design,engineering, copywriting, SEO, and product strategy. That
            experience showed me why thinking beyond &quot;just code&quot; is
            what actually moves a product forward.
            <br /> <br />
            My real strength is bridging product, design, and engineering. I
            understand UX deeply enough to challenge bad flows, UI/frontend well
            enough to build clean, intentional interfaces, and I&apos;m good at
            turning messy inputs into something the team can actually use.
            <br /> In a world where &quot;AI can code anything,&quot; this mix
            of UX instinct, simplification, and real problem-solving makes AI a
            real superpower for me - it actually makes building things fun
            again.
            <br /> <br />
            Currently - I&apos;m building beautiful, fully functional AI chat
            interfaces most AI products need using Vercel AI Elements, with
            visual customization.
          </Typography>
          <div className="flex flex-col gap-4">
            Here&apos;s some tech, frameworks and tools I love and work with:
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
            This portfolio was my very first Figma project (Flexing my UX skills
            too)!🧨
            <br />
            <br />
            If you have an idea or you&apos;re already building a product,
            you&apos;re in the right place✨.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Journey;
