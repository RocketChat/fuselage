import type { ReactElement } from 'react';
import React, { memo } from 'react';

import { Button, type ButtonProps } from '../Button';

type ContextualbarButtonProps = ButtonProps;

const ContextualbarButton = (props: ContextualbarButtonProps): ReactElement => (
  <Button {...props} />
);

export default memo(ContextualbarButton);
