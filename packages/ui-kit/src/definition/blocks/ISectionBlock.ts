import { ElementType } from './ElementType';
import { IBlock } from './IBlock';
import { SectionAccessoryElement } from './SectionAccessoryElement';
import { TextObject } from './TextObject';

export interface ISectionBlock extends IBlock {
  type: ElementType.SECTION;
  text?: TextObject;
  fields?: TextObject[];
  accessory?: SectionAccessoryElement;
}

// export interface ISectionBlock extends IBlock {
//   type: BlockType.SECTION;
//   text: ITextObject;
//   accessory?: AccessoryElements;
// }
