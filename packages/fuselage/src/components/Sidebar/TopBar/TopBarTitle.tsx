import type { ReactNode } from 'react';

import Box from '../../Box/index.js';

type TopBarTitleProps = {
  children?: ReactNode;
};

export const TopBarTitle = (props: TopBarTitleProps) => (
  <Box className='rcx-sidebar-topbar__title' withTruncatedText {...props} />
);
