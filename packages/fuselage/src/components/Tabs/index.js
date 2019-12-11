import React, { forwardRef } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-tabs');
const ItemsWrapper = Box.extend('rcx-tabs__wrapper');
const ItemContainer = Box.extend('rcx-tabs__item', 'button');

export function Tabs({
  children,
  ...props
}) {
  return <Container {...props}>
    <ItemsWrapper children={children} role='tablist' />
  </Container>;
}

Tabs.displayName = 'Tabs';

export const TabsItem = forwardRef(function TabsItem({
  active,
  ...props
}, ref) {
  return <ItemContainer
    aria-selected={active ? 'true' : 'false'}
    mod-active={active}
    ref={ref}
    role='tab'
    {...props}
  />;
});

Tabs.Item = TabsItem;
