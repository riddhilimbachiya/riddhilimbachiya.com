'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';


export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NODE_ENV === 'production'
    ) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'always',
        autocapture: false,
        capture_pageview: false,
      });
    }
  }, []);

  useEffect(() => {
    if ( typeof window !== 'undefined' &&
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NODE_ENV === 'production') {
      posthog.capture('$pageview', {
        $current_url: window.location.href,
      });
    }
  }, [pathname, searchParams]);

  

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
