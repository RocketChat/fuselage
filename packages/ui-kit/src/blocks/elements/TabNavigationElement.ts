import type { Actionable } from '../Actionable';

export type TabItem = {
  value: string;
  text: string;
  disabled?: boolean;
  selected?: boolean;
};

export type TabNavigationElement = Actionable<{
  type: 'tab_navigation';
  options: readonly TabItem[];
}>;
