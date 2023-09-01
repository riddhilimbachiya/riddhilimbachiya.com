import { NAV_LINKS } from '@/lib/data';
import Link, { LinkProps } from '../navigation/link';

const Header = () => {
  return (
    <>
      <header className="flex p-8 justify-center">
        <div className="flex max-w-7xl w-full justify-between">
          <p className="text-base font-semibold uppercase text-black tracking-[1px]">
            Riddhi Limbachiya
          </p>

          <ul className="flex gap-8">
            {NAV_LINKS.map((link: LinkProps) => (
              <li key={link.label}>
                <Link label={link.label} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
