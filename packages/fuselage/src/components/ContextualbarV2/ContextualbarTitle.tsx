import type { ReactElement } from 'react';
import { memo } from 'react';

import { Box } from '..';
import type { BoxProps } from '../Box';

const ContextualbarTitle = (props: BoxProps): ReactElement => (
  <Box
    flexShrink={1}
    flexGrow={1}
    fontScale='h5'
    withTruncatedText
    {...props}
  />
);

export default memo(ContextualbarTitle);
