import { css } from '@rocket.chat/css-in-js';

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

export const consumeSpecialStylingProp = <P>(
  propName: keyof SpecialStylingPropTypes,
  propValue: SpecialStylingPropTypes[keyof SpecialStylingPropTypes],
  _props: P,
  classNames: (string | ReturnType<typeof css>)[]
): void => {
  const fn = specialStylingProps[propName];
  const style = fn(propValue as never);
  if (style === null) {
    return;
  }

  classNames.push(style);
};
