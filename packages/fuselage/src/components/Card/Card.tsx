import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes } from 'react';
import React from 'react';

import Box from '../Box/Box';

type CardProps = {
  horizontal?: boolean;
  hero?: boolean;
  clickable?: boolean;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

const Card = ({ horizontal, hero, clickable, ...props }: CardProps) => {
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');

  return (
    <Box
      rcx-card
      rcx-card__horizontal={horizontal}
      rcx-card__vertical={!horizontal}
      rcx-card__hero={hero}
      rcx-card__horizontal--wrap={horizontal && isMobile}
      rcx-card__clickable={clickable}
      {...props}
    />
  );
};

export default Card;
