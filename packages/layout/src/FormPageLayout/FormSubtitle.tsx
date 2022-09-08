import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, FC } from 'react';

const FormSubtitle: FC = ({ children }): ReactElement => (
  <Box fontScale='p2' color='neutral-900'>
    {children}
  </Box>
);

export default FormSubtitle;
