import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';
import { PlainText } from '../text/PlainText';

export type PlainTextInputElement = Actionable<{
  type: `${BlockElementType.PLAIN_TEXT_INPUT}`;
  placeholder?: PlainText;
  initialValue?: string;
  multiline?: boolean;
  minLength?: number;
  maxLength?: number;
}>;
