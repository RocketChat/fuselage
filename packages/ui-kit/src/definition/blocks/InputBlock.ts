import { DatePickerElement } from './DatePickerElement';
import { ElementType } from './ElementType';
import { IPlainText } from './IPlainText';
import { Layout } from './Layout';
import { LinearScaleElement } from './LinearScaleElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { PlainTextInputElement } from './PlainTextInputElement';
import { StaticSelectElement } from './StaticSelectElement';

export type InputBlock = Layout<{
  type: ElementType.INPUT;
  label: IPlainText;
  element:
    | PlainTextInputElement
    | StaticSelectElement
    | MultiStaticSelectElement
    | DatePickerElement
    | LinearScaleElement;
  hint?: IPlainText;
  optional?: boolean;
}>;

// export interface IInputBlock extends IBlock {
//   type: BlockType.INPUT;
//   element: IInputElement;
//   label: ITextObject;
//   optional?: boolean;
// }
