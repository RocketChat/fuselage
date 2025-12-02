import { memo } from 'react';

import type { IconProps } from '..';
import { IconButton } from '..';
import type { IconButtonProps } from '../Button/IconButton';

export type ContextualbarActionProps = {
  name: IconProps['name'];
} & Omit<IconButtonProps, 'icon'>;

const ContextualbarAction = ({ name, ...props }: ContextualbarActionProps) => (
  <IconButton {...props} small flexShrink={0} icon={name} />
);

export default memo(ContextualbarAction);
