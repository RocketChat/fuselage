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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);

// ../core/src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button2,
  ButtonContext: () => ButtonContext,
  ButtonFrame: () => ButtonFrame,
  ButtonText: () => ButtonText,
  MyComponent: () => MyComponent,
  config: () => config
});

// ../../node_modules/@tamagui/shorthands/dist/esm/index.mjs
var shorthands = {
  // web-only
  ussel: "userSelect",
  cur: "cursor",
  // tamagui
  pe: "pointerEvents",
  // text
  col: "color",
  ff: "fontFamily",
  fos: "fontSize",
  fost: "fontStyle",
  fow: "fontWeight",
  ls: "letterSpacing",
  lh: "lineHeight",
  ta: "textAlign",
  tt: "textTransform",
  ww: "wordWrap",
  // view
  ac: "alignContent",
  ai: "alignItems",
  als: "alignSelf",
  b: "bottom",
  bc: "backgroundColor",
  bg: "backgroundColor",
  bbc: "borderBottomColor",
  bblr: "borderBottomLeftRadius",
  bbrr: "borderBottomRightRadius",
  bbw: "borderBottomWidth",
  blc: "borderLeftColor",
  blw: "borderLeftWidth",
  boc: "borderColor",
  br: "borderRadius",
  bs: "borderStyle",
  brw: "borderRightWidth",
  brc: "borderRightColor",
  btc: "borderTopColor",
  btlr: "borderTopLeftRadius",
  btrr: "borderTopRightRadius",
  btw: "borderTopWidth",
  bw: "borderWidth",
  dsp: "display",
  f: "flex",
  fb: "flexBasis",
  fd: "flexDirection",
  fg: "flexGrow",
  fs: "flexShrink",
  fw: "flexWrap",
  h: "height",
  jc: "justifyContent",
  l: "left",
  m: "margin",
  mah: "maxHeight",
  maw: "maxWidth",
  mb: "marginBottom",
  mih: "minHeight",
  miw: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  o: "opacity",
  ov: "overflow",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pos: "position",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  shac: "shadowColor",
  shar: "shadowRadius",
  shof: "shadowOffset",
  shop: "shadowOpacity",
  t: "top",
  w: "width",
  zi: "zIndex"
};
shorthands.bls = "borderLeftStyle";
shorthands.brs = "borderRightStyle";
shorthands.bts = "borderTopStyle";
shorthands.bbs = "borderBottomStyle";
shorthands.bxs = "boxSizing";
shorthands.bxsh = "boxShadow";
shorthands.ox = "overflowX";
shorthands.oy = "overflowY";

// ../core/src/tamagui.config.ts
var import_core3 = require("@tamagui/core");

// ../core/src/tokens/tokens.ts
var import_core = require("@tamagui/core");

// ../fuselage-tokens/colors.json
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

// ../core/src/tokens/tokens.ts
var tokens = (0, import_core.createTokens)({
  color: colors_default,
  size: {
    sm: 4,
    md: 8,
    lg: 16
  },
  radius: {
    default: 4
  },
  space: {
    hero: 64
  }
});

