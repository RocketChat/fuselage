import { memo } from 'react';

import { Button, type ButtonProps } from '../Button';

/**
 * @deprecated Use `ContextualbarV2ButtonProps` instead.
 */
export type ContextualbarButtonProps = ButtonProps;

const ContextualbarButton = (props: ContextualbarButtonProps) => (
  <Button {...props} />
);

/**
 * @deprecated Use `ContextualbarV2Button` instead.
 */
export default memo(ContextualbarButton);
