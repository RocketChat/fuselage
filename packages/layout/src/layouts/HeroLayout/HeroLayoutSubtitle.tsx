import { Box } from '@rocket.chat/fuselage';
import { ReactElement, ReactNode } from 'react';

const HeroLayoutSubtitle = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <Box fontScale='p1'>{children}</Box>;

export default HeroLayoutSubtitle;
