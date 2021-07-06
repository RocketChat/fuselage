import { Box } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { ReactElement } from 'react';

const Link = ({
  children,
  href,
}: {
  children?: string;
  href: string;
}): ReactElement => (
  <Box
    is='a'
    fontScale='c2'
    href={href}
    color={colors.b200}
    textDecorationLine='none'
  >
    {children}
  </Box>
);

export default Link;
