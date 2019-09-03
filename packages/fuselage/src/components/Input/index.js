import React from 'react';
import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { reset } from '../../mixins/reset';
import { disableable } from '../../mixins/disableable';
import { Icon } from '../Icon';
import theme from './theme';
import { withTextVariant } from '../../mixins/withText';
import { scrollable } from '../../mixins/scrollable';
import { whenRightToLeftOrientation } from '../../mixins/whenRightToLeftOrientation';


const Wrapper = styled.span.attrs(rebuildClassName('rcx-input__wrapper'))`
  ${ reset }

  position: relative;

  display: inline-flex;

  width: 100%;
`;

const colorsVariant = ({
  color,
  borderColor,
  backgroundColor,
  placeholderColor,
  hoverBorderColor,
  focusBorderColor,
  focusShadowColor,
  focusCaretColor,
  activeBorderColor,
  activeCaretColor,
  disabledColor,
  disabledBorderColor,
  disabledBackgroundColor,
}) => css`
  color: ${ color };
  border-color: ${ borderColor };
  background-color: ${ backgroundColor };

  &::placeholder {
    color: ${ placeholderColor };
  }

  ${ ({ hasPlaceholder }) => hasPlaceholder && css`
    color: ${ placeholderColor };
  ` }

  &:hover,
  &.hover {
    border-color: ${ hoverBorderColor };
  }

  &:focus,
  &.focus {
    border-color: ${ focusBorderColor };
    box-shadow: 0 0 0 6px ${ focusShadowColor };
    caret-color: ${ focusCaretColor };
  }

  &:active,
  &.active {
    border-color: ${ activeBorderColor };
    box-shadow: none;
    caret-color: ${ activeCaretColor };
  }

  &:disabled {
    color: ${ disabledColor };
    border-color: ${ disabledBorderColor };
    background-color: ${ disabledBackgroundColor };

    ${ ({ hasPlaceholder }) => hasPlaceholder && css`
      color: ${ placeholderColor };
    ` }
  }
`;

const normalColorsVariant = () => colorsVariant({
  color: theme.color,
  borderColor: theme.borderColor,
  backgroundColor: theme.backgroundColor,
  placeholderColor: theme.placeholderColor,
  hoverBorderColor: theme.hoverBorderColor,
  focusBorderColor: theme.focusBorderColor,
  focusShadowColor: theme.focusShadowColor,
  focusCaretColor: theme.focusCaretColor,
  activeBorderColor: theme.activeBorderColor,
  activeCaretColor: theme.activeCaretColor,
  disabledColor: theme.disabledColor,
  disabledBorderColor: theme.disabledBorderColor,
  disabledBackgroundColor: theme.disabledBackgroundColor,
});

const errorColorsVariant = () => colorsVariant({
  color: theme.errorColor,
  borderColor: theme.errorBorderColor,
  placeholderColor: theme.placeholderColor,
  hoverBorderColor: theme.errorBorderColor,
  focusBorderColor: theme.errorBorderColor,
  focusShadowColor: theme.errorFocusShadowColor,
  activeBorderColor: theme.activeBorderColor,
  activeCaretColor: theme.activeCaretColor,
});

const inputBoxStyle = () => css`
  ${ reset }
  ${ disableable }
  ${ withTextVariant(theme.text) }

  width: 100%;
  min-width: 8rem;

  padding: ${ theme.padding };

  resize: none;

  text-overflow: ellipsis;

  border-width: ${ theme.borderWidth };
  border-style: solid;
  border-radius: ${ theme.borderRadius };

  outline: none;

  &::placeholder {
    ${ reset }
    ${ withTextVariant(theme.text) }
  }

  ${ normalColorsVariant }

  &:invalid {
    ${ errorColorsVariant }
  }

  ${ ({ hasError }) => hasError && errorColorsVariant() }
`;

