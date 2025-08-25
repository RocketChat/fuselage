import type { ComponentPropsWithoutRef } from 'react'
import { createContext } from 'react'
import { YStack, GetProps } from 'tamagui'

export const FieldContext = createContext(false)

export type FieldProps = GetProps<typeof YStack>

export function Field(props: FieldProps) {
  return (
    <FieldContext.Provider value={true}>
      <YStack {...props} />
    </FieldContext.Provider>
  )
}