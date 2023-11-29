import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes } from 'react';
import React from 'react';

import Box from '../Box/Box';

const CardHorizontal = (props: Omit<AllHTMLAttributes<HTMLElement>, 'is'>) => {
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');

  return (
    <Box
      borderRadius='x8'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexWrap={isMobile ? 'wrap' : 'nowrap'}
      bg='light'
      color='default'
      rcx-card
      rcx-card__horizontal
      rcx-card__horizontal--wrap={isMobile}
      {...props}
    />
  );
};

export default CardHorizontal;
