import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { prependClassName } from '../../helpers/prependClassName';

/** @public */
export type AvatarStackProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

/** @public */
function AvatarStack({ children, ...props }: AvatarStackProps) {
  props.className = prependClassName(props.className, 'rcx-avatar-stack');
  return <div {...props}>{flattenChildren(children).reverse()}</div>;
}

export default AvatarStack;
