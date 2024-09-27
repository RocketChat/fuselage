import type { ReactElement, ComponentProps } from 'react';
import { memo } from 'react';

import type { Icon } from '..';
import { IconButton } from '..';

type ContextualbarActionProps = {
  name: ComponentProps<typeof Icon>['name'];
} & Omit<ComponentProps<typeof IconButton>, 'icon'>;

const ContextualbarAction = ({
  name,
  ...props
}: ContextualbarActionProps): ReactElement => (
  <IconButton {...props} small flexShrink={0} icon={name} />
);

export default memo(ContextualbarAction);
