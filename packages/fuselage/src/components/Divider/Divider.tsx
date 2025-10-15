import type { ReactNode } from 'react';

import Box, { type BoxProps } from '../Box';

export type DividerProps = BoxProps & {
  variation?: 'danger';
  children?: ReactNode;
  vertical?: boolean;
};

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
export { Divider };
