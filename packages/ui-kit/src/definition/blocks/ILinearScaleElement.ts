import { ElementType } from './ElementType';
import { IActionableElement } from './IActionableElement';
import { IPlainText } from './IPlainText';

export interface ILinearScaleElement extends IActionableElement {
  type: ElementType.LINEAR_SCALE;
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  preLabel?: IPlainText;
  postLable?: IPlainText;
}
