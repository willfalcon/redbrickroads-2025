'use client';

import NavItem from "./NavItem";
import NavToggler from "./NavToggler";
import { SetStateAction, useState } from 'react';

import { MAIN_NAV_QUERYResult, MenuItem } from "@/sanity.types";

export type ItemProps = MenuItem & {
  _key?: string;
  key?: string;
  className?: string;
  link?: {
    slug: {
      current: string;
    };
  };
  subMenuClasses?: string
};

type NavProps = {mainMenu: MAIN_NAV_QUERYResult};

export default function Nav({ mainMenu }: NavProps) {
  if (!mainMenu) return null;
  
  const [navOpen, setNav] = useState(false);
  const toggleNav = (): void => {
    setNav(!navOpen)
  }

  let navClasses =
    'absolute top-[140px] left-0 w-full max-w-[1000px] bg-blue flex flex-col items-center justify-around h-[calc(100vh-140px)] p-12 transition-all z-0  md:justify-between md:static md:flex-row md:translate-y-0 md:flex-1 md:h-auto md:gap-4';
  if (!navOpen) {
    navClasses += ' translate-y-[-150%]'
  }
  return (
    <>
      <NavToggler navOpen={navOpen} toggleNav={toggleNav} />
      <nav className={navClasses}>
        {mainMenu.map(item => (
          <NavItem key={item._key} {...item} />
        ))}
      </nav>
    </>
  );
} 