import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';
import { Option } from '../Option';
import { OptionGroup } from '../OptionGroup';
import { TextObject } from '../TextObject';

export type StaticSelectElement = Actionable<
  {
    type: `${BlockElementType.STATIC_SELECT}`;
    placeholder: TextObject;
    options: Option[];
    optionGroups?: OptionGroup[];
  } & ({ initialOption?: Option } | { initialValue?: Option['value'] })
>;
