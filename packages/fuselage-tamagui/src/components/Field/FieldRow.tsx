import type { ComponentPropsWithoutRef } from 'react'
import { useContext } from 'react'
import { XStack, GetProps } from 'tamagui'
import { FieldContext } from './Field'

type FieldRowProps = GetProps<typeof XStack>

export const FieldRow = (props: FieldRowProps) => {
  const isInsideField = useContext(FieldContext)
  
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    throw new Error('FieldRow should be used as children of Field Component')
  }

  return <XStack alignItems="center" justifyContent="space-between" {...props} />
}