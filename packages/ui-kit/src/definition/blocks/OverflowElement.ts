import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { Option } from './Option';

export type OverflowElement = Actionable<{
  type: ElementType.OVERFLOW;
  options: Option[];
}>;
