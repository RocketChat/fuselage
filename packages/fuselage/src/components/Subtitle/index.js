import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { normalized, withText, withSelectableText } from '../../mixins';
import {
  spacing,
  color,
  textStyle,
} from './theme';


export const Subtitle = styled.h2.attrs(rebuildClassName('subtitle'))`
  ${ normalized }

  margin-bottom: ${ spacing };

  color: ${ color };

  cursor: default;

  ${ withText(textStyle) }
  ${ withSelectableText }
`;

Subtitle.displayName = 'Subtitle';
