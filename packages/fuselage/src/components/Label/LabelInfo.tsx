import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import Box from '../Box/Box';
import { Icon } from '../Icon';

type LabelInfoProps = {
  title?: string;
  id?: string;
} & Omit<ComponentPropsWithoutRef<typeof Icon>, 'name'>;

export const LabelInfo = ({ title, id, ...props }: LabelInfoProps) => (
  <Box is='span' mi={4} rcx-label__info>
    <span hidden id={id}>
      {title}
    </span>
    <Icon {...props} name='info-circled' title={title} />
  </Box>
);
