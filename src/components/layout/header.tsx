import { NAV_LINKS } from '@/lib/data';
import Link, { LinkProps } from '../navigation/link';
import { Menu } from 'iconoir-react';

const Header = () => {
  return (
    <>
      <header className="flex p-8 justify-center max-lg:px-4">
        <div className="flex max-w-7xl w-full justify-between">
          <p className="text-xl font-medium uppercase text-zinc-900 tracking-[1px]">
            Riddhi Limbachiya
          </p>

          <ul className="flex gap-8 max-md:hidden max-lg:gap-4">
            {NAV_LINKS.map((link: LinkProps) => (
              <li key={link.label}>
                <Link label={link.label} href={link.href} />
              </li>
            ))}
          </ul>
          <Link label={'Beyond the Bio'} href={'/'} className="max-md:hidden" />
          <Menu className="hidden max-md:flex" />
        </div>
      </header>
    </>
  );
};

export default Header;
