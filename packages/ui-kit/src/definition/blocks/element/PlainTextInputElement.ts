import { BlockElementType } from '../../../enums/BlockElementType';
import { PlainText } from '../text/PlainText';
import { Actionable } from './Actionable';

export type PlainTextInputElement = Actionable<{
  type: `${BlockElementType.PLAIN_TEXT_INPUT}`;
  placeholder?: PlainText;
  initialValue?: string;
  multiline?: boolean;
  minLength?: number;
  maxLength?: number;
}>;
