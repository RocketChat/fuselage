import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

export type SidebarAccordionProps = HTMLAttributes<HTMLDivElement>;

const SidebarAccordionFrame = styled(RcxView, {
  name: 'SidebarV2Accordion',
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  // @ts-ignore
  flexWrap: 'nowrap',
  justifyContent: 'stretch',
  flexGrow: 0,
  flexShrink: 1,
  height: '100%',
});

const SidebarAccordionWrapper = styled(RcxView, {
  name: 'SidebarV2AccordionWrapper',
  display: 'flex',
  overflow: 'scroll' as any,
  flexDirection: 'column',
});

const SidebarAccordion = ({
  className: _className,
  children,
  ...props
}: SidebarAccordionProps) => (
  <SidebarAccordionFrame {...(props as any)}>
    <SidebarAccordionWrapper>{children}</SidebarAccordionWrapper>
  </SidebarAccordionFrame>
);

export default SidebarAccordion;
