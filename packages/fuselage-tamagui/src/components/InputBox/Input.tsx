import { forwardRef } from 'react'
import { Input as TamaguiInput, GetProps } from 'tamagui'

export type InputProps = GetProps<typeof TamaguiInput>

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  return <TamaguiInput ref={ref} {...props} />
})