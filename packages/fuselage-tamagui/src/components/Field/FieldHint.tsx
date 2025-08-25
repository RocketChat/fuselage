import type { ComponentPropsWithoutRef } from 'react'
import { useContext } from 'react'
import { Text, GetProps } from 'tamagui'
import { FieldContext } from './Field'

type FieldHintProps = GetProps<typeof Text>

export const FieldHint = (props: FieldHintProps) => {
  const isInsideField = useContext(FieldContext)
  
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    throw new Error('FieldHint should be used as children of Field Component')
  }

  return <Text color="#6c757d" fontSize="14px" fontFamily="system-ui, -apple-system, sans-serif" lineHeight="1.4" {...props} />
}