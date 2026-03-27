var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../packages/fuselage/src/tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  tamaguiConfig: () => tamaguiConfig,
  tokens: () => tokens
});
module.exports = __toCommonJS(tamagui_config_exports);

// ../../packages/fuselage-tokens/colors.json
var colors_default = {
  white: "#FFFFFF",
  n100: "#F7F8FA",
  n200: "#F2F3F5",
  n250: "#EBECEF",
  n300: "#EEEFF1",
  n400: "#E4E7EA",
  n450: "#D7DBE0",
  n500: "#CBCED1",
  n600: "#9EA2A8",
  n700: "#6C737A",
  n800: "#2F343D",
  n900: "#1F2329",
  r100: "#FFE9EC",
  r200: "#FFC1C9",
  r300: "#F98F9D",
  r400: "#F5455C",
  r500: "#EC0D2A",
  r600: "#D40C26",
  r700: "#BB0B21",
  r800: "#9B1325",
  r900: "#8B0719",
  r1000: "#6B0513",
  o100: "#FDE8D7",
  o200: "#FAD1B0",
  o300: "#F7B27B",
  o400: "#F59B53",
  o500: "#F38C39",
  o600: "#E26D0E",
  o700: "#BD5A0B",
  o800: "#974809",
  o900: "#713607",
  o1000: "#5B2C06",
  p100: "#F9EFFC",
  p200: "#EDD0F7",
  p300: "#DCA0EF",
  p400: "#CA71E7",
  p500: "#9F22C7",
  p600: "#7F1B9F",
  p700: "#5F1477",
  p800: "#4A105D",
  p900: "#350B42",
  y100: "#FFF8E0",
  y200: "#FFECAD",
  y300: "#FFE383",
  y400: "#FFD95A",
  y500: "#FFD031",
  y600: "#F3BE08",
  y700: "#DFAC00",
  y800: "#AC892F",
  y900: "#8E6300",
  y1000: "#573D00",
  g100: "#E5FBF4",
  g200: "#C0F6E4",
  g300: "#96F0D2",
  g400: "#6CE9C0",
  g500: "#2DE0A5",
  g600: "#1ECB92",
  g700: "#19AC7C",
  g800: "#148660",
  g900: "#106D4F",
  g1000: "#0D5940",
  b100: "#E8F2FF",
  b200: "#D1EBFE",
  b300: "#76B7FC",
  b400: "#549DF9",
  b500: "#156FF5",
  b600: "#095AD2",
  b700: "#10529E",
  b800: "#01336B",
  b900: "#012247"
};

// ../../node_modules/tamagui/dist/esm/createTamagui.mjs
var import_core = require("@tamagui/core");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core.createTamagui : (conf) => {
  const sizeTokenKeys = ["$true"], hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => expectedKeys.every((k) => typeof obj[k] < "u"), "hasKeys"), tamaguiConfig2 = (0, import_core.createTamagui)(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig2.tokensParsed[name];
    if (!tokenSet) throw new Error(`Expected tokens for "${name}" in ${Object.keys(tamaguiConfig2.tokensParsed).join(", ")}`);
    if (!hasKeys(sizeTokenKeys, tokenSet)) throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const expected = Object.keys(tamaguiConfig2.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig2.tokensParsed[name], received = Object.keys(tokenSet);
    if (!received.some((rk) => expected.includes(rk))) throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
  }
  return tamaguiConfig2;
};

// ../../node_modules/tamagui/dist/esm/index.mjs
var import_core2 = require("@tamagui/core");

