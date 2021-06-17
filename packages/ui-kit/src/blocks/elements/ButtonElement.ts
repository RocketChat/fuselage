import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';
import { PlainText } from '../text/PlainText';

export type ButtonElement = Actionable<{
  type: `${BlockElementType.BUTTON}`;
  text: PlainText;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
}>;
