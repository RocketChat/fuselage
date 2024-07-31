import type { ButtonGroupProps } from '../../ButtonGroup';
import { ButtonGroup } from '../../ButtonGroup';

/** @public */
export type TableSelectionButtonGroupProps = ButtonGroupProps;

/** @public */
const TableSelectionButtonGroup = (props: TableSelectionButtonGroupProps) => (
  <ButtonGroup {...props} />
);

export default TableSelectionButtonGroup;
