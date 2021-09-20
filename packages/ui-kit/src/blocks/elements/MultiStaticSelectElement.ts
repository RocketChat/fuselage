import { Actionable } from '../Actionable';
import { Option } from '../Option';
import { OptionGroup } from '../OptionGroup';
import { TextObject } from '../TextObject';

export type MultiStaticSelectElement = Actionable<
  {
    type: 'multi_static_select';
    placeholder: TextObject;
    options: readonly Option[];
    optionGroups?: readonly OptionGroup[];
    maxSelectItems?: number;
  } & ({ initialOption?: Option } | { initialValue?: Option['value'] })
>;
