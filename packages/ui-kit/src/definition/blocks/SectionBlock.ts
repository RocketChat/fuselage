import { ButtonElement } from './ButtonElement';
import { DatePickerElement } from './DatePickerElement';
import { ElementType } from './ElementType';
import { ImageElement } from './ImageElement';
import { Layout } from './Layout';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { OverflowElement } from './OverflowElement';
import { StaticSelectElement } from './StaticSelectElement';
import { TextObject } from './TextObject';

export type SectionBlock = Layout<{
  type: ElementType.SECTION;
  text?: TextObject;
  fields?: TextObject[];
  accessory?:
    | ImageElement
    | ButtonElement
    | DatePickerElement
    | StaticSelectElement
    | MultiStaticSelectElement
    | OverflowElement;
}>;

// export interface ISectionBlock extends IBlock {
//   type: BlockType.SECTION;
//   text: ITextObject;
//   accessory?: AccessoryElements;
// }
