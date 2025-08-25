import { styled, Text, GetProps } from 'tamagui';
import { Stack } from 'tamagui';

const StyledLabel = styled(Text, {
  name: 'Label',
  color: '#495057',
  fontSize: '16px',
  lineHeight: '1.4',
  fontWeight: '500',
  fontFamily: 'system-ui, -apple-system, sans-serif',

  variants: {
    disabled: {
      true: {
        color: '#6c757d',
        cursor: 'not-allowed',
      },
    },
  } as const,
});

const RequiredAsterisk = styled(Text, {
  name: 'RequiredAsterisk',
  color: '#dc3545',
  fontSize: '12px',
  position: 'absolute',
  top: '-2px',
  right: '-8px',
});

export type LabelProps = GetProps<typeof StyledLabel> & {
  ref?: ((instance: any) => void) | null;
  border?: string | number;
  borderBlock?: string | number;
  borderBlockStart?: string | number;
  borderBlockEnd?: string | number;
  required?: boolean;
};

export const Label = ({ required, children, ...props }: LabelProps) => {
  if (required) {
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <StyledLabel {...props}>{children}</StyledLabel>
        <RequiredAsterisk>*</RequiredAsterisk>
      </div>
    );
  }
  
  return <StyledLabel {...props}>{children}</StyledLabel>;
};
