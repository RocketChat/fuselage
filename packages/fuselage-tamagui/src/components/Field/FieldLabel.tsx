import type { ComponentPropsWithoutRef } from 'react'
import { useContext } from 'react'
import { Label } from '../Label'
import { FieldContext } from './Field'

type FieldLabelProps = ComponentPropsWithoutRef<typeof Label>

export const FieldLabel = (props: FieldLabelProps) => {
  const isInsideField = useContext(FieldContext)
  
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    throw new Error('FieldLabel should be used as children of Field Component')
  }

  return <Label {...props} />
}