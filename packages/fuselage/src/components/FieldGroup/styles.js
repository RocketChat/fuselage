import styled from 'styled-components';

import box from '../../styles/utilities/box';

const Container = styled.fieldset`
  ${ box }

  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
`;

const ItemContainer = styled.div`
  ${ box }

  flex: 0 0 auto;

  margin-bottom: ${ ({ theme }) => theme.spaces.x24 };
  margin-block-end: ${ ({ theme }) => theme.spaces.x24 };

  &:last-child {
    margin-bottom: 0;
    margin-block-end: 0;
  }
`;

export default {
  'rcx-field-group': Container,
  'rcx-field-group__item': ItemContainer,
};
