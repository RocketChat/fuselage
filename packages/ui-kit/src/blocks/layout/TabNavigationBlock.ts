import type { Block } from '../Block';
import type { LayoutBlockish } from '../LayoutBlockish';
import type { TextObject } from '../TextObject';

export type TabItem = {
  title: TextObject;
  disabled?: boolean;
  selected?: boolean;
  elements: readonly Block[];
};

export type TabNavigationBlock = LayoutBlockish<{
  type: 'tab_navigation';
  tabs: readonly TabItem[];
}>;
