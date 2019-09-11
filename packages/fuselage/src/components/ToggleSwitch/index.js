import React from 'react';
import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { disableable } from '../../mixins/disableable';
import { reset } from '../../mixins/reset';
import { unselectable } from '../../mixins/unselectable';
import { visuallyHidden } from '../../mixins/visuallyHidden';
import { whenRightToLeftOrientation } from '../../mixins/whenRightToLeftOrientation';
import { Label } from '../Label';
import theme from './theme';


const Container = styled(Label).attrs(rebuildClassName('rcx-toggle-switch__wrapper'))`
  ${ reset }
  ${ disableable }
  ${ unselectable }

  position: relative;

  display: inline-flex;

  cursor: pointer;

  align-items: center;
`;

const Input = styled.input.attrs({ type: 'checkbox' }).attrs(rebuildClassName('rcx-toggle-switch__input'))`
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
  disabledColor = null,
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
    color: ${ disabledColor };
    border-color: ${ disabledBorderColor };
    background-color: ${ disabledBackgroundColor };
  }
`;

const uncheckedColorsVariant = () => colorsVariant({
  color: theme.color,
  backgroundColor: theme.backgroundColor,
  borderColor: theme.backgroundColor,
  hoverBackgroundColor: theme.hoverBackgroundColor,
  hoverBorderColor: theme.hoverBackgroundColor,
  activeBackgroundColor: theme.activeBackgroundColor,
  activeBorderColor: theme.activeBackgroundColor,
  focusBackgroundColor: theme.focusBackgroundColor,
  focusBorderColor: theme.focusBorderColor,
  focusShadowColor: theme.focusShadowColor,
  disabledColor: theme.disabledColor,
  disabledBackgroundColor: theme.disabledBackgroundColor,
  disabledBorderColor: theme.disabledBackgroundColor,
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
  disabledColor: theme.checkedDisabledColor,
  disabledBackgroundColor: theme.checkedDisabledBackgroundColor,
  disabledBorderColor: theme.checkedDisabledBackgroundColor,
});

const thumbPositioning = () => css`
  &::before {
    ${ reset }

    position: absolute;
    left: 0%;

    width: ${ theme.thumbSize };
    height: ${ theme.thumbSize };

    content: '';

    border-radius: 50%;

    background-color: currentColor;
  }

  ${ whenRightToLeftOrientation(css`
    &::before {
      right: 0%;
      left: unset;
    }
  `) }

  ${ Input }:checked + & {
    &::before {
      left: calc(100%);

      transform: translateX(-100%);
    }

    ${ whenRightToLeftOrientation(css`
      &::before {
        right: calc(100%);
        left: unset;

        transform: translateX(100%);
      }
    `) }
  }
`;

const Fake = styled.i.attrs(rebuildClassName('rcx-toggle-switch__fake'))`
  ${ reset }

  position: relative;

  display: flex;

  width: ${ theme.trackWidth };
  height: ${ theme.trackHeight };

  border: ${ theme.borderWidth } solid;
  border-radius: ${ theme.borderRadius };

  align-items: center;
  justify-content: flex-start;

  ${ uncheckedColorsVariant }
  ${ checkedColorsVariant }

  ${ thumbPositioning }
`;

export const ToggleSwitch = styled(React.forwardRef(function ToggleSwitch({
  hidden,
  invisible,
  ...props
}, ref) {
  return <Container hidden={hidden} invisible={invisible}>
    <Input hidden={hidden} invisible={invisible} ref={ref} {...props} />
    <Fake />
  </Container>;
}))``;

ToggleSwitch.displayName = 'ToggleSwitch';
