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
        <div className="flex flex-col gap-10">
          {/* Intro */}
          <div className="flex flex-col gap-3">
            <Typography variant="body1">
              I&apos;m a creative frontend developer with ~7 years of experience,
              working primarily with Next.js, React, TypeScript, and Tailwind, with a
              solid understanding of UI/UX (and just enough backend when needed), product thinking & experience with building AI chat interfaces.
            </Typography>
          </div>

          {/* How you work */}
          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold text-zinc-900">
              What I do 🪄
            </Typography>

            <ul className="list-disc list-inside space-y-1 ml-3 text-base">
              <li>
                I help founders, CEOs, and product teams turn rough ideas into clear,
                smooth, and usable product flows.
              </li>
              <li>
                When requirements are vague or incomplete, I shape them into something
                that makes sense for both users and engineers.
              </li>
              <li>
                Tools like Cursor, Figma, and Figma MCP help me prototype quickly, test
                ideas early, and guide teams toward confident decisions.
              </li>
            </ul>
          </div>

          {/* Side projects */}
          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold text-zinc-900">
              What I&apos;m building independently 💻
            </Typography>

            <Typography variant="body1">
              I&apos;m currently building{' '}
              <Link
                href="https://aichats.dsystudio.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-zinc-200  font-semibold"
              >
                yap! - AI Chat Interfaces
              </Link>
              , a set of AI chat templates built with Next.js,
              Vercel AI SDK, and Vercel AI Elements. These templates focus on smooth
              streaming, loading transitions, error handling, and auto-scroll - the
              details most AI apps struggle with.
            </Typography>

            <Typography variant="body1">
              Earlier, I built{' '}
              <Link
                href="https://dsystudio.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-zinc-200 font-semibold"
              >
                DSy - Design System Made Easy
              </Link>
              , which taught me how important it is to think beyond &quot;just code &quot; and
              understand how a product works end to end - from UX and design to
              engineering, SEO, and product strategy.
            </Typography>
          </div>

          {/* Strength */}
          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold text-zinc-900">
              My real edge 🤠
            </Typography>

            <Typography variant="body1">
              My real strength is bridging product, design, and engineering. I
              understand UX deeply enough to challenge bad flows, frontend well enough
              to build clean and intentional interfaces, and I&apos;m good at turning
              messy inputs into something teams can actually ship.
            </Typography>

            <Typography variant="body1">
              In a world where &quot;AI can code anything,&quot; this mix of UX instinct,
              simplification, and real problem-solving is what makes AI a real
              superpower for me - it makes building products genuinely fun again.
            </Typography>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <Typography variant="body1">
              Here are some of the tech, frameworks, and tools I love working with:
            </Typography>

            <div className="flex gap-3 flex-wrap">
              {skills.map((skill) => (
                <Skill key={skill.label} icon={skill.icon} label={skill.label} variant="md" />
              ))}
            </div>
          </div>

          {/* Footer */}
          <Typography variant="body1">
            <span className="font-semibold text-zinc-900">Fun fact:&nbsp;</span>
            This portfolio was my very first Figma project - flexing my UX skills too 🧨
            <br />
            <br />
            If you have an idea or you&apos;re already building a product, you&apos;re in
            the right place ✨
          </Typography>
        </div>

      </div>
    </section>
  );
};

export default Journey;
