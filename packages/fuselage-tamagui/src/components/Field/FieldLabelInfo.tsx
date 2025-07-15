import type { ComponentProps } from 'react'
import { useContext } from 'react'
import { LabelInfo } from '../Label/LabelInfo'
import { FieldContext } from './Field'

type FieldLabelInfoProps = ComponentProps<typeof LabelInfo>

export const FieldLabelInfo = (props: FieldLabelInfoProps) => {
  const isInsideField = useContext(FieldContext)
  
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    throw new Error('FieldLabelInfo should be used as children of Field Component')
  }

  return <LabelInfo {...props} />
}