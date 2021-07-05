import { Box } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { ReactElement, FC } from 'react';

const FormSteps: FC = ({ children }): ReactElement => (
  <Box mbe='x8' fontScale='c2' color={colors.n600}>
    {children}
  </Box>
);

export default FormSteps;
