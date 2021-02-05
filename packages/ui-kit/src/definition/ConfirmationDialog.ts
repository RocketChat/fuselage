import { IPlainText } from './IPlainText';
import { TextObject } from './TextObject';

export type ConfirmationDialog = {
  title: IPlainText;
  text: TextObject;
  confirm: IPlainText;
  deny: IPlainText;
  style: 'primary' | 'danger';
};
