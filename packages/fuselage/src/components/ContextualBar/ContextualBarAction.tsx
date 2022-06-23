import type { ReactElement, MouseEventHandler, ComponentProps } from 'react';
import React, { memo } from 'react';

import { ActionButton } from '../Button';
import type { Icon } from '../Icon';

const ContextualBarAction = ({
  name,
  ...props
}: {
  name: ComponentProps<typeof Icon>['name'];
  title?: string;
  onClick?: MouseEventHandler<HTMLOrSVGElement>;
}): ReactElement => (
  <ActionButton flexShrink={0} icon={name} ghost {...props} tiny />
);

export default memo(ContextualBarAction);
