import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { normalized, withText, withSelectableText } from '../../mixins';
import theme from './theme';


export const Headline = styled.h1.attrs(rebuildClassName('headline'))`
  ${ normalized }

  margin-bottom: ${ theme.spacing };

  color: ${ theme.color };

  cursor: default;

  ${ withText(theme.textStyle) }
  ${ withSelectableText }
`;

Headline.displayName = 'Headline';
