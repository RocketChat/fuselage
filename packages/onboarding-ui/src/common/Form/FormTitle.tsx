import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, FC } from 'react';

const FormTitle: FC = ({ children }): ReactElement => (
  <Box mbe='x8' fontScale='h2' fontWeight={800}>
    {children}
  </Box>
);

export default FormTitle;
