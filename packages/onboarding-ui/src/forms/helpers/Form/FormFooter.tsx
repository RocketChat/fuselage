import { Box } from '@rocket.chat/fuselage';
import { ReactElement, FC } from 'react';

const FormFooter: FC = ({ children }): ReactElement => (
  <Box mbs='x24'>{children}</Box>
);

export default FormFooter;
