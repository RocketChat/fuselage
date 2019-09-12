import React from 'react';
import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers';
import {
  withText,
  whenRightToLeftOrientation,
  withBorder,
  normalized,
  whenDisabled,
  scrollable,
  whenInvalid,
} from '../../mixins';
import { Icon } from '../Icon';
import theme, {
  border,
  paddingX,
  paddingY,
  typographicVariant,
  iconMarginX,
  iconMarginY,
} from './theme';


const Container = styled.span.attrs(rebuildClassName('input__wrapper'))`
  ${ normalized }

  position: relative;

  display: flex;
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
  background-color: ${ backgroundColor };
  border-color: ${ borderColor };
  color: ${ color };

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
  ${ normalized }

  width: 100%;
  min-width: 8rem;

  padding: calc(${ paddingY } - ${ border.width }) calc(${ paddingX } - ${ border.width });

  text-overflow: ellipsis;

  appearance: none;
  resize: none;
  outline: 0;

  ${ withBorder(border) }

  ${ withText(typographicVariant) }

  ${ whenDisabled(css`cursor: not-allowed;`) }

  ${ normalColorsVariant }
  ${ whenInvalid(errorColorsVariant) }
`;

const iconInputBoxStyle = () => css`
  ${ Container } > & {
    padding-right: calc(2 * ${ iconMarginX } + ${ typographicVariant.lineHeight } - 2 * ${ border.width });

    & + ${ Icon } {
      position: absolute;
      top: ${ iconMarginY };
      right: ${ iconMarginX };

      pointer-events: none;

      color: ${ theme.iconColor };

      font-size: ${ typographicVariant.lineHeight };
    }

    ${ whenRightToLeftOrientation(() => css`
      padding: ${ theme.padding };
      padding-left: calc(2 * ${ iconMarginX } + ${ typographicVariant.lineHeight } - 2 * ${ border.width });

      & + ${ Icon } {
        right: unset;
        left: ${ iconMarginX };
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

    ${ ({ invalid }) => invalid && css`
      & + ${ Icon } {
        color: ${ theme.errorIconColor };
      }
    ` }

    &:invalid:not(:disabled):focus + ${ Icon },
    &:invalid:not(:disabled).focus + ${ Icon } {
      color: ${ theme.errorIconColor };
    }

    ${ ({ invalid }) => invalid && css`
      &:not(:disabled):focus + ${ Icon },
      &:not(:disabled).focus + ${ Icon } {
        color: ${ theme.errorIconColor };
      }
    ` }
  }
`;

const TextInputElement = styled.input.attrs(rebuildClassName('input'))`
  ${ inputBoxStyle }
  ${ iconInputBoxStyle }
`;

const TextInput = React.forwardRef(function TextInput({
  icon,
  ...props
}, ref) {
  if (icon) {
    return <Container>
      <TextInputElement ref={ref} {...props} />
      <Icon iconName={icon} />
    </Container>;
  }

  return <TextInputElement ref={ref} {...props} />;
});

const TextAreaElement = styled.textarea.attrs(rebuildClassName('input'))`
  ${ inputBoxStyle }
  ${ iconInputBoxStyle }
  ${ scrollable }
`;

const TextAreaInput = React.forwardRef(function TextAreaInput({
  icon,
  ...props
}, ref) {
  if (icon) {
    return <Container>
      <TextAreaElement ref={ref} {...props} />
      <Icon iconName={icon} />
    </Container>;
  }

  return <TextAreaElement ref={ref} {...props} />;
});

const SelectElement = styled.select.attrs(rebuildClassName('input'))`
  ${ inputBoxStyle }
  ${ iconInputBoxStyle }
  ${ scrollable }

  & > option {
    color: ${ theme.color };
  }
`;

const PlaceholderOption = styled.option.attrs(rebuildClassName('input__placeholder'))`
  ${ SelectElement } > & {
    color: ${ theme.placeholderColor };
  }
`;

const SelectInput = React.forwardRef(function SelectInput({
  children,
  placeholder,
  ...props
}, ref) {
  return <Container>
    <SelectElement hasPlaceholder={!!placeholder} ref={ref} {...props}>
      <PlaceholderOption value=''>{placeholder}</PlaceholderOption>
      {children}
    </SelectElement>
    <Icon iconName='arrow-down' />
  </Container>;
});

export const Input = styled(React.forwardRef(function Input({
  type = 'text',
  ...props
}, ref) {
  return (type === 'select' && <SelectInput ref={ref} {...props} />)
    || (type === 'textarea' && <TextAreaInput ref={ref} {...props} />)
    || <TextInput ref={ref} type={type} {...props} />;
}))``;

Input.displayName = 'Input';
