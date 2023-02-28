import { MessageReaction } from './MessageReaction';
import { MessageReactionAction } from './MessageReactionAction';
import { MessageReactionCounter } from './MessageReactionCounter';
import { MessageReactionEmoji } from './MessageReactionEmoji';
import { MessageReactions } from './MessageReactions';

const CompoundedMessageReactions = Object.assign(MessageReactions.bind({}), {
  Reaction: MessageReaction,
  Action: MessageReactionAction,
});

export default CompoundedMessageReactions;

export {
  CompoundedMessageReactions as MessageReactions,
  MessageReaction,
  MessageReactionAction,
  MessageReactionCounter,
  MessageReactionEmoji,
};