// ../core/src/tokens/themes.ts
var themes = {
  light: {
    "surface_light": tokens.color.white,
    "surface_tint": tokens.color.n100,
    "surface_room": tokens.color.white,
    "surface_neutral": tokens.color.n400,
    "surface_disabled": tokens.color.n100,
    "surface_hover": tokens.color.n200,
    "surface_selected": tokens.color.n450,
    "surface_dark": tokens.color.n800,
    "surface_featured": tokens.color.p700,
    "surface_featured-hover": tokens.color.p800,
    "surface_overlay": tokens.color.n800,
    "surface_transparent": "transparent",
    "surface_sidebar": tokens.color.n400
  },
  light_Button: {
    primary_default: tokens.color.b500,
    primary_hover: tokens.color.b600,
    primary_press: tokens.color.b700,
    primary_focus: tokens.color.b500,
    primary_keyfocus: tokens.color.b500,
    primary_disabled: tokens.color.b200,
    secondary_default: tokens.color.n400,
    secondary_hover: tokens.color.n500,
    secondary_press: tokens.color.n600,
    secondary_focus: tokens.color.n400,
    secondary_keyfocus: tokens.color.n400,
    secondary_disabled: tokens.color.n300,
    danger_default: tokens.color.r500,
    danger_hover: tokens.color.r600,
    danger_press: tokens.color.r700,
    danger_focus: tokens.color.r500,
    danger_keyfocus: tokens.color.r500,
    danger_disabled: tokens.color.r200,
    secondary_danger_default: tokens.color.n400,
    secondary_danger_hover: tokens.color.n500,
    secondary_danger_press: tokens.color.n600,
    secondary_danger_focus: tokens.color.n400,
    secondary_danger_keyfocus: tokens.color.n400,
    secondary_danger_disabled: tokens.color.n300,
    warning_default: tokens.color.y400,
    warning_hover: tokens.color.y500,
    warning_press: tokens.color.y600,
    warning_focus: tokens.color.y400,
    warning_keyfocus: tokens.color.y400,
    warning_disabled: tokens.color.y200,
    secondary_warning_default: tokens.color.n400,
    secondary_warning_hover: tokens.color.n500,
    secondary_warning_press: tokens.color.n600,
    secondary_warning_focus: tokens.color.n400,
    secondary_warning_keyfocus: tokens.color.n400,
    success_default: tokens.color.g800,
    success_hover: tokens.color.g900,
    success_press: tokens.color.g700,
    success_focus: tokens.color.g1000,
    success_keyfocus: tokens.color.g500,
    success_disabled: tokens.color.g200,
    secondary_success_default: tokens.color.n400,
    secondary_success_hover: tokens.color.n500,
    secondary_success_press: tokens.color.n600,
    secondary_success_focus: tokens.color.n400,
    secondary_success_keyfocus: tokens.color.n400,
    secondary_success_disabled: tokens.color.n300,
    on_secondary_danger: tokens.color.r700,
    on_secondary_warning: tokens.color.y900,
    on_secondary_success: tokens.color.g800,
    "backgroundPrimaryDefault": tokens.color.b500,
    "backgroundPrimaryHover": tokens.color.b600,
    "backgroundPrimaryPress": tokens.color.b700,
    "backgroundPrimaryFocus": tokens.color.b500,
    "backgroundPrimaryKeyfocus": tokens.color.b500,
    "backgroundPrimaryDisabled": tokens.color.b200,
    "fontOnPrimary": tokens.color.white,
    "fontOnPrimaryDisabled": tokens.color.white,
    "backgroundSecondaryDefault": tokens.color.n400,
    "backgroundSecondaryHover": tokens.color.n500,
    "backgroundSecondaryPress": tokens.color.n600,
    "backgroundSecondaryFocus": tokens.color.n400,
    "backgroundSecondaryKeyfocus": tokens.color.n400,
    "backgroundSecondaryDisabled": tokens.color.n300,
    "fontOnSecondary": tokens.color.n900,
    "fontOnSecondaryDisabled": tokens.color.n500,
    "backgroundSecondaryDangerDefault": tokens.color.n400,
    "backgroundSecondaryDangerHover": tokens.color.n500,
    "backgroundSecondaryDangerPress": tokens.color.n600,
    "backgroundSecondaryDangerFocus": tokens.color.n400,
    "backgroundSecondaryDangerKeyfocus": tokens.color.n400,
    "backgroundSecondaryDangerDisabled": tokens.color.n300,
    "fontOnSecondaryDanger": tokens.color.r700,
    "onSecondaryDangerDisabled": tokens.color.r300,
    "backgroundDangerDefault": tokens.color.r500,
    "backgroundDangerHover": tokens.color.r600,
    "backgroundDangerPress": tokens.color.r700,
    "backgroundDangerFocus": tokens.color.r500,
    "backgroundDangerKeyfocus": tokens.color.r500,
    "backgroundDangerDisabled": tokens.color.r200,
    "fontOnDanger": tokens.color.white,
    "fontOnDangerDisabled": tokens.color.white,
    "backgroundWarningDefault": tokens.color.y400,
    "backgroundWarningHover": tokens.color.y500,
    "backgroundWarningPress": tokens.color.y600,
    "backgroundWarningFocus": tokens.color.y400,
    "backgroundWarningKeyfocus": tokens.color.y400,
    "backgroundWarningDisabled": tokens.color.y200,
    "fontOnWarning": tokens.color.n900,
    "fontOnWarningDisabled": tokens.color.n600,
    "backgroundSecondaryWarningDefault": tokens.color.n400,
    "backgroundSecondaryWarningHover": tokens.color.n500,
    "backgroundSecondaryWarningPress": tokens.color.n600,
    "backgroundSecondaryWarningFocus": tokens.color.n400,
    "backgroundSecondaryWarningKeyfocus": tokens.color.n400,
    "backgroundSecondaryWarningDisabled": tokens.color.n300,
    "fontOnSecondaryWarning": tokens.color.y900,
    "fontOnSecondaryWarningDisabled": tokens.color.y600,
    "backgroundSuccessDefault": tokens.color.g800,
    "backgroundSuccessHover": tokens.color.g900,
    "backgroundSuccessPress": tokens.color.g1000,
    "backgroundSuccessFocus": tokens.color.g1000,
    "backgroundSuccessKeyfocus": tokens.color.g500,
    "backgroundSuccessDisabled": tokens.color.g200,
    "fontOnSuccess": tokens.color.white,
    "fontOnSuccessDisabled": tokens.color.white,
    "backgroundSecondarySuccessDefault": tokens.color.n400,
    "backgroundSecondarySuccessHover": tokens.color.n500,
    "backgroundSecondarySuccessPress": tokens.color.n600,
    "backgroundSecondarySuccessFocus": tokens.color.n400,
    "backgroundSecondarySuccessKeyfocus": tokens.color.n400,
    "backgroundSecondarySuccessDisabled": tokens.color.n300,
    "fontOnSecondarySuccess": tokens.color.g900,
    "fontOnSecondarySuccessDisabled": tokens.color.g400,
    "onDisabled": tokens.color.n600
  }
};

