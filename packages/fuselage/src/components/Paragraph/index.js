import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { normalized, withText, withSelectableText } from '../../mixins';
import {
  spacing,
  color,
  textStyle,
} from './theme';


export const Paragraph = styled.p.attrs(rebuildClassName('paragraph'))`
  ${ normalized }

  margin-bottom: ${ spacing };

  color: ${ color };

  cursor: default;

  ${ withText(textStyle) }
  ${ withSelectableText }
`;

Paragraph.displayName = 'Paragraph';
