import React from 'react';
import { List } from '@mui/material';
import { theme } from '@/utils/theme';

interface Props {
  children: React.ReactNode;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  position?: string;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
}

export const FlexList = ({
  children,
  flexDirection = 'column',
  justifyContent = 'space-evenly',
  alignItems = 'center',
  position = 'fixed',
  backgroundColor = theme.palette.background.default,
  width = 62,
  height = '100dvh',
}: Props) => {

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        textAlign: 'center',
        position: position,
        backgroundColor: backgroundColor,
        left: 0,
        width: width,
        height: height,
      }}
    >
      {children}
    </List>
  );
};
