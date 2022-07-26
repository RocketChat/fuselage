import type { ComponentProps } from 'react';
import React from 'react';

import { Icon } from '../../Icon';

export const SelectAddon = ({
  name,
}: {
  name: ComponentProps<typeof Icon>['name'];
}) => <Icon aria-hidden='true' name={name} size={'x20'} />;
