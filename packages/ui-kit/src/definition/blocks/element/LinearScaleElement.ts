import { PlainText } from '../text/PlainText';
import { Actionable } from './Actionable';

export type LinearScaleElement = Actionable<{
  type: 'linear_scale';
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  preLabel?: PlainText;
  postLable?: PlainText;
}>;
