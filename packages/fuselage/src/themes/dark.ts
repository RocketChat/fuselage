import colors from '@rocket.chat/fuselage-tokens/colors.json';

export const darkTheme = {
  // --- Surface tokens (12) ---
  surfaceLight: '#262931',
  surfaceTint: '#1F2329',
  surfaceRoom: '#1F2329',
  surfaceNeutral: '#2D3039',
  surfaceDisabled: '#24272E',
  surfaceHover: '#1A1E23',
  surfaceSelected: '#4C5362',
  surfaceDark: '#E4E7EA',
  surfaceFeatured: '#5F1477',
  surfaceFeaturedHover: '#4A105D',
  surfaceSidebar: '#2F343D',
  surfaceOverlay: 'rgba(0, 0, 0, 0.6)',

  // --- Stroke tokens (9) ---
  strokeExtraLight: '#333842',
  strokeLight: '#404754',
  strokeMedium: '#4B5362',
  strokeDark: '#9EA2A8',
  strokeExtraDark: '#CBCED1',
  strokeExtraLightHighlight: colors.b200,
  strokeHighlight: '#6292DA',
  strokeExtraLightError: '#F49AA6',
  strokeError: '#BB3E4E',

  // --- Font tokens (11) ---
  fontWhite: '#2F343D',
  fontDisabled: '#60646C',
  fontAnnotation: '#9EA2A8',
  fontHint: '#9EA2A8',
  fontSecondaryInfo: '#9EA2A8',
  fontDefault: '#C1C7D0',
  fontTitlesLabels: '#F2F3F5',
  fontInfo: '#739EDE',
  fontDanger: '#D88892',
  fontPureWhite: colors.white,
  fontPureBlack: colors.n900,

  // --- Badge tokens (5) ---
  badgeLevel0: '#404754',
  badgeLevel1: '#484C51',
  badgeLevel2: '#2C65BA',
  badgeLevel3: '#955828',
  badgeLevel4: '#B43C4C',

  // --- Status background tokens (8) ---
  statusBgInfo: '#A8C3EB',
  statusBgSuccess: '#C1EBDD',
  statusBgDanger: '#F7CFD4',
  statusBgWarning: '#FEEFBE',
  statusBgWarning2: '#3C3625',
  statusBgService1: '#FCE3CF',
  statusBgService2: '#EDD0F7',
  statusBgService3: '#5F1477',

  // --- Status font tokens (8) ---
  statusFontOnInfo: '#739EDE',
  statusFontOnSuccess: '#58AD90',
  statusFontOnDanger: '#D88892',
  statusFontOnWarning: '#C7AA66',
  statusFontOnWarning2: '#FFFFFF',
  statusFontOnService1: '#CA9163',
  statusFontOnService2: '#C393D2',
  statusFontOnService3: '#FFFFFF',

  // --- Shadow tokens (6) ---
  shadowHighlight: colors.b200,
  shadowDanger: colors.r100,
  shadowElevationBorder: '#2F343D',
  shadowElevation1: 'rgba(9, 9, 9, 0.35)',
  shadowElevation2x: 'rgba(9, 9, 9, 0.3)',
  shadowElevation2y: 'rgba(9, 9, 9, 0.45)',

  // --- Button Primary (7) ---
  buttonPrimaryBg: '#095AD2',
  buttonPrimaryHoverBg: '#10529E',
  buttonPrimaryPressBg: '#01336B',
  buttonPrimaryFocusBg: '#095AD2',
  buttonPrimaryDisabledBg: '#012247',
  buttonPrimaryColor: '#FFFFFF',
  buttonPrimaryDisabledColor: '#6C727A',

  // --- Button Secondary (7) ---
  buttonSecondaryBg: '#353B45',
  buttonSecondaryHoverBg: '#404754',
  buttonSecondaryPressBg: '#4C5362',
  buttonSecondaryFocusBg: '#353B45',
  buttonSecondaryDisabledBg: '#353B45',
  buttonSecondaryColor: '#E4E7EA',
  buttonSecondaryDisabledColor: '#6C727A',

  // --- Button Danger (7) ---
  buttonDangerBg: '#BB3E4E',
  buttonDangerHoverBg: '#95323F',
  buttonDangerPressBg: '#822C37',
  buttonDangerFocusBg: '#BB3E4E',
  buttonDangerDisabledBg: '#3D2126',
  buttonDangerColor: '#FFFFFF',
  buttonDangerDisabledColor: '#757575',

  // --- Button Secondary Danger (7) ---
  buttonSecondaryDangerBg: '#353B45',
  buttonSecondaryDangerHoverBg: '#404754',
  buttonSecondaryDangerPressBg: '#4C5362',
  buttonSecondaryDangerFocusBg: '#353B45',
  buttonSecondaryDangerDisabledBg: '#353B45',
  buttonSecondaryDangerColor: '#FFC1C9',
  buttonSecondaryDangerDisabledColor: '#6B0513',

  // --- Button Success (7) ---
  buttonSuccessBg: '#1D7256',
  buttonSuccessHoverBg: '#175943',
  buttonSuccessPressBg: '#134937',
  buttonSuccessFocusBg: '#1D7256',
  buttonSuccessDisabledBg: '#1E4B40',
  buttonSuccessColor: '#FFFFFF',
  buttonSuccessDisabledColor: '#757575',

  // --- Button Warning (7) ---
  buttonWarningBg: '#C7AA66',
  buttonWarningHoverBg: '#A8903E',
  buttonWarningPressBg: '#8E7A35',
  buttonWarningFocusBg: '#C7AA66',
  buttonWarningDisabledBg: '#3C3625',
  buttonWarningColor: '#1F2329',
  buttonWarningDisabledColor: '#6C727A',

  // --- Button Secondary Success (7) ---
  buttonSecondarySuccessBg: '#353B45',
  buttonSecondarySuccessHoverBg: '#404754',
  buttonSecondarySuccessPressBg: '#4C5362',
  buttonSecondarySuccessFocusBg: '#353B45',
  buttonSecondarySuccessDisabledBg: '#353B45',
  buttonSecondarySuccessColor: '#58AD90',
  buttonSecondarySuccessDisabledColor: '#1E4B40',

  // --- Button Secondary Warning (7) ---
  buttonSecondaryWarningBg: '#353B45',
  buttonSecondaryWarningHoverBg: '#404754',
  buttonSecondaryWarningPressBg: '#4C5362',
  buttonSecondaryWarningFocusBg: '#353B45',
  buttonSecondaryWarningDisabledBg: '#353B45',
  buttonSecondaryWarningColor: '#C7AA66',
  buttonSecondaryWarningDisabledColor: '#3C3625',

  // Tag tokens removed — Tag now uses button/surface/status tokens directly
  tagDisabledBg: '#2D3039',

  // --- Tamagui standard tokens (15) ---
  background: '#1F2329',
  backgroundHover: '#1A1E23',
  backgroundPress: '#262931',
  backgroundFocus: '#1A1E23',
  backgroundStrong: '#262931',
  backgroundTransparent: 'rgba(0, 0, 0, 0)',
  color: '#C1C7D0',
  colorHover: '#F2F3F5',
  colorPress: '#F2F3F5',
  colorFocus: '#C1C7D0',
  borderColor: '#333842',
  borderColorHover: '#404754',
  borderColorPress: '#4B5362',
  borderColorFocus: '#6292DA',
  placeholderColor: '#60646C',
} as const;