// ../../packages/fuselage/src/themes/light.ts
var lightTheme = {
  // --- Surface tokens (12) ---
  surfaceLight: colors_default.white,
  surfaceTint: colors_default.n100,
  surfaceRoom: colors_default.white,
  surfaceNeutral: colors_default.n400,
  surfaceDisabled: colors_default.n100,
  surfaceHover: colors_default.n200,
  surfaceSelected: colors_default.n450,
  surfaceDark: colors_default.n900,
  surfaceFeatured: colors_default.p700,
  surfaceFeaturedHover: colors_default.p800,
  surfaceSidebar: colors_default.n400,
  surfaceOverlay: "rgba(47, 52, 61, 0.5)",
  // --- Stroke tokens (9) ---
  strokeExtraLight: colors_default.n250,
  strokeLight: colors_default.n500,
  strokeMedium: colors_default.n600,
  strokeDark: colors_default.n700,
  strokeExtraDark: colors_default.n800,
  strokeExtraLightHighlight: colors_default.b200,
  strokeHighlight: colors_default.b500,
  strokeExtraLightError: colors_default.r200,
  strokeError: colors_default.r500,
  // --- Font tokens (11) ---
  fontWhite: colors_default.white,
  fontDisabled: colors_default.n500,
  fontAnnotation: colors_default.n600,
  fontHint: colors_default.n700,
  fontSecondaryInfo: colors_default.n700,
  fontDefault: colors_default.n800,
  fontTitlesLabels: colors_default.n900,
  fontInfo: colors_default.b600,
  fontDanger: colors_default.r600,
  fontPureWhite: colors_default.white,
  fontPureBlack: colors_default.n800,
  // --- Badge tokens (5) ---
  badgeLevel0: colors_default.n400,
  badgeLevel1: colors_default.n700,
  badgeLevel2: colors_default.b500,
  badgeLevel3: colors_default.o500,
  badgeLevel4: colors_default.r500,
  // --- Status background tokens (8) ---
  statusBgInfo: colors_default.b200,
  statusBgSuccess: colors_default.g200,
  statusBgDanger: colors_default.r200,
  statusBgWarning: colors_default.y200,
  statusBgWarning2: colors_default.y100,
  statusBgService1: colors_default.o200,
  statusBgService2: colors_default.p200,
  statusBgService3: colors_default.p700,
  // --- Status font tokens (8) ---
  statusFontOnInfo: colors_default.b600,
  statusFontOnSuccess: colors_default.g800,
  statusFontOnDanger: colors_default.r800,
  statusFontOnWarning: colors_default.y900,
  statusFontOnWarning2: colors_default.n800,
  statusFontOnService1: colors_default.o800,
  statusFontOnService2: colors_default.p600,
  statusFontOnService3: colors_default.white,
  // --- Shadow tokens (6) ---
  shadowHighlight: colors_default.b200,
  shadowDanger: colors_default.r100,
  shadowElevationBorder: colors_default.n250,
  shadowElevation1: "rgba(47, 52, 61, 0.1)",
  shadowElevation2x: "rgba(47, 52, 61, 0.08)",
  shadowElevation2y: "rgba(47, 52, 61, 0.12)",
  // --- Button Primary (7) ---
  buttonPrimaryBg: colors_default.b500,
  buttonPrimaryHoverBg: colors_default.b600,
  buttonPrimaryPressBg: colors_default.b700,
  buttonPrimaryFocusBg: colors_default.b500,
  buttonPrimaryDisabledBg: colors_default.b200,
  buttonPrimaryColor: colors_default.white,
  buttonPrimaryDisabledColor: colors_default.white,
  // --- Button Secondary (7) ---
  buttonSecondaryBg: colors_default.n400,
  buttonSecondaryHoverBg: colors_default.n500,
  buttonSecondaryPressBg: colors_default.n600,
  buttonSecondaryFocusBg: colors_default.n400,
  buttonSecondaryDisabledBg: colors_default.n300,
  buttonSecondaryColor: colors_default.n900,
  buttonSecondaryDisabledColor: colors_default.n500,
  // --- Button Danger (7) ---
  buttonDangerBg: colors_default.r500,
  buttonDangerHoverBg: colors_default.r600,
  buttonDangerPressBg: colors_default.r700,
  buttonDangerFocusBg: colors_default.r500,
  buttonDangerDisabledBg: colors_default.r200,
  buttonDangerColor: colors_default.white,
  buttonDangerDisabledColor: colors_default.white,
  // --- Button Secondary Danger (7) ---
  buttonSecondaryDangerBg: colors_default.n400,
  buttonSecondaryDangerHoverBg: colors_default.n500,
  buttonSecondaryDangerPressBg: colors_default.n600,
  buttonSecondaryDangerFocusBg: colors_default.n400,
  buttonSecondaryDangerDisabledBg: colors_default.n300,
  buttonSecondaryDangerColor: colors_default.r700,
  buttonSecondaryDangerDisabledColor: colors_default.r300,
  // --- Button Success (7) ---
  buttonSuccessBg: colors_default.g800,
  buttonSuccessHoverBg: colors_default.g900,
  buttonSuccessPressBg: colors_default.g1000,
  buttonSuccessFocusBg: colors_default.g800,
  buttonSuccessDisabledBg: colors_default.g200,
  buttonSuccessColor: colors_default.white,
  buttonSuccessDisabledColor: colors_default.white,
  // --- Button Warning (7) — uses yellow(400/500/600) not y600/y700/y800 ---
  buttonWarningBg: colors_default.y400,
  // warning-default = yellow(400)
  buttonWarningHoverBg: colors_default.y500,
  // warning-hover = yellow(500)
  buttonWarningPressBg: colors_default.y600,
  // warning-press = yellow(600)
  buttonWarningFocusBg: colors_default.y400,
  // warning-focus = yellow(400)
  buttonWarningDisabledBg: colors_default.y200,
  buttonWarningColor: colors_default.n900,
  // $-button-fonts on-warning = neutral(900)
  buttonWarningDisabledColor: colors_default.n700,
  // --- Button Secondary Success (7) ---
  buttonSecondarySuccessBg: colors_default.n400,
  buttonSecondarySuccessHoverBg: colors_default.n500,
  buttonSecondarySuccessPressBg: colors_default.n600,
  buttonSecondarySuccessFocusBg: colors_default.n400,
  buttonSecondarySuccessDisabledBg: colors_default.n300,
  buttonSecondarySuccessColor: colors_default.g800,
  buttonSecondarySuccessDisabledColor: colors_default.g200,
  // --- Button Secondary Warning (7) ---
  buttonSecondaryWarningBg: colors_default.n400,
  buttonSecondaryWarningHoverBg: colors_default.n500,
  buttonSecondaryWarningPressBg: colors_default.n600,
  buttonSecondaryWarningFocusBg: colors_default.n400,
  buttonSecondaryWarningDisabledBg: colors_default.n300,
  buttonSecondaryWarningColor: colors_default.y900,
  buttonSecondaryWarningDisabledColor: colors_default.y300,
  // Tag tokens removed — Tag now uses button/surface/status tokens directly
  // --- Tamagui standard tokens (15) ---
  background: colors_default.white,
  backgroundHover: colors_default.n200,
  backgroundPress: colors_default.n300,
  backgroundFocus: colors_default.n200,
  backgroundStrong: colors_default.n100,
  backgroundTransparent: "rgba(0, 0, 0, 0)",
  color: colors_default.n800,
  colorHover: colors_default.n900,
  colorPress: colors_default.n900,
  colorFocus: colors_default.n800,
  borderColor: colors_default.n250,
  borderColorHover: colors_default.n500,
  borderColorPress: colors_default.n600,
  borderColorFocus: colors_default.b500,
  placeholderColor: colors_default.n600
};

