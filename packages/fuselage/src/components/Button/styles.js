import colors from '@rocket.chat/fuselage-tokens/colors';
import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { clickable } from '../../styles/utilities/interactivity';
import { truncate, paragraph, paragraphBold, caption, captionBold } from '../../styles/utilities/typography';
import { Icon } from '../Icon';
import { toRem } from '../../styles/utilities/common';

const withRectangularSize = ({ height, paddingX, lineHeight, iconSizeRatio }) => css`
  ${ ({ theme }) => css`
    padding:
      calc((${ height } - ${ lineHeight }) / 2 - ${ theme.borders.width.x2 })
      calc(${ paddingX } - ${ theme.borders.width.x2 });
  ` }

  & > ${ Icon.styled } {
    font-size: ${ iconSizeRatio }em;
  }
`;

const withSquaredSize = ({ size, iconSize }) => css`
  width: ${ size };
  height: ${ size };
  padding: 0;

  &::before,
  &::after {
    display: inline-block;

    height: 100%;

    content: '';
    vertical-align: middle;
  }

  & > ${ Icon.styled } {
    font-size: ${ iconSize };
  }
`;

const withColors = ({
  color,
  backgroundColor,
  borderColor,
  hoverBackgroundColor,
  hoverBorderColor,
  activeBackgroundColor,
  activeBorderColor,
  focusBackgroundColor,
  focusBorderColor,
  focusShadowColor,
  disabledColor,
  disabledBackgroundColor,
  disabledBorderColor,
}) => css`
  color: ${ color };
  border-color: ${ borderColor };
  background-color: ${ backgroundColor };

  &.focus,
  &:focus {
    border-color: ${ focusBorderColor };
    background-color: ${ focusBackgroundColor };
    box-shadow: 0 0 0 ${ toRem(6) } ${ focusShadowColor };
  }

  &.hover,
  &:hover {
    border-color: ${ hoverBorderColor };
    background-color: ${ hoverBackgroundColor };
    box-shadow: none;
  }

  &.active,
  &:active {
    border-color: ${ activeBorderColor };
    background-color: ${ activeBackgroundColor };
    box-shadow: none;
  }

  &.disabled,
  &:disabled {
    color: ${ disabledColor };
    border-color: ${ disabledBorderColor };
    background-color: ${ disabledBackgroundColor };
  }
`;

