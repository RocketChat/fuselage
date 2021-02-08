import { Option } from '../Option';
import { Actionable } from './Actionable';

export type OverflowElement = Actionable<{
  type: 'overflow';
  options: Option[];
}>;
