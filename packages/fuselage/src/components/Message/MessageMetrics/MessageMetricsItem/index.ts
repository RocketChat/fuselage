import { MessageMetricsItem } from './MessageMetricsItem';
import { MessageMetricsItemIcon } from './MessageMetricsItemIcon';
import { MessageMetricsItemLabel } from './MessageMetricsItemLabel';

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

export { MessageMetricsItem, MessageMetricsItemIcon, MessageMetricsItemLabel };
