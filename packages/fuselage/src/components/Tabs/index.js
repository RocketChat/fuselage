import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

export function Tabs({ children, ...props }) {
  return (
    <Box is='div' rcx-tabs {...props}>
      <Box is='div' rcx-tabs__scroll-box>
        <Box is='div' rcx-tabs__wrapper children={children} role='tablist' />
      </Box>
    </Box>
  );
}

export const TabsItem = forwardRef(function TabsItem(
  { selected, disabled, ...props },
  ref
) {
  return (
    <Box
      is='button'
      rcx-tabs__item
      rcx-tabs__item--selected={selected}
      rcx-tabs__item--disabled={disabled}
      rcx-tabs__item--selected--disabled={selected && disabled}
      aria-selected={selected ? 'true' : 'false'}
      ref={ref}
      role='tab'
      {...props}
    />
  );
});

TabsItem.propTypes = {
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
};

Tabs.Item = TabsItem;
