import { MessageMetrics } from './MessageMetrics';
import { MessageMetricsFollowing } from './MessageMetricsFollowing';
import MessageMetricsItem, {
  MessageMetricsItemIcon,
  MessageMetricsItemLabel,
} from './MessageMetricsItem';
import { MessageMetricsReply } from './MessageMetricsReply';

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
  MessageMetricsItem,
  MessageMetricsItemIcon,
  MessageMetricsItemLabel,
  MessageMetricsFollowing,
  MessageMetricsReply,
};
