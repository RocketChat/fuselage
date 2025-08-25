import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';
import { styled, YStack, GetProps } from 'tamagui';

const SelectInputOptionStyled = styled(YStack, {
  name: 'SelectInputOption',
  tag: 'option',
});

type SelectInputOptionProps = GetProps<typeof SelectInputOptionStyled>;

export const SelectInputOption = forwardRef<HTMLOptionElement, SelectInputOptionProps>(
  function SelectInputOption(props, ref) {
    return <SelectInputOptionStyled ref={ref} {...props} />;
  },
);

