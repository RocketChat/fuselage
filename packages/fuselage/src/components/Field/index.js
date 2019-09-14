import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { normalized } from '../../mixins';
import { Hint } from '../Hint';
import { hintSpacing } from './theme';


export const Field = styled.div.attrs(rebuildClassName('field'))`
  ${ normalized }

  display: flex;

  flex-flow: column nowrap;

  ${ Hint } {
    margin-top: ${ hintSpacing };
  }
`;

Field.displayName = 'Field';
