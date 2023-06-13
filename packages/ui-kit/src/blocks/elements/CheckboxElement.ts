import type { Actionable } from '../Actionable';

export type CheckboxElement = Actionable<{
  type: 'checkbox';
  value?: boolean;
}>;
