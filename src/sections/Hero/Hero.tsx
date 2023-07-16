'use client';

import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const BoxStyled = styled(Box)`
  padding: 0 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    text-align: unset;
  }
`;

export const Hero = () => {
  return (
    <header id={'home'}>
      <BoxStyled>
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
      </BoxStyled>
    </header>
  );
};
