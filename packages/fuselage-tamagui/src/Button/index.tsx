import { styled } from 'tamagui';

export const Button = styled('button', {
  name: 'Button',
  backgroundColor: '$primary',
  color: 'white',
  padding: '$2 $3',
  borderRadius: '$1',
  border: 'none',
  cursor: 'pointer',

  variants: {
    size: {
      small: {
        padding: '$1 $2',
        fontSize: 14,
      },
      medium: {
        padding: '$2 $3',
        fontSize: 16,
      },
      large: {
        padding: '$3 $4',
        fontSize: 18,
      },
    },
    variant: {
      primary: {
        'backgroundColor': '$primary',
        'color': 'white',
        '&:hover': {
          backgroundColor: '$primary-hover',
        },
      },
      secondary: {
        'backgroundColor': 'transparent',
        'borderWidth': 1,
        'borderStyle': 'solid',
        'borderColor': '$primary',
        'color': '$primary',
        '&:hover': {
          backgroundColor: '$primary-light',
        },
      },
      danger: {
        'backgroundColor': '$danger',
        'color': 'white',
        '&:hover': {
          backgroundColor: '$danger-hover',
        },
      },
    },
    disabled: {
      true: {
        'opacity': 0.5,
        'cursor': 'not-allowed',
        '&:hover': {
          backgroundColor: 'inherit',
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});
