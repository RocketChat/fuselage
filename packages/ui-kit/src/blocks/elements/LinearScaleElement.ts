import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';
import { PlainText } from '../text/PlainText';

export type LinearScaleElement = Actionable<{
  type: `${BlockElementType.LINEAR_SCALE}`;
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  preLabel?: PlainText;
  postLabel?: PlainText;
}>;
