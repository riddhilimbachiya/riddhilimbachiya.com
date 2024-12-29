import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';

export interface LinkProps extends NextLinkProps {
  className?: string;
  externalLink?: boolean;
  withUnderline?: boolean;
  label: string;
  href: string;
  variant?: 'light' | 'dark';
}

const Link = ({
  label,
  href,
  variant = 'light',
  className,
  withUnderline,
}: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={twMerge(
        'w-max text-base',
        className,
        variant === 'light'
          ? 'text-zinc-950 hover:underline hover:text-zinc-950 hover:underline-offset-4 hover:decoration-zinc-200 active:text-zinc-950'
          : 'text-white hover:underline hover:text-zinc-200 hover:underline-offset-4 hover:decoration-zinc-200 active:text-white',
        withUnderline && 'underline underline-offset-4'
      )}>
      {label}
    </NextLink>
  );
};

export default Link;
