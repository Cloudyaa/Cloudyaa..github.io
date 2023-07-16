import React from 'react';
import { Layout } from '@/types';
import { Navigation } from '@/app/Navigation';

export const metadata = {
  title: 'Klaudia Olczyk personal portfolio',
  description: 'Personal portfolio page',
};

const RootLayout = ({ children }: Layout) => {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
