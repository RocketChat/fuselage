import type { ComponentPropsWithoutRef } from 'react'
import { useContext } from 'react'
import { Anchor, GetProps } from 'tamagui'
import { FieldContext } from './Field'

type FieldLinkProps = GetProps<typeof Anchor>

export const FieldLink = (props: FieldLinkProps) => {
  const isInsideField = useContext(FieldContext)
  
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    throw new Error('FieldLink should be used as children of Field Component')
  }

  return <Anchor target="_blank" color="$blue10" fontSize="$2" {...props} />
}