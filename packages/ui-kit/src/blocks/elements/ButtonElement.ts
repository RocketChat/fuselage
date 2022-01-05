import { Actionable } from '../Actionable';
import { PlainText } from '../text/PlainText';

export type ButtonElement = Actionable<{
  type: 'button';
  text: PlainText;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
}>;
