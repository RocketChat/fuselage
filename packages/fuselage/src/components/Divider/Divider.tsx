import type { ReactNode } from 'react';

import { Box, type BoxProps } from '../Box';

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
        marginBlock={vertical ? undefined : 'x8'}
        marginInline={vertical ? 'x8' : undefined}
        {...props}
      />
    );
  }
  return (
    <Box rcx-message-divider role='separator' {...props}>
      <div className='rcx-box rcx-box--full rcx-divider__bar rcx-d-flex rcx-justify-flex-end rcx-items-center rcx-grow-1' />
      <div className='rcx-box rcx-box--full rcx-divider__wrapper rcx-mb-8 rcx-pis-8 rcx-pie-8'>{children}</div>
      <div className='rcx-box rcx-box--full rcx-divider__bar rcx-d-flex rcx-justify-flex-end rcx-items-center rcx-grow-1' />
    </Box>
  );
};

export default Divider;
