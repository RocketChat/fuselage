import type { Actionable } from '../Actionable';
import { PlainText } from '../text/PlainText';

export type CalloutElement = Actionable<{
  type: 'callout';
  title: PlainText;
  value?: string;
  icon?: string;
  text: PlainText;
  variant?: 'info' | 'danger' | 'warning' | 'success';
}>;