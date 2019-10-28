import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { ellipsis } from '../../styles/utilities/typography';
import { Hint } from '../Hint';
import { Label } from '../Label';

const Container = styled.div`
  ${ box }

  display: flex;
  align-items: stretch;
  flex-flow: column nowrap;

  & > ${ Label.styled } {
    flex: 1 1 0;
  }

  & > ${ Hint.styled } {
    margin-top: ${ ({ theme }) => theme.spaces.x4 };
    margin-block-start: ${ ({ theme }) => theme.spaces.x4 };
  }
`;

const RowContainer = styled.div`
  ${ box }

  display: flex;
  flex-flow: row nowrap;

  & > ${ Label.styled } {
    flex: 1 1 0;
  }
`;

const ErrorContainer = styled.span`
  flex: 0 1 auto;

  margin-left: ${ ({ theme }) => theme.spaces.x8 };
  margin-inline-start: ${ ({ theme }) => theme.spaces.x8 };

  user-select: text;

  ${ ellipsis }
`;

export default {
  'rcx-field': Container,
  'rcx-field__row': RowContainer,
  'rcx-field__error': ErrorContainer,
};
