import type { Actionable } from '../Actionable';

export type ToggleSwitchElement = Actionable<{
  type: 'toggle_switch';
  value?: boolean;
}>;