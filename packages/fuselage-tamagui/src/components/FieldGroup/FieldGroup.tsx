import type { ReactNode } from 'react'
import { styled, YStack, GetProps, Theme } from 'tamagui'

const StyledFieldGroup = styled(YStack, {
  name: 'FieldGroup',
  tag: 'fieldset',
  space: '$3',
})

export type FieldGroupProps = GetProps<typeof StyledFieldGroup> & {
  children?: ReactNode
}

export const FieldGroup = ({ children, ...props }: FieldGroupProps) => {
  return (
    <Theme name="light">
      <StyledFieldGroup role="group" {...props}>
        {children}
      </StyledFieldGroup>
    </Theme>
  )
}