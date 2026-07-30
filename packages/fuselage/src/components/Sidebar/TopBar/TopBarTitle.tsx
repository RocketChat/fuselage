import type { ReactNode } from 'react';

import { Box } from '../../Box';

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export type TopBarTitleProps = {
  children?: ReactNode;
};

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export const TopBarTitle = (props: TopBarTitleProps) => (
  <Box className='rcx-sidebar-topbar__title' withTruncatedText {...props} />
);
