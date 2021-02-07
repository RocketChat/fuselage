import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { IPlainText } from './IPlainText';

export type LinearScaleElement = Actionable<{
  type: ElementType.LINEAR_SCALE;
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  preLabel?: IPlainText;
  postLable?: IPlainText;
}>;
