"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Typography from "@/components/general/typography";
import Skill from "@/components/general/skill";
import { JOURNEY_SKILLS } from "@/lib/data";
import { ArrowUpRight } from "iconoir-react";

const VP = { once: true, amount: 0.06 } as const;
const T = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } as const;

const STEPS = [
  {
    num: "01",
    label: "Plan the feature",
    desc: "I take the vague brief, and turn it into a clear feature plan",
    accent: "#fb923c", // orange
  },
  {
    num: "02",
    label: "Design it",
    desc: "I design it with proper UX-standards, accessible, animations, no Figma handoff",
    accent: "#a78bfa", // violet
  },
  {
    num: "03",
    label: "Senior level engineering",
    desc: "I code it, test it, and ship - scalable, maintainable code",
    accent: "#f472b6", // pink
  },
];

const Journey = () => {
  const reduce = useReducedMotion();
  const from = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 };
  const to = { opacity: 1, y: 0 };
  const skills = JOURNEY_SKILLS;

  return (
    <motion.section
      className="bg-zinc-50 w-full flex justify-center"
      id="what-i-do"
      initial={{ opacity: 0, y: 4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex max-w-3xl w-full py-24 px-4 flex-col gap-12 max-md:py-16">
        <Typography variant="h2" className="uppercase text-center w-full">
          What I Bring to the Table
        </Typography>
        <div className="flex flex-col gap-4">
          {/* bio */}
          <motion.div
            className="flex flex-col gap-4"
            initial={from}
            whileInView={to}
            viewport={VP}
            transition={T}
          >
            <Typography variant="body1">
              I design and build products. 8 years in startups, mostly B2B SaaS
              - started as an engineer, self-taught design 5 years back.
            </Typography>
            <Typography variant="body1">
              Somewhere along the way, I ended up being the product owner, the
              designer, and the engineer - all at once, well before AI made it
              fashionable.
            </Typography>
          </motion.div>

          {/* steps */}
          <div className="flex flex-col">
            <Typography variant="body1" className="w-full mb-4">
              Heres how
            </Typography>

            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative flex gap-4 py-5 pl-5 first:pt-0 [&:not(:first-child)]:mt-3"
                initial={reduce ? false : { opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduce ? 0 : i * 0.18,
                }}
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-0 w-[2px] origin-top"
                  style={{ backgroundColor: step.accent }}
                  initial={reduce ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={VP}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduce ? 0 : i * 0.18,
                  }}
                />
                <div className="flex min-w-0 flex-col gap-1.5">
                  <div className="flex items-baseline gap-2.5">
                    <span
                      className="text-xs font-bold tabular-nums"
                      style={{ color: step.accent }}
                    >
                      {step.num}
                    </span>
                    <span className="text-sm font-semibold text-zinc-900">
                      {step.label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* stack */}
        <motion.div
          className="flex flex-col gap-4"
          initial={from}
          whileInView={to}
          viewport={VP}
          transition={{ ...T, delay: 0.2 }}
        >
          <Typography variant="body1" className="w-full mb-2">
            My go-to tech stack
          </Typography>
          <div className="flex gap-3 flex-wrap">
            {skills.map((skill) => (
              <Skill
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                variant="md"
              />
            ))}
          </div>
        </motion.div>

        {/* cta */}
        <motion.div
          initial={from}
          whileInView={to}
          viewport={VP}
          transition={{ ...T, delay: 0.25 }}
        >
          <Link
            href="#work"
            className="text-sm underline underline-offset-8 decoration-1 hover:decoration-2 decoration-zinc-300 text-zinc-900"
          >
            Here&apos;s what I&apos;ve built
            <ArrowUpRight
              strokeWidth={2.5}
              className="inline-block ml-1 text-zinc-500"
              height={12}
              width={12}
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Journey;
