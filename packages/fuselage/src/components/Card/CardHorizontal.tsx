import { Box } from '@rocket.chat/fuselage';
import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes } from 'react';
import React from 'react';

const CardHorizontal = (props: Omit<AllHTMLAttributes<HTMLElement>, 'is'>) => {
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');

  return (
    <Box
      borderRadius='x8'
      pb={4}
      pi={12}
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexWrap={isMobile ? 'wrap' : 'nowrap'}
      bg='light'
      color='default'
      rcx-card
      rcx-card__horizontal
      {...props}
    />
  );
};

export default CardHorizontal;
