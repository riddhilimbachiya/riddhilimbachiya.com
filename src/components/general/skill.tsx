import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Typography from './typography';

type SkillProps = {
  variant?: 'sm' | 'md';
  label: string;
  icon: StaticImageData;
};

const Skill = ({ variant = 'sm', label, icon }: SkillProps) => {
  return (
    <div
      className={`px-2 flex gap-2 border border-zinc-200 rounded ${
        variant === 'sm' ? 'py-0.5' : 'py-1'
      }`}>
      <Image src={icon} alt={label} />
      <Typography variant={variant === 'sm' ? 'body2' : 'body1'}>
        {label}
      </Typography>
    </div>
  );
};

export default Skill;