// ../core/src/tokens/font.ts
var import_core2 = require("@tamagui/core");
var interFont = (0, import_core2.createFont)({
  family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Meiryo UI", Arial, sans-serif',
  size: {
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
  },
  lineHeight: {
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
  },
  weight: {
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
  },
  letterSpacing: {
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
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    700: { normal: "InterBold", italic: "InterBold-Italic" },
    800: { normal: "InterBold", italic: "InterBold-Italic" },
    900: { normal: "InterBold", italic: "InterBold-Italic" }
  }
});

// ../core/src/tamagui.config.ts
var config = (0, import_core3.createTamagui)({
  fonts: {
    heading: interFont,
    body: interFont
  },
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  themes,
  tokens
});

// ../core/src/index.tsx
__reExport(src_exports, require("@tamagui/core"));

// ../core/src/MyComponent.tsx
var import_core4 = require("@tamagui/core");
var MyComponent = (0, import_core4.styled)(import_core4.Stack, {
  name: "MyComponent",
  backgroundColor: "red",
  variants: {
    blue: {
      true: {
        backgroundColor: "blue"
      }
    }
  }
});

// ../core/src/Button.tsx
var import_web2 = require("@tamagui/core");

// ../core/src/Focusable.tsx
var import_web = require("@tamagui/core");
var Focusable = (0, import_web.styled)(import_web.Stack, {
  name: "Focusable",
  acceptsClassName: true,
  userSelect: "none",
  cursor: "pointer",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "transparent",
  alignItems: "center",
  flexDirection: "row",
  pressStyle: {
    transform: `translateY(1px);`
  },
  focusStyle: {
    shadowColor: "0 0 0 2px var(--rcx-button-primary-focus-shadow-color, var(--rcx-color-shadow-highlight, var(--rcx-color-blue-200, #D1EBFE)))"
  },
  variants: {
    primary: /* @__PURE__ */ __name((value, { props }) => {
      switch (true) {
        case (value && !props.disabled): {
          return {
            backgroundColor: "$backgroundPrimaryDefault",
            borderColor: "$primary_default",
            color: "$fontOnPrimary",
            hoverStyle: {
              backgroundColor: "$backgroundPrimaryHover",
              borderColor: "$primary_hover"
            },
            pressStyle: {
              backgroundColor: "$backgroundPrimaryPress",
              borderColor: "$primary_press"
            },
            focusStyle: {
              backgroundColor: "$backgroundPrimaryFocus",
              borderColor: "$primary_focus"
            }
          };
        }
        case (value && props.disabled): {
          return {
            backgroundColor: "$backgroundPrimaryDisabled",
            borderColor: "$primary_disabled",
            color: "$fontOnPrimaryDisabled"
          };
        }
      }
    }, "primary"),
    secondary: /* @__PURE__ */ __name((value, { props }) => {
      switch (true) {
        case (value && !props.disabled): {
          return {
            backgroundColor: "$backgroundSecondaryDefault",
            borderColor: "$secondary_default",
            color: "$fontOnSecondary",
            hoverStyle: {
              backgroundColor: "$backgroundSecondaryHover",
              borderColor: "$secondary_hover"
            },
            pressStyle: {
              backgroundColor: "$backgroundSecondaryPress",
              borderColor: "$secondary_press"
            },
            focusStyle: {
              backgroundColor: "$backgroundSecondaryFocus",
              borderColor: "$secondary_focus"
            }
          };
        }
        case (value && props.disabled): {
          return {
            backgroundColor: "$backgroundSecondaryDisabled",
            borderColor: "$secondary_disabled",
            color: "$fontOnSecondaryDisabled"
          };
        }
      }
    }, "secondary"),
    danger: /* @__PURE__ */ __name((value, { props }) => {
      switch (true) {
        case (value && !props.secondary): {
          return {
            backgroundColor: "$backgroundDangerDefault",
            borderColor: "$danger_default",
            color: "$fontOnDanger",
            hoverStyle: {
              backgroundColor: "$backgroundDangerHover",
              borderColor: "$danger_hover"
            },
            pressStyle: {
              backgroundColor: "$backgroundDangerPress",
              borderColor: "$danger_press"
            },
            focusStyle: {
              backgroundColor: "$backgroundDangerFocus",
              borderColor: "$danger_focus"
            }
          };
        }
        case (value && props.secondary): {
          return {
            backgroundColor: "$backgroundSecondaryDangerDefault",
            borderColor: "$secondary_danger_default",
            color: "$on_secondary_danger",
            hoverStyle: {
              backgroundColor: "$backgroundSecondaryDangerHover",
              borderColor: "$secondary_danger_hover"
            },
            pressStyle: {
              backgroundColor: "$backgroundSecondaryDangerPress",
              borderColor: "$secondary_danger_press"
            },
            focusStyle: {
              backgroundColor: "$backgroundSecondaryDangerFocus",
              borderColor: "$secondary_danger_focus"
            }
          };
        }
      }
    }, "danger"),
    warning: /* @__PURE__ */ __name((value, { props }) => {
      switch (true) {
        case (value && !props.secondary): {
          return {
            backgroundColor: "$backgroundWarningDefault",
            borderColor: "$warning_default",
            color: "$fontOnWarning",
            hoverStyle: {
              backgroundColor: "$backgroundWarningHover",
              borderColor: "$warning_hover"
            },
            pressStyle: {
              backgroundColor: "$backgroundWarningPress",
              borderColor: "$warning_press"
            },
            focusStyle: {
              backgroundColor: "$backgroundWarningFocus",
              borderColor: "$warning_focus"
            }
          };
        }
        case (value && props.secondary): {
          return {
            backgroundColor: "$backgroundSecondaryWarningDefault",
            borderColor: "$secondary_warning_default",
            color: "$on_secondary_warning",
            hoverStyle: {
              backgroundColor: "$backgroundSecondaryWarningHover",
              borderColor: "$secondary_warning_hover"
            },
            pressStyle: {
              backgroundColor: "$backgroundSecondaryWarningPress",
              borderColor: "$secondary_warning_press"
            },
            focusStyle: {
              backgroundColor: "$backgroundSecondaryWarningFocus",
              borderColor: "$secondary_warning_focus"
            }
          };
        }
      }
    }, "warning"),
    success: /* @__PURE__ */ __name((value, { props }) => {
      switch (true) {
        case (value && !props.secondary): {
          return {
            backgroundColor: "$backgroundSuccessDefault",
            borderColor: "$success_default",
            color: "$fontOnSuccess",
            hoverStyle: {
              backgroundColor: "$backgroundSuccessHover",
              borderColor: "$success_hover"
            },
            pressStyle: {
              backgroundColor: "$backgroundSuccessPress",
              borderColor: "$success_press"
            },
            focusStyle: {
              backgroundColor: "$backgroundSuccessFocus",
              borderColor: "$success_focus"
            }
          };
        }
        case (value && props.secondary): {
          return {
            backgroundColor: "$backgroundSecondarySuccessDefault",
            borderColor: "$secondary_success_default",
            color: "$on_secondary_success",
            hoverStyle: {
              backgroundColor: "$backgroundSecondarySuccessHover",
              borderColor: "$secondary_success_hover"
            },
            pressStyle: {
              backgroundColor: "$backgroundSecondarySuccessPress",
              borderColor: "$secondary_success_press"
            },
            focusStyle: {
              backgroundColor: "$backgroundSecondarySuccessFocus",
              borderColor: "$secondary_success_focus"
            }
          };
        }
      }
    }, "success"),
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
        pointerEvents: "none",
        disabled: true,
        focusable: void 0
      }
    }
  }
});

