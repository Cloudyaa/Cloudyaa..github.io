'use client';

import React from 'react';
import { useViewport } from '@/hooks';
import { DesktopNav } from '@/components/Navigation/desktop/DesktopNav';
import { MobileNav } from '@/components/Navigation/mobile/MobileNav';

export const Navigation = () => {
  const { viewportWidth, breakpointDesktop } = useViewport();
  return viewportWidth > breakpointDesktop ? <DesktopNav /> : <MobileNav />;
};
