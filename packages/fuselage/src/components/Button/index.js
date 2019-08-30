import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { disableable } from '../../mixins/disableable';
import { reset } from '../../mixins/reset';
import { unselectable } from '../../mixins/unselectable';
import { withText } from '../../mixins/withText';
import { Icon } from '../Icon';
import theme from './theme';


const sizeVariant = ({
  height,
  paddingVertical,
  paddingHorizontal,
  fontSize,
  lineHeight,
  iconSize,
}) => css`
  height: ${ height };
  padding: ${ paddingVertical } ${ paddingHorizontal };

  font-size: ${ fontSize };
  line-height: ${ lineHeight };

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

const mediumSizeVariant = () => sizeVariant({
  height: theme.height,
  paddingVertical: theme.paddingVertical,
  paddingHorizontal: theme.paddingHorizontal,
  fontSize: theme.fontSize,
  lineHeight: theme.lineHeight,
  iconSize: theme.iconSize,
});

const smallSizeVariant = ({ small }) => small && sizeVariant({
  height: theme.smallHeight,
  paddingVertical: theme.smallPaddingVertical,
  paddingHorizontal: theme.smallPaddingHorizontal,
  fontSize: theme.smallFontSize,
  lineHeight: theme.smallLineHeight,
  iconSize: theme.smallIconSize,
});

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
    color: theme.basicColor,
    backgroundColor: theme.basicBackgroundColor,
    hoverBackgroundColor: theme.basicHoverBackgroundColor,
    activeBackgroundColor: theme.basicActiveBackgroundColor,
    focusBackgroundColor: theme.basicFocusBackgroundColor,
    focusBorderColor: theme.basicFocusBorderColor,
    focusShadowColor: theme.basicFocusShadowColor,
    disabledColor: theme.basicDisabledColor,
    disabledBackgroundColor: theme.basicDisabledBackgroundColor,
  }) }

  ${ ({ danger }) => danger && colorsVariant({
    color: theme.basicDangerColor,
    disabledColor: theme.basicDisabledDangerColor,
  }) }
`;

const primaryColorsVariant = ({ primary }) => primary && css`
  ${ colorsVariant({
    color: theme.primaryColor,
    backgroundColor: theme.primaryBackgroundColor,
    hoverBackgroundColor: theme.primaryHoverBackgroundColor,
    activeBackgroundColor: theme.primaryActiveBackgroundColor,
    focusBackgroundColor: theme.primaryFocusBackgroundColor,
    focusBorderColor: theme.primaryFocusBorderColor,
    focusShadowColor: theme.primaryFocusShadowColor,
    disabledColor: theme.primaryColor,
    disabledBackgroundColor: theme.primaryDisabledBackgroundColor,
  }) }

  ${ ({ danger }) => danger && colorsVariant({
    color: theme.primaryColor,
    backgroundColor: theme.primaryDangerBackgroundColor,
    hoverBackgroundColor: theme.primaryDangerHoverBackgroundColor,
    activeBackgroundColor: theme.primaryDangerActiveBackgroundColor,
    focusBackgroundColor: theme.primaryDangerFocusBackgroundColor,
    focusBorderColor: theme.primaryDangerFocusBorderColor,
    focusShadowColor: theme.primaryDangerFocusShadowColor,
    disabledColor: theme.primaryColor,
    disabledBackgroundColor: theme.primaryDangerDisabledBackgroundColor,
  }) }
`;

const ghostColorsVariant = ({ ghost }) => ghost && colorsVariant({
  backgroundColor: 'transparent',
});

export const Button = styled.button.attrs(rebuildClassName('rcx-button'))`
  ${ reset }
  ${ disableable }
  ${ unselectable }
  ${ withText }

  display: inline-block;

  cursor: pointer;

  border-width: ${ theme.borderWidth };
  border-style: solid;
  border-radius: ${ theme.borderRadius };

  text-align: center;

  font-family: ${ theme.fontFamily };
  font-weight: ${ theme.fontWeight };

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
