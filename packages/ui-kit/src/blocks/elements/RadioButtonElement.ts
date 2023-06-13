import type { Actionable } from '../Actionable';

export type RadioButtonElement = Actionable<{
  type: 'radio_button';
  value?: boolean;
}>;