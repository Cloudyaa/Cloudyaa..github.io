import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { theme } from '@/utils/theme';

interface MobileToolbarProps {
  isOpen: boolean;
  handleShow: () => void;
}

export const MobileToolbar = ({ isOpen, handleShow }: MobileToolbarProps) => (
  <AppBar
    position={'fixed'}
    sx={{ backgroundColor: theme.palette.background.default, boxShadow: 'none' }}
  >
    <Toolbar sx={{ justifyContent: 'right' }}>
      <IconButton sx={{ display: { md: 'none', xs: 'block' } }} onClick={handleShow}>
        {isOpen ? (
          <Close sx={{ color: theme.palette.primary.main }} />
        ) : (
          <Menu sx={{ color: theme.palette.primary.main }} />
        )}
      </IconButton>
    </Toolbar>
  </AppBar>
);
