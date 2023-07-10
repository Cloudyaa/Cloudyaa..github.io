import React from 'react';
import { Box } from '@mui/material';
import { Links } from '@/components/Navigation/Links';
import '../../../styles/_palette.scss';

export const DesktopNav = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: 'var(--background-nav)',
          position: 'fixed',
          left: 0,
          width: 62,
          height: '100vh',
        }}
      >
        <Links type="icon" />
      </Box>
    </>
  );
};
