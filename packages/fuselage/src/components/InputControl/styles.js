import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { toRem } from '../../styles/utilities/common';
import { paragraph, ellipsis } from '../../styles/utilities/typography';
import { scrollable } from '../../styles/utilities/layout';

export const withDecoratorColors = ({
  backgroundColor,
  borderColor,
  hoverBorderColor,
  focusBorderColor,
  focusShadowColor,
  activeBorderColor,
  disabledBackgroundColor,
  disabledBorderColor,
}) => css`
  background-color: ${ backgroundColor };
  border-color: ${ borderColor };
  box-shadow: none;

  &:hover,
  &.hover {
    border-color: ${ hoverBorderColor };
  }

  &:focus-within,
  &.focus {
    border-color: ${ focusBorderColor };
    ${ ({ undecorated }) => !undecorated && css`
      box-shadow: 0 0 0 ${ toRem(6) } ${ focusShadowColor };
    ` }
  }

  &:active,
  &.active {
    border-color: ${ activeBorderColor };
    box-shadow: none;
  }

  *:disabled &,
  &:disabled,
  &.disabled {
    background-color: ${ disabledBackgroundColor };
    border-color: ${ disabledBorderColor };
  }
`;

export const withColors = ({
  color,
  placeholderColor,
  focusCaretColor,
  activeCaretColor,
  disabledColor,
}, htmlPlaceholder) => css`
  color: ${ color };

  &::placeholder {
    color: ${ placeholderColor };
  }

  ${ htmlPlaceholder && css`
    color: ${ placeholderColor };
  ` }

  &:focus,
  &.focus {
    caret-color: ${ focusCaretColor };
  }

  &:active,
  &.active {
    caret-color: ${ activeCaretColor };
  }

  *:disabled &,
  &:disabled,
  &.disabled {
    color: ${ disabledColor };
  }
`;

export const StyledInputControl = styled.input`
  ${ box }

  position: relative;

  display: inline-flex;

  flex: 0 0 auto;

  min-width: 8rem;

  background-color: transparent;

  vertical-align: baseline;

  word-break: break-all;

  outline: 0;

  padding:
    calc(${ ({ theme }) => theme.spaces.x12 } - ${ ({ theme }) => theme.borders.width.x2 })
    calc(${ ({ theme }) => theme.spaces.x16 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-block: calc(${ ({ theme }) => theme.spaces.x12 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-inline: calc(${ ({ theme }) => theme.spaces.x16 } - ${ ({ theme }) => theme.borders.width.x2 });

  ${ ({ theme }) => paragraph(theme) }
  ${ ellipsis }

  ${ ({ htmlType }) => htmlType === 'textarea' && css`
    vertical-align: middle;
    resize: none;
    overflow: auto;
    ${ scrollable }
  ` }

  ${ ({ htmlType, multiple }) => htmlType === 'select' && css`
    appearance: none;
    overflow: auto;
    ${ scrollable }
    ${ multiple && css`
      vertical-align: middle;
    ` }
  ` }

  ${ ({ undecorated, theme }) => !undecorated && css`
    border-width: ${ theme.borders.width.x2 };
    border-radius: ${ theme.borders.radius.x2 };
    min-width: 8rem;
    min-height: ${ theme.sizes.x44 };

    ${ ({ theme }) => withDecoratorColors(theme.inputColors.normal) }

    &:invalid,
    &.invalid {
      ${ ({ theme }) => withDecoratorColors(theme.inputColors.invalid) }
    }
  ` }

  ${ ({ theme, htmlPlaceholder }) => withColors(theme.inputColors.normal, htmlPlaceholder) }

  &:invalid,
  &.invalid {
    ${ ({ theme, htmlPlaceholder }) => withColors(theme.inputColors.invalid, htmlPlaceholder) }
  }

  *:disabled &,
  &:disabled,
  &.disabled {
    cursor: not-allowed;
  }
`;
