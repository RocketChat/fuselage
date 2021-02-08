import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { PlainText } from './PlainText';

export type PlainTextInputElement = Actionable<{
  type: ElementType.PLAIN_TEXT_INPUT;
  placeholder?: PlainText;
  initialValue?: string;
  multiline?: boolean;
  minLength?: number;
  maxLength?: number;
}>;
