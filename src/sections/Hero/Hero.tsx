'use client';

import React from 'react';
import Link from 'next/link';
import main from '../../app/main.module.scss';
import { Box } from '@mui/material';

export const Hero = () => {
  return (
    <header id="home">
      <Box className={`${main.container} ${main.container__flexCenter}`}>
        <div className="hero__title">
          <h4>Hey! I&apos;m</h4>
          <h1>Klaudia</h1>
          <h3>Web developer and designer</h3>
        </div>
        <Link
          className="order-2"
          href="/Resume__Klaudia_Olczyk.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="resume-btn-border"></span>See my resume
        </Link>
      </Box>
    </header>
  );
};
