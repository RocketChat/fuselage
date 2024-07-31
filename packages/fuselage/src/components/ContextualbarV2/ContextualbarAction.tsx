import type { IconName } from '@rocket.chat/icons';
import type { ReactElement } from 'react';
import { memo } from 'react';

import type { IconButtonProps } from '../Button';
import { IconButton } from '../Button';

type ContextualbarActionProps = {
  name: IconName;
} & Omit<IconButtonProps, 'icon'>;

const ContextualbarAction = ({
  name,
  ...props
}: ContextualbarActionProps): ReactElement => (
  <IconButton {...props} small flexShrink={0} icon={name} />
);

export default memo(ContextualbarAction);
