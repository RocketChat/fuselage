import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

const HeroLayoutTitle = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <Box fontScale='hero'>{children}</Box>;

export default HeroLayoutTitle;
