'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Menu, Xmark } from 'iconoir-react';

import Link, { LinkProps } from '@/components/general/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/general/drawer';
import { NAV_LINKS } from '@/lib/data';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="flex p-8 justify-center max-lg:px-4 sticky top-0 bg-white z-50">
        <div className="flex max-w-7xl w-full justify-between">
          <p
            className="text-xl font-medium uppercase text-zinc-900 tracking-[1px] cursor-pointer"
            onClick={() => router.push('/')}>
            Riddhi Limbachiya
          </p>

          {isHomePage && (
            <ul className="flex gap-8 max-md:hidden max-lg:gap-4">
              {NAV_LINKS.map((link: LinkProps) => (
                <li key={link.children?.toLocaleString()}>
                  <Link href={link.href}>{link.children}</Link>
                </li>
              ))}
            </ul>
          )}
          <div className="flex gap-8">
            <Link href={'beyond-bio'} className="max-md:hidden">
              Beyond the Bio
            </Link>
          </div>
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild className="flex md:hidden">
              <Menu />
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex items-center justify-between border-b border-zinc-100 p-4 bg-white">
                <p className="text-base font-medium uppercase text-zinc-900 tracking-[1px]">
                  Riddhi Limbachiya
                </p>
                <DrawerClose asChild>
                  <Xmark height={20} width={20} />
                </DrawerClose>
              </div>
              <div className="border-b border-zinc-100 p-4 bg-white h-screen">
                <ul className="flex flex-col gap-2 max-lg:gap-4">
                  {NAV_LINKS.map((link: LinkProps) => (
                    <li key={link.children?.toLocaleString()} className="py-2">
                      <Link href={link.href}>{link.children} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default Header;
