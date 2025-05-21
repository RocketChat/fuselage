import type { ReactElement, ComponentProps } from 'react';
import { forwardRef, memo } from 'react';

import type { Icon } from '..';
import { IconButton } from '..';

type ContextualbarActionProps = {
  name: ComponentProps<typeof Icon>['name'];
} & Omit<ComponentProps<typeof IconButton>, 'icon'>;

const ContextualbarAction = forwardRef<
  HTMLButtonElement,
  ContextualbarActionProps
>(function ContextualbarAction({ name, ...props }, ref): ReactElement {
  return <IconButton {...props} ref={ref} small flexShrink={0} icon={name} />;
});

export default memo(ContextualbarAction);
