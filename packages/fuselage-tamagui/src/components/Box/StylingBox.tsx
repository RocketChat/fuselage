import type { ReactElement } from 'react'
import { cloneElement } from 'react'
import type { GetProps } from 'tamagui'
import { StyledBox } from './Box'

type StylingBoxProps = {
  children: ReactElement<{ className?: string }>
} & GetProps<typeof StyledBox>

export const StylingBox = ({ children, ...props }: StylingBoxProps) => {
  return cloneElement(children, props)
}