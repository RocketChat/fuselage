import styled, { css } from 'styled-components';

import box from '../../styles/box';
import { py, px, pr } from '../../styles/utilities/spacing';
import { StyledIcon } from '../Icon/styles';
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

  border-width: ${ ({ theme }) => theme.borders.width[1] };
  border-radius: ${ ({ theme }) => theme.borders.radius[1] };

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

  ${ ({ theme }) => py(`calc(${ theme.spaces[4] } - ${ theme.borders.width[1] })`) }
  ${ ({ theme }) => pr(`calc(${ theme.spaces[5] } - ${ theme.borders.width[1] })`) }

  & > ${ StyledIcon } {
    font-size: ${ ({ theme }) => `calc(${ theme.sizes[1] } - 2 * ${ theme.spaces[4] })` };
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
  width: 0;

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
`;

export const StyledInputBoxSkeleton = styled.span`
  ${ box }

  display: inline-flex;

  flex: 1 0 0;

  min-width: 8rem;

  vertical-align: baseline;

  ${ ({ theme }) => py(`calc(${ theme.spaces[4] } - ${ theme.borders.width[1] })`) }
  ${ ({ theme }) => px(`calc(${ theme.spaces[5] } - ${ theme.borders.width[1] })`) }
  ${ ({ theme }) => paragraph(theme) }
  ${ ellipsis }

  border-width: ${ ({ theme }) => theme.borders.width[1] };
  border-radius: ${ ({ theme }) => theme.borders.radius[1] };
  min-height: ${ ({ theme }) => theme.sizes[1] };

  color: ${ ({ theme }) => theme.inputColors.normal.color };
  background-color: ${ ({ theme }) => theme.inputColors.normal.backgroundColor };
  border-color: ${ ({ theme }) => theme.inputColors.normal.borderColor };
`;
