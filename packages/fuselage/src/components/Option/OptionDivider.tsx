import type { DividerProps } from '../Divider';
import { Divider } from '../Divider';

/** @public */
export type OptionDividerProps = DividerProps;

/** @public */
const OptionDivider = (props: OptionDividerProps) => <Divider {...props} />;

export default OptionDivider;
