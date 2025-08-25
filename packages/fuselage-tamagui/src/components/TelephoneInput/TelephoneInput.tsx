import type { ComponentProps, Ref } from 'react'
import { forwardRef } from 'react'

import { InputBox } from '../InputBox'

export type TelephoneInputProps = Omit<ComponentProps<typeof InputBox>, 'type'>

export const TelephoneInput = forwardRef(function TelephoneInput(
  props: TelephoneInputProps,
  ref: Ref<HTMLInputElement>
) {
  return <InputBox type="tel" ref={ref} {...props} />
})

TelephoneInput.displayName = 'TelephoneInput'

export default TelephoneInput
