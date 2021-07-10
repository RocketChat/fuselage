import { Box } from '@rocket.chat/fuselage';
import { ReactElement, FC } from 'react';

const Form: FC<{ onSubmit: () => void }> = ({
  onSubmit,
  children,
}): ReactElement => (
  <Box
    is='form'
    backgroundColor='white'
    padding={40}
    width='full'
    maxWidth={576}
    onSubmit={onSubmit}
  >
    {children}
  </Box>
);

export default Form;
