import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { IPlainText } from './IPlainText';

export type PlainTextInputElement = Actionable<{
  type: ElementType.PLAIN_TEXT_INPUT;
  placeholder?: IPlainText;
  initialValue?: string;
  multiline?: boolean;
  minLength?: number;
  maxLength?: number;
}>;
