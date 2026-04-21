'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import Typography from '@/components/general/typography';
import Skill from '@/components/general/skill';
import { JOURNEY_SKILLS } from '@/lib/data';

const Journey = () => {
  const skills = JOURNEY_SKILLS;

  return (
    <motion.section
      className="bg-zinc-50 w-full flex justify-center"
      id="what-i-do"
      initial={{ opacity: 0, y: 4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}>
      <div className="flex max-w-3xl py-24 px-4 flex-col gap-12 justify-center items-center max-md:py-16">
        <Typography
          variant="h2"
          className="uppercase w-full flex justify-center">
          WHAT I BRING TO THE TABLE
        </Typography>
        <div className="flex flex-col gap-10">
          {/* Intro */}
          <div className="flex flex-col gap-3">
            <Typography variant="body1">
              I&apos;ve spent 7+ years taking products from 0→1 - UX, frontend, with recent work on AI integrations.
            </Typography>
          </div>

          {/* What that looks like */}
          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold text-zinc-900">
              What that looks like
            </Typography>

            <ul className="list-disc list-inside space-y-2 ml-3 text-base">
              <li>
                You describe the vision. I design the user experience and figure out how it should work.
              </li>
              <li>
                I build it in Next.js, React, TypeScript - modern UI with animations and micro-interactions that make product feel effortless.
              </li>
              <li>
              I integrate AI to genuinely improve products - shaping how humans and AI collaborate through smart interfaces, search, automation, not just slapping a chatbot on the side.
              </li>
              <li>
              Create design systems - reusable components and patterns that improve consistency and speed up development
              </li>
              <li>
              Own how users discover and use the product - build/improve website, blog, and product through analytics, SEO, and continuous iteration
              </li>
            </ul>
          </div>

          {/* Things I've built */}
          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold text-zinc-900">
              Things I&apos;ve built
            </Typography>

            <ul className="list-disc list-inside space-y-2 ml-3 text-base">
              <li>
                <Link
                  href="https://aichats.dsystudio.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-zinc-200 font-semibold">
                  yap!
                </Link>
                {' '}- AI chat interfaces, ready to use.
              </li>
              <li>
                <Link
                  href="https://dsystudio.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-zinc-200 font-semibold">
                  DSy
                </Link>
                {' '}- Design system builder for products.
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <Typography variant="body1">
              Tech, frameworks, and tools I work with:
            </Typography>

            <div className="flex gap-3 flex-wrap">
              {skills.map((skill) => (
                <Skill key={skill.label} icon={skill.icon} label={skill.label} variant="md" />
              ))}
            </div>
          </div>

          {/* Footer */}
          <Typography variant="body1">
            Building something? Tell me the problem/vision. I&apos;ll figure out the rest.
          </Typography>
        </div>
      </div>
    </motion.section>
  );
};

export default Journey;
