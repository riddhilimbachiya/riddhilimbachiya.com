import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import Typography from '@/components/general/typography';
import { twMerge } from 'tailwind-merge';

type SkillProps = {
  variant?: 'sm' | 'md';
  label: string;
  icon: StaticImageData;
};

const Skill = ({ variant = 'sm', label, icon }: SkillProps) => {
  return (
    <div className={twMerge('flex gap-2 border border-zinc-200 rounded py-1', variant === 'sm' ? 'text-xs px-2' : 'text-base px-2')}>
      <Image src={icon} alt={label} />
      {label}
    </div>
  );
};

export default Skill;
