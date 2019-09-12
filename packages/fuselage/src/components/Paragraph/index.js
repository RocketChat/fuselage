import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { normalized, withText, withSelectableText } from '../../mixins';
import theme from './theme';


export const Paragraph = styled.p.attrs(rebuildClassName('rcx-paragraph'))`
  ${ normalized }

  margin-bottom: ${ theme.spacing };

  color: ${ theme.color };

  cursor: default;

  ${ withText(theme) }
  ${ withSelectableText }
`;
