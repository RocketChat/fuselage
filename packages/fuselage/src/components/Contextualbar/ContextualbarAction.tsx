import type { ReactElement, ComponentProps } from 'react';
import React, { memo } from 'react';

import type { Icon } from '..';
import { IconButton } from '..';

type ContextualbarActionProps = {
  name: ComponentProps<typeof Icon>['name'];
} & Omit<ComponentProps<typeof IconButton>, 'icon'>;

const ContextualbarAction = ({
  name,
  ...props
}: ContextualbarActionProps): ReactElement => (
  <IconButton flexShrink={0} icon={name} {...props} tiny />
);

export default memo(ContextualbarAction);
