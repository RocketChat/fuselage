import { Option } from '../Option';
import { OptionGroup } from '../OptionGroup';
import { TextObject } from '../text/TextObject';
import { Actionable } from './Actionable';

export type MultiStaticSelectElement = Actionable<
  {
    type: 'multi_static_select';
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
