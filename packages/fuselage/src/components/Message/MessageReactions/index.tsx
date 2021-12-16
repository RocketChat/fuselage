import './MessageReactions.styles.scss';

import { MessageReaction } from './MessageReaction';
import { MessageReactionAction } from './MessageReactionAction';
import { MessageReactionCounter } from './MessageReactionCounter';
import { MessageReactionEmoji } from './MessageReactionEmoji';
import { MessageReactions } from './MessageReactions';

export default Object.assign(MessageReactions, {
  Reaction: MessageReaction,
  Action: MessageReactionAction,
});

export {
  MessageReaction,
  MessageReactionAction,
  MessageReactions,
  MessageReactionCounter,
  MessageReactionEmoji,
};
