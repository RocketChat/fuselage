import type { ButtonProps } from '../../Button';
import { Button } from '../../Button';

/** @public */
export type TableSelectionButtonProps = ButtonProps;

/** @public */
const TableSelectionButton = (props: TableSelectionButtonProps) => (
  <Button small flexShrink={0} {...props} />
);

export default TableSelectionButton;
