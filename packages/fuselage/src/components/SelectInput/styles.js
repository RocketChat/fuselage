import styled, { css } from 'styled-components';

import box from '../../styles/box';
import { pr } from '../../styles/utilities/spacing';
import { paragraph, truncate } from '../../styles/utilities/typography';
import { Addon, Input } from '../InputBox/styles';
import { InputBox } from '../InputBox';

export const StyledSelectInput = styled(InputBox)`
  ${ ({ theme }) => pr(`calc(${ theme.spaces.x16 } + ${ theme.sizes[1] } - 2 * ${ theme.spaces.x12 })`) }

  & ~ ${ Addon } {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

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
