import { forwardRef } from 'react'
import { Stack, GetProps } from 'tamagui'

type AddonProps = GetProps<typeof Stack>

export const Addon = forwardRef<HTMLSpanElement, AddonProps>(function Addon(
  props,
  ref
) {
  return (
    <Stack 
      tag="span" 
      fd="row" 
      ai="center" 
      flex={0}
      flexShrink={0}
      flexGrow={0}
      px="$2" 
      ref={ref} 
      {...props} 
    />
  )
})