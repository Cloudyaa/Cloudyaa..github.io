import styled from '@emotion/styled';
import Link from 'next/link';
import { COLORS } from '@/values/colors';

export const LinkStyled = styled(Link)(() => ({
  alignSelf: 'center',
  fontSize: '1.6rem',
  color: COLORS.gray['500'],
}));
