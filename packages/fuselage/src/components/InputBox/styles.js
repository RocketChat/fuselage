import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { toRem } from '../../styles/utilities/common';
import { paragraph, ellipsis, truncate } from '../../styles/utilities/typography';
import { scrollable } from '../../styles/utilities/layout';

const withDecoratorColors = ({
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
    box-shadow: 0 0 0 ${ toRem(6) } ${ focusShadowColor };
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

const Wrapper = styled.span`
  ${ box }

  position: relative;

  display: inline-flex;

  flex: 1 0 0;

  min-width: 8rem;

  vertical-align: baseline;

  word-break: break-all;

  outline: 0;

  flex-flow: row nowrap;

  border-width: ${ ({ theme }) => theme.borders.width.x2 };
  border-radius: ${ ({ theme }) => theme.borders.radius.x2 };

  ${ ({ theme }) => withDecoratorColors(theme.inputColors.normal) }

  &:invalid,
  &.invalid {
    ${ ({ theme }) => withDecoratorColors(theme.inputColors.invalid) }
  }

  *:disabled &,
  &:disabled,
  &.disabled {
    cursor: not-allowed;
  }
`;

const Addon = styled.span`
  ${ box }

  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  align-items: flex-start;

  padding-top: calc(${ ({ theme }) => theme.spaces.x12 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-bottom: calc(${ ({ theme }) => theme.spaces.x12 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-block: calc(${ ({ theme }) => theme.spaces.x12 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-right: calc(${ ({ theme }) => theme.spaces.x16 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-inline-end: calc(${ ({ theme }) => theme.spaces.x16 } - ${ ({ theme }) => theme.borders.width.x2 });

  ${ (props) => props['mod-over-input'] && css`
    position: absolute;
    top: 0;
    bottom: 0;
    inset-block: 0;
    right: 0;
    inset-inline-end: 0;

    .rtl &,
    &.rtl,
    [dir=rtl] & {
      right: unset;
      left: 0;
    }

    pointer-events: none;
  ` }
`;

const withColors = ({
  color,
  placeholderColor,
  focusCaretColor,
  activeCaretColor,
  disabledColor,
}) => css`
  color: ${ color };

  &::placeholder {
    color: ${ placeholderColor };
  }

  ${ (props) => props['mod-placeholder-visible'] && css`
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

const withIconAddonColors = ({
  color,
  focusCaretColor,
  focusIconColor,
  disabledColor,
}) => css`
  & + ${ Addon } {
    color: ${ color };
  }

  ${ Wrapper }.focus > & {
    caret-color: ${ focusCaretColor };
  }

  &:focus + ${ Addon },
  &.focus + ${ Addon },
  ${ Wrapper }.focus > & + ${ Addon } {
    color: ${ focusIconColor };
  }

  ${ Wrapper }.disabled > & {
    color: ${ disabledColor };
  }

  *:disabled & + ${ Addon },
  &:disabled + ${ Addon },
  &.disabled + ${ Addon },
  ${ Wrapper }.disabled > & + ${ Addon } {
    color: ${ disabledColor };
  }
`;

const Input = styled.input`
  ${ box }

  position: relative;

  display: inline-flex;

  flex: 1 0 auto;

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

  ${ (props) => props['mod-type'] === 'textarea' && css`
    vertical-align: middle;
    resize: none;
    overflow: auto;
    ${ scrollable }
  ` }

  ${ (props) => props['mod-type'] === 'select' && css`
    appearance: none;
    overflow: auto;
    ${ scrollable }
    ${ props['mod-multiple'] && css`
      vertical-align: middle;
    ` }
  ` }

  ${ (props) => !props['mod-undecorated'] && css`
    border-width: ${ ({ theme }) => theme.borders.width.x2 };
    border-radius: ${ ({ theme }) => theme.borders.radius.x2 };
    min-width: 8rem;
    min-height: ${ ({ theme }) => theme.sizes.x44 };

    ${ ({ theme }) => withDecoratorColors(theme.inputColors.normal) }

    &:invalid,
    &.invalid {
      ${ ({ theme }) => withDecoratorColors(theme.inputColors.invalid) }
    }
  ` }

  ${ ({ theme }) => withColors(theme.inputColors.normal) }

  &:invalid,
  &.invalid {
    ${ ({ theme }) => withColors(theme.inputColors.invalid) }
  }

  *:disabled &,
  &:disabled,
  &.disabled {
    cursor: not-allowed;
  }

  ${ ({ theme }) => withIconAddonColors(theme.inputColors.normal) }

  &:invalid,
  &.invalid {
    ${ ({ theme }) => withIconAddonColors(theme.inputColors.invalid) }
  }

  *:disabled & + ${ Addon },
  &:disabled + ${ Addon },
  &.disabled + ${ Addon } {
    pointer-events: none;
  }

  ${ (props) => props['mod-under-addon'] && css`
    padding-right: calc(${ ({ theme }) => theme.spaces.x16 } + ${ ({ theme }) => theme.sizes.x44 } - 2 * ${ ({ theme }) => theme.spaces.x12 });
    padding-inline-end: calc(${ ({ theme }) => theme.spaces.x16 } + ${ ({ theme }) => theme.sizes.x44 } - 2 * ${ ({ theme }) => theme.spaces.x12 });
  ` }

  ${ Wrapper } > & {
    min-width: 0;
    width: 0;
  }
`;

const PlaceholderContainer = styled.option`
  ${ box }
  ${ truncate }

  ${ ({ theme }) => paragraph(theme) }
  color: ${ ({ theme }) => theme.inputColors.normal.placeholderColor };
`;

const OptionContainer = styled.option`
  ${ box }
  ${ truncate }

  ${ ({ theme }) => paragraph(theme) }
  color: ${ ({ theme }) => theme.inputColors.normal.color };

  ${ Input }:invalid > &,
  ${ Input }.invalid > & {
    color: ${ ({ theme }) => theme.inputColors.invalid.color };
  }
`;

const SkeletonContainer = styled.span`
  ${ box }

  display: inline-flex;

  flex: 1 0 0;

  min-width: 8rem;

  vertical-align: baseline;

  padding:
    calc(${ ({ theme }) => theme.spaces.x12 } - ${ ({ theme }) => theme.borders.width.x2 })
    calc(${ ({ theme }) => theme.spaces.x16 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-block: calc(${ ({ theme }) => theme.spaces.x12 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-inline: calc(${ ({ theme }) => theme.spaces.x16 } - ${ ({ theme }) => theme.borders.width.x2 });

  ${ ({ theme }) => paragraph(theme) }
  ${ ellipsis }

  border-width: ${ ({ theme }) => theme.borders.width.x2 };
  border-radius: ${ ({ theme }) => theme.borders.radius.x2 };
  min-height: ${ ({ theme }) => theme.sizes.x44 };

  color: ${ ({ theme }) => theme.inputColors.normal.color };
  background-color: ${ ({ theme }) => theme.inputColors.normal.backgroundColor };
  border-color: ${ ({ theme }) => theme.inputColors.normal.borderColor };
`;

export default {
  'rcx-input-box__wrapper': Wrapper,
  'rcx-input-box': Input,
  'rcx-input-box__placeholder': PlaceholderContainer,
  'rcx-input-box__option': OptionContainer,
  'rcx-input-box__addon': Addon,
  'rcx-skeleton__input': SkeletonContainer,
};
