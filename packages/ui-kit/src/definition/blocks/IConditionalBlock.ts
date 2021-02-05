import { ConditionalBlockFilters } from './ConditionalBlockFilters';
import { ElementType } from './ElementType';
import { IBlock } from './IBlock';

export interface IConditionalBlock extends IBlock {
  type: ElementType.CONDITIONAL;
  when?: ConditionalBlockFilters;
  render: IBlock[];
}

// /**
//  * Declares a block that is only visible when a certain
//  * condition is met.
//  *
//  * The content specified in the `render` property will be
//  * shown.
//  *
//  * No condition will be checked by default, i.e. the block
//  * will be shown in every case like other blocks.
//  *
//  * Currently supported conditions:
//  *      `engine: Array<"rocket.chat" | "omnichannel">` specifies what engine should
//  *      render the block:
//  *          "rocket.chat" for regular Rocket.Chat engine
//  *          "omnichannel" for the Livechat/Omnichannel widget engine
//  *      leave it blank to show the block in both engines
//  */
// export interface IConditionalBlock extends IBlock {
//   type: BlockType.CONDITIONAL;
//   when?: IConditionalBlockFilters;
//   render: Array<IBlock>;
// }
