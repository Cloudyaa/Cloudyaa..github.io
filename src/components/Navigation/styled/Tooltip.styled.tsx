import styled from '@emotion/styled';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const TooltipStyled = styled(({ className, children, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }}>
    {children}
  </Tooltip>
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    border: '2px solid var(--primary)',
    color: 'var(--primary)',
    fontFamily: 'inherit',
    marginLeft: '30px !important',
    marginTop: '-5px !important',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: 'var(--primary)',
  },
}));
