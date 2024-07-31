import Box, { type BoxProps } from '../Box';
import TabsItem from './TabsItem';

/** @public */
export type TabsProps = BoxProps & { divider?: boolean };

/**
 * Tabs is a component to navigate around the UI using buttons arranged together with the selected tab highlighted.
 * @public
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

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Tabs {
  /** @deprecated use `TabsItem` instead */
  export const Item = TabsItem;
}

export default Tabs;
