import React from 'react';
import type { ReactNode } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export type DividerProps = BoxProps & {
  variation?: 'danger';
  children?: ReactNode;
  vertical?: boolean;
};

/** @public */
const Divider = ({ variation, children, vertical, ...props }: DividerProps) => {
  if (!children) {
    return (
      <Box
        is='hr'
        rcx-divider
        rcx-divider--vertical={vertical}
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

export default Divider;
