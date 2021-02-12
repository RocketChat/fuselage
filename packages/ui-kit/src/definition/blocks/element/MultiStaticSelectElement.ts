import { BlockElementType } from '../../../enums/BlockElementType';
import { Option } from '../Option';
import { OptionGroup } from '../OptionGroup';
import { TextObject } from '../text/TextObject';
import { Actionable } from './Actionable';

export type MultiStaticSelectElement = Actionable<
  {
    type: `${BlockElementType.MULTI_STATIC_SELECT}`;
    placeholder: TextObject;
    options: Option[];
    optionGroups?: OptionGroup[];
    maxSelectItems?: number;
  } & ({ initialOption?: Option } | { initialValue?: Option['value'] })
>;
