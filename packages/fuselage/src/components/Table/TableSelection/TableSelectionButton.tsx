import type { ButtonProps } from '../../Button';
import { Button } from '../../Button';

type TableSelectionButtonProps = ButtonProps;

export const TableSelectionButton = (props: TableSelectionButtonProps) => (
  <Button small flexShrink={0} {...props} />
);
