import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers';
import {
  withText,
  normalized,
  clickable,
  withTruncatedText,
  withBorder,
  withButtonActionColors,
} from '../../mixins';
import { Icon } from '../Icon';
import {
  mediumSizeParameters,
  smallSizeParameters,
  basicColors,
  basicDangerColors,
  primaryColors,
  primaryDangerColors,
  ghostColors,
  ghostDangerColors,
} from './theme';


const withSizeVariant = ({
  border,
  paddingX,
  textStyle,
  iconSizeRatio,
}) => css`
  ${ withBorder(border) }
  padding: 0 calc(${ paddingX } - ${ border.width });

  ${ withText(textStyle) }

  line-height: calc(2 * ${ textStyle.lineHeight } - 2 * ${ border.width });

  & > ${ Icon } {
    font-size: ${ iconSizeRatio * textStyle.lineHeight };
  }

  ${ ({ square }) => square && css`
    width: calc(2 * ${ textStyle.lineHeight });
    padding: 0;

    & > ${ Icon } {
      font-size: ${ textStyle.lineHeight };
    }
  ` }
`;

const mediumSized = withSizeVariant(mediumSizeParameters);
const smallSized = withSizeVariant(smallSizeParameters);

const basicColored = withButtonActionColors(basicColors);
const basicDangerColored = withButtonActionColors(basicDangerColors);
const primaryColored = withButtonActionColors(primaryColors);
const primaryDangerColored = withButtonActionColors(primaryDangerColors);
const ghostColored = withButtonActionColors(ghostColors);
const ghostDangerColored = withButtonActionColors(ghostDangerColors);

export const Button = styled.button.attrs(rebuildClassName('button'))`
  ${ normalized }
  ${ clickable }
  ${ withTruncatedText }

  display: inline-block;

  text-align: center;

  appearance: none;

  & > ${ Icon } {
    vertical-align: middle;
  }

  ${ ({ small }) =>
    (small && smallSized)
    || mediumSized }

  ${ ({ danger, ghost, primary }) =>
    (ghost && danger && ghostDangerColored)
    || (ghost && ghostColored)
    || (primary && danger && primaryDangerColored)
    || (primary && primaryColored)
    || (danger && basicDangerColored)
    || basicColored }
`;

Button.displayName = 'Button';
