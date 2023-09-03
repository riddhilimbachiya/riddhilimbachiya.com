import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

export type LinkProps = {
  label: string;
  href: string;
  variant?: string;
};

const Link = ({ label, href, variant = 'light' }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={twMerge(
        'w-max text-base',
        variant === 'light'
          ? 'text-zinc-950 hover:underline hover:text-zinc-950 hover:underline-offset-4 hover:decoration-zinc-200 active:text-zinc-950'
          : 'text-white hover:underline hover:text-zinc-200 hover:underline-offset-4 hover:decoration-zinc-200 active:text-white'
      )}>
      {label}
    </NextLink>
  );
};

export default Link;
