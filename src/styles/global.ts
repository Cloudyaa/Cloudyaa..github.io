import { css } from '@emotion/react';
import { theme } from '@/utils/theme';
import { COLORS } from '@/values/colors';

export const globalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth !important;
  }
  body {
    background: ${theme.palette.background.default};
    font-family: 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', sans-serif;
    color: ${COLORS.gray['300']};
    margin: 0;
    padding: 0;
    letter-spacing: 2px;

    a {
      color: inherit;
      text-decoration: none;
      transition: 0.4s ease;
    }

    a:is(.active, :hover) {
      color: ${theme.palette.primary.main};
      filter: drop-shadow(0 0 4px ${theme.palette.primary.main});
    }

    @media (prefers-color-scheme: dark) {
      html {
        color-scheme: dark;
      }
    }
  }
`;
