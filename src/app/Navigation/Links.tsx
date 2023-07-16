'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { navLinks } from '@/app/Navigation/content/navLinks';
import { TooltipStyled } from '@/app/Navigation/styled/Tooltip.styled';
import { LinkStyled } from '@/app/Navigation/styled/Link.styled';
import { motion } from 'framer-motion';
import { ListItem as MUIListItem } from '@mui/material';

interface Props {
  type: 'icon' | 'text';
  handleShow?: () => void;
}

const ListItem = motion(MUIListItem);

export const Links = ({ type, handleShow }: Props) => {
  const params = useParams();

  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(window.location.hash);
  }, [params]);

  return (
    <>
      {navLinks.map((link, index) => {
        const isActive = path === link.href;
        return (
          <ListItem
            transition={{ delay: 0.2 * index, duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={link.name}
            sx={{ justifyContent: 'center' }}
          >
            {type === 'icon' ? (
              <TooltipStyled title={link.name} placement="right" arrow>
                <LinkStyled
                  className={link.name !== 'Home' && isActive ? 'active' : ''}
                  href={link.href}
                >
                  {link.icon}
                </LinkStyled>
              </TooltipStyled>
            ) : (
              <LinkStyled
                className={isActive ? 'active' : ''}
                href={link.href}
                onClick={handleShow}
              >
                {type === 'text' ? link.name : link.icon}
              </LinkStyled>
            )}
          </ListItem>
        );
      })}
    </>
  );
};
