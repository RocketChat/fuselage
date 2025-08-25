import { styled, Text, GetProps } from 'tamagui'

const StyledLabelInfo = styled(Text, {
  name: 'LabelInfo',
  color: '$color2',
  fontSize: '12px',
  fontWeight: '400',
  marginLeft: '8px',
  marginTop: '-4px',
})

export type LabelInfoProps = GetProps<typeof StyledLabelInfo> & {
  title?: string
}

export const LabelInfo = ({ title, ...props }: LabelInfoProps) => {
  return <StyledLabelInfo title={title} {...props}>ⓘ</StyledLabelInfo>
}