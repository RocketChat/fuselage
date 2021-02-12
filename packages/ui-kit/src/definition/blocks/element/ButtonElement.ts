import { BlockElementType } from '../../../enums/BlockElementType';
import { PlainText } from '../text/PlainText';
import { Actionable } from './Actionable';

export type ButtonElement = Actionable<{
  type: `${BlockElementType.BUTTON}`;
  text: PlainText;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
}>;
