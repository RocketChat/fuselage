import { TextObject } from './TextObject';
import { PlainText } from './text/PlainText';

export type ConfirmationDialog = {
  title: PlainText;
  text: TextObject;
  confirm: PlainText;
  deny: PlainText;
  style: 'primary' | 'danger';
};
