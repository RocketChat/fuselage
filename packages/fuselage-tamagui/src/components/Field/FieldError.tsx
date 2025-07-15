import type { ComponentPropsWithoutRef } from 'react'
import { useContext } from 'react'
import { Text, GetProps } from 'tamagui'
import { FieldContext } from './Field'

type FieldErrorProps = GetProps<typeof Text>

export const FieldError = (props: FieldErrorProps) => {
  const isInsideField = useContext(FieldContext)
  
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    throw new Error('FieldError should be used as children of Field Component')
  }

  return <Text color="$red10" fontSize="$2" {...props} />
}