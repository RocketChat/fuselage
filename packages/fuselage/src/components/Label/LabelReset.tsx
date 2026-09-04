import { Box } from '../Box';
import {
  IconButton,
  type IconButtonProps,
  type IconButtonSize,
} from '../Button';

export type LabelResetProps = {
  title: string;
} & Omit<IconButtonProps, 'icon' | keyof IconButtonSize>;

export const LabelReset = ({ title, ref, ...props }: LabelResetProps) => (
  <Box is='span' rcx-label__reset>
    <IconButton
      ref={ref}
      {...props}
      mini
      icon='undo'
      title={title}
      aria-label={title}
    />
  </Box>
);
