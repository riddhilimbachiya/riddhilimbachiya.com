'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { TocItem } from '@/lib/blog';

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    const headings = document.querySelectorAll('h2[id], h3[id], h4[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-28" aria-label="Table of contents">
      <p className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-wider">
        On This Page
      </p>
      <ul className="flex flex-col gap-2 text-sm min-w-[200px]">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={twMerge(
                'block leading-relaxed transition-colors duration-150',
                item.level === 3 && 'pl-4',
                item.level === 4 && 'pl-8',
                activeId === item.id
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              )}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
