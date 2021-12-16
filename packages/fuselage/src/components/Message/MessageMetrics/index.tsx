import { MessageMetrics } from './MessageMetrics';
import { MessageMetricsFollowing } from './MessageMetricsFollowing';
import MessageMetricsItem from './MessageMetricsItem';
import { MessageMetricsReply } from './MessageMetricsReply';

export default Object.assign(MessageMetrics, {
  Reply: MessageMetricsReply,
  Item: MessageMetricsItem,
  Following: MessageMetricsFollowing,
});
