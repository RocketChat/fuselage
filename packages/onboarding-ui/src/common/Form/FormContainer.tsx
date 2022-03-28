import Box from '@rocket.chat/fuselage';
import type { ReactElement, FC } from 'react';

const FormContainer: FC = ({ children }): ReactElement => (
  <Box mbs='x24'>{children}</Box>
);

export default FormContainer;
