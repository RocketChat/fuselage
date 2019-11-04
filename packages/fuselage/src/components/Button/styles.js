import colors from '@rocket.chat/fuselage-tokens/colors';
import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { clickable } from '../../styles/utilities/interactivity';
import { truncate, paragraph, paragraphBold, caption, captionBold } from '../../styles/utilities/typography';
import { toRem } from '../../styles/utilities/common';

const withRectangularSize = ({ height, paddingX, lineHeight }) => css`
  ${ ({ theme }) => css`
    padding:
      calc((${ height } - ${ lineHeight }) / 2 - ${ theme.borders.width.x2 })
      calc(${ paddingX } - ${ theme.borders.width.x2 });
    padding-block: calc((${ height } - ${ lineHeight }) / 2 - ${ theme.borders.width.x2 });
    padding-inline: calc(${ paddingX } - ${ theme.borders.width.x2 });
  ` }
`;

const withSquaredSize = ({ size }) => css`
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

const Container = styled.button`
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

  ${ ({ theme }) => withRectangularSize({
    height: theme.sizes.x40,
    paddingX: theme.spaces.x16,
    lineHeight: theme.textStyles.p1.lineHeight,
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

  ${ (props) => props['mod-small'] && css`
    ${ caption(props.theme) }
    ${ captionBold(props.theme) }

    ${ withRectangularSize({
    height: props.theme.sizes.x32,
    paddingX: props.theme.spaces.x12,
    lineHeight: props.theme.textStyles.c1.lineHeight,
  }) }
  ` }

  ${ (props) => props['mod-square'] && withSquaredSize({
    size: props.theme.spaces.x40,
  }) }

  ${ (props) => props['mod-small'] && props['mod-square'] && withSquaredSize({
    size: props.theme.spaces.x32,
  }) }

  ${ (props) => props['mod-danger'] && withColors({
    backgroundColor: props.theme.buttonColors.secondary.backgroundColor,
    borderColor: props.theme.buttonColors.secondary.borderColor,
    color: colors.red500,
    hoverBackgroundColor: props.theme.buttonColors.secondary.hoverBackgroundColor,
    hoverBorderColor: props.theme.buttonColors.secondary.hoverBorderColor,
    activeBackgroundColor: props.theme.buttonColors.secondary.activeBackgroundColor,
    activeBorderColor: props.theme.buttonColors.secondary.activeBorderColor,
    focusBackgroundColor: props.theme.buttonColors.secondary.focusBackgroundColor,
    focusBorderColor: props.theme.buttonColors.secondary.focusBorderColor,
    focusShadowColor: props.theme.buttonColors.secondary.focusShadowColor,
    disabledBackgroundColor: props.theme.buttonColors.secondary.disabledBackgroundColor,
    disabledBorderColor: props.theme.buttonColors.secondary.disabledBorderColor,
    disabledColor: colors.red100,
  }) }

  ${ (props) => props['mod-primary'] && withColors({
    backgroundColor: props.theme.buttonColors.primary.backgroundColor,
    borderColor: props.theme.buttonColors.primary.borderColor,
    color: props.theme.buttonColors.primary.color,
    hoverBackgroundColor: props.theme.buttonColors.primary.hoverBackgroundColor,
    hoverBorderColor: props.theme.buttonColors.primary.hoverBorderColor,
    activeBackgroundColor: props.theme.buttonColors.primary.activeBackgroundColor,
    activeBorderColor: props.theme.buttonColors.primary.activeBorderColor,
    focusBackgroundColor: props.theme.buttonColors.primary.focusBackgroundColor,
    focusBorderColor: props.theme.buttonColors.primary.focusBorderColor,
    focusShadowColor: props.theme.buttonColors.primary.focusShadowColor,
    disabledBackgroundColor: props.theme.buttonColors.primary.disabledBackgroundColor,
    disabledBorderColor: props.theme.buttonColors.primary.disabledBorderColor,
    disabledColor: props.theme.buttonColors.primary.disabledColor,
  }) }

  ${ (props) => props['mod-primary'] && props['mod-danger'] && withColors({
    backgroundColor: props.theme.buttonColors.danger.backgroundColor,
    borderColor: props.theme.buttonColors.danger.borderColor,
    color: props.theme.buttonColors.danger.color,
    hoverBackgroundColor: props.theme.buttonColors.danger.hoverBackgroundColor,
    hoverBorderColor: props.theme.buttonColors.danger.hoverBorderColor,
    activeBackgroundColor: props.theme.buttonColors.danger.activeBackgroundColor,
    activeBorderColor: props.theme.buttonColors.danger.activeBorderColor,
    focusBackgroundColor: props.theme.buttonColors.danger.focusBackgroundColor,
    focusBorderColor: props.theme.buttonColors.danger.focusBorderColor,
    focusShadowColor: props.theme.buttonColors.danger.focusShadowColor,
    disabledBackgroundColor: props.theme.buttonColors.danger.disabledBackgroundColor,
    disabledBorderColor: props.theme.buttonColors.danger.disabledBorderColor,
    disabledColor: props.theme.buttonColors.danger.disabledColor,
  }) }

${ (props) => props['mod-ghost'] && withColors({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: props.theme.buttonColors.secondary.color,
    hoverBackgroundColor: props.theme.buttonColors.secondary.hoverBackgroundColor,
    hoverBorderColor: props.theme.buttonColors.secondary.hoverBorderColor,
    activeBackgroundColor: props.theme.buttonColors.secondary.activeBackgroundColor,
    activeBorderColor: props.theme.buttonColors.secondary.activeBorderColor,
    focusBackgroundColor: props.theme.buttonColors.secondary.focusBackgroundColor,
    focusBorderColor: props.theme.buttonColors.secondary.focusBorderColor,
    focusShadowColor: props.theme.buttonColors.secondary.focusShadowColor,
    disabledBackgroundColor: props.theme.buttonColors.secondary.disabledBackgroundColor,
    disabledBorderColor: props.theme.buttonColors.secondary.disabledBorderColor,
    disabledColor: props.theme.buttonColors.secondary.disabledColor,
  }) }

  ${ (props) => props['mod-ghost'] && props['mod-danger'] && withColors({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: colors.red500,
    hoverBackgroundColor: props.theme.buttonColors.secondary.hoverBackgroundColor,
    hoverBorderColor: props.theme.buttonColors.secondary.hoverBorderColor,
    activeBackgroundColor: props.theme.buttonColors.secondary.activeBackgroundColor,
    activeBorderColor: props.theme.buttonColors.secondary.activeBorderColor,
    focusBackgroundColor: props.theme.buttonColors.secondary.focusBackgroundColor,
    focusBorderColor: props.theme.buttonColors.secondary.focusBorderColor,
    focusShadowColor: props.theme.buttonColors.secondary.focusShadowColor,
    disabledBackgroundColor: props.theme.buttonColors.secondary.disabledBackgroundColor,
    disabledBorderColor: props.theme.buttonColors.secondary.disabledBorderColor,
    disabledColor: colors.red100,
  }) }
`;

export default {
  'rcx-button': Container,
};
