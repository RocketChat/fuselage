import { BlockElementType } from '../../../enums/BlockElementType';
import { Option } from '../Option';
import { Actionable } from './Actionable';

export type OverflowElement = Actionable<{
  type: `${BlockElementType.OVERFLOW}`;
  options: Option[];
}>;
