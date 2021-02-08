import { PlainText } from '../text/PlainText';
import { Actionable } from './Actionable';

export type PlainTextInputElement = Actionable<{
  type: 'plain_text_input';
  placeholder?: PlainText;
  initialValue?: string;
  multiline?: boolean;
  minLength?: number;
  maxLength?: number;
}>;
