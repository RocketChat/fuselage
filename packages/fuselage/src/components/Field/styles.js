import styled from 'styled-components';

import box from '../../styles/box';
import { StyledHint } from '../Hint/styles';

export const StyledField = styled.div`
  ${ box }

  display: flex;
  align-items: stretch;
  flex-flow: column nowrap;

  & > ${ StyledHint } {
    margin-top: ${ ({ theme }) => theme.spaces.x4 };
  }
`;
