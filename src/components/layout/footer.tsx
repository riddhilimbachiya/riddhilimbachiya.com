import { twMerge } from 'tailwind-merge';

import Typography from '@/components/general/typography';
import Link from '@/components/general/link';
import Social from '@/components/general/social';

const Footer = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  const isDark = variant === 'dark';
  return (
    <footer
      className={twMerge(
        'bg-zinc-950 w-full flex flex-col justify-center',
        isDark ? 'bg-zinc-950 ' : 'bg-white'
      )}>
      <div
        className={twMerge(
          'w-full flex justify-center border-t',
          isDark ? ' border-zinc-800' : ' border-zinc-200'
        )}>
        <div className="w-full max-w-7xl flex justify-between px-4 py-4 max-md:flex-col max-md:gap-4 max-md:items-center">
          <Typography
            variant="body1"
            className={twMerge(
              isDark ? 'text-white' : 'text-zinc-900',
              'max-md:order-2'
            )}>
            Copyright {new Date().getFullYear()}
          </Typography>
          <Typography
            variant="body1"
            className={twMerge(
              'max-md:order-0 text-center',
              isDark ? 'text-white' : 'text-zinc-900'
            )}>
            <Link
              href="https://www.figma.com/@riddhilimbachiy"
              variant={variant}
              withUnderline
              externalLink>
              {' '}
              Designed
            </Link>{' '}
            and{' '}
            <Link
              href="https://github.com/riddhilimbachiya/riddhilimbachiya.com"
              variant={variant}
              withUnderline
              externalLink>
              Coded
            </Link>{' '}
            with ❤️ by Riddhi Limbachiya
          </Typography>
          <div className="flex gap-6 max-md:order-1">
            <Social variant={variant} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
