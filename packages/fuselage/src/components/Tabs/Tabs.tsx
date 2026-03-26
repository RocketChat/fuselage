import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

import TabsItem from './TabsItem';

const TabsFrame = styled(RcxView, {
  name: 'Tabs',
  position: 'relative',
  display: 'flex',

  variants: {
    divider: {
      true: {
        borderBlockEndWidth: 1,
        borderBlockEndStyle: 'solid',
        borderBlockEndColor: '$strokeLight',
      },
    },
  } as const,
});

const TabsScrollBox = styled(RcxView, {
  name: 'TabsScrollBox',
  position: 'relative',
  overflow: 'auto',
  marginBlock: -4,
});

const TabsWrapper = styled(RcxView, {
  name: 'TabsWrapper',
  display: 'flex',
  flexWrap: 'nowrap',
  marginBlock: 0,
  marginInline: '$x12',
  paddingBlock: '$x4',
  paddingInline: 0,
});

export type TabsProps = {
  children?: ReactNode;
  divider?: boolean;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

/**
 * Tabs is a component to navigate around the UI using buttons arranged together with the selected tab highlighted.
 */
function Tabs({ children, divider = true, ...props }: TabsProps) {
  return (
    <TabsFrame divider={divider || undefined} {...props}>
      <TabsScrollBox>
        <TabsWrapper role='tablist'>{children}</TabsWrapper>
      </TabsScrollBox>
    </TabsFrame>
  );
}

/** @deprecated use named export TabsItem instead */
Tabs.Item = TabsItem;

export default Tabs;
