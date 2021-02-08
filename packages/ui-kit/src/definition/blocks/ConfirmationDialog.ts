import { PlainText } from './text/PlainText';
import { TextObject } from './text/TextObject';

export type ConfirmationDialog = {
  title: PlainText;
  text: TextObject;
  confirm: PlainText;
  deny: PlainText;
  style: 'primary' | 'danger';
};
