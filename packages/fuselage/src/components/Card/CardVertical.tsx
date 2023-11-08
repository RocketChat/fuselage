import { Box } from '@rocket.chat/fuselage';
import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes } from 'react';
import React from 'react';

import './Card.styles.scss';

const CardVertical = (props: Omit<AllHTMLAttributes<HTMLElement>, 'is'>) => {
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');

  return (
    <Box
      borderRadius='x8'
      p={16}
      display='flex'
      flexDirection='column'
      flexWrap={isMobile ? 'wrap' : 'nowrap'}
      bg='light'
      color='default'
      rcx-card
      rcx-card__vertical
      {...props}
    />
  );
};

export default CardVertical;
