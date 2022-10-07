import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';
import { TabsItem } from './TabsItem';

type TabsProps = ComponentProps<typeof Box> & { divider?: boolean };

export function Tabs({ children, divider = true, ...props }: TabsProps) {
  return (
    <Box is='div' rcx-tabs rcx-tabs--with-divider={divider} {...props}>
      <Box is='div' rcx-tabs__scroll-box>
        <Box is='div' rcx-tabs__wrapper children={children} role='tablist' />
      </Box>
    </Box>
  );
}

Tabs.Item = TabsItem;
