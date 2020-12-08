import { appendClassName } from '../../../helpers/appendClassName';
import { elevation } from '../../../styles/runtime/elevation';
import { fontScale } from '../../../styles/runtime/fontScales';
import { invisible } from '../../../styles/runtime/invisible';
import { size, minSize, maxSize } from '../../../styles/runtime/sizes';
import { withRichContent } from '../../../styles/runtime/withRichContent';
import { withTruncatedText } from '../../../styles/runtime/withTruncatedText';

const specialStylingProps = {
  elevation,
  invisible,
  withRichContent,
  withTruncatedText,
  size,
  minSize,
  maxSize,
  fontScale,
} as const;

export type SpecialStylingPropTypes = {
  [propName in keyof typeof specialStylingProps]?: Parameters<
    typeof specialStylingProps[propName]
  >[0];
};

export const isSpecialStylingProp = (
  propName: string
): propName is keyof SpecialStylingPropTypes => propName in specialStylingProps;

export const consumeSpecialStylingProp = (
  propName: keyof SpecialStylingPropTypes,
  propValue: SpecialStylingPropTypes[keyof SpecialStylingPropTypes],
  props: Record<string, unknown>
): void => {
  const fn = specialStylingProps[propName];
  const style = fn(propValue as never);
  if (style === null) {
    return;
  }

  props.className = appendClassName(props.className, style);
};
