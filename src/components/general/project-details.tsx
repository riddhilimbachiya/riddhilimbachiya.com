'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import { twMerge } from 'tailwind-merge';
import { ArrowUpRight } from 'iconoir-react';

import { SKILLS } from '@/lib/data';
import Typography from '@/components/general/typography';
import Skill from '@/components/general/skill';

interface PropertyColors {
  borderColor: string;
  bgColor: string;
}
interface ProjectDetailsProps {
  name: string;
  description: string;
  techs?: string[];
  isDescriptionOnLeft: boolean;
  image: StaticImageData;
  color: PropertyColors;
  colorClass: PropertyColors;
  href: string;
}

const Shape = ({ bgColor, borderColor }: PropertyColors) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={418}
      height={298}
      fill="none">
      <mask id={bgColor} fill="#fff">
        <path
          fillRule="evenodd"
          d="M327.134 0c6.308 0 10.359 7.185 8.773 13.29a47.05 47.05 0 0 0-1.509 11.857c0 25.957 21.043 47 47 47 6.671 0 13.016-1.39 18.763-3.895C407.079 65.237 418 69.747 418 77.293V290a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h319.134Z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill={bgColor}
        fillRule="evenodd"
        d="M327.134 0c6.308 0 10.359 7.185 8.773 13.29a47.05 47.05 0 0 0-1.509 11.857c0 25.957 21.043 47 47 47 6.671 0 13.016-1.39 18.763-3.895C407.079 65.237 418 69.747 418 77.293V290a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h319.134Z"
        clipRule="evenodd"
      />
      <path
        fill={borderColor}
        d="m400.161 68.252-.799-1.833.799 1.833Zm-64.254-54.961-1.936-.504 1.936.503Zm.491 11.856c0-3.925.502-7.729 1.444-11.353l-3.871-1.007a49.064 49.064 0 0 0-1.573 12.36h4Zm45 45c-24.852 0-45-20.148-45-45h-4c0 27.062 21.938 49 49 49v-4Zm17.964-3.728a44.843 44.843 0 0 1-17.964 3.728v4a48.845 48.845 0 0 0 19.563-4.062l-1.599-3.666ZM416 77.293V290h4V77.293h-4ZM410 296H8v4h402v-4ZM2 290V8h-4v282h4ZM8 2h319.134v-4H8v4Zm0 294a6 6 0 0 1-6-6h-4c0 5.523 4.477 10 10 10v-4Zm408-6a6 6 0 0 1-6 6v4c5.523 0 10-4.477 10-10h-4ZM400.961 70.085c2.818-1.228 6.666-.97 9.861.536 3.209 1.512 5.178 3.97 5.178 6.672h4c0-4.843-3.492-8.414-7.473-10.29-3.995-1.882-9.066-2.371-13.165-.584l1.599 3.666ZM2 8a6 6 0 0 1 6-6v-4C2.477-2-2 2.477-2 8h4Zm335.842 5.794c.941-3.62.209-7.505-1.666-10.5C334.289.282 331.119-2 327.134-2v4c2.323 0 4.332 1.31 5.652 3.417 1.33 2.125 1.831 4.885 1.185 7.37l3.871 1.007Z"
        mask={`url(#${bgColor})`}
      />
    </svg>
  );
};

const ProjectDetails = ({
  name,
  description,
  techs,
  image,
  color,
  colorClass,
  href,
}: ProjectDetailsProps) => {
  const [filteredTechs, setFilteredTechs] = useState([]);

  const renderTechs = () => {
    let filteredTechsLocal = [] as any;
    filteredTechsLocal = SKILLS.filter((skill) => techs?.includes(skill.label));
    setFilteredTechs(filteredTechsLocal);
  };

  useEffect(() => {
    renderTechs();
  }, []);

  return (
    <div
      className="flex flex-col gap-6 max-w-[420px] max-lg:max-w-xl w-full cursor-pointer group"
      onClick={() => window.open(href, '_blank')}>
      <div className="w-full h-[298px] rounded-lg relative flex justify-center max-lg:hidden">
        <Shape borderColor={color.borderColor} bgColor={color.bgColor} />
        <Image src={image} alt="" className="absolute bottom-0" />
        <div
          className={twMerge(
            'w-[70px] h-[70px] rounded-full flex items-center justify-center absolute -top-2.5 right-0.5 border-2',
            colorClass.bgColor,
            colorClass.borderColor
          )}>
          <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sm group-hover:text-base transform transition">
            <ArrowUpRight color={color.borderColor} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          'w-full h-[298px] rounded-lg border justify-center hidden max-lg:flex',
          colorClass.borderColor,
          colorClass.bgColor
        )}>
        <Image src={image} alt="" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Typography variant="h3" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </div>
        <div className="flex gap-2 flex-wrap">
          {filteredTechs.map((tech: any) => (
            <React.Fragment key={tech.label}>
              <Skill label={tech.label} icon={tech.icon} variant="sm" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
