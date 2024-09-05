import type { ComponentProps } from 'react';

import Box from '../../Box';

export const SideBarFooterContent = ({
  children,
  ...props
}: ComponentProps<typeof Box>) => (
  <Box className='rcx-sidebar-v2-footer__content' {...props}>
    {children}
  </Box>
);
