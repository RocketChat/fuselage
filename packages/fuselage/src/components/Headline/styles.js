import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { headline } from '../../styles/utilities/typography';

const Container = styled.div`
  ${ box }

  display: block;

  margin-bottom: ${ ({ theme }) => theme.spaces.x16 };

  ${ ({ theme }) => headline(theme) }

  color: ${ ({ theme }) => theme.textColors.default };
`;

export default {
  'rcx-headline': Container,
};
