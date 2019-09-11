import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { useMergedRefs } from '../../hooks/useMergedRefs';
import { disableable } from '../../mixins/disableable';
import { reset } from '../../mixins/reset';
import { unselectable } from '../../mixins/unselectable';
import { visuallyHidden } from '../../mixins/visuallyHidden';
import { withText } from '../../mixins';
import theme from './theme';


const Wrapper = styled.label.attrs(rebuildClassName('rcx-check-box__wrapper'))`
  ${ reset }
  ${ disableable }
  ${ unselectable }

  position: relative;

  display: inline-flex;

  cursor: pointer;

  align-items: center;
`;

const Input = styled.input.attrs({ type: 'checkbox' }).attrs(rebuildClassName('rcx-check-box__input'))`
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

  & > ${ Input }:enabled:hover${ state } + &,
  ${ Input }:enabled.hover${ state } + & {
    border-color: ${ hoverBorderColor };
    background-color: ${ hoverBackgroundColor };
    box-shadow: none;
  }

  & > ${ Input }:enabled:active${ state } + &,
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

const indeterminateColorsVariant = () => colorsVariant({
  state: ':indeterminate',
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
    &::before,
    &::after {
      visibility: visible;

      opacity: 1;
    }

    &::before {
      width: 12px;
      height: 2px;

      transform: translate(-4px, 2px) rotate(-45deg) translate(6px, 2px);

      border-radius: 1px;
    }

    &::after {
      width: 2px;
      height: 6px;

      transform: translate(-4px, 2px) rotate(-45deg);

      border-radius: 1px;
    }
  }
`;

const indeterminateIconVariant = () => css`
  ${ Input }:indeterminate + & {
    &::before {
      visibility: visible;

      width: 12px;
      height: 2px;

      opacity: 1;
      border-radius: 1px;
    }
  }
`;

const Fake = styled.i.attrs(rebuildClassName('rcx-check-box__fake'))`
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
  ${ indeterminateColorsVariant }

  ${ checkedIconVariant }
  ${ indeterminateIconVariant }
`;

const Label = styled.span.attrs(rebuildClassName('rcx-check-box__label'))`
  ${ reset }
  ${ withText }

  margin: 0 0.625rem;

  color: ${ theme.labelColor };

  font-family: ${ theme.labelFontFamily };
  font-size: ${ theme.labelFontSize };
  font-weight: ${ theme.labelFontWeight };
  line-height: ${ theme.labelLineHeight };
`;

export const CheckBox = React.forwardRef(function CheckBox({
  indeterminate,
  label,
  ...props
}, ref) {
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  useEffect(() => {
    innerRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return <Wrapper disabled={props.disabled} hidden={props.hidden} invisible={props.invisible}>
    <Input ref={mergedRef} {...props} />
    <Fake />
    {label && <Label>{label}</Label>}
  </Wrapper>;
});
CheckBox.displayName = 'CheckBox';
