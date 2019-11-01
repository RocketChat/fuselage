import styled from 'styled-components';

import box from '../../styles/utilities/box';
import { paragraph } from '../../styles/utilities/typography';

const Container = styled.div`
  ${ box }

  display: block;

  margin-bottom: ${ ({ theme }) => theme.spaces.x16 };

  ${ ({ theme }) => paragraph(theme) }

  color: ${ ({ theme }) => theme.textColors.default };
`;

export default {
  'rcx-paragraph': Container,
};
