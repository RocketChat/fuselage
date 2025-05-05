import { createTamagui, getConfig } from '@tamagui/core'

export const config = createTamagui({
  // act like CSS variables at your root
  tokens: {
    // width="$sm"
    size: { sm: 8, md: 12, lg: 20 },
    // margin="$-sm"
    space: { '-sm': 8 },
    // radius="$none"
    radius: { none: 0, sm: 3 },
    color: { white: '#fff', black: '#000' },
  },

  themes: {
    light: {
      bg: '#f2f2f2',
      color: '#fff',
    },
    dark: {
      bg: '#111',
      color: '#000',
    },
  },

  // media query definitions can be used to style,
  // but also can be used with "groups" to do container queries by size:
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  shorthands: {
    // <View px={20} />
    px: 'paddingHorizontal',
  },

  settings: {
    disableSSR: true, // for client-side apps gains a bit of performance
    allowedStyleValues: 'somewhat-strict-web', // if targeting only web
  },
})

// in other files use this:
console.log(`config is`, getConfig())

// get typescript types on @tamagui/core imports:
type AppConfig = typeof config
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}