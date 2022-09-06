import { Tile } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement, FC } from 'react';

const Form: FC<{ onSubmit: () => void }> = ({
  onSubmit,
  children,
}): ReactElement => (
  <Tile
    is='form'
    backgroundColor={colors.white}
    color={colors.n800}
    padding='x40'
    width='full'
    maxWidth={576}
    textAlign='left'
    onSubmit={onSubmit}
  >
    {children}
  </Tile>
);

export default Form;
