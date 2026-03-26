import type { ReactNode } from 'react';
import { Children, forwardRef } from 'react';
import { styled, createStyledContext, type GetProps } from 'tamagui';

import { RcxView } from '../../primitives';

const ButtonGroupContext = createStyledContext({
  stretch: false as boolean,
});

const ButtonGroupFrame = styled(RcxView, {
  name: 'ButtonGroup',
  context: ButtonGroupContext,
  role: 'group',

  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$x8',

  variants: {
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },

    stretch: {
      true: {
        justifyContent: 'stretch',
        alignItems: 'stretch',
        flexGrow: 1,
      },
    },

    vertical: {
      true: {
        flexDirection: 'column',
      },
    },

    align: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },

    small: {
      true: {
        gap: '$x4',
      },
    },

    large: {
      true: {
        gap: '$x16',
      },
    },
  } as const,
});

export type ButtonGroupProps = {
  align?: 'start' | 'center' | 'end';
  stretch?: boolean;
  wrap?: boolean;
  vertical?: boolean;
  small?: boolean;
  large?: boolean;
  children?: ReactNode;
  className?: string;
} & Omit<
  GetProps<typeof ButtonGroupFrame>,
  'align' | 'stretch' | 'wrap' | 'vertical' | 'small' | 'large'
>;

/**
 * A container for grouping buttons that semantically share a common action context.
 */
const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    {
      align = 'start',
      children,
      stretch,
      vertical,
      wrap,
      small,
      large,
      ...props
    },
    ref,
  ) {
    return (
      <ButtonGroupFrame
        ref={ref}
        align={align}
        stretch={stretch || undefined}
        vertical={vertical || undefined}
        wrap={wrap || undefined}
        small={small || undefined}
        large={large || undefined}
        {...props}
      >
        {children}
      </ButtonGroupFrame>
    );
  },
);

export default ButtonGroup;
