import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import theme from './theme';
import { normalized, withSelectableText, withText } from '../../mixins';


export const Hint = styled.div.attrs(rebuildClassName('hint'))`
  ${ normalized }
  ${ withSelectableText }

  flex: 0 0 auto;

  color: ${ theme.color };

  ${ withText(theme.textStyle) }
`;

Hint.displayName = 'Hint';
