import styled from 'styled-components';

import { withProps } from '../../helpers/withProps';
import typography from '../../tokens/typography';
import { Box } from '../Box';


const UnstyledText = withProps(Box, ({
  fontName,
  ...props
}) => ({
  ...props,
}));

export const Text = styled(UnstyledText)`
  font-family: ${ ({ fontName = 'base' }) => typography.fonts[fontName] };
  font-weight: 400;
  font-variant-numeric: tabular-nums;
`;
