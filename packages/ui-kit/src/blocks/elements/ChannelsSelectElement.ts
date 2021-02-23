import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';

/** @todo */
export type ChannelsSelectElement = Actionable<{
  type: `${BlockElementType.CHANNELS_SELECT}`;
}>;
