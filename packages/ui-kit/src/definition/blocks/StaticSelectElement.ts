import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { Option } from './Option';
import { OptionGroup } from './OptionGroup';
import { TextObject } from './TextObject';

export type StaticSelectElement = Actionable<
  {
    type: ElementType.STATIC_SELECT;
    placeholder: TextObject;
    options: Option[];
    optionGroups?: OptionGroup[];
  } & ({ initialOption?: Option } | { initialValue?: Option['value'] })
>;

// export interface IStaticSelectElement extends ISelectElement {
//   type: BlockElementType.STATIC_SELECT;
//   placeholder: ITextObject;
//   options: Array<IOptionObject>;
//   initialValue?: string;
// }
