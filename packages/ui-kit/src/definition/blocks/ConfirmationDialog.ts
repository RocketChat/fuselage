import { PlainText } from './PlainText';
import { TextObject } from './TextObject';

export type ConfirmationDialog = {
  title: PlainText;
  text: TextObject;
  confirm: PlainText;
  deny: PlainText;
  style: 'primary' | 'danger';
};
