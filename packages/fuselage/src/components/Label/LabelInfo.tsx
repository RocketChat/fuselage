import type { ComponentProps } from 'react';

import Box from '../Box/Box';
import { Icon } from '../Icon';

type LabelInfoProps = {
  title: string;
  id?: string;
} & Omit<ComponentProps<typeof Icon>, 'name'>;

export const LabelInfo = ({ title, id, ...props }: LabelInfoProps) => (
  <Box is='span' mi={2} rcx-label__info>
    <span hidden id={id}>
      {title}
    </span>
    <Icon {...props} name='info-circled' title={title} />
  </Box>
);
