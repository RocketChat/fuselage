import './MessageReactions.styles.scss';

import { MessageReaction } from './MessageReaction';
import { MessageReactionAction } from './MessageReactionAction';
import { MessageReactions } from './MessageReactions';

export default Object.assign(MessageReactions, {
  Reaction: MessageReaction,
  Action: MessageReactionAction,
});