const container = styled.button`
  ${ box }

  display: inline-block;

  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  border-width: ${ ({ theme }) => theme.borders.width.x2 };
  border-style: solid;
  border-radius: ${ ({ theme }) => theme.borders.radius.x2 };

  appearance: none;

  ${ clickable }
  ${ truncate }
  ${ ({ theme }) => paragraph(theme) }
  ${ ({ theme }) => paragraphBold(theme) }

  & > ${ Icon.styled } {
    vertical-align: middle;
  }

  ${ ({ theme }) => withRectangularSize({
    height: theme.sizes.x40,
    paddingX: theme.spaces.x16,
    lineHeight: theme.textStyles.p1.lineHeight,
    iconSizeRatio: 8 / 7,
  }) }

  ${ ({ theme }) => withColors({
    backgroundColor: theme.buttonColors.secondary.backgroundColor,
    borderColor: theme.buttonColors.secondary.borderColor,
    color: theme.buttonColors.secondary.color,
    hoverBackgroundColor: theme.buttonColors.secondary.hoverBackgroundColor,
    hoverBorderColor: theme.buttonColors.secondary.hoverBorderColor,
    activeBackgroundColor: theme.buttonColors.secondary.activeBackgroundColor,
    activeBorderColor: theme.buttonColors.secondary.activeBorderColor,
    focusBackgroundColor: theme.buttonColors.secondary.focusBackgroundColor,
    focusBorderColor: theme.buttonColors.secondary.focusBorderColor,
    focusShadowColor: theme.buttonColors.secondary.focusShadowColor,
    disabledBackgroundColor: theme.buttonColors.secondary.disabledBackgroundColor,
    disabledBorderColor: theme.buttonColors.secondary.disabledBorderColor,
    disabledColor: theme.buttonColors.secondary.disabledColor,
  }) }

  ${ ({ modifiers, theme }) => modifiers.small && css`
    ${ caption(theme) }
    ${ captionBold(theme) }

    ${ withRectangularSize({
    height: theme.sizes.x32,
    paddingX: theme.spaces.x12,
    lineHeight: theme.textStyles.c1.lineHeight,
    iconSizeRatio: 1,
  }) }
  ` }

  ${ ({ modifiers, theme }) => modifiers.square && withSquaredSize({
    size: theme.spaces.x40,
    iconSize: theme.textStyles.p1.lineHeight,
  }) }

  ${ ({ modifiers, theme }) => modifiers.small && modifiers.square && withSquaredSize({
    size: theme.spaces.x32,
    iconSize: theme.textStyles.c1.lineHeight,
  }) }

  ${ ({ modifiers, theme }) => modifiers.danger && withColors({
    backgroundColor: theme.buttonColors.secondary.backgroundColor,
    borderColor: theme.buttonColors.secondary.borderColor,
    color: colors.red500,
    hoverBackgroundColor: theme.buttonColors.secondary.hoverBackgroundColor,
    hoverBorderColor: theme.buttonColors.secondary.hoverBorderColor,
    activeBackgroundColor: theme.buttonColors.secondary.activeBackgroundColor,
    activeBorderColor: theme.buttonColors.secondary.activeBorderColor,
    focusBackgroundColor: theme.buttonColors.secondary.focusBackgroundColor,
    focusBorderColor: theme.buttonColors.secondary.focusBorderColor,
    focusShadowColor: theme.buttonColors.secondary.focusShadowColor,
    disabledBackgroundColor: theme.buttonColors.secondary.disabledBackgroundColor,
    disabledBorderColor: theme.buttonColors.secondary.disabledBorderColor,
    disabledColor: colors.red100,
  }) }

  ${ ({ modifiers, theme }) => modifiers.primary && withColors({
    backgroundColor: theme.buttonColors.primary.backgroundColor,
    borderColor: theme.buttonColors.primary.borderColor,
    color: theme.buttonColors.primary.color,
    hoverBackgroundColor: theme.buttonColors.primary.hoverBackgroundColor,
    hoverBorderColor: theme.buttonColors.primary.hoverBorderColor,
    activeBackgroundColor: theme.buttonColors.primary.activeBackgroundColor,
    activeBorderColor: theme.buttonColors.primary.activeBorderColor,
    focusBackgroundColor: theme.buttonColors.primary.focusBackgroundColor,
    focusBorderColor: theme.buttonColors.primary.focusBorderColor,
    focusShadowColor: theme.buttonColors.primary.focusShadowColor,
    disabledBackgroundColor: theme.buttonColors.primary.disabledBackgroundColor,
    disabledBorderColor: theme.buttonColors.primary.disabledBorderColor,
    disabledColor: theme.buttonColors.primary.disabledColor,
  }) }

  ${ ({ modifiers, theme }) => modifiers.primary && modifiers.danger && withColors({
    backgroundColor: theme.buttonColors.danger.backgroundColor,
    borderColor: theme.buttonColors.danger.borderColor,
    color: theme.buttonColors.danger.color,
    hoverBackgroundColor: theme.buttonColors.danger.hoverBackgroundColor,
    hoverBorderColor: theme.buttonColors.danger.hoverBorderColor,
    activeBackgroundColor: theme.buttonColors.danger.activeBackgroundColor,
    activeBorderColor: theme.buttonColors.danger.activeBorderColor,
    focusBackgroundColor: theme.buttonColors.danger.focusBackgroundColor,
    focusBorderColor: theme.buttonColors.danger.focusBorderColor,
    focusShadowColor: theme.buttonColors.danger.focusShadowColor,
    disabledBackgroundColor: theme.buttonColors.danger.disabledBackgroundColor,
    disabledBorderColor: theme.buttonColors.danger.disabledBorderColor,
    disabledColor: theme.buttonColors.danger.disabledColor,
  }) }

${ ({ modifiers, theme }) => modifiers.ghost && withColors({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: theme.buttonColors.secondary.color,
    hoverBackgroundColor: theme.buttonColors.secondary.hoverBackgroundColor,
    hoverBorderColor: theme.buttonColors.secondary.hoverBorderColor,
    activeBackgroundColor: theme.buttonColors.secondary.activeBackgroundColor,
    activeBorderColor: theme.buttonColors.secondary.activeBorderColor,
    focusBackgroundColor: theme.buttonColors.secondary.focusBackgroundColor,
    focusBorderColor: theme.buttonColors.secondary.focusBorderColor,
    focusShadowColor: theme.buttonColors.secondary.focusShadowColor,
    disabledBackgroundColor: theme.buttonColors.secondary.disabledBackgroundColor,
    disabledBorderColor: theme.buttonColors.secondary.disabledBorderColor,
    disabledColor: theme.buttonColors.secondary.disabledColor,
  }) }

  ${ ({ modifiers, theme }) => modifiers.ghost && modifiers.danger && withColors({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: colors.red500,
    hoverBackgroundColor: theme.buttonColors.secondary.hoverBackgroundColor,
    hoverBorderColor: theme.buttonColors.secondary.hoverBorderColor,
    activeBackgroundColor: theme.buttonColors.secondary.activeBackgroundColor,
    activeBorderColor: theme.buttonColors.secondary.activeBorderColor,
    focusBackgroundColor: theme.buttonColors.secondary.focusBackgroundColor,
    focusBorderColor: theme.buttonColors.secondary.focusBorderColor,
    focusShadowColor: theme.buttonColors.secondary.focusShadowColor,
    disabledBackgroundColor: theme.buttonColors.secondary.disabledBackgroundColor,
    disabledBorderColor: theme.buttonColors.secondary.disabledBorderColor,
    disabledColor: colors.red100,
  }) }
`;

export default {
  'rcx-button': container,
};
