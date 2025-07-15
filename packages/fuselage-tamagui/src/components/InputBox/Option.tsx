import { forwardRef } from 'react'
import { Stack, GetProps } from 'tamagui'

type OptionProps = GetProps<typeof Stack>

export const Option = forwardRef<HTMLSelectElement, OptionProps>(function Option(
  props,
  ref
) {
  return <Stack tag="option" ref={ref} {...props} />
})