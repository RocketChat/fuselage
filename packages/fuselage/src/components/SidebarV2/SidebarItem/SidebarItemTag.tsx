import type { ComponentProps } from 'react';
import { Tag } from '../../Tag';

export const SidebarItemTag = (props: ComponentProps<typeof Tag>) => (
	<Tag role='button' tabIndex={0} {...props} maxWidth='50%' flexShrink={1} flexGrow={0} />
);
