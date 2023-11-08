import { Box } from '@rocket.chat/fuselage';
import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes, FC } from 'react';
import React from 'react';

import './Card.styles.scss';

const CardHorizontal: FC<Omit<AllHTMLAttributes<HTMLElement>, 'is'>> = ({
  ...props
}) => {
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');

  return (
    <Box
      borderRadius='x8'
      pb={4}
      pi={12}
      display='flex'
      flexDirection={'row'}
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
