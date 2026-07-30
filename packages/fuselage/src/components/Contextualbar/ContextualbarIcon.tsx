import { memo } from 'react';

import { Icon, type IconProps } from '../Icon';

/**
 * @deprecated Use `ContextualbarV2IconProps` instead.
 */
export type ContextualbarIconProps = IconProps;

const ContextualbarIcon = (props: ContextualbarIconProps) => (
  <Icon {...props} paddingInline={2} size='x24' />
);

/**
 * @deprecated Use `ContextualbarV2Icon` instead.
 */
export default memo(ContextualbarIcon);
