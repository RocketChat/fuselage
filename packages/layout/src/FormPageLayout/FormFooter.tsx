import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, FC } from 'react';

const FormFooter: FC = ({ children }): ReactElement => (
  <Box
    is='footer'
    mbs='x24'
    display='flex'
    alignItems='center'
    justifyContent='space-between'
  >
    {children}
  </Box>
);

export default FormFooter;
