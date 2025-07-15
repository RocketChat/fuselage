import { styled, Text, GetProps } from 'tamagui'

const StyledLabelInfo = styled(Text, {
  name: 'LabelInfo',
  color: '$color2',
  fontSize: '$1',
  fontWeight: '400',
})

export type LabelInfoProps = GetProps<typeof StyledLabelInfo> & {
  title?: string
}

export const LabelInfo = ({ title, ...props }: LabelInfoProps) => {
  return <StyledLabelInfo title={title} {...props}>ⓘ</StyledLabelInfo>
}