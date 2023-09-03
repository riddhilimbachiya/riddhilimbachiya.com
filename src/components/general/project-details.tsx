'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

import { SKILLS } from '@/lib/data';
import Typography from '@/components/general/typography';
import Skill from '@/components/general/skill';

type ProjectDetailsProps = {
  name: string;
  description: string;
  techs?: string[];
  isDescriptionOnLeft: boolean;
  image: StaticImageData;
  color: string;
};

const ProjectDetails = ({
  name,
  description,
  techs,
  isDescriptionOnLeft,
  image,
  color,
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
    <div className="flex justify-between w-full items-center">
      <div
        className={`${twMerge(
          color,
          'flex justify-center rounded-[50px] max-w-[700px] px-20 py-16',
          isDescriptionOnLeft ? 'order-1' : 'order-0',
          isDescriptionOnLeft ? 'rounded-bl-none' : 'rounded-br-none'
        )}`}>
        <Image src={image} alt="" />
      </div>
      <div
        className={twMerge(
          isDescriptionOnLeft ? 'order-0 justify-end' : 'order-1',
          'flex flex-col gap-8 max-w-md'
        )}>
        <Typography variant="h3">{name}</Typography>
        <div className="flex flex-col gap-6">
          <Typography variant="body1">{description}</Typography>
          <div className="flex gap-2 flex-wrap">
            {filteredTechs.map((tech: any) => (
              <Skill label={tech.label} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
