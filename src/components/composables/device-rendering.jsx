'use client';

import useMediaQuery from '@/lib/hooks/use-media-query';

const MinDeviceRendering = ({ screenSize, children }) => {
  const minDeviceSize = useMediaQuery(`(min-width: ${screenSize})`);
  return <>{minDeviceSize && children}</>;
};

export default MinDeviceRendering;
