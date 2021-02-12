import { BlockElementType } from '../../../enums/BlockElementType';
import { Actionable } from './Actionable';

export type ChannelsSelectElement = Actionable<{
  type: `${BlockElementType.CHANNELS_SELECT}`;
}>;
