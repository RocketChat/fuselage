import type { ReactNode } from 'react';
import React from 'react';

import Box from '../Box';

type TopBarTitleProps = {
  children?: ReactNode;
};

const TopBarTitle = (props: TopBarTitleProps) => (
  <Box className='rcx-sidebar-topbar__title' withTruncatedText {...props} />
);

export default TopBarTitle;
