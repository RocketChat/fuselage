// import { createInterFont } from '@tamagui/font-inter'x/
// import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'
import { createTamagui } from '@tamagui/core'

import { themes } from './tokens/themes'
import { tokens } from './tokens/tokens'
import { interFont } from './tokens/font'

export const config = createTamagui({
  fonts: {
    heading: interFont,
    body: interFont,
  },
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  themes: themes,
  tokens: tokens
})
