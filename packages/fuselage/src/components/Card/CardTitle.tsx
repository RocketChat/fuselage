import { Box } from '@rocket.chat/fuselage';
import type { ReactNode } from 'react';
import React from 'react';

import { LabelInfo } from '../Label/LabelInfo';

const CardTitle = ({
  children,
  info,
  variant = 'h4',
}: {
  children: ReactNode;
  info?: string;
  variant?: 'h3' | 'h4' | 'h5';
}) => (
  <Box
    fontScale={variant}
    is={variant}
    color='default'
    mie={4}
    display='flex'
    flexDirection='row'
    alignItems='center'
    rcx-card__title
  >
    {children}
    {info && <LabelInfo title={info} />}
  </Box>
);

export default CardTitle;
