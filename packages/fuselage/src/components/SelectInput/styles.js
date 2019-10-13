import styled, { css } from 'styled-components';

import box from '../../styles/box';
import { pr } from '../../styles/utilities/spacing';
import { paragraph } from '../../styles/utilities/typography';
import { InputBox } from '../InputBox';

export const StyledSelectInput = styled(InputBox)`
  ${ ({ theme }) => pr(`calc(${ theme.spaces[5] } + ${ theme.sizes[1] } - 2 * ${ theme.spaces[4] })`) }

  & ~ .rcx-input-box__addon {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    pointer-events: none;
  }
`;

export const StyledPlaceholder = styled.option`
  ${ box }

  ${ ({ theme }) => paragraph(theme) }
  ${ ({ theme }) => css`
    color: ${ theme.inputColors.normal.placeholderColor };
  ` }
`;

export const StyledOption = styled.option`
  ${ box }

  ${ ({ theme }) => paragraph(theme) }
  ${ ({ theme }) => css`
    color: ${ theme.inputColors.normal.color };
  ` }
`;
