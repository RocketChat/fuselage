import { MessageReaction } from './MessageReaction.js';
import { MessageReactionAction } from './MessageReactionAction.js';
import { MessageReactionCounter } from './MessageReactionCounter.js';
import { MessageReactionEmoji } from './MessageReactionEmoji.js';
import { MessageReactions } from './MessageReactions.js';

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
