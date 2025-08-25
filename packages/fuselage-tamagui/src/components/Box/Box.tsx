import {
  Stack,
  styled,
  GetProps,
  createStyledContext,
  withStaticProperties,
  Theme,
} from '@tamagui/core';
import { forwardRef } from 'react';

const BoxContext = createStyledContext({
  size: '$true',
});

const StyledBox = styled(Stack, {
  name: 'Box',
  backgroundColor: 'transparent',
  position: 'relative',

  variants: {
    elevation: {
      '0': {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      },
      '1': {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#E4E7EA',
      },
      '2': {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#E4E7EA',
      },
      '1nb': {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
      '2nb': {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
      },
    },
    invisible: {
      true: {
        visibility: 'hidden',
        opacity: 0,
      },
    },
    withTruncatedText: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    fontScale: {
      hero: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 40,
      },
      h1: {
        fontSize: 28,
        fontWeight: '600',
        lineHeight: 36,
      },
      h2: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 32,
      },
      h3: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 28,
      },
      h4: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24,
      },
      p1: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
      },
      p2: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
      },
      c1: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
      },
      c2: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 14,
      },
      micro: {
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 12,
      },
    },
  },

  defaultVariants: {
    elevation: '0',
  },
});

export interface BoxProps extends GetProps<typeof StyledBox> {
  animated?: boolean;
  withRichContent?: boolean | 'inlineWithoutBreaks';
  htmlSize?: number;
  focusable?: boolean;
  is?: keyof JSX.IntrinsicElements;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  padding?: number | string;
  margin?: number | string;
  elevation?: '0' | '1' | '2' | '1nb' | '2nb';
  invisible?: boolean;
  withTruncatedText?: boolean;
  fontScale?: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'p1' | 'p2' | 'c1' | 'c2' | 'micro';
}

export const Box = withStaticProperties(
  forwardRef<any, BoxProps>(({ 
    children,
    animated,
    withRichContent,
    htmlSize,
    focusable,
    is,
    fontSize,
    color,
    backgroundColor,
    borderRadius,
    padding,
    margin,
    elevation,
    invisible,
    withTruncatedText,
    fontScale,
    ...props 
  }, ref) => {
    const elementType = is || 'div';

    return (
      <StyledBox
        {...props}
        ref={ref}
        as={elementType}
        animation={animated ? 'lazy' : undefined}
        aria-label={withRichContent === true ? 'rich-content' : undefined}
        tabIndex={focusable ? 0 : undefined}
        size={htmlSize}
        style={{
          fontSize,
          color,
          backgroundColor,
          borderRadius,
          padding,
          margin,
        }}
        elevation={elevation}
        invisible={invisible}
        withTruncatedText={withTruncatedText}
        fontScale={fontScale}
      >
        {children}
      </StyledBox>
    );
  }),
  {
    Props: BoxContext.Provider,
  }
);

Box.displayName = 'Box';