const iconInputBoxStyle = () => css`
  ${ Wrapper } > & {
    padding-right: calc(2 * ${ theme.iconMarginHorizontal } + ${ theme.iconSize } - 2 * ${ theme.borderWidth });

    & + ${ Icon } {
      position: absolute;
      top: ${ theme.iconMarginVertical };
      right: ${ theme.iconMarginHorizontal };

      pointer-events: none;

      color: ${ theme.iconColor };

      font-size: ${ theme.iconSize };
    }

    ${ whenRightToLeftOrientation(() => css`
      padding: ${ theme.padding };
      padding-left: calc(2 * ${ theme.iconMarginHorizontal } + ${ theme.iconSize } - 2 * ${ theme.borderWidth });

      & + ${ Icon } {
        right: unset;
        left: ${ theme.iconMarginHorizontal };
      }
    `) }

    &:not(:disabled):focus + ${ Icon },
    &:not(:disabled).focus + ${ Icon } {
      color: ${ theme.focusIconColor };
    }

    &:disabled + ${ Icon } {
      color: ${ theme.disabledIconColor };
    }

    &:invalid + ${ Icon } {
      color: ${ theme.errorIconColor };
    }

    ${ ({ hasError }) => hasError && css`
      & + ${ Icon } {
        color: ${ theme.errorIconColor };
      }
    ` }

    &:invalid:not(:disabled):focus + ${ Icon },
    &:invalid:not(:disabled).focus + ${ Icon } {
      color: ${ theme.errorIconColor };
    }

    ${ ({ hasError }) => hasError && css`
      &:not(:disabled):focus + ${ Icon },
      &:not(:disabled).focus + ${ Icon } {
        color: ${ theme.errorIconColor };
      }
    ` }
  }
`;

const TextInputElement = styled.input.attrs(rebuildClassName('rcx-input'))`
  ${ inputBoxStyle }
  ${ iconInputBoxStyle }
`;

const TextInput = React.forwardRef(function TextInput({
  icon,
  ...props
}, ref) {
  if (icon) {
    return <Wrapper>
      <TextInputElement ref={ref} {...props} />
      <Icon iconName={icon} />
    </Wrapper>;
  }

  return <TextInputElement ref={ref} {...props} />;
});

const TextAreaElement = styled.textarea.attrs(rebuildClassName('rcx-input'))`
  ${ inputBoxStyle }
  ${ iconInputBoxStyle }
  ${ scrollable }
`;

const TextAreaInput = React.forwardRef(function TextAreaInput({
  icon,
  ...props
}, ref) {
  if (icon) {
    return <Wrapper>
      <TextAreaElement ref={ref} {...props} />
      <Icon iconName={icon} />
    </Wrapper>;
  }

  return <TextAreaElement ref={ref} {...props} />;
});

const SelectElement = styled.select.attrs(rebuildClassName('rcx-input'))`
  ${ inputBoxStyle }
  ${ iconInputBoxStyle }
  ${ scrollable }

  & > option {
    color: ${ theme.color };
  }
`;

const PlaceholderOption = styled.option.attrs(rebuildClassName('rcx-input__placeholder'))`
  ${ SelectElement } > & {
    color: ${ theme.placeholderColor };
  }
`;

const SelectInput = React.forwardRef(function SelectInput({
  children,
  placeholder,
  ...props
}, ref) {
  return <Wrapper>
    <SelectElement hasPlaceholder={!!placeholder} ref={ref} {...props}>
      <PlaceholderOption value=''>{placeholder}</PlaceholderOption>
      {children}
    </SelectElement>
    <Icon iconName='arrow-down' />
  </Wrapper>;
});

export const Input = React.forwardRef(function Input({
  error,
  type = 'text',
  ...props
}, ref) {
  return (type === 'select' && <SelectInput hasError={error} ref={ref} {...props} />)
    || (type === 'textarea' && <TextAreaInput hasError={error} ref={ref} {...props} />)
    || <TextInput hasError={error} ref={ref} type={type} {...props} />;
});
