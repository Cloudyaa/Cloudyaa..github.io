import { useEffect, useState } from 'react';

export const useViewport = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const breakpointDesktop = 800;
  const breakpointMobile = 420;
  useEffect(() => {
    const handleWindowResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { viewportWidth, breakpointDesktop, breakpointMobile };
};
