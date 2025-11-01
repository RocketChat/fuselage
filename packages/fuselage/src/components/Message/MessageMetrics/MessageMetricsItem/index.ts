import { MessageMetricsItem } from './MessageMetricsItem.js';
import { MessageMetricsItemAvatarRow } from './MessageMetricsItemAvatarRow.js';
import { MessageMetricsItemAvatarRowContent } from './MessageMetricsItemAvatarRowContent.js';
import { MessageMetricsItemIcon } from './MessageMetricsItemIcon.js';
import { MessageMetricsItemLabel } from './MessageMetricsItemLabel.js';

export default Object.assign(MessageMetricsItem, {
  /**
   * @deprecated prefer using named imports
   * */
  Icon: MessageMetricsItemIcon,
  /**
   * @deprecated prefer using named imports
   * */
  Label: MessageMetricsItemLabel,
});

export {
  MessageMetricsItem,
  MessageMetricsItemIcon,
  MessageMetricsItemLabel,
  MessageMetricsItemAvatarRowContent,
  MessageMetricsItemAvatarRow,
};
