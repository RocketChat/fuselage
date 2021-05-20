import { ForwardRefExoticComponent, PropsWithChildren } from 'react';

type ScrollableProps = PropsWithChildren<{
  horizontal?: boolean;
  vertical?: boolean;
  onScrollContent?: (touching: { top: boolean }) => void;
}>;
const Scrollable: ForwardRefExoticComponent<ScrollableProps>;
export default Scrollable;
