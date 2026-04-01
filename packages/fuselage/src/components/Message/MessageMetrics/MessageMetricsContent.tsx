import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

const MetricsContentFrame = styled(RcxView, {
  name: 'MessageMetricsContent',
  display: 'flex',
  flexDirection: 'row',
  marginBlock: 4,
});

export const MessageMetricsContent = (
  props: HTMLAttributes<HTMLDivElement>,
) => <MetricsContentFrame {...(props as any)} />;
