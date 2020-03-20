import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Box';

export function Tabs({
  children,
  ...props
}) {
  return <Box is='div' componentClassName='rcx-tabs' {...props}>
    <Box is='div' componentClassName='rcx-tabs__scroll-box'>
      <Box is='div' componentClassName='rcx-tabs__wrapper' children={children} role='tablist'/>
    </Box>
  </Box>;
}

Tabs.displayName = 'Tabs';

export const TabsItem = forwardRef(function TabsItem({
  selected,
  ...props
}, ref) {
  return <Box
    is='button'
    componentClassName='rcx-tabs__item'
    aria-selected={selected ? 'true' : 'false'}
    mod-selected={selected}
    ref={ref}
    role='tab'
    {...props}
  />;
});

TabsItem.propTypes = {
  selected: PropTypes.bool,
};

Tabs.Item = TabsItem;
