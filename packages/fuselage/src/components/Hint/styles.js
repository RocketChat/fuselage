import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { paragraph } from '../../styles/utilities/typography';

export const StyledHint = styled.div`
  ${ box }

  user-select: text;

  ${ ({ theme }) => paragraph(theme) }
  ${ ({ theme }) => css`
    color: ${ theme.textColors.hint };
  ` }
`;
