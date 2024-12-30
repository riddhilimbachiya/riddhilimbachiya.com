'use client';

import React from 'react';

import { twMerge } from 'tailwind-merge';

import Link from '@/components/general/link';
import { SOCIAL_LINKS } from '@/lib/data';

const Social = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  return (
    <div
      className={twMerge(
        'flex gap-5 text-md',
        variant === 'dark' ? 'text-zinc-200' : 'text-zinc-900'
      )}>
      {SOCIAL_LINKS.map((link) => (
        <React.Fragment key={link.href}>
          <Link
            className="transform transition-transform hover:rotate-12 cursor-pointer"
            variant={variant}
            href={link.href}
            externalLink>
            <link.icon />
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Social;
