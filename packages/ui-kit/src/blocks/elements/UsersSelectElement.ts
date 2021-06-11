import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';

/** @todo */
export type UsersSelectElement = Actionable<{
  type: `${BlockElementType.USERS_SELECT}`;
}>;
