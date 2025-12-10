import type { BoxProps } from '../../Box';
import Box from '../../Box';

export const SidebarFooterContent = ({ children, ...props }: BoxProps) => (
  <Box className='rcx-sidebar-v2-footer__content' {...props}>
    {children}
  </Box>
);
