'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { navLinks } from '@/components/Navigation/navLinks';
import { LinkStyled } from '@/components/Navigation/styled/Link.styled';
import { TooltipStyled } from '@/components/Navigation/styled/Tooltip.styled';

interface Props {
  type: 'icon' | 'text';
}

export const Links = ({ type }: Props) => {
  const params = useParams();

  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(window.location.hash);
  }, [params]);

  return (
    <>
      {navLinks.map((link) => {
        const isActive = path === link.href;
        return (
          <>
            {type === 'icon' ? (
              <TooltipStyled title={link.name} placement="right" arrow key={link.name}>
                <LinkStyled className={isActive ? 'active' : ''} href={link.href}>
                  {link.icon}
                </LinkStyled>
              </TooltipStyled>
            ) : (
              <LinkStyled className={isActive ? 'active' : ''} href={link.href}>
                {type === 'text' ? link.name : link.icon}
              </LinkStyled>
            )}
          </>
        );
      })}
    </>
  );
};
