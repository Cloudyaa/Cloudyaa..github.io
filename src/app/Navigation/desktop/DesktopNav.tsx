import React from 'react';
import { FlexList } from '@/components/List/FlexList';
import { Links } from '@/app/Navigation/Links';
import { COLORS } from '@/values/colors';

export const DesktopNav = () => {
  return (
    <FlexList backgroundColor={COLORS.gray['900']}>
      <Links type="icon" />
    </FlexList>
  );
};
