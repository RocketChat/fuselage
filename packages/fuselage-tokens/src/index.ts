import colors from './colors.json';

export const Background = {
  light: colors.white,
  tint: colors.n100,
};
export const Surface = {
  light: colors.white,
  tint: colors.n100,
  neutral: colors.n400,
  disabled: colors.n100,
  hover: colors.n400,
  info: colors.i200,
  success: colors.s200,
  warning: colors.w200,
  danger: colors.d200,
  service1: colors['s1-200'],
  service2: colors['s2-200'],
};

export const Stroke = {
  extraLight: colors.white,
  light: colors.n400,
  medium: colors.n600,
  dark: colors.n700,
  extraDark: colors.n800,
  extraLightHighlight: colors.p200,
  highlight: colors.p500,
  extraLightError: colors.d200,
  error: colors.d500,
};

export const Text = {
  white: colors.white,
  disabled: colors.n500,
  annotation: colors.n600,
  hint: colors.n700,
  default: colors.n800,
  titlesLabels: colors.n900,
  danger: colors.d600,
  secondaryInfo: colors.n700,
  onInfo: colors.i600,
  onSuccess: colors.s800,
  onWarning: colors.w900,
  onDanger: colors.d800,
  onService1: colors['s1-800'],
  onService2: colors['s2-600'],
};

export const Button = {
  primary: colors.p500,
  secondary: colors.n400,
  secondaryDanger: colors.n400,
  danger: colors.d500,
  hoverPrimary: colors.p600,
  hoverSecondary: colors.n500,
  hoverSecondaryDanger: colors.n500,
  hoverDanger: colors.d600,
  pressPrimary: colors.p700,
  pressSecondary: colors.n600,
  pressSecondaryDanger: colors.n600,
  pressDanger: colors.d700,
  focusPrimary: colors.p500,
  focusSecondary: colors.n400,
  focusSecondaryDanger: colors.n400,
  focusDanger: colors.d500,
  keyfocusPrimary: colors.p500,
  keyfocusSecondary: colors.n400,
  keyfocusSecondaryDanger: colors.n400,
  keyfocusDanger: colors.d500,
  disablePrimary: colors.p200,
  disableSecondary: colors.n300,
  disableSecondaryDanger: colors.n300,
  disableDanger: colors.d200,

  onPrimary: colors.white,
  onSecondary: colors.n900,
  onSecondaryDanger: colors.d700,
  onDanger: colors.white,
  onDisable: colors.n600,
  onSecondaryDangerDisable: colors.d300,
};
