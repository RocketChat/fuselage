import { BlockElementType } from '../../../enums/BlockElementType';
import { PlainText } from '../text/PlainText';
import { Actionable } from './Actionable';

export type LinearScaleElement = Actionable<{
  type: `${BlockElementType.LINEAR_SCALE}`;
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  preLabel?: PlainText;
  postLable?: PlainText;
}>;
