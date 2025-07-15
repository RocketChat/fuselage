import { forwardRef } from 'react'
import { Stack, GetProps } from 'tamagui'

type PlaceholderProps = GetProps<typeof Stack>

export const Placeholder = forwardRef<HTMLOptionElement, PlaceholderProps>(
  function Placeholder(props, ref) {
    return <Stack tag="option" color="$gray7" ref={ref} {...props} />
  }
)