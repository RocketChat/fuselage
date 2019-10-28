import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { ellipsis } from '../../styles/utilities/typography';
import { Label } from '../Label';

const Container = styled.div`
  ${ box }

  display: flex;
  align-items: stretch;
  flex-flow: column nowrap;

  & > ${ Label.styled } {
    flex: 1 1 0;
    margin-bottom: ${ ({ theme }) => theme.spaces.x8 };
    margin-block-end: ${ ({ theme }) => theme.spaces.x8 };
  }
`;

const RowContainer = styled.div`
  ${ box }

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  margin-bottom: ${ ({ theme }) => theme.spaces.x8 };
  margin-block-end: ${ ({ theme }) => theme.spaces.x8 };

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

const HintContainer = styled(Text)`
  margin-top: ${ ({ theme }) => theme.spaces.x4 };
  margin-block-start: ${ ({ theme }) => theme.spaces.x4 };
`;

export default {
  'rcx-field': Container,
  'rcx-field__row': RowContainer,
  'rcx-field__error': ErrorContainer,
  'rcx-field__hint': HintContainer,
};
