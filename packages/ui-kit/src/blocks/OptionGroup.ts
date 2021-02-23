import { Option } from './Option';
import { PlainText } from './text/PlainText';

export type OptionGroup = {
  label: PlainText;
  options: Option[];
};
