import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { PlainText } from './PlainText';

export type LinearScaleElement = Actionable<{
  type: ElementType.LINEAR_SCALE;
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  preLabel?: PlainText;
  postLable?: PlainText;
}>;
