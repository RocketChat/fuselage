import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';

/** @todo */
export type ConversationsSelectElement = Actionable<{
  type: `${BlockElementType.CONVERSATIONS_SELECT}`;
}>;
