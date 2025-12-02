import type { ReactElement } from 'react';
import { memo } from 'react';

import { Button } from '..';
import type { ButtonProps } from '../Button/Button';

const ContextualbarButton = (props: ButtonProps): ReactElement => (
  <Button {...props} />
);

export default memo(ContextualbarButton);
