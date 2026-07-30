import { memo } from 'react';

import type { IconProps } from '..';
import { IconButton } from '..';
import type { IconButtonProps } from '../Button/IconButton';

/**
 * @deprecated Use `ContextualbarV2ActionProps` instead.
 */
export type ContextualbarActionProps = {
  name: IconProps['name'];
} & Omit<IconButtonProps, 'icon'>;

const ContextualbarAction = ({ name, ...props }: ContextualbarActionProps) => (
  <IconButton {...props} small flexShrink={0} icon={name} />
);

/**
 * @deprecated Use `ContextualbarV2Action` instead.
 */
export default memo(ContextualbarAction);
