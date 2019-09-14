import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { normalized, withText, withSelectableText } from '../../mixins';
import {
  spacing,
  color,
  textStyle,
} from './theme';


export const Headline = styled.h1.attrs(rebuildClassName('headline'))`
  ${ normalized }

  margin-bottom: ${ spacing };

  color: ${ color };

  cursor: default;

  ${ withText(textStyle) }
  ${ withSelectableText }
`;

Headline.displayName = 'Headline';
