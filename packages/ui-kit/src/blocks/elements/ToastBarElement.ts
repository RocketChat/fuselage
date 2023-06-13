import type { Actionable } from '../Actionable';
import { PlainText } from '../text/PlainText';

export type ToastBarElement = Actionable<{
  type: 'toast_bar';
  variant?: 'error' | 'success';
  text: PlainText;
}>;