import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { paragraph, truncate } from '../../styles/utilities/typography';
import { Addon, Input } from '../InputBox/styles';
import { InputBox } from '../InputBox';

export const StyledSelectInput = styled(InputBox)`
  position: relative;

  & > ${ Input } {
    padding-right: calc(${ ({ theme }) => theme.spaces.x16 } + ${ ({ theme }) => theme.sizes.x44 } - 2 * ${ ({ theme }) => theme.spaces.x12 });
    padding-inline-end: calc(${ ({ theme }) => theme.spaces.x16 } + ${ ({ theme }) => theme.sizes.x44 } - 2 * ${ ({ theme }) => theme.spaces.x12 });
  }

  & > ${ Addon } {
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
  }
`;

export const StyledPlaceholder = styled.option`
  ${ box }
  ${ truncate }

  ${ ({ theme }) => paragraph(theme) }
  ${ ({ theme }) => css`
    color: ${ theme.inputColors.normal.placeholderColor };
  ` }
`;

export const StyledOption = styled.option`
  ${ box }
  ${ truncate }

  ${ ({ theme }) => paragraph(theme) }
  ${ ({ theme }) => css`
    color: ${ theme.inputColors.normal.color };
  ` }

  ${ Input }:invalid > &,
  ${ Input }.invalid > & {
    color: ${ ({ theme }) => theme.inputColors.invalid.color };
  }
`;
