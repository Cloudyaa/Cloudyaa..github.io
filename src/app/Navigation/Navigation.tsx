'use client';

import React from 'react';
import { useViewport } from '@/hooks';
import { DesktopNav } from '@/app/Navigation/desktop/DesktopNav';
import { MobileNav } from '@/app/Navigation/mobile/MobileNav';

export const Navigation = () => {
  const { viewportWidth, breakpointDesktop } = useViewport();
  return <nav>{viewportWidth > breakpointDesktop ? <DesktopNav /> : <MobileNav />}</nav>;
};
