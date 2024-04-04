import { MessageReaction } from './MessageReaction';
import { MessageReactionAction } from './MessageReactionAction';
import { MessageReactionCounter } from './MessageReactionCounter';
import { MessageReactionEmoji } from './MessageReactionEmoji';
import { MessageReactions } from './MessageReactions';

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
  MessageReactionAction,
  MessageReactions,
  MessageReactionCounter,
  MessageReactionEmoji,
};
