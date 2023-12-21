import { styled, Text } from "@tamagui/core";

export const SizableText = styled(Text, {
  name: 'SizableText',
  fontFamily: '$body',

  variants: {
    fontScale: {
      ":string": (value) => ({
          fontSize: value,
          lineHeight: value,
          fontWeight: value,
          letterSpacing: value,
        }),
    }
  } as const
})
