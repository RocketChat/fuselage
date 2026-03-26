import { forwardRef } from 'react';
import type { AllHTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxInteractiveText } from '../../primitives';

const TabsItemBase = styled(RcxInteractiveText, {
  name: 'TabsItem',
  tag: 'button',

  position: 'relative',
  alignItems: 'center',
  flexGrow: 0,
  flexShrink: 0,

  minHeight: '$x40',
  marginBlock: 0,
  marginInline: '$x12',
  // padding: (4px + 1px border) 0 — the SCSS adds border-width to padding
  paddingBlock: 5,
  paddingInline: 0,

  fontFamily: '$body',
  fontSize: '$h4',
  fontWeight: '$h4',
  lineHeight: '$h4',
  letterSpacing: '$h4',

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',
  backgroundColor: 'transparent',

  overflowWrap: 'normal',

  variants: {
    selected: {
      true: {
        // Selected: padding without extra border compensation
        paddingBlock: '$x4',
        paddingInline: 0,
        color: '$fontInfo',
        borderBlockEndColor: '$fontInfo',
        borderBlockEndWidth: 1,
        borderInlineWidth: 1,

        hoverStyle: {
          color: '$buttonPrimaryHoverBg',
          borderBlockEndColor: '$buttonPrimaryHoverBg',
        },

        pressStyle: {
          color: '$buttonPrimaryPressBg',
          borderBlockEndColor: '$buttonPrimaryPressBg',
        },
      },
      false: {
        color: '$fontHint',

        hoverStyle: {
          color: '$fontDefault',
          borderBlockEndColor: '$fontDefault',
          borderBlockEndWidth: 4,
        },

        pressStyle: {
          color: '$fontTitlesLabels',
          borderBlockEndColor: '$fontTitlesLabels',
          borderBlockEndWidth: 4,
        },
      },
    },

    isDisabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  } as const,

  defaultVariants: {
    selected: false,
  },
});

export type TabsItemProps = {
  selected?: boolean;
  disabled?: boolean;
  children?: any;
} & Omit<AllHTMLAttributes<HTMLButtonElement>, 'is'>;

const TabsItem = forwardRef<HTMLButtonElement, TabsItemProps>(
  function TabsItem({ selected, disabled, ...props }, ref) {
    // Determine disabled color overrides
    const disabledColorStyle = disabled
      ? selected
        ? { color: '$statusBgInfo', borderBlockEndColor: '$statusBgInfo' }
        : { color: '$fontDisabled' }
      : undefined;

    return (
      <TabsItemBase
        selected={!!selected}
        isDisabled={disabled || undefined}
        disabled={disabled}
        aria-selected={selected ? 'true' : 'false'}
        role='tab'
        ref={ref}
        focusVisibleStyle={{
          borderColor: '$buttonPrimaryBg',
          borderRadius: '$x4',
          boxShadow: '0 0 0 2px var(--strokeExtraLightHighlight)',
        }}
        {...disabledColorStyle}
        {...props}
      />
    );
  },
);

export default TabsItem;
