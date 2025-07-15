import type { ComponentPropsWithoutRef } from 'react'
import { createContext } from 'react'
import { YStack, GetProps, Theme } from 'tamagui'

export const FieldContext = createContext(false)

export type FieldProps = GetProps<typeof YStack>

export function Field(props: FieldProps) {
  return (
    <FieldContext.Provider value={true}>
      <Theme name="light">
        <YStack {...props} />
      </Theme>
    </FieldContext.Provider>
  )
}