// ../../packages/fuselage/src/themes/dark.ts
var darkTheme = {
  // --- Surface tokens (12) ---
  surfaceLight: "#262931",
  surfaceTint: "#1F2329",
  surfaceRoom: "#1F2329",
  surfaceNeutral: "#2D3039",
  surfaceDisabled: "#24272E",
  surfaceHover: "#1A1E23",
  surfaceSelected: "#4C5362",
  surfaceDark: "#E4E7EA",
  surfaceFeatured: "#5F1477",
  surfaceFeaturedHover: "#4A105D",
  surfaceSidebar: "#2F343D",
  surfaceOverlay: "rgba(0, 0, 0, 0.6)",
  // --- Stroke tokens (9) ---
  strokeExtraLight: "#333842",
  strokeLight: "#404754",
  strokeMedium: "#4B5362",
  strokeDark: "#9EA2A8",
  strokeExtraDark: "#CBCED1",
  strokeExtraLightHighlight: colors_default.b200,
  strokeHighlight: "#6292DA",
  strokeExtraLightError: "#F49AA6",
  strokeError: "#BB3E4E",
  // --- Font tokens (11) ---
  fontWhite: "#2F343D",
  fontDisabled: "#60646C",
  fontAnnotation: "#9EA2A8",
  fontHint: "#9EA2A8",
  fontSecondaryInfo: "#9EA2A8",
  fontDefault: "#C1C7D0",
  fontTitlesLabels: "#F2F3F5",
  fontInfo: "#739EDE",
  fontDanger: "#D88892",
  fontPureWhite: colors_default.white,
  fontPureBlack: colors_default.n900,
  // --- Badge tokens (5) ---
  badgeLevel0: "#404754",
  badgeLevel1: "#484C51",
  badgeLevel2: "#2C65BA",
  badgeLevel3: "#955828",
  badgeLevel4: "#B43C4C",
  // --- Status background tokens (8) ---
  statusBgInfo: "#A8C3EB",
  statusBgSuccess: "#C1EBDD",
  statusBgDanger: "#F7CFD4",
  statusBgWarning: "#FEEFBE",
  statusBgWarning2: "#3C3625",
  statusBgService1: "#FCE3CF",
  statusBgService2: "#EDD0F7",
  statusBgService3: "#5F1477",
  // --- Status font tokens (8) ---
  statusFontOnInfo: "#739EDE",
  statusFontOnSuccess: "#58AD90",
  statusFontOnDanger: "#D88892",
  statusFontOnWarning: "#C7AA66",
  statusFontOnWarning2: "#FFFFFF",
  statusFontOnService1: "#CA9163",
  statusFontOnService2: "#C393D2",
  statusFontOnService3: "#FFFFFF",
  // --- Shadow tokens (6) ---
  shadowHighlight: colors_default.b200,
  shadowDanger: colors_default.r100,
  shadowElevationBorder: "#2F343D",
  shadowElevation1: "rgba(9, 9, 9, 0.35)",
  shadowElevation2x: "rgba(9, 9, 9, 0.3)",
  shadowElevation2y: "rgba(9, 9, 9, 0.45)",
  // --- Button Primary (7) ---
  buttonPrimaryBg: "#095AD2",
  buttonPrimaryHoverBg: "#10529E",
  buttonPrimaryPressBg: "#01336B",
  buttonPrimaryFocusBg: "#095AD2",
  buttonPrimaryDisabledBg: "#012247",
  buttonPrimaryColor: "#FFFFFF",
  buttonPrimaryDisabledColor: "#6C727A",
  // --- Button Secondary (7) ---
  buttonSecondaryBg: "#353B45",
  buttonSecondaryHoverBg: "#404754",
  buttonSecondaryPressBg: "#4C5362",
  buttonSecondaryFocusBg: "#353B45",
  buttonSecondaryDisabledBg: "#353B45",
  buttonSecondaryColor: "#E4E7EA",
  buttonSecondaryDisabledColor: "#6C727A",
  // --- Button Danger (7) ---
  buttonDangerBg: "#BB3E4E",
  buttonDangerHoverBg: "#95323F",
  buttonDangerPressBg: "#822C37",
  buttonDangerFocusBg: "#BB3E4E",
  buttonDangerDisabledBg: "#3D2126",
  buttonDangerColor: "#FFFFFF",
  buttonDangerDisabledColor: "#757575",
  // --- Button Secondary Danger (7) ---
  buttonSecondaryDangerBg: "#353B45",
  buttonSecondaryDangerHoverBg: "#404754",
  buttonSecondaryDangerPressBg: "#4C5362",
  buttonSecondaryDangerFocusBg: "#353B45",
  buttonSecondaryDangerDisabledBg: "#353B45",
  buttonSecondaryDangerColor: "#FFC1C9",
  buttonSecondaryDangerDisabledColor: "#6B0513",
  // --- Button Success (7) ---
  buttonSuccessBg: "#1D7256",
  buttonSuccessHoverBg: "#175943",
  buttonSuccessPressBg: "#134937",
  buttonSuccessFocusBg: "#1D7256",
  buttonSuccessDisabledBg: "#1E4B40",
  buttonSuccessColor: "#FFFFFF",
  buttonSuccessDisabledColor: "#757575",
  // --- Button Warning (7) ---
  buttonWarningBg: "#C7AA66",
  buttonWarningHoverBg: "#A8903E",
  buttonWarningPressBg: "#8E7A35",
  buttonWarningFocusBg: "#C7AA66",
  buttonWarningDisabledBg: "#3C3625",
  buttonWarningColor: "#1F2329",
  buttonWarningDisabledColor: "#6C727A",
  // --- Button Secondary Success (7) ---
  buttonSecondarySuccessBg: "#353B45",
  buttonSecondarySuccessHoverBg: "#404754",
  buttonSecondarySuccessPressBg: "#4C5362",
  buttonSecondarySuccessFocusBg: "#353B45",
  buttonSecondarySuccessDisabledBg: "#353B45",
  buttonSecondarySuccessColor: "#58AD90",
  buttonSecondarySuccessDisabledColor: "#1E4B40",
  // --- Button Secondary Warning (7) ---
  buttonSecondaryWarningBg: "#353B45",
  buttonSecondaryWarningHoverBg: "#404754",
  buttonSecondaryWarningPressBg: "#4C5362",
  buttonSecondaryWarningFocusBg: "#353B45",
  buttonSecondaryWarningDisabledBg: "#353B45",
  buttonSecondaryWarningColor: "#C7AA66",
  buttonSecondaryWarningDisabledColor: "#3C3625",
  // Tag tokens removed — Tag now uses button/surface/status tokens directly
  tagDisabledBg: "#2D3039",
  // --- Tamagui standard tokens (15) ---
  background: "#1F2329",
  backgroundHover: "#1A1E23",
  backgroundPress: "#262931",
  backgroundFocus: "#1A1E23",
  backgroundStrong: "#262931",
  backgroundTransparent: "rgba(0, 0, 0, 0)",
  color: "#C1C7D0",
  colorHover: "#F2F3F5",
  colorPress: "#F2F3F5",
  colorFocus: "#C1C7D0",
  borderColor: "#333842",
  borderColorHover: "#404754",
  borderColorPress: "#4B5362",
  borderColorFocus: "#6292DA",
  placeholderColor: "#60646C"
};

// ../../packages/fuselage/src/themes/highContrast.ts
var highContrastTheme = {
  // --- Surface tokens (12) ---
  surfaceLight: colors_default.white,
  surfaceTint: colors_default.n100,
  surfaceRoom: colors_default.white,
  surfaceNeutral: colors_default.n400,
  surfaceDisabled: colors_default.n100,
  surfaceHover: colors_default.n200,
  surfaceSelected: colors_default.n450,
  surfaceDark: colors_default.n900,
  surfaceFeatured: colors_default.p700,
  surfaceFeaturedHover: colors_default.p800,
  surfaceSidebar: colors_default.n400,
  surfaceOverlay: "rgba(47, 52, 61, 0.5)",
  // --- Stroke tokens (9) ---
  strokeExtraLight: colors_default.n250,
  strokeLight: colors_default.n500,
  strokeMedium: colors_default.n600,
  strokeDark: colors_default.n700,
  strokeExtraDark: colors_default.n800,
  strokeExtraLightHighlight: colors_default.b200,
  strokeHighlight: colors_default.b500,
  strokeExtraLightError: colors_default.r200,
  strokeError: colors_default.r500,
  // --- Font tokens (11) ---
  fontWhite: colors_default.white,
  fontDisabled: colors_default.n500,
  fontAnnotation: colors_default.n900,
  fontHint: colors_default.n900,
  fontSecondaryInfo: colors_default.n900,
  fontDefault: colors_default.n900,
  fontTitlesLabels: colors_default.n900,
  fontInfo: colors_default.b800,
  fontDanger: colors_default.r800,
  fontPureWhite: colors_default.white,
  fontPureBlack: colors_default.n900,
  // --- Badge tokens (5) ---
  badgeLevel0: colors_default.n400,
  badgeLevel1: colors_default.n800,
  badgeLevel2: colors_default.b700,
  badgeLevel3: colors_default.o900,
  badgeLevel4: colors_default.r800,
  // --- Status background tokens (8) ---
  statusBgInfo: colors_default.b200,
  statusBgSuccess: colors_default.g200,
  statusBgDanger: colors_default.r200,
  statusBgWarning: colors_default.y200,
  statusBgWarning2: colors_default.y100,
  statusBgService1: colors_default.o200,
  statusBgService2: colors_default.p200,
  statusBgService3: colors_default.p700,
  // --- Status font tokens (8) ---
  statusFontOnInfo: colors_default.b700,
  statusFontOnSuccess: colors_default.g1000,
  statusFontOnDanger: colors_default.r1000,
  statusFontOnWarning: colors_default.y1000,
  statusFontOnWarning2: colors_default.n800,
  statusFontOnService1: colors_default.o1000,
  statusFontOnService2: colors_default.p600,
  statusFontOnService3: colors_default.white,
  // --- Shadow tokens (6) ---
  shadowHighlight: colors_default.b200,
  shadowDanger: colors_default.r100,
  shadowElevationBorder: colors_default.n250,
  shadowElevation1: "rgba(47, 52, 61, 0.1)",
  shadowElevation2x: "rgba(47, 52, 61, 0.08)",
  shadowElevation2y: "rgba(47, 52, 61, 0.12)",
  // --- Button Primary (7) ---
  buttonPrimaryBg: colors_default.b700,
  buttonPrimaryHoverBg: colors_default.b800,
  buttonPrimaryPressBg: colors_default.b900,
  buttonPrimaryFocusBg: colors_default.b700,
  buttonPrimaryDisabledBg: colors_default.b200,
  buttonPrimaryColor: colors_default.white,
  buttonPrimaryDisabledColor: colors_default.white,
  // --- Button Secondary (7) ---
  buttonSecondaryBg: colors_default.n400,
  buttonSecondaryHoverBg: colors_default.n500,
  buttonSecondaryPressBg: colors_default.n600,
  buttonSecondaryFocusBg: colors_default.n400,
  buttonSecondaryDisabledBg: colors_default.n300,
  buttonSecondaryColor: colors_default.n900,
  buttonSecondaryDisabledColor: colors_default.n500,
  // --- Button Danger (7) ---
  buttonDangerBg: colors_default.r800,
  buttonDangerHoverBg: colors_default.r900,
  buttonDangerPressBg: colors_default.r900,
  buttonDangerFocusBg: colors_default.r800,
  buttonDangerDisabledBg: colors_default.r200,
  buttonDangerColor: colors_default.white,
  buttonDangerDisabledColor: colors_default.white,
  // --- Button Secondary Danger (7) ---
  buttonSecondaryDangerBg: colors_default.n400,
  buttonSecondaryDangerHoverBg: colors_default.n500,
  buttonSecondaryDangerPressBg: colors_default.n600,
  buttonSecondaryDangerFocusBg: colors_default.n400,
  buttonSecondaryDangerDisabledBg: colors_default.n300,
  buttonSecondaryDangerColor: colors_default.r900,
  buttonSecondaryDangerDisabledColor: colors_default.r300,
  // --- Button Success (7) ---
  buttonSuccessBg: colors_default.g500,
  buttonSuccessHoverBg: colors_default.g600,
  buttonSuccessPressBg: colors_default.g700,
  buttonSuccessFocusBg: colors_default.g500,
  buttonSuccessDisabledBg: colors_default.g200,
  buttonSuccessColor: colors_default.n900,
  buttonSuccessDisabledColor: colors_default.white,
  // --- Button Warning (7) ---
  buttonWarningBg: colors_default.y700,
  buttonWarningHoverBg: colors_default.y800,
  buttonWarningPressBg: colors_default.y900,
  buttonWarningFocusBg: colors_default.y700,
  buttonWarningDisabledBg: colors_default.y200,
  buttonWarningColor: colors_default.n900,
  buttonWarningDisabledColor: colors_default.n700,
  // --- Button Secondary Success (7) ---
  buttonSecondarySuccessBg: colors_default.n400,
  buttonSecondarySuccessHoverBg: colors_default.n500,
  buttonSecondarySuccessPressBg: colors_default.n600,
  buttonSecondarySuccessFocusBg: colors_default.n400,
  buttonSecondarySuccessDisabledBg: colors_default.n300,
  buttonSecondarySuccessColor: colors_default.g1000,
  buttonSecondarySuccessDisabledColor: colors_default.g200,
  // --- Button Secondary Warning (7) ---
  buttonSecondaryWarningBg: colors_default.n400,
  buttonSecondaryWarningHoverBg: colors_default.n500,
  buttonSecondaryWarningPressBg: colors_default.n600,
  buttonSecondaryWarningFocusBg: colors_default.n400,
  buttonSecondaryWarningDisabledBg: colors_default.n300,
  buttonSecondaryWarningColor: colors_default.y1000,
  buttonSecondaryWarningDisabledColor: colors_default.y300,
  // Tag tokens removed — Tag now uses button/surface/status tokens directly
  // --- Tamagui standard tokens (15) ---
  background: colors_default.white,
  backgroundHover: colors_default.n200,
  backgroundPress: colors_default.n300,
  backgroundFocus: colors_default.n200,
  backgroundStrong: colors_default.n100,
  backgroundTransparent: "rgba(0, 0, 0, 0)",
  color: colors_default.n900,
  colorHover: colors_default.n900,
  colorPress: colors_default.n900,
  colorFocus: colors_default.n900,
  borderColor: colors_default.n250,
  borderColorHover: colors_default.n500,
  borderColorPress: colors_default.n600,
  borderColorFocus: colors_default.b500,
  placeholderColor: colors_default.n600
};

