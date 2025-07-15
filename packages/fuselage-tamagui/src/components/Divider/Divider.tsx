import { styled, Stack, YStack, XStack, Text, GetProps } from 'tamagui'
import type { ReactNode } from 'react'

type DividerProps = GetProps<typeof StyledDivider> & {
  variation?: 'danger'
  children?: ReactNode
  vertical?: boolean
}

const dividerColor = '$borderColor' // swap with your theme color or use tokens
const dividerDangerColor = '$danger' // swap with your theme color or use tokens

const StyledDivider = styled(Stack, {
  name: 'Divider',
  borderColor: dividerColor,
  borderTopWidth: 1,
  marginVertical: '$2',
  width: '100%',
  variants: {
    vertical: {
      true: {
        borderTopWidth: 0,
        borderLeftWidth: 1,
        height: 20,
        width: 0,
        marginHorizontal: '$2',
        marginVertical: 0,
      },
      false: {},
    },
    variation: {
      danger: {
        borderColor: dividerDangerColor,
      },
    },
  } as const,
})

export function Divider({ variation, children, vertical, ...props }: DividerProps) {
  if (!children) {
    return (
      <StyledDivider
        accessibilityRole="separator"
        vertical={vertical}
        variation={variation}
        {...props}
      />
    )
  }
  // With children: show bars and text, horizontal only
  return (
    <XStack
      alignItems="center"
      width="100%"
      {...props}
      // style for danger variant if needed
    >
      <YStack flex={1} height={1} bg={variation === 'danger' ? dividerDangerColor : dividerColor} />
      <Text mx="$2">{children}</Text>
      <YStack flex={1} height={1} bg={variation === 'danger' ? dividerDangerColor : dividerColor} />
    </XStack>
  )
}