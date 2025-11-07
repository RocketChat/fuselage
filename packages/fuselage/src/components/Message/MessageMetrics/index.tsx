import { MessageMetrics } from './MessageMetrics.js';
import { MessageMetricsFollowing } from './MessageMetricsFollowing.js';
import MessageMetricsItem, {
  MessageMetricsItemIcon,
  MessageMetricsItemAvatarRowContent,
  MessageMetricsItemAvatarRow,
  MessageMetricsItemLabel,
} from './MessageMetricsItem/index.js';
import { MessageMetricsReply } from './MessageMetricsReply.js';

export default Object.assign(MessageMetrics, {
  /**
   * @deprecated prefer using named imports
   * */
  Reply: MessageMetricsReply,
  /**
   * @deprecated prefer using named imports
   * */
  Item: MessageMetricsItem,
  /**
   * @deprecated prefer using named imports
   * */
  Following: MessageMetricsFollowing,
});

export {
  MessageMetrics,
  MessageMetricsItemAvatarRow,
  MessageMetricsItemAvatarRowContent,
  MessageMetricsItem,
  MessageMetricsItemIcon,
  MessageMetricsItemLabel,
  MessageMetricsFollowing,
  MessageMetricsReply,
};
