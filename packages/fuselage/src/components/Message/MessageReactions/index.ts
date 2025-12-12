import { MessageReaction } from './MessageReaction';
import { MessageReactionAction } from './MessageReactionAction';
import { MessageReactionCounter } from './MessageReactionCounter';
import { MessageReactionEmoji } from './MessageReactionEmoji';
import MessageReactions, {
  type MessageReactionsProps,
} from './MessageReactions';

export default Object.assign(MessageReactions, {
  /**
   * @deprecated prefer using named imports
   * */
  Reaction: MessageReaction,
  /**
   * @deprecated prefer using named imports
   * */
  Action: MessageReactionAction,
});

export {
  MessageReaction,
  type MessageReactionsProps,
  MessageReactionAction,
  MessageReactions,
  MessageReactionCounter,
  MessageReactionEmoji,
};
