import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

const SidepanelHeaderTitleFrame = styled(RcxText, {
  name: 'SidepanelHeaderTitle',
  display: 'block',
  color: '$fontTitlesLabels',
  fontFamily: '$body',
  fontSize: '$h5',
  fontWeight: '$h5',
  lineHeight: '$h5',
  letterSpacing: '$h5',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
});

export type SidepanelHeaderTitleProps = HTMLAttributes<HTMLDivElement>;

const SidepanelHeaderTitle = (props: SidepanelHeaderTitleProps) => (
  <SidepanelHeaderTitleFrame {...(props as any)} />
);

export default SidepanelHeaderTitle;
