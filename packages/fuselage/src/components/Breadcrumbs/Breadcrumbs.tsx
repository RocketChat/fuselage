import flattenChildren from 'react-keyed-flatten-children';
import type { ComponentProps, ReactNode, Ref } from 'react';
import { forwardRef, Children, Fragment } from 'react';

import { Box } from '../Box';
import { Chevron } from '../Chevron';

type BreadcrumbsProps = ComponentProps<typeof Box> & {
  children?: ReactNode;
};

const Breadcrumbs = forwardRef(function Breadcrumbs(
  { children, ...props }: BreadcrumbsProps,
  ref: Ref<HTMLElement>,
) {
  const childrenArray = flattenChildren(children);

  const separatedChildren = Children.map(childrenArray, (child, index) => {
    if (index === childrenArray.length - 1) {
      return child;
    }
    return (
      <Fragment key={index}>
        {child}
        <Chevron right size='x16' className='rcx-breadcrumbs__separator' />
      </Fragment>
    );
  });

  return (
    <Box is='nav' aria-label='Breadcrumbs' className='rcx-breadcrumbs' {...props} ref={ref}>
      <Box is='ol' className='rcx-breadcrumbs__list'>
        {separatedChildren}
      </Box>
    </Box>
  );
});

export default Breadcrumbs;
