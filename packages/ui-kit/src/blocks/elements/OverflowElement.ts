import { Actionable } from '../Actionable';
import { Option } from '../Option';

export type OverflowElement = Actionable<{
  type: 'overflow';
  options: readonly Option[];
}>;
