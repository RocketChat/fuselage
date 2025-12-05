import { Box, type BoxProps } from '../Box';

import TabsItem from './TabsItem';

export type TabsProps = BoxProps & { divider?: boolean };

/**
 * Tabs is a component to navigate around the UI using buttons arranged together with the selected tab highlighted.
 */
function Tabs({ children, divider = true, ...props }: TabsProps) {
  return (
    <Box is='div' rcx-tabs rcx-tabs--with-divider={divider} {...props}>
      <Box is='div' rcx-tabs__scroll-box>
        <Box is='div' rcx-tabs__wrapper children={children} role='tablist' />
      </Box>
    </Box>
  );
}

/** @deprecated use named export TabsItem instead */
Tabs.Item = TabsItem;

export default Tabs;
