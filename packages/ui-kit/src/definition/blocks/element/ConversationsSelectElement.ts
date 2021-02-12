import { BlockElementType } from '../../../enums/BlockElementType';
import { Actionable } from './Actionable';

export type ConversationsSelectElement = Actionable<{
  type: `${BlockElementType.CONVERSATIONS_SELECT}`;
}>;
