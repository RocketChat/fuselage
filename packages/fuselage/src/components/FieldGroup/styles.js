import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { Field } from '../Field';

const Container = styled.fieldset`
  ${ box }

  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;

  & > ${ Field.styled } {
    flex: 0 0 auto;

    margin-bottom: ${ ({ theme }) => theme.spaces.x24 };
    margin-block-end: ${ ({ theme }) => theme.spaces.x24 };

    &:last-child {
      margin-bottom: 0;
      margin-block-end: 0;
    }
  }
`;

export default {
  'rcx-field-group': Container,
};