// ../core/src/SizableText.tsx
var import_core5 = require("@tamagui/core");
var SizableText = (0, import_core5.styled)(import_core5.Text, {
  name: "SizableText",
  fontFamily: "$body",
  variants: {
    fontScale: {
      ":string": /* @__PURE__ */ __name((value) => ({
        fontSize: value,
        lineHeight: value,
        fontWeight: value,
        letterSpacing: value
      }), ":string")
    }
  }
});

// ../core/src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ButtonContext = (0, import_web2.createStyledContext)({
  size: "$lg",
  small: false,
  fontScale: "$hero"
});
var ButtonFrame = (0, import_web2.styled)(Focusable, {
  tag: "button",
  name: "Button",
  context: ButtonContext,
  alignItems: "center",
  borderRadius: "$default",
  flexDirection: "row",
  variants: {
    size: {
      "...size": /* @__PURE__ */ __name((name, { tokens: tokens2 }) => ({
        paddingInline: name === "$sm" ? tokens2.size["$sm"] : tokens2.size["$lg"],
        paddingBlock: name === "$sm" ? tokens2.size["$sm"] : tokens2.size["$md"]
      }), "...size")
    }
  }
});
var ButtonText = (0, import_web2.styled)(SizableText, {
  name: "ButtonText",
  context: ButtonContext,
  userSelect: "none",
  fontScale: "$p2m",
  variants: {
    small: {
      true: {
        fontScale: "$c2"
      }
    }
  }
});
var ButtonComponent = ButtonFrame.styleable(/* @__PURE__ */ __name(function Button({ children, small, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonFrame, { ...props, ref, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonText, { small, children }) });
}, "Button"));
var Button2 = (0, import_web2.withStaticProperties)(ButtonComponent, {
  Props: ButtonContext.Provider,
  Text: ButtonText
});

// tamagui.config.ts
var tamagui_config_default = config;
