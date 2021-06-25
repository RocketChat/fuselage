import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';
import { Option } from '../Option';

export type OverflowElement = Actionable<{
  type: `${BlockElementType.OVERFLOW}`;
  options: Option[];
}>;
