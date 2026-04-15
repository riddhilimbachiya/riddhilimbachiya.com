'use client';

import React from 'react';
import posthog from 'posthog-js';

import { twMerge } from 'tailwind-merge';

import Link from '@/components/general/link';
import { SOCIAL_LINKS } from '@/lib/data';

const Social = ({
  variant = 'dark',
  location = 'unknown',
}: {
  variant?: 'dark' | 'light';
  location?: 'hero' | 'footer' | string;
}) => {
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
            externalLink
            onClick={() =>
              posthog.capture('social_click', {
                platform: link.label,
                location,
              })
            }>
            <link.icon />
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Social;
