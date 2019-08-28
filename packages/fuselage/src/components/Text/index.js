import styled from 'styled-components';

import typography from '../../tokens/typography';
import { Box } from '../Box';


const mapProps = ({
  fontName,
  ...props
}) => ({
  ...props,
});

export const Text = styled(Box).attrs(mapProps)`
  font-family: ${ ({ fontName = 'base' }) => typography.fonts[fontName] };
  font-weight: 400;
`;
