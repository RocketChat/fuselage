import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { Hint } from '../Hint';

const Container = styled.div`
  ${ box }

  display: flex;
  align-items: stretch;
  flex-flow: column nowrap;

  & > ${ Hint.styled } {
    margin-top: ${ ({ theme }) => theme.spaces.x4 };
    margin-block-start: ${ ({ theme }) => theme.spaces.x4 };
  }
`;

export default {
  'rcx-field': Container,
};
