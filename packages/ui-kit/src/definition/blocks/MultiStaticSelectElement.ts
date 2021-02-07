import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { Option } from './Option';
import { OptionGroup } from './OptionGroup';
import { TextObject } from './TextObject';

export type MultiStaticSelectElement = Actionable<
  {
    type: ElementType.MULTI_STATIC_SELECT;
    placeholder: TextObject;
    options: Option[];
    optionGroups?: OptionGroup[];
    maxSelectItems?: number;
  } & ({ initialOption?: Option } | { initialValue?: Option['value'] })
>;

// export interface IMultiStaticSelectElement extends ISelectElement {
//   type: BlockElementType.MULTI_STATIC_SELECT;
//   placeholder: ITextObject;
//   options: Array<IOptionObject>;
//   initialValue?: Array<string>;
// }
