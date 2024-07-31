import type { ReactNode } from 'react';

import Box from '../../Box';

/** @public */
export type TopBarTitleProps = {
  children?: ReactNode;
};

/** @public */
const TopBarTitle = (props: TopBarTitleProps) => (
  <Box className='rcx-sidebar-topbar__title' withTruncatedText {...props} />
);

export default TopBarTitle;
