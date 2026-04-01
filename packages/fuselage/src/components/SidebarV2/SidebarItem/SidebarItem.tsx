import type { AllHTMLAttributes, ElementType } from 'react';
import { styled } from '@tamagui/core';

import { RcxInteractive } from '../../../primitives';

export type SidebarV2ItemProps = {
  selected?: boolean;
  level?: number;
  is?: ElementType;
} & AllHTMLAttributes<HTMLAnchorElement>;

const SidebarItemFrame = styled(RcxInteractive, {
  name: 'SidebarV2Item',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: '$x2',
  paddingBlock: 3,
  paddingInline: 15,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',
  whiteSpace: 'nowrap',
  // @ts-ignore
  textDecoration: 'none',
  gap: 4,
  hoverStyle: {
    backgroundColor: '$surfaceHover',
  },
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
  pressStyle: {
    color: '$fontTitlesLabels',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: '$surfaceSelected',
      },
    },
    level: {
      1: {},
      2: {
        paddingBlock: 7,
      },
    },
  } as const,
  defaultVariants: {
    level: 1,
  },
});

export const SidebarItem = ({
  selected,
  level = 1,
  className: _className,
  children,
  is: Tag = 'a',
  ...props
}: SidebarV2ItemProps) => {
  if (Tag === 'a') {
    return (
      <a
        className='rcx-box'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderRadius: 2,
          paddingBlock: level === 2 ? 7 : 3,
          paddingInline: 15,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'transparent',
          whiteSpace: 'nowrap',
          textDecoration: 'none',
          gap: 4,
          cursor: 'pointer',
          backgroundColor: selected ? 'var(--surfaceSelected)' : undefined,
        }}
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return (
    <SidebarItemFrame
      group='sidebarV2Item'
      role='button'
      selected={selected || undefined}
      level={level as any}
      {...(props as any)}
    >
      {children}
    </SidebarItemFrame>
  );
};
