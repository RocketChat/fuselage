import { Option } from './Option';
import { PlainText } from './PlainText';

export type OptionGroup = {
  label: PlainText;
  options: Option[];
};
