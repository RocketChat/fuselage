import { Box, Margins } from '@rocket.chat/fuselage';
import { BackgroundLayer, LayoutLogo } from '@rocket.chat/layout';
import type { ReactElement, ReactNode } from 'react';

type InformationPageProps = {
  title: string;
  description?: ReactNode;
};

const InformationPage = ({
  title,
  description,
}: InformationPageProps): ReactElement => (
  <BackgroundLayer>
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      textAlign='center'
      width='100%'
      maxWidth={624}
      paddingBlock={32}
      paddingInline={16}
    >
      <Margins blockEnd={32}>
        <LayoutLogo.LayoutLogo />

        <Box fontScale='hero'>{title}</Box>

        {description && <Box fontScale='p1'>{description}</Box>}
      </Margins>
    </Box>
  </BackgroundLayer>
);

export default InformationPage;
