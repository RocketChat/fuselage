import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { ellipsis } from '../../styles/utilities/typography';

const Container = styled.div`
  ${ box }

  display: flex;
  align-items: stretch;
  flex-flow: column nowrap;

  & > :first-child {
    margin-bottom: ${ ({ theme }) => theme.spaces.x8 };
    margin-block-end: ${ ({ theme }) => theme.spaces.x8 };
  }
`;

const RowContainer = styled.div`
  ${ box }

  display: flex;

  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const ErrorContainer = styled.span`
  ${ box }

  flex: 0 1 auto;

  margin-left: ${ ({ theme }) => theme.spaces.x8 };
  margin-inline-start: ${ ({ theme }) => theme.spaces.x8 };

  user-select: text;

  ${ ellipsis }
`;

const HintContainer = styled.div`
  ${ box }

  margin-top: ${ ({ theme }) => theme.spaces.x4 };
  margin-block-start: ${ ({ theme }) => theme.spaces.x4 };
`;

export default {
  'rcx-field': Container,
  'rcx-field__row': RowContainer,
  'rcx-field__error': ErrorContainer,
  'rcx-field__hint': HintContainer,
};
