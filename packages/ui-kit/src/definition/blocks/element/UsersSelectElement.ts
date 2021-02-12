import { BlockElementType } from '../../../enums/BlockElementType';
import { Actionable } from './Actionable';

export type UsersSelectElement = Actionable<{
  type: `${BlockElementType.USERS_SELECT}`;
}>;
