import React from 'react';
import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { reset } from '../../mixins/reset';
import { visuallyHidden } from '../../mixins/visuallyHidden';
import { disableable } from '../../mixins/disableable';
import { unselectable } from '../../mixins/unselectable';
import { Label } from '../Label';
import theme from './theme';


const Input = styled.input.attrs({ type: 'radio' }).attrs(rebuildClassName('rcx-radio-button__input'))`
  ${ visuallyHidden }
`;

const colorsVariant = ({
  state = null,
  color = null,
  backgroundColor = null,
  borderColor = null,
  hoverBackgroundColor = null,
  hoverBorderColor = null,
  activeBackgroundColor = null,
  activeBorderColor = null,
  focusBackgroundColor = null,
  focusBorderColor = null,
  focusShadowColor = null,
  disabledBackgroundColor = null,
  disabledBorderColor = null,
}) => css`
  ${ Input }${ state } + & {
    color: ${ color };
  }

  ${ Input }:enabled${ state } + & {
    border-color: ${ borderColor };
    background-color: ${ backgroundColor };
  }

  ${ Input }:enabled:focus${ state } + &,
  ${ Input }:enabled.focus${ state } + & {
    border-color: ${ focusBorderColor };
    background-color: ${ focusBackgroundColor };

    box-shadow: 0 0 0 6px ${ focusShadowColor };
  }

  ${ Input }:enabled:hover${ state } + &,
  ${ Input }:enabled.hover${ state } + & {
    border-color: ${ hoverBorderColor };
    background-color: ${ hoverBackgroundColor };
    box-shadow: none;
  }

  ${ Input }:enabled:active${ state } + &,
  ${ Input }:enabled.active${ state } + & {
    border-color: ${ activeBorderColor };
    background-color: ${ activeBackgroundColor };
    box-shadow: none;
  }

  ${ Input }:disabled${ state } + & {
    border-color: ${ disabledBorderColor };
    background-color: ${ disabledBackgroundColor };
  }
`;

const uncheckedColorsVariant = () => colorsVariant({
  color: theme.color,
  borderColor: theme.borderColor,
  hoverBorderColor: theme.hoverBorderColor,
  activeBorderColor: theme.activeBorderColor,
  focusBorderColor: theme.focusBorderColor,
  focusShadowColor: theme.focusShadowColor,
  disabledBackgroundColor: theme.disabledBackgroundColor,
  disabledBorderColor: theme.disabledBorderColor,
});

const checkedColorsVariant = () => colorsVariant({
  state: ':checked',
  backgroundColor: theme.checkedBackgroundColor,
  borderColor: theme.checkedBackgroundColor,
  hoverBackgroundColor: theme.checkedHoverBackgroundColor,
  hoverBorderColor: theme.checkedHoverBackgroundColor,
  activeBackgroundColor: theme.checkedActiveBackgroundColor,
  activeBorderColor: theme.checkedActiveBackgroundColor,
  focusBackgroundColor: theme.checkedFocusBackgroundColor,
  focusBorderColor: theme.checkedFocusBorderColor,
  focusShadowColor: theme.checkedFocusShadowColor,
  disabledBackgroundColor: theme.checkedDisabledBackgroundColor,
  disabledBorderColor: theme.checkedDisabledBackgroundColor,
});

const checkedIconVariant = () => css`
  ${ Input }:checked + & {
    &::before {
      visibility: visible;

      width: 6px;
      height: 6px;

      opacity: 1;

      border-radius: 50%;
    }
  }
`;

const Fake = styled.i.attrs(rebuildClassName('rcx-radio-button__fake'))`
  ${ reset }

  position: relative;

  display: flex;

  width: ${ theme.size };
  height: ${ theme.size };

  border: ${ theme.borderWidth } solid;
  border-radius: ${ theme.borderRadius };

  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    ${ reset }

    position: absolute;

    display: block;
    visibility: hidden;

    content: '';

    opacity: 0;
    background-color: currentColor;
  }

  ${ uncheckedColorsVariant }
  ${ checkedColorsVariant }

  ${ checkedIconVariant }
`;

const Container = styled(Label).attrs(rebuildClassName('rcx-radio-button__wrapper'))`
  ${ reset }
  ${ disableable }
  ${ unselectable }

  position: relative;

  display: inline-flex;

  cursor: pointer;

  align-items: center;
`;

export const RadioButton = styled(React.forwardRef(function RadioButton({
  hidden,
  invisible,
  ...props
}, ref) {
  return <Container hidden={hidden} invisible={invisible}>
    <Input hidden={hidden} invisible={invisible} ref={ref} {...props} />
    <Fake />
  </Container>;
}))``;

RadioButton.displayName = 'RadioButton';
