import React from 'react';
import type { ComponentProps, ReactNode } from 'react';

import Box from '../Box';

type DividerProps = ComponentProps<typeof Box> & {
  variation?: 'danger';
  children?: ReactNode;
};

const Divider = ({ variation, children, ...props }: DividerProps) => {
  if (!children) {
    return (
      <Box
        is='hr'
        rcx-divider
        rcx-divider--danger={variation === 'danger'}
        {...props}
      />
    );
  }
  return (
    <Box rcx-message-divider role='separator' {...props}>
      <div className='rcx-divider__bar' />
      <div className='rcx-divider__wrapper'>{children}</div>
      <div className='rcx-divider__bar' />
    </Box>
  );
};
export { Divider };
