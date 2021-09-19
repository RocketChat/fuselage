import { Actionable } from '../Actionable';
import { Option } from '../Option';
import { OptionGroup } from '../OptionGroup';
import { TextObject } from '../TextObject';

export type StaticSelectElement = Actionable<
  {
    type: 'static_select';
    placeholder: TextObject;
    options: Option[];
    optionGroups?: OptionGroup[];
  } & ({ initialOption?: Option } | { initialValue?: Option['value'] })
>;
