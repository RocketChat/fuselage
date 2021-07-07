import { Box } from '@rocket.chat/fuselage';
import { ReactElement, FC } from 'react';

const Form: FC = ({ children }): ReactElement => (
  <Box
    is='form'
    backgroundColor='white'
    padding='x40'
    width='full'
    maxWidth='576px'
  >
    {children}
  </Box>
);

export default Form;
