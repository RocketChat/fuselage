import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { Box } from '../Box';

type BreadcrumbItemProps = ComponentProps<typeof Box> & {
  selected?: boolean;
  href?: string;
  target?: string;
  title?: string;
};

const BreadcrumbItem = forwardRef(function BreadcrumbItem(
  { children, selected, href, target, title, ...props }: BreadcrumbItemProps,
  ref: Ref<HTMLLIElement>,
) {
  return (
    <Box is='li' className='rcx-breadcrumbs__item' {...props} ref={ref}>
      <Box
        is={href ? 'a' : 'span'}
        className={[
          'rcx-breadcrumbs__item-link',
          selected && 'rcx-breadcrumbs__item-link--selected',
        ]}
        href={href}
        target={target}
        title={title}
        aria-current={selected ? 'page' : undefined}
      >
        {children}
      </Box>
    </Box>
  );
});

export default BreadcrumbItem;
