import type { Markdown } from './text/Markdown';
import type { PlainText } from './text/PlainText';

type I18n = {
  i18n?: {
    key: string;
    args?: { [key: string]: string | number };
  };
};

export type TextObject = (PlainText | Markdown) & I18n;
