import { styled, Text, GetProps } from 'tamagui';

const StyledLabel = styled(Text, {
  name: 'Label',
  color: '$color',
  fontSize: '$3',
  lineHeight: '$3',
  fontWeight: '500',

  variants: {
    required: {
      true: {
        after: {
          content: '*',
          color: '$error',
          marginLeft: '$1',
        },
      },
    },
    info: {
      true: {
        color: '$textMuted',
      },
    },
    disabled: {
      true: {
        color: '$textDisabled',
        cursor: 'not-allowed',
      },
    },
  } as const,
});

export type LabelProps = GetProps<typeof StyledLabel> & {
  ref?: ((instance: any) => void) | null;
  border?: string | number;
  borderBlock?: string | number;
  borderBlockStart?: string | number;
  borderBlockEnd?: string | number;
};

export const Label = StyledLabel;
