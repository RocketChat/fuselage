import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { normalized } from '../../mixins';
import { Field } from '../Field';
import { spacing } from './theme';


export const FieldGroup = styled.fieldset.attrs(rebuildClassName('rcx-field-group')).attrs({
  role: 'group',
})`
  ${ normalized }

  display: flex;

  margin-top: calc(-1 * ${ spacing });

  align-items: center;

  flex-flow: column nowrap;
  justify-content: center;

  & > ${ Field } {
    flex: 0 0 auto;

    margin-top: ${ spacing };
  }
`;

FieldGroup.displayName = 'FieldGroup';
