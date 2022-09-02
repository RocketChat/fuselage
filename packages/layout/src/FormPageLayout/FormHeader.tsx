import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, FC } from 'react';

const FormHeader: FC = ({ children }): ReactElement => (
  <Box is='header' mbe='x24'>
    {children}
  </Box>
);

export default FormHeader;
