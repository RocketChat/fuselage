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
  // Base colors
  button: {
    secondaryBg: '#9EA2A8', // Light grey background for all secondary buttons
    secondaryHover: '#6C727A',
    secondaryPress: '#6C727A',
    secondaryText: '#1F2329', // Dark text for secondary buttons
  },
  primary_button: {
    background: '#095AD2', // Blue
    backgroundHover: '#10529E',
    backgroundPress: '#01336B',
    backgroundFocus: '#095AD2',
    color: '#FFFFFF'
  },
  danger_button: {
    background: '#BB3E4E', // Red
    backgroundHover: '#95323F',
    backgroundPress: '#822C37',
    backgroundFocus: '#BB3E4E',
    color: '#FFFFFF'
  },
  warning_button: {
    background: '#F5C625', // Yellow
    backgroundHover: '#E6B91D',
    backgroundPress: '#D6AB15',
    backgroundFocus: '#F5C625',
    color: '#1F2329' // Dark text for yellow background
  },
  success_button: {
    background: '#1D7256', // Green
    backgroundHover: '#175943',
    backgroundPress: '#134937',
    backgroundFocus: '#1D7256',
    color: '#FFFFFF'
  },
  // All secondary variants use the same grey background
  secondary_button: {
    background: '#9EA2A8',
    backgroundHover: '#6C727A',
    backgroundPress: '#6C727A',
    backgroundFocus: '#9EA2A8',
    color: '#1F2329'
  },
  secondaryDanger_button: {
    background: '#9EA2A8',
    backgroundHover: '#6C727A',
    backgroundPress: '#6C727A',
    backgroundFocus: '#9EA2A8',
    color: '#BB3E4E' // Red text
  },
  secondaryWarning_button: {
    background: '#9EA2A8',
    backgroundHover: '#6C727A',
    backgroundPress: '#6C727A',
    backgroundFocus: '#9EA2A8',
    color: '#B08C30' // Yellow/Brown text
  },
  secondarySuccess_button: {
    background: '#9EA2A8',
    backgroundHover: '#6C727A',
    backgroundPress: '#6C727A',
    backgroundFocus: '#9EA2A8',
    color: '#1D7256' // Green text
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
      background: tokens.button.secondaryBg,
      backgroundPress: tokens.button.secondaryPress,
      backgroundHover: tokens.button.secondaryHover,
      color: tokens.button.secondaryText,
    },
    primary_Button: {
      background: tokens.primary_button.background,
      backgroundHover: tokens.primary_button.backgroundHover,
      backgroundPress: tokens.primary_button.backgroundPress,
      backgroundFocus: tokens.primary_button.backgroundFocus,
      color: tokens.primary_button.color,
    },
    danger_Button: {
      background: tokens.danger_button.background,
      backgroundHover: tokens.danger_button.backgroundHover,
      backgroundPress: tokens.danger_button.backgroundPress,
      backgroundFocus: tokens.danger_button.backgroundFocus,
      color: tokens.danger_button.color,
    },
    warning_Button: {
      background: tokens.warning_button.background,
      backgroundHover: tokens.warning_button.backgroundHover,
      backgroundPress: tokens.warning_button.backgroundPress,
      backgroundFocus: tokens.warning_button.backgroundFocus,
      color: tokens.warning_button.color,
    },
    success_Button: {
      background: tokens.success_button.background,
      backgroundHover: tokens.success_button.backgroundHover,
      backgroundPress: tokens.success_button.backgroundPress,
      backgroundFocus: tokens.success_button.backgroundFocus,
      color: tokens.success_button.color,
    },
    secondaryDanger_Button: {
      background: tokens.button.secondaryBg,
      backgroundPress: tokens.button.secondaryPress,
      backgroundHover: tokens.button.secondaryHover,
      color: tokens.danger_button.background,
    },
    secondaryWarning_Button: {
      background: tokens.button.secondaryBg,
      backgroundPress: tokens.button.secondaryPress,
      backgroundHover: tokens.button.secondaryHover,
      color: tokens.warning_button.background,
    },
    secondarySuccess_Button: {
      background: tokens.button.secondaryBg,
      backgroundPress: tokens.button.secondaryPress,
      backgroundHover: tokens.button.secondaryHover,
      color: tokens.success_button.background,
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
