import type { ComponentPropsWithoutRef } from 'react'
import { useContext } from 'react'
import { Text, GetProps } from 'tamagui'
import { FieldContext } from './Field'

type FieldDescriptionProps = GetProps<typeof Text>

export const FieldDescription = (props: FieldDescriptionProps) => {
  const isInsideField = useContext(FieldContext)
  
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    throw new Error('FieldDescription should be used as children of Field Component')
  }

  return <Text color="#6c757d" fontSize="14px" fontFamily="system-ui, -apple-system, sans-serif" lineHeight="1.4" marginBottom="12px" {...props} />
}