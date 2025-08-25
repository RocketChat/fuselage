import { styled, Stack, YStack, XStack, Text, GetProps } from 'tamagui'
import type { ReactNode } from 'react'

type DividerProps = GetProps<typeof StyledDivider> & {
  variation?: 'danger'
  children?: ReactNode
  vertical?: boolean
}

const StyledDivider = styled(Stack, {
  name: 'Divider',
  borderColor: '#E4E7EA', // Light grey border color
  borderTopWidth: 1,
  marginVertical: 8,
  width: '100%',
  minHeight: 1,
  
  variants: {
    vertical: {
      true: {
        borderTopWidth: 0,
        borderLeftWidth: 1,
        height: 20,
        width: 1,
        marginHorizontal: 8,
        marginVertical: 0,
        minHeight: 20,
      },
      false: {},
    },
    variation: {
      danger: {
        borderColor: '#E03B44', // Danger red color
      },
    },
  } as const,
})

const DividerBar = styled(YStack, {
  flex: 1,
  height: 1,
  backgroundColor: '#E4E7EA',
  
  variants: {
    variation: {
      danger: {
        backgroundColor: '#E03B44',
      },
    },
  } as const,
})

const DividerWrapper = styled(YStack, {
  marginVertical: 8,
  paddingHorizontal: 8,
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
      accessibilityRole="separator"
      {...props}
    >
      <DividerBar variation={variation} />
      <DividerWrapper>
        <Text color="#1F2329" fontSize="$2">{children}</Text>
      </DividerWrapper>
      <DividerBar variation={variation} />
    </XStack>
  )
}