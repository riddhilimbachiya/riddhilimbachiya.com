import { Figma, Github, Medium, X } from 'iconoir-react';
import { twMerge } from 'tailwind-merge';

const SocialIcon = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div
      className="transform transition-transform hover:rotate-12 cursor-pointer"
      title={title}>
      {icon}
    </div>
  );
};

const Social = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  return (
    <div
      className={twMerge(
        'flex gap-5 text-md',
        variant === 'dark' ? 'text-zinc-200' : 'text-zinc-900'
      )}>
      <SocialIcon icon={<Github />} title="Github" />
      <SocialIcon icon={<Figma />} title="Figma" />
      <SocialIcon icon={<X />} title="X" />
      <SocialIcon icon={<Medium />} title="Medium" />
    </div>
  );
};

export default Social;
