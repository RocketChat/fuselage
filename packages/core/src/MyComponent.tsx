import { type TamaguiComponent, Stack, styled } from '@tamagui/core'

export const MyComponent: TamaguiComponent = styled(Stack, {
  name: 'MyComponent',
  backgroundColor: 'red',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
})
