import type { ElementType } from 'react';
import { createContext, forwardRef, useContext } from 'react';

import { styled, Text } from '@tamagui/core';

import { RcxText } from '../../primitives';

const LabelContext = createContext(false);

// RcxText — needs font props, renders text content
const LabelBase = styled(RcxText, {
  name: 'Label',

  display: 'flex',

  // p2m font scale (from original: @include typography.use-font-scale(p2m))
  fontFamily: '$body',
  fontSize: '$p2m',
  fontWeight: '$p2m',
  lineHeight: '$p2m',
  letterSpacing: '$p2m',

  // color: colors.font(default)
  color: '$fontDefault',

  variants: {
    isDisabled: {
      true: {
        pointerEvents: 'none',
        color: '$fontSecondaryInfo',
      },
    },
  } as const,
});

// Required asterisk
const LabelRequired = styled(Text, {
  name: 'LabelRequired',

  marginInlineStart: '$x4',
  color: '$fontDanger',
});

// Info wrapper (order: 1 in original)
const LabelInfo = styled(RcxText, {
  name: 'LabelInfo',

  display: 'flex',
  alignItems: 'center',
});

export type LabelProps = {
  disabled?: boolean;
  required?: boolean;
  is?: (ElementType<any> & string) | undefined;
  children?: React.ReactNode;
  [key: string]: any;
};

/**
 * A caption for an input component.
 */
const Label = forwardRef<HTMLElement, LabelProps>(function Label(
  { disabled, is, required, children, ...props },
  ref,
) {
  const isInsideLabel = useContext(LabelContext);

  return (
    <LabelContext.Provider value={true}>
      <LabelBase
        isDisabled={disabled || undefined}
        ref={ref as any}
        {...(props as any)}
      >
        {children}
        {required && (
          <LabelRequired aria-hidden='true'>*</LabelRequired>
        )}
      </LabelBase>
    </LabelContext.Provider>
  );
});

export default Label;
