// import { getSize, getSpace } from '@tamagui/core';
import {
  View,
  createStyledContext,
  styled,
  withStaticProperties,
} from '@tamagui/core';
import { cloneElement, isValidElement } from 'react';

import { Typography } from './Typography';

export const ButtonContext = createStyledContext({
  size: '',
});

const withRectangularSize = (
  height: number,
  paddingX: number,
  lineHeight: number,
) => ({
  minWidth: height * 2,
  height,
  padding: height - lineHeight,
  paddingInline: paddingX,
});

const withSquaredSize = (size: number) => ({
  width: size,
  minWidth: size,
  height: size,
  padding: 0,
});

// @mixin with-squared-size($size) {
//   width: lengths.size($size);
//   min-width: lengths.size($size);
//   height: lengths.size($size);
//   padding: 0;

//   &::before,
//   &::after {
//     display: inline-block;

//     height: 100%;

//     content: '';
//   }
// }
// @mixin with-rectangular-size($height, $padding-x, $line-height) {
//   min-width: calc(lengths.size($height) * 2);
//   height: lengths.size($height);
//   padding: calc((lengths.padding($height) - $line-height) / 2 - 2px)
//     calc(lengths.padding($padding-x) - 2px);
//   padding-block: calc((lengths.padding($height) - $line-height) / 2 - 2px);

//   padding-inline: calc(lengths.padding($padding-x) - 2px);
// }

export const ButtonFrame = styled(View, {
  name: 'Button',
  context: ButtonContext,
  display: 'inline-block',
  cursor: 'pointer',
  borderRadius: 4,
  textAlign: 'center',
  whiteSpace: 'nowrap',

  variants: {
    'warning-primary': {
      true: {
        backgroundColor: '$button-backgroundPrimaryWarningDefault',
        hoverStyle: {
          backgroundColor: '$button-backgroundPrimaryWarningHover',
        },
        pressStyle: {
          backgroundColor: '$button-backgroundPrimaryWarningPress',
        },
      },
    },
    'warning-secondary': {
      true: {
        backgroundColor: '$button-backgroundSecondaryWarningDefault',
        hoverStyle: {
          backgroundColor: '$button-backgroundSecondaryWarningHover',
        },
        pressStyle: {
          backgroundColor: '$button-backgroundSecondaryWarningPress',
        },
      },
    },
    'danger-primary': {
      true: {
        backgroundColor: '$button-backgroundDangerDefault',
        hoverStyle: {
          backgroundColor: '$button-backgroundDangerHover',
        },
        pressStyle: {
          backgroundColor: '$button-backgroundDangerPress',
        },
      },
    },
    'danger-secondary': {
      true: {
        backgroundColor: '$button-backgroundSecondaryDangerDefault',
        hoverStyle: {
          backgroundColor: '$button-backgroundSecondaryDangerHover',
        },
        pressStyle: {
          backgroundColor: '$button-backgroundSecondaryDangerPress',
        },
      },
    },
    'secondary': {
      true: {
        backgroundColor: '$button-backgroundSecondaryDefault',
        hoverStyle: {
          backgroundColor: '$button-backgroundSecondaryHover',
        },
        pressStyle: {
          backgroundColor: '$button-backgroundSecondaryPress',
        },
      },
    },
    'primary': {
      true: {
        backgroundColor: '$button-backgroundPrimaryDefault',
        hoverStyle: {
          backgroundColor: '$button-backgroundPrimaryHover',
        },
        pressStyle: {
          backgroundColor: '$button-backgroundPrimaryPress',
        },
      },
    },

    'size': {
      'square': {
        ...withSquaredSize(32),
      },
      'square-mini': {
        ...withSquaredSize(24),
      },
      'square-tiny': {
        ...withSquaredSize(20),
      },
      'square-medium': {
        ...withSquaredSize(40),
      },
      'square-large': {
        ...withSquaredSize(48),
      },
      'small': {
        ...withRectangularSize(28, 8, 28),
      },
      'medium': {
        ...withRectangularSize(32, 16, 32),
      },
      'large': {
        ...withRectangularSize(40, 24, 40),
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
} as const);

// export type ButtonProps = GetProps<typeof ButtonFrame>;

export const ButtonText = styled(Typography, {
  name: 'ButtonText',
  context: ButtonContext,
  userSelect: 'none',
  color: 'white',
  defaultVariants: {
    size: 'p2m',
  },
} as const);

export type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  disabled?: boolean;
  loading?: boolean;
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  square?: boolean;
  external?: boolean;
  // icon?: ComponentProps<typeof Icon>['name'];
};

const ButtonIcon = (props: { children: any }) => {
  // const { size } = useContext(ButtonContext.context);
  // const smaller = getSize(size, {
  // shift: -2,
  // });
  // const theme = useTheme();
  return isValidElement(props.children)
    ? cloneElement(props.children, {
        // size: smaller.val * 0.5,
        // color: theme.color.get(),
      })
    : null;
};

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});
