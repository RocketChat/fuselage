import React, { forwardRef } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-tabs');
const ItemsWrapper = Box.extend('rcx-tabs__wrapper');
const ScrollBox = Box.extend('rcx-tabs__scroll-box');
const ItemContainer = Box.extend('rcx-tabs__item', 'button');

export function Tabs({
  children,
  ...props
}) {
  return <Container {...props}>
    <ScrollBox>
      <ItemsWrapper children={children} role='tablist'/>
    </ScrollBox>
  </Container>;
}

Tabs.displayName = 'Tabs';

export const TabsItem = forwardRef(function TabsItem({
  selected,
  ...props
}, ref) {
  return <ItemContainer
    aria-selected={selected ? 'true' : 'false'}
    mod-selected={selected}
    ref={ref}
    role='tab'
    {...props}
  />;
});

Tabs.Item = TabsItem;
