'use client';
import { NAV_LINKS } from '@/lib/data';
import Link, { LinkProps } from '../navigation/link';
import { Menu, Xmark } from 'iconoir-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '../navigation/drawer';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
          <Link
            label={'Beyond the Bio'}
            href={'beyond-bio'}
            className="max-md:hidden"
          />

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
                    <li key={link.label} className="py-2">
                      <Link label={link.label} href={link.href} />
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
