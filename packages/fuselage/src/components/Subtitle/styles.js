import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { Text } from '../Text';

const Container = styled(Text)`
  ${ box }

  display: block;

  margin-bottom: ${ ({ theme }) => theme.spaces.x16 };
`;

export default {
  'rcx-subtitle': Container,
};
