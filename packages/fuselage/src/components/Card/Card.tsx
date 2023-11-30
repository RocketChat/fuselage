import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes } from 'react';
import React from 'react';

import Box from '../Box/Box';

const Card = ({
  horizontal,
  ...props
}: { horizontal?: boolean } & Omit<AllHTMLAttributes<HTMLElement>, 'is'>) => {
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');

  return (
    <Box
      rcx-card
      rcx-card__horizontal={horizontal}
      rcx-card__vertical={!horizontal}
      rcx-card__horizontal--wrap={horizontal && isMobile}
      {...props}
    />
  );
};

export default Card;
