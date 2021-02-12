import { BlockElementType } from '../../../enums/BlockElementType';
import { Option } from '../Option';
import { OptionGroup } from '../OptionGroup';
import { TextObject } from '../text/TextObject';
import { Actionable } from './Actionable';

export type StaticSelectElement = Actionable<
  {
    type: `${BlockElementType.STATIC_SELECT}`;
    placeholder: TextObject;
    options: Option[];
    optionGroups?: OptionGroup[];
  } & ({ initialOption?: Option } | { initialValue?: Option['value'] })
>;