// ../../packages/fuselage/src/themes/buttonSubThemes.ts
var BUTTON_VARIANTS = [
  "secondary",
  "primary",
  "danger",
  "warning",
  "success",
  "secondaryDanger",
  "secondaryWarning",
  "secondarySuccess"
];
var FOCUS_SHADOW = {
  secondary: "0 0 0 2px var(--shadowHighlight)",
  primary: "0 0 0 2px var(--shadowHighlight)",
  danger: "0 0 0 2px var(--strokeExtraLightError)",
  warning: "0 0 0 2px var(--shadowHighlight)",
  success: "0 0 0 2px var(--shadowHighlight)",
  secondaryDanger: "0 0 0 2px var(--strokeExtraLightError)",
  secondaryWarning: "0 0 0 2px var(--shadowHighlight)",
  secondarySuccess: "0 0 0 2px var(--shadowHighlight)"
};
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
__name(capitalize, "capitalize");
function createButtonSubThemes(baseTheme) {
  const subThemes = {};
  for (const variant of BUTTON_VARIANTS) {
    const cap = capitalize(variant);
    const bg = baseTheme[`button${cap}Bg`];
    const hoverBg = baseTheme[`button${cap}HoverBg`];
    const pressBg = baseTheme[`button${cap}PressBg`];
    const focusBg = baseTheme[`button${cap}FocusBg`];
    const disabledBg = baseTheme[`button${cap}DisabledBg`];
    const color = baseTheme[`button${cap}Color`];
    const disabledColor = baseTheme[`button${cap}DisabledColor`];
    if (!bg) continue;
    subThemes[`Button_${variant}`] = {
      // Tamagui standard theme keys
      background: bg,
      backgroundHover: hoverBg || bg,
      backgroundPress: pressBg || bg,
      backgroundFocus: focusBg || bg,
      backgroundDisabled: disabledBg || bg,
      color: color || baseTheme.color || "#000",
      colorDisabled: disabledColor || color || baseTheme.color || "#000",
      // Border = background for buttons
      borderColor: bg,
      borderColorHover: hoverBg || bg,
      borderColorPress: pressBg || bg,
      borderColorFocus: baseTheme.strokeExtraDark || "#000",
      borderColorDisabled: disabledBg || bg,
      // Focus shadow
      shadowColor: FOCUS_SHADOW[variant] || "0 0 0 2px var(--shadowHighlight)"
    };
  }
  return subThemes;
}
__name(createButtonSubThemes, "createButtonSubThemes");

