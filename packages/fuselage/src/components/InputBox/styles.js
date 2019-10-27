import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { Icon } from '../Icon';
import { InputControl } from '../InputControl';
import { withDecoratorColors } from '../InputControl/styles';
import { paragraph, ellipsis } from '../../styles/utilities/typography';

export const Wrapper = styled.span`
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

export const Addon = styled.span`
  ${ box }

  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  align-items: flex-start;

  padding-top: calc(${ ({ theme }) => theme.spaces.x8 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-bottom: calc(${ ({ theme }) => theme.spaces.x8 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-block: calc(${ ({ theme }) => theme.spaces.x8 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-right: calc(${ ({ theme }) => theme.spaces.x12 } - ${ ({ theme }) => theme.borders.width.x2 });
  padding-inline-end: calc(${ ({ theme }) => theme.spaces.x12 } - ${ ({ theme }) => theme.borders.width.x2 });

  & > ${ Icon.styled } {
    font-size: calc(${ ({ theme }) => theme.sizes.x44 } - 2 * ${ ({ theme }) => theme.spaces.x12 });
    padding-top: ${ ({ theme }) => theme.spaces.x4 };
    padding-bottom: ${ ({ theme }) => theme.spaces.x4 };
    padding-block: ${ ({ theme }) => theme.spaces.x4 };
    padding-right: ${ ({ theme }) => theme.spaces.x4 };
    padding-inline-end: ${ ({ theme }) => theme.spaces.x4 };
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

export const Input = styled(InputControl)`
  flex: 1 0 auto;

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

  ${ Wrapper } > & {
    min-width: 0;
    width: 0;
  }
`;

export const StyledInputBoxSkeleton = styled.span`
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
