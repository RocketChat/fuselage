import { ButtonElement } from '../element/ButtonElement';
import { DatePickerElement } from '../element/DatePickerElement';
import { ImageElement } from '../element/ImageElement';
import { MultiStaticSelectElement } from '../element/MultiStaticSelectElement';
import { OverflowElement } from '../element/OverflowElement';
import { StaticSelectElement } from '../element/StaticSelectElement';
import { TextObject } from '../text/TextObject';
import { Layout } from './Layout';

export type SectionBlock = Layout<{
  type: 'section';
  text?: TextObject;
  fields?: TextObject[];
  accessory?:
    | ImageElement
    | ButtonElement
    | DatePickerElement
    | StaticSelectElement
    | MultiStaticSelectElement
    | OverflowElement;
}>;
