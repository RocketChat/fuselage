import { createFont, createTamagui, createTokens, isWeb } from 'tamagui';

// To work with the tamagui UI kit styled components (which is optional)
// you'd want the keys used for `size`, `lineHeight`, `weight` and
// `letterSpacing` to be consistent. The `createFont` function
// will fill-in any missing values if `lineHeight`, `weight` or
// `letterSpacing` are subsets of `size`.
const systemFont = createFont({
  family: isWeb ? 'Helvetica, Arial, sans-serif' : 'System',
  size: {
    1: 12,
    2: 14,
    3: 15,
  },
  lineHeight: {
    // 1 will be 22
    2: 22,
  },
  weight: {
    1: '300',
    // 2 will be 300
    3: '600',
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
  // (native only) swaps out fonts by face/style
  face: {
    300: { normal: 'InterLight', italic: 'InterItalic' },
    600: { normal: 'InterBold' },
  },
});

// Set up tokens

// The keys can be whatever you want, but if using `tamagui` you'll want 1-10:

const size = {
  small: 20,
  medium: 30,
  true: 30, // note true = 30 just like medium, your default size token
  large: 40,
};

export const tokens = createTokens({
  primary_button: {
    background: '#095AD2',
    backgroundHover: '#10529E',
    backgroundPress: '#01336B',
    backgroundFocus: '#095AD2',
  },
  danger_button: {
    background: '#BB3E4E',
    backgroundHover: '#95323F',
    backgroundPress: '#822C37',
    backgroundFocus: '#BB3E4E',
  },
  warning_button: {
    background: '#B08C30',
    backgroundHover: '#C7AA66',
    backgroundPress: '#B08C30',
    backgroundFocus: '#095AD2',
  },
  success_button: {
    background: '#1D7256',
    backgroundHover: '#175943',
    backgroundPress: '#134937',
    backgroundFocus: '#1D7256',
  },
  secondary_button: {
    background: '#353B45',
    backgroundHover: '#404754',
    backgroundPress: '#4C5362',
    backgroundFocus: '#353B45',
  },
  secondaryDanger_button: {
    background: '#353B45',
    backgroundHover: '#404754',
    backgroundPress: '#4C5362',
    backgroundFocus: '#353B45',
  },
  secondaryWarning_button: {
    background: '#e1e1e1',
    backgroundHover: '#404754',
    backgroundPress: '#e1e1e1',
    backgroundFocus: '#404754',
  },
  secondarySuccess_button: {
    background: '#e1e1e1',
    backgroundHover: '#404754',
    backgroundPress: '#4C5362',
    backgroundFocus: '#404754',
  },
  disabled_button: {
    background: '#353B45',
    backgroundHover: '#404754',
    backgroundPress: '#4C5362',
    backgroundFocus: '#353B45',
  },

  size: {
    sm: 38,
    md: 46,
    true: 46,
    lg: 60,
  },
  space: {
    sm: 15,
    md: 20,
    true: 20,
    lg: 25,
  },
  radius: {
    sm: 4,
    md: 8,
    true: 8,
    lg: 12,
  },

  zIndex: { small: 0, medium: 100, true: 3, large: 1000 },
  color: {
    white: '#fff',
    black: '#000',
  },
});

export const config = createTamagui({
  fonts: {
    heading: systemFont,
    body: systemFont,
  },
  tokens,
  themes: {
    light: {
      bg: '#fff',
      color: '#000',
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
    light_Button: {
      background: '#353B45',
      backgroundPress: '#4C5362', // darker background on press
      backgroundHover: '#404754', // lighter background on hover
      color: '#353B45',
    },
    primary_Button: {
      background: '#095AD2',
      backgroundHover: '#10529E',
      backgroundPress: '#01336B',
      backgroundFocus: '#095AD2',
      color: '#fff',
    },
  },
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  // Shorthands
  // Adds <View m={10} /> to <View margin={10} />
  // See Settings section on this page to only allow shorthands
  // Be sure to have `as const` at the end
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
  } as const,

  // Change the default props for any styled() component with a name.
  // We are discouraging the use of this and have deprecated it, prefer to use
  // styled() on any component to change it's styles.
  defaultProps: {
    Text: {
      color: 'green',
    },
  },
});

type AppConfig = typeof config;

// this will give you types for your components
// note - if using your own design system, put the package name here instead of tamagui
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
