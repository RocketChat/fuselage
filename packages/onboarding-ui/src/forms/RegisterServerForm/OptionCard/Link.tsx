import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

const Link = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): ReactElement => (
  <Box is='a' href={href} color={'primary-600'} textDecorationLine='none'>
    {children}
  </Box>
);

export default Link;
