import { styled } from 'tamagui';

export const Button = styled('button', {
  name: 'Button',
  backgroundColor: '$primary',
  color: 'white',
  padding: '$x8 $x12',
  borderRadius: '$small',
  border: 'none',
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '$primary',
        color: '$primary',
      },
      danger: {
        backgroundColor: '$danger',
        color: 'white',
      },
    },
    size: {
      small: { padding: '$x4 $x8', fontSize: 14 },
      medium: { padding: '$x8 $x12', fontSize: 16 },
      large: { padding: '$x12 $x16', fontSize: 18 },
    },
  },
});
