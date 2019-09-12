import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import {
  color,
  textStyle,
} from './theme';
import { normalized, withSelectableText, withText } from '../../mixins';


export const Hint = styled.div.attrs(rebuildClassName('hint'))`
  ${ normalized }
  ${ withSelectableText }

  flex: 0 0 auto;

  color: ${ color };

  ${ withText(textStyle) }
`;

Hint.displayName = 'Hint';
