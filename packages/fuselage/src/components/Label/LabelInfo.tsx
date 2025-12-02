import Box from '../Box/Box';
import type { IconProps } from '../Icon';
import { Icon } from '../Icon';

export type LabelInfoProps = {
  title: string;
  id?: string;
} & Omit<IconProps, 'name'>;

export const LabelInfo = ({ title, id, ...props }: LabelInfoProps) => (
  <Box is='span' mi={2} rcx-label__info>
    <span hidden id={id}>
      {title}
    </span>
    <Icon {...props} name='info-circled' title={title} />
  </Box>
);
