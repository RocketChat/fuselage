import type { Keys } from '@rocket.chat/icons';

import type { LayoutBlockish } from '../LayoutBlockish';
import type { TextObject } from '../TextObject';

export type CalloutBlock = LayoutBlockish<{
  type: 'callout';
  title: TextObject;
  icon?: Keys;
  text: TextObject;
  variant?: 'info' | 'danger' | 'warning' | 'success';
}>;
