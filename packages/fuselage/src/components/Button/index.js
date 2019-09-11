import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers';
import {
  withText,
  whenFocused,
  whenHovered,
  whenActive,
  whenDisabled,
  normalized,
  clickable,
  withTruncatedText,
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
  typographicVariant,
  iconSizeRatio,
}) => css`
  border-width: ${ border.width };
  border-style: solid;
  border-radius: ${ border.radius };
  padding: 0 calc(${ paddingX } - ${ border.width });

  ${ withText(typographicVariant) }

  line-height: calc(2 * ${ typographicVariant.lineHeight } - 2 * ${ border.width });

  & > ${ Icon } {
    font-size: ${ iconSizeRatio * typographicVariant.lineHeight };
  }

  ${ ({ square }) => square && css`
    width: calc(2 * ${ typographicVariant.lineHeight });
    padding: 0;

    & > ${ Icon } {
      font-size: ${ typographicVariant.lineHeight };
    }
  ` }
`;

const mediumSized = withSizeVariant(mediumSizeParameters);
const smallSized = withSizeVariant(smallSizeParameters);

const withColorVariant = ({
  color,
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor,
  focusBackgroundColor,
  focusBorderColor,
  focusShadowColor,
  disabledColor,
  disabledBackgroundColor,
}) => css`
  color: ${ color };
  border-color: ${ backgroundColor };
  background-color: ${ backgroundColor };

  ${ whenFocused(css`
    border-color: ${ focusBorderColor };
    background-color: ${ focusBackgroundColor };

    ${ focusShadowColor && css`box-shadow: 0 0 0 6px ${ focusShadowColor };` }
  `) }

  ${ whenHovered(css`
    border-color: ${ hoverBackgroundColor };
    background-color: ${ hoverBackgroundColor };
    box-shadow: none;
  `) }

  ${ whenActive(css`
    border-color: ${ activeBackgroundColor };
    background-color: ${ activeBackgroundColor };
    box-shadow: none;
  `) }

  ${ whenDisabled(css`
    color: ${ disabledColor };
    border-color: ${ disabledBackgroundColor };
    background-color: ${ disabledBackgroundColor };
  `) }
`;

const basicColored = withColorVariant(basicColors);
const basicDangerColored = withColorVariant(basicDangerColors);
const primaryColored = withColorVariant(primaryColors);
const primaryDangerColored = withColorVariant(primaryDangerColors);
const ghostColored = withColorVariant(ghostColors);
const ghostDangerColored = withColorVariant(ghostDangerColors);

export const Button = styled.button.attrs(rebuildClassName('rcx-button'))`
  ${ normalized }
  ${ clickable }
  ${ withTruncatedText }

  display: inline-block;

  text-align: center;

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
