import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { disableable } from '../../mixins/disableable';
import { reset } from '../../mixins/reset';
import { unselectable } from '../../mixins/unselectable';
import { withTextAlignment, withTextVariant } from '../../mixins/withText';
import { Icon } from '../Icon';
import theme from './theme';
import { withTruncatedText } from '../../mixins/withTruncatedText';


const sizeVariant = ({
  height,
  paddingVertical,
  paddingHorizontal,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  iconSize,
}) => css`
  height: ${ height };
  padding: ${ paddingVertical } ${ paddingHorizontal };

  ${ withTextVariant({
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
  }) }

  & > ${ Icon } {
    font-size: ${ iconSize };
  }

  ${ ({ square }) => square && css`
    width: ${ height };
    padding: ${ paddingVertical } 0;

    & > .rcx-icon {
      font-size: ${ lineHeight };
    }
  ` }
`;

const mediumSizeVariant = () => sizeVariant(theme.mediumSize);

const smallSizeVariant = ({ small }) => small && sizeVariant(theme.smallSize);

const colorsVariant = ({
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

  &:enabled:focus,
  &:enabled.focus {
    border-color: ${ focusBorderColor };
    background-color: ${ focusBackgroundColor };

    ${ focusShadowColor && css`box-shadow: 0 0 0 6px ${ focusShadowColor };` }
  }

  &:enabled:hover,
  &:enabled.hover {
    border-color: ${ hoverBackgroundColor };
    background-color: ${ hoverBackgroundColor };
    box-shadow: none;
  }

  &:enabled:active,
  &:enabled.active {
    border-color: ${ activeBackgroundColor };
    background-color: ${ activeBackgroundColor };
    box-shadow: none;
  }

  &:disabled {
    color: ${ disabledColor };
    border-color: ${ disabledBackgroundColor };
    background-color: ${ disabledBackgroundColor };
  }
`;

const basicColorsVariant = () => css`
  ${ colorsVariant({
    color: theme.basicColors.color,
    backgroundColor: theme.basicColors.backgroundColor,
    hoverBackgroundColor: theme.basicColors.hoverBackgroundColor,
    activeBackgroundColor: theme.basicColors.activeBackgroundColor,
    focusBackgroundColor: theme.basicColors.focusBackgroundColor,
    focusBorderColor: theme.basicColors.focusBorderColor,
    focusShadowColor: theme.basicColors.focusShadowColor,
    disabledColor: theme.basicColors.disabledColor,
    disabledBackgroundColor: theme.basicColors.disabledBackgroundColor,
  }) }

  ${ ({ danger }) => danger && colorsVariant({
    color: theme.basicColors.dangerColor,
    disabledColor: theme.basicColors.disabledDangerColor,
  }) }
`;

const primaryColorsVariant = ({ primary }) => primary && css`
  ${ colorsVariant({
    color: theme.primaryColors.color,
    backgroundColor: theme.primaryColors.backgroundColor,
    hoverBackgroundColor: theme.primaryColors.hoverBackgroundColor,
    activeBackgroundColor: theme.primaryColors.activeBackgroundColor,
    focusBackgroundColor: theme.primaryColors.focusBackgroundColor,
    focusBorderColor: theme.primaryColors.focusBorderColor,
    focusShadowColor: theme.primaryColors.focusShadowColor,
    disabledColor: theme.primaryColors.color,
    disabledBackgroundColor: theme.primaryColors.disabledBackgroundColor,
  }) }

  ${ ({ danger }) => danger && colorsVariant({
    color: theme.primaryColors.color,
    backgroundColor: theme.primaryColors.dangerBackgroundColor,
    hoverBackgroundColor: theme.primaryColors.dangerHoverBackgroundColor,
    activeBackgroundColor: theme.primaryColors.dangerActiveBackgroundColor,
    focusBackgroundColor: theme.primaryColors.dangerFocusBackgroundColor,
    focusBorderColor: theme.primaryColors.dangerFocusBorderColor,
    focusShadowColor: theme.primaryColors.dangerFocusShadowColor,
    disabledColor: theme.primaryColors.color,
    disabledBackgroundColor: theme.primaryColors.dangerDisabledBackgroundColor,
  }) }
`;

const ghostColorsVariant = ({ ghost }) => ghost && colorsVariant({
  backgroundColor: 'transparent',
});

export const Button = styled.button.attrs(rebuildClassName('rcx-button'))`
  ${ reset }
  ${ disableable }
  ${ unselectable }
  ${ withTextAlignment('center') }
  ${ withTruncatedText }

  display: inline-block;

  cursor: pointer;

  border-width: ${ theme.borderWidth };
  border-style: solid;
  border-radius: ${ theme.borderRadius };

  text-align: center;

  & > ${ Icon } {
    vertical-align: middle;
  }

  ${ mediumSizeVariant }
  ${ smallSizeVariant }

  ${ basicColorsVariant }
  ${ primaryColorsVariant }
  ${ ghostColorsVariant }
`;
Button.displayName = 'Button';
