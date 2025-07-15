import { forwardRef } from 'react'
import { Stack, GetProps } from 'tamagui'

type AddonProps = GetProps<typeof Stack>

export const Addon = forwardRef<HTMLSpanElement, AddonProps>(function Addon(
  props,
  ref
) {
  return <Stack tag="span" ai="center" px="$2" ref={ref} {...props} />
})