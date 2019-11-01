import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { subtitle } from '../../styles/utilities/typography';

const Container = styled.h2`
  ${ box }

  display: block;

  margin-bottom: ${ ({ theme }) => theme.spaces.x16 };

  ${ ({ theme }) => subtitle(theme) }

  color: ${ ({ theme }) => theme.textColors.default };
`;

export default {
  'rcx-subtitle': Container,
};
