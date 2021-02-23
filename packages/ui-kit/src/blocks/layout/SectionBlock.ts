import { Layout } from '../Layout';
import { TextObject } from '../TextObject';
import { ButtonElement } from '../elements/ButtonElement';
import { DatePickerElement } from '../elements/DatePickerElement';
import { ImageElement } from '../elements/ImageElement';
import { MultiStaticSelectElement } from '../elements/MultiStaticSelectElement';
import { OverflowElement } from '../elements/OverflowElement';
import { StaticSelectElement } from '../elements/StaticSelectElement';

export type SectionBlock = Layout<{
  type: 'section';
  text?: TextObject;
  fields?: TextObject[];
  accessory?:
    | ButtonElement
    | DatePickerElement
    | ImageElement
    | MultiStaticSelectElement
    | OverflowElement
    | StaticSelectElement;
}>;
