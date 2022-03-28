import { Box } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement, FC } from 'react';

const FormSubtitle: FC = ({ children }): ReactElement => (
  <Box fontScale='p2' color={colors.n700}>
    {children}
  </Box>
);

export default FormSubtitle;
