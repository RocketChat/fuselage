import { PlainText } from '../text/PlainText';
import { Actionable } from './Actionable';

export type ButtonElement = Actionable<{
  type: 'button';
  text: PlainText;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
}>;
