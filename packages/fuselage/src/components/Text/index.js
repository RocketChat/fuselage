import styled from 'styled-components';

import typography from '../../tokens/typography';
import { Box } from '../Box';


export const Text = styled(Box)`
  font-family: ${ ({ fontName = 'base' }) => typography[`${ fontName }Font`] };
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  text-decoration: none;
`;
