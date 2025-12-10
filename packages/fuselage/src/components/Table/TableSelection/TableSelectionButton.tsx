import { Button } from '../../Button';
import type { ButtonProps } from '../../Button/Button';

type TableSelectionButtonProps = ButtonProps;

export const TableSelectionButton = (props: TableSelectionButtonProps) => (
  <Button small flexShrink={0} {...props} />
);
