'use client';

import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import {navLinks} from "./navLinks";


export const Navigation = () => {
  const pathname = usePathname();

  return (
      <>
        {navLinks.map(link => {
          const isActive = pathname?.startsWith(link.href);

          return (
              <Link
                  className={isActive ? 'active' : ''}
                  href={link.href}
                  key={link.name}
              >
                {link.name}
              </Link>
          )
        })}
      </>
  );
};
