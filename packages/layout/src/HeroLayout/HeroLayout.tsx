import { Box, Margins } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

import BackgroundLayer from '../BackgroundLayer';
import { LayoutLogo } from '../LayoutLogo';

export const HeroLayoutTitle = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <Box fontScale='hero'>{children}</Box>;

export const HeroLayoutSubtitle = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <Box fontScale='p1'>{children}</Box>;

export const HeroLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => (
  <BackgroundLayer>
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      textAlign='center'
      width='100%'
      maxWidth={576}
      paddingBlock={32}
      paddingInline={16}
    >
      <Margins blockEnd={32}>
        <LayoutLogo />

        {children}
      </Margins>
    </Box>
  </BackgroundLayer>
);
