import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';
import { styled, createStyledContext } from 'tamagui';

import { RcxView } from '../../primitives';

const CardGroupContext = createStyledContext({
  stretch: false as boolean,
});

const CardGroupFrame = styled(RcxView, {
  name: 'CardGroup',
  context: CardGroupContext,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$x16',

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
      },
      false: {},
    },

    vertical: {
      true: {
        flexDirection: 'column',
        gap: '$x8',
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
  } as const,

  defaultVariants: {
    stretch: false,
  },
});

const CardGroupItem = styled(RcxView, {
  name: 'CardGroupItem',
  context: CardGroupContext,

  variants: {
    stretch: {
      true: {
        flexGrow: 1,
      },
      false: {},
    },
  } as const,
});

export type CardGroupProps = {
  align?: 'start' | 'center' | 'end';
  stretch?: boolean;
  wrap?: boolean;
  vertical?: boolean;
  small?: boolean;
  large?: boolean;
  children?: ReactNode;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'is' | 'wrap'>;

const CardGroup = ({
  align = 'start',
  children,
  stretch,
  vertical,
  wrap,
  ...props
}: CardGroupProps) => (
  <CardGroupFrame
    align={align}
    stretch={!!stretch}
    vertical={vertical}
    wrap={wrap}
    role='group'
    {...props}
  >
    {Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return child;
      }
      return <CardGroupItem>{child}</CardGroupItem>;
    })}
  </CardGroupFrame>
);

export default CardGroup;