// ../../packages/fuselage/src/tamagui.config.ts
var space = {
  x0: 0,
  x1: 1,
  x2: 2,
  x4: 4,
  x6: 6,
  x8: 8,
  x10: 10,
  x12: 12,
  x14: 14,
  x16: 16,
  x18: 18,
  x20: 20,
  x24: 24,
  x28: 28,
  x32: 32,
  x36: 36,
  x40: 40,
  x44: 44,
  x48: 48,
  x52: 52,
  x56: 56,
  x60: 60,
  x64: 64,
  x68: 68,
  x72: 72,
  x76: 76,
  x80: 80,
  x84: 84,
  x88: 88,
  x92: 92,
  x96: 96,
  x100: 100,
  x104: 104,
  x108: 108,
  x112: 112,
  x116: 116,
  x120: 120,
  x124: 124,
  x128: 128,
  x132: 132,
  x136: 136,
  x140: 140,
  x144: 144,
  x148: 148,
  x152: 152,
  x156: 156,
  x160: 160,
  x164: 164,
  x168: 168,
  x172: 172,
  x176: 176,
  x180: 180,
  x184: 184,
  x188: 188,
  x192: 192,
  x196: 196,
  x200: 200,
  x204: 204,
  x208: 208,
  x212: 212,
  x216: 216,
  x220: 220,
  x224: 224,
  x228: 228,
  x232: 232,
  x236: 236,
  x240: 240,
  x244: 244,
  x248: 248,
  x252: 252,
  x256: 256,
  x260: 260,
  x264: 264,
  x268: 268,
  x272: 272,
  x276: 276,
  x280: 280,
  x284: 284,
  x288: 288,
  x292: 292,
  x296: 296,
  x300: 300,
  x304: 304,
  x308: 308,
  x312: 312,
  x316: 316,
  x320: 320,
  x324: 324,
  x328: 328,
  x332: 332,
  x336: 336,
  x340: 340,
  x344: 344,
  x348: 348,
  x352: 352,
  x356: 356,
  x360: 360,
  x364: 364,
  x368: 368,
  true: 16
};
var size = {
  ...space,
  none: 0,
  full: "100%",
  sw: "100vw",
  sh: "100vh"
};
var radius = {
  none: 0,
  x2: 2,
  x4: 4,
  x8: 8,
  x16: 16,
  full: 9999,
  true: 4
};
var zIndex = {
  x0: 0,
  x1: 1,
  x2: 2,
  x10: 10,
  x100: 100
};
var tokens = (0, import_core2.createTokens)({
  color: {
    white: colors_default.white,
    n100: colors_default.n100,
    n200: colors_default.n200,
    n250: colors_default.n250,
    n300: colors_default.n300,
    n400: colors_default.n400,
    n450: colors_default.n450,
    n500: colors_default.n500,
    n600: colors_default.n600,
    n700: colors_default.n700,
    n800: colors_default.n800,
    n900: colors_default.n900,
    r100: colors_default.r100,
    r200: colors_default.r200,
    r300: colors_default.r300,
    r400: colors_default.r400,
    r500: colors_default.r500,
    r600: colors_default.r600,
    r700: colors_default.r700,
    r800: colors_default.r800,
    r900: colors_default.r900,
    r1000: colors_default.r1000,
    o100: colors_default.o100,
    o200: colors_default.o200,
    o300: colors_default.o300,
    o400: colors_default.o400,
    o500: colors_default.o500,
    o600: colors_default.o600,
    o700: colors_default.o700,
    o800: colors_default.o800,
    o900: colors_default.o900,
    o1000: colors_default.o1000,
    p100: colors_default.p100,
    p200: colors_default.p200,
    p300: colors_default.p300,
    p400: colors_default.p400,
    p500: colors_default.p500,
    p600: colors_default.p600,
    p700: colors_default.p700,
    p800: colors_default.p800,
    p900: colors_default.p900,
    y100: colors_default.y100,
    y200: colors_default.y200,
    y300: colors_default.y300,
    y400: colors_default.y400,
    y500: colors_default.y500,
    y600: colors_default.y600,
    y700: colors_default.y700,
    y800: colors_default.y800,
    y900: colors_default.y900,
    y1000: colors_default.y1000,
    g100: colors_default.g100,
    g200: colors_default.g200,
    g300: colors_default.g300,
    g400: colors_default.g400,
    g500: colors_default.g500,
    g600: colors_default.g600,
    g700: colors_default.g700,
    g800: colors_default.g800,
    g900: colors_default.g900,
    g1000: colors_default.g1000,
    b100: colors_default.b100,
    b200: colors_default.b200,
    b300: colors_default.b300,
    b400: colors_default.b400,
    b500: colors_default.b500,
    b600: colors_default.b600,
    b700: colors_default.b700,
    b800: colors_default.b800,
    b900: colors_default.b900
  },
  space,
  size,
  radius,
  zIndex
});
var sansFontFamily = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Meiryo UI", Arial, sans-serif';
var monoFontFamily = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
var fontSizes = {
  hero: 48,
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 14,
  p1: 16,
  p1m: 16,
  p1b: 16,
  p2: 14,
  p2m: 14,
  p2b: 14,
  c1: 12,
  c2: 12,
  micro: 10
};
var fontLineHeights = {
  hero: 64,
  h1: 40,
  h2: 32,
  h3: 28,
  h4: 24,
  h5: 20,
  p1: 24,
  p1m: 24,
  p1b: 24,
  p2: 20,
  p2m: 20,
  p2b: 20,
  c1: 16,
  c2: 16,
  micro: 12
};
var fontWeights = {
  hero: "800",
  h1: "700",
  h2: "700",
  h3: "700",
  h4: "700",
  h5: "700",
  p1: "400",
  p1m: "500",
  p1b: "700",
  p2: "400",
  p2m: "500",
  p2b: "700",
  c1: "400",
  c2: "700",
  micro: "700"
};
var fontLetterSpacings = {
  hero: 0,
  h1: 0,
  h2: 0,
  h3: 0,
  h4: 0,
  h5: 0,
  p1: 0,
  p1m: 0,
  p1b: 0,
  p2: 0,
  p2m: 0,
  p2b: 0,
  c1: 0,
  c2: 0,
  micro: 0
};
var sansFont = (0, import_core2.createFont)({
  family: sansFontFamily,
  size: fontSizes,
  lineHeight: fontLineHeights,
  weight: fontWeights,
  letterSpacing: fontLetterSpacings,
  face: {
    400: { normal: "Inter" },
    500: { normal: "Inter" },
    700: { normal: "Inter" },
    800: { normal: "Inter" }
  }
});
var monoFont = (0, import_core2.createFont)({
  family: monoFontFamily,
  size: fontSizes,
  lineHeight: fontLineHeights,
  weight: fontWeights,
  letterSpacing: fontLetterSpacings,
  face: {
    400: { normal: "Menlo" },
    500: { normal: "Menlo" },
    700: { normal: "Menlo" },
    800: { normal: "Menlo" }
  }
});
var media = {
  xs: { maxWidth: 439 },
  gtXs: { minWidth: 440 },
  sm: { maxWidth: 767 },
  gtSm: { minWidth: 768 },
  md: { maxWidth: 1023 },
  gtMd: { minWidth: 1024 },
  lg: { maxWidth: 1439 },
  gtLg: { minWidth: 1440 },
  xl: { maxWidth: 1919 },
  gtXl: { minWidth: 1920 },
  xxl: { maxWidth: 99999 },
  gtXxl: { minWidth: 1e5 }
};
var tamaguiConfig = createTamagui({
  tokens,
  themes: {
    light: lightTheme,
    dark: darkTheme,
    "high-contrast": highContrastTheme,
    // Button sub-themes: allows <Theme name="Button_primary"> to control colors
    ...Object.fromEntries(
      Object.entries(createButtonSubThemes(lightTheme)).map(([k, v]) => [`light_${k}`, v])
    ),
    ...Object.fromEntries(
      Object.entries(createButtonSubThemes(darkTheme)).map(([k, v]) => [`dark_${k}`, v])
    ),
    ...Object.fromEntries(
      Object.entries(createButtonSubThemes(highContrastTheme)).map(([k, v]) => [`high-contrast_${k}`, v])
    )
  },
  fonts: {
    body: sansFont,
    heading: sansFont,
    mono: monoFont
  },
  media,
  defaultFont: "body",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tamaguiConfig,
  tokens
});
