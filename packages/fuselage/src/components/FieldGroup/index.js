import styled from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { reset } from '../../mixins/reset';
import { Field } from '../Field';
import theme from './theme';


export const FieldGroup = styled.fieldset.attrs({
  role: 'group',
}).attrs(rebuildClassName('rcx-field-group'))`
  ${ reset }

  display: flex;

  margin-top: calc(-1 * ${ theme.gutter });

  align-items: center;

  flex-flow: column nowrap;
  justify-content: center;

  & > ${ Field } {
    flex: 0 0 auto;

    margin-top: ${ theme.gutter };
  }
`;
FieldGroup.displayName = 'FieldGroup';
