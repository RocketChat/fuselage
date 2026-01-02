import { tokens } from "./tokens";


export const themes = {
  light: {
    'surface_light': tokens.color.white,
    'surface_tint': tokens.color.n100,
    'surface_room': tokens.color.white,
    'surface_neutral': tokens.color.n400,
    'surface_disabled': tokens.color.n100,
    'surface_hover': tokens.color.n200,
    'surface_selected': tokens.color.n450,
    'surface_dark': tokens.color.n800,
    'surface_featured': tokens.color.p700,
    'surface_featured-hover': tokens.color.p800,
    'surface_overlay': tokens.color.n800,
    'surface_transparent': 'transparent',
    'surface_sidebar': tokens.color.n400,


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


    "backgroundPrimaryDefault": tokens.color.b500 ,
    "backgroundPrimaryHover": tokens.color.b600 ,
    "backgroundPrimaryPress": tokens.color.b700 ,
    "backgroundPrimaryFocus": tokens.color.b500 ,
    "backgroundPrimaryKeyfocus": tokens.color.b500 ,
    "backgroundPrimaryDisabled": tokens.color.b200 ,
    "fontOnPrimary": tokens.color.white ,
    "fontOnPrimaryDisabled": tokens.color.white ,

    "backgroundSecondaryDefault": tokens.color.n400 ,
    "backgroundSecondaryHover": tokens.color.n500 ,
    "backgroundSecondaryPress": tokens.color.n600 ,
    "backgroundSecondaryFocus": tokens.color.n400 ,
    "backgroundSecondaryKeyfocus": tokens.color.n400 ,
    "backgroundSecondaryDisabled": tokens.color.n300 ,
    "fontOnSecondary": tokens.color.n900 ,
    "fontOnSecondaryDisabled": tokens.color.n500 ,

    "backgroundSecondaryDangerDefault": tokens.color.n400 ,
    "backgroundSecondaryDangerHover": tokens.color.n500 ,
    "backgroundSecondaryDangerPress": tokens.color.n600 ,
    "backgroundSecondaryDangerFocus": tokens.color.n400 ,
    "backgroundSecondaryDangerKeyfocus": tokens.color.n400 ,
    "backgroundSecondaryDangerDisabled": tokens.color.n300 ,
    "fontOnSecondaryDanger": tokens.color.r700 ,
    "onSecondaryDangerDisabled": tokens.color.r300 ,

    "backgroundDangerDefault": tokens.color.r500 ,
    "backgroundDangerHover": tokens.color.r600 ,
    "backgroundDangerPress": tokens.color.r700 ,
    "backgroundDangerFocus": tokens.color.r500 ,
    "backgroundDangerKeyfocus": tokens.color.r500 ,
    "backgroundDangerDisabled": tokens.color.r200 ,
    "fontOnDanger": tokens.color.white ,
    "fontOnDangerDisabled": tokens.color.white ,

    "backgroundWarningDefault": tokens.color.y400 ,
    "backgroundWarningHover": tokens.color.y500 ,
    "backgroundWarningPress": tokens.color.y600 ,
    "backgroundWarningFocus": tokens.color.y400 ,
    "backgroundWarningKeyfocus": tokens.color.y400 ,
    "backgroundWarningDisabled": tokens.color.y200 ,
    "fontOnWarning": tokens.color.n900 ,
    "fontOnWarningDisabled": tokens.color.n600 ,

    "backgroundSecondaryWarningDefault": tokens.color.n400 ,
    "backgroundSecondaryWarningHover": tokens.color.n500 ,
    "backgroundSecondaryWarningPress": tokens.color.n600 ,
    "backgroundSecondaryWarningFocus": tokens.color.n400 ,
    "backgroundSecondaryWarningKeyfocus": tokens.color.n400 ,
    "backgroundSecondaryWarningDisabled": tokens.color.n300 ,
    "fontOnSecondaryWarning": tokens.color.y900 ,
    "fontOnSecondaryWarningDisabled": tokens.color.y600 ,

    "backgroundSuccessDefault": tokens.color.g800 ,
    "backgroundSuccessHover": tokens.color.g900 ,
    "backgroundSuccessPress": tokens.color.g1000 ,
    "backgroundSuccessFocus": tokens.color.g1000 ,
    "backgroundSuccessKeyfocus": tokens.color.g500 ,
    "backgroundSuccessDisabled": tokens.color.g200 ,
    "fontOnSuccess": tokens.color.white ,
    "fontOnSuccessDisabled": tokens.color.white ,

    "backgroundSecondarySuccessDefault": tokens.color.n400 ,
    "backgroundSecondarySuccessHover": tokens.color.n500 ,
    "backgroundSecondarySuccessPress": tokens.color.n600 ,
    "backgroundSecondarySuccessFocus": tokens.color.n400 ,
    "backgroundSecondarySuccessKeyfocus": tokens.color.n400 ,
    "backgroundSecondarySuccessDisabled": tokens.color.n300 ,

    "fontOnSecondarySuccess": tokens.color.g900,
    "fontOnSecondarySuccessDisabled": tokens.color.g400 ,

    "onDisabled": tokens.color.n600
  }
}
