import { DatePickerElement } from './DatePickerElement';
import { ElementType } from './ElementType';
import { Layout } from './Layout';
import { LinearScaleElement } from './LinearScaleElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { PlainText } from './PlainText';
import { PlainTextInputElement } from './PlainTextInputElement';
import { StaticSelectElement } from './StaticSelectElement';

export type InputBlock = Layout<{
  type: ElementType.INPUT;
  label: PlainText;
  element:
    | PlainTextInputElement
    | StaticSelectElement
    | MultiStaticSelectElement
    | DatePickerElement
    | LinearScaleElement;
  hint?: PlainText;
  optional?: boolean;
}>;

// export interface IInputBlock extends IBlock {
//   type: BlockType.INPUT;
//   element: IInputElement;
//   label: ITextObject;
//   optional?: boolean;
// }
