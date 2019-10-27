import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { StyledField } from '../Field/styles';

export const StyledFieldGroup = styled.fieldset`
  ${ box }

  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;

  & > ${ StyledField } {
    flex: 0 0 auto;
    margin-bottom: ${ ({ theme }) => theme.spaces.x24 };

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
