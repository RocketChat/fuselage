import styled, { css } from 'styled-components';

import box from '../../styles/box';
import { toRem } from '../../styles/helpers';
import { py, px } from '../../styles/utilities/spacing';
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

  width: 8rem;
  min-width: 0;

  background-color: transparent;

  vertical-align: baseline;

  word-break: break-all;

  outline: 0;

  ${ ({ theme }) => py(`calc(${ theme.spaces[4] } - ${ theme.borders.width[1] })`) }
  ${ ({ theme }) => px(`calc(${ theme.spaces[5] } - ${ theme.borders.width[1] })`) }
  ${ ({ theme }) => paragraph(theme) }
  ${ ellipsis }

  ${ ({ htmlType }) => htmlType === 'textarea' && css`
    vertical-align: middle;
    resize: none;
    overflow: auto;
    ${ scrollable }
  ` }

  ${ ({ htmlType }) => htmlType === 'select' && css`
    appearance: none;
    ${ scrollable }
  ` }

  ${ ({ undecorated, theme }) => !undecorated && css`
    border-width: ${ theme.borders.width[1] };
    border-radius: ${ theme.borders.radius[1] };
    min-width: 8rem;
    min-height: ${ theme.sizes[1] };

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
