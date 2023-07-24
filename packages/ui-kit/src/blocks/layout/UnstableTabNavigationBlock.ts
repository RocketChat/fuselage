import type { LayoutBlockish } from '../LayoutBlockish';
import type { ExperimentalTabElement } from '../elements/UnstableTabElement';

export type ExperimentalTabNavigationBlock = LayoutBlockish<{
  type: 'tab_navigation';
  tabs: readonly ExperimentalTabElement[];
}>;
