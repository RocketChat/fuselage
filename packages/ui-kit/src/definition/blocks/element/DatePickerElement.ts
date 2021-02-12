import { BlockElementType } from '../../../enums/BlockElementType';
import { TextObject } from '../text/TextObject';
import { Actionable } from './Actionable';

export type DatePickerElement = Actionable<{
  type: `${BlockElementType.DATEPICKER}`;
  placeholder?: TextObject;
  initialDate?: string;
}>;
