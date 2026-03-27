import colors from '@rocket.chat/fuselage-tokens/colors.json';

export const highContrastTheme = {
  // --- Surface tokens (12) ---
  surfaceLight: colors.white,
  surfaceTint: colors.n100,
  surfaceRoom: colors.white,
  surfaceNeutral: colors.n400,
  surfaceDisabled: colors.n100,
  surfaceHover: colors.n200,
  surfaceSelected: colors.n450,
  surfaceDark: colors.n900,
  surfaceFeatured: colors.p700,
  surfaceFeaturedHover: colors.p800,
  surfaceSidebar: colors.n400,
  surfaceOverlay: 'rgba(47, 52, 61, 0.5)',

  // --- Stroke tokens (9) ---
  strokeExtraLight: colors.n250,
  strokeLight: colors.n500,
  strokeMedium: colors.n600,
  strokeDark: colors.n700,
  strokeExtraDark: colors.n800,
  strokeExtraLightHighlight: colors.b200,
  strokeHighlight: colors.b500,
  strokeExtraLightError: colors.r200,
  strokeError: colors.r500,

  // --- Font tokens (11) ---
  fontWhite: colors.white,
  fontDisabled: colors.n500,
  fontAnnotation: colors.n900,
  fontHint: colors.n900,
  fontSecondaryInfo: colors.n900,
  fontDefault: colors.n900,
  fontTitlesLabels: colors.n900,
  fontInfo: colors.b800,
  fontDanger: colors.r800,
  fontPureWhite: colors.white,
  fontPureBlack: colors.n900,

  // --- Badge tokens (5) ---
  badgeLevel0: colors.n400,
  badgeLevel1: colors.n800,
  badgeLevel2: colors.b700,
  badgeLevel3: colors.o900,
  badgeLevel4: colors.r800,

  // --- Status background tokens (8) ---
  statusBgInfo: colors.b200,
  statusBgSuccess: colors.g200,
  statusBgDanger: colors.r200,
  statusBgWarning: colors.y200,
  statusBgWarning2: colors.y100,
  statusBgService1: colors.o200,
  statusBgService2: colors.p200,
  statusBgService3: colors.p700,

  // --- Status font tokens (8) ---
  statusFontOnInfo: colors.b700,
  statusFontOnSuccess: colors.g1000,
  statusFontOnDanger: colors.r1000,
  statusFontOnWarning: colors.y1000,
  statusFontOnWarning2: colors.n800,
  statusFontOnService1: colors.o1000,
  statusFontOnService2: colors.p600,
  statusFontOnService3: colors.white,

  // --- Shadow tokens (6) ---
  shadowHighlight: colors.b200,
  shadowDanger: colors.r100,
  shadowElevationBorder: colors.n250,
  shadowElevation1: 'rgba(47, 52, 61, 0.1)',
  shadowElevation2x: 'rgba(47, 52, 61, 0.08)',
  shadowElevation2y: 'rgba(47, 52, 61, 0.12)',

  // --- Button Primary (7) ---
  buttonPrimaryBg: colors.b700,
  buttonPrimaryHoverBg: colors.b800,
  buttonPrimaryPressBg: colors.b900,
  buttonPrimaryFocusBg: colors.b700,
  buttonPrimaryDisabledBg: colors.b200,
  buttonPrimaryColor: colors.white,
  buttonPrimaryDisabledColor: colors.white,

  // --- Button Secondary (7) ---
  buttonSecondaryBg: colors.n400,
  buttonSecondaryHoverBg: colors.n500,
  buttonSecondaryPressBg: colors.n600,
  buttonSecondaryFocusBg: colors.n400,
  buttonSecondaryDisabledBg: colors.n300,
  buttonSecondaryColor: colors.n900,
  buttonSecondaryDisabledColor: colors.n500,

  // --- Button Danger (7) ---
  buttonDangerBg: colors.r800,
  buttonDangerHoverBg: colors.r900,
  buttonDangerPressBg: colors.r900,
  buttonDangerFocusBg: colors.r800,
  buttonDangerDisabledBg: colors.r200,
  buttonDangerColor: colors.white,
  buttonDangerDisabledColor: colors.white,

  // --- Button Secondary Danger (7) ---
  buttonSecondaryDangerBg: colors.n400,
  buttonSecondaryDangerHoverBg: colors.n500,
  buttonSecondaryDangerPressBg: colors.n600,
  buttonSecondaryDangerFocusBg: colors.n400,
  buttonSecondaryDangerDisabledBg: colors.n300,
  buttonSecondaryDangerColor: colors.r900,
  buttonSecondaryDangerDisabledColor: colors.r300,

  // --- Button Success (7) ---
  buttonSuccessBg: colors.g500,
  buttonSuccessHoverBg: colors.g600,
  buttonSuccessPressBg: colors.g700,
  buttonSuccessFocusBg: colors.g500,
  buttonSuccessDisabledBg: colors.g200,
  buttonSuccessColor: colors.n900,
  buttonSuccessDisabledColor: colors.white,

  // --- Button Warning (7) ---
  buttonWarningBg: colors.y700,
  buttonWarningHoverBg: colors.y800,
  buttonWarningPressBg: colors.y900,
  buttonWarningFocusBg: colors.y700,
  buttonWarningDisabledBg: colors.y200,
  buttonWarningColor: colors.n900,
  buttonWarningDisabledColor: colors.n700,

  // --- Button Secondary Success (7) ---
  buttonSecondarySuccessBg: colors.n400,
  buttonSecondarySuccessHoverBg: colors.n500,
  buttonSecondarySuccessPressBg: colors.n600,
  buttonSecondarySuccessFocusBg: colors.n400,
  buttonSecondarySuccessDisabledBg: colors.n300,
  buttonSecondarySuccessColor: colors.g1000,
  buttonSecondarySuccessDisabledColor: colors.g200,

  // --- Button Secondary Warning (7) ---
  buttonSecondaryWarningBg: colors.n400,
  buttonSecondaryWarningHoverBg: colors.n500,
  buttonSecondaryWarningPressBg: colors.n600,
  buttonSecondaryWarningFocusBg: colors.n400,
  buttonSecondaryWarningDisabledBg: colors.n300,
  buttonSecondaryWarningColor: colors.y1000,
  buttonSecondaryWarningDisabledColor: colors.y300,

  // Tag tokens removed — Tag now uses button/surface/status tokens directly

  // --- Tamagui standard tokens (15) ---
  background: colors.white,
  backgroundHover: colors.n200,
  backgroundPress: colors.n300,
  backgroundFocus: colors.n200,
  backgroundStrong: colors.n100,
  backgroundTransparent: 'rgba(0, 0, 0, 0)',
  color: colors.n900,
  colorHover: colors.n900,
  colorPress: colors.n900,
  colorFocus: colors.n900,
  borderColor: colors.n250,
  borderColorHover: colors.n500,
  borderColorPress: colors.n600,
  borderColorFocus: colors.b500,
  placeholderColor: colors.n600,
} as const;
