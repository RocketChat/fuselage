import styled from 'styled-components';

import { ellipsis } from '../../styles/utilities/typography';

const Container = styled.span`
  flex: 0 1 auto;

  margin-left: ${ ({ theme }) => theme.spaces.x8 };
  margin-inline-start: ${ ({ theme }) => theme.spaces.x8 };

  user-select: text;

  ${ ellipsis }
`;

export default {
  'rcx-field-error': Container,
};
