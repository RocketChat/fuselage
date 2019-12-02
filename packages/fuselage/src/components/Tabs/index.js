import React from 'react';

import { createStyledComponent } from '../../styles';

const Container = createStyledComponent('rcx-tabs', 'div');
const ItemsWrapper = createStyledComponent('rcx-tabs__wrapper', 'div');
const ItemContainer = createStyledComponent('rcx-tabs__item', 'div');

export const Tabs = React.forwardRef(function Tabs({
  children,
  ...props
}, ref) {
  return <Container ref={ref} {...props}>
    <ItemsWrapper children={children} />
  </Container>;
});

Tabs.displayName = 'Tabs';

export const TabsItem = React.forwardRef(function TabsItem({
  active,
  ...props
}, ref) {
  return <ItemContainer mod-active={active} ref={ref} {...props} />;
});

Tabs.Item = TabsItem;
