import type { Actionable } from '../Actionable';
import { TextObject } from '../TextObject';

export type TabItem = {
  value: string;
  text: TextObject;
  disabled?: boolean;
  selected?: boolean;
};

export type TabNavigationElement = Actionable<{
  type: 'tab_navigation';
  options: readonly TabItem[];
}>;
