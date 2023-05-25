import tokenColors from '@rocket.chat/fuselage-tokens/colors.json';

import { getPaletteColor } from './getPaletteColor';
import { toCSSColorValue } from './helpers/toCSSValue';

export class Var {
  private name: string;

  private value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }

  toString() {
    return toCSSColorValue(this.name, this.value);
  }

  theme(name: string) {
    return new Var(name, this.toString());
  }
}

const white = new Var('white', '#ffffff');

export let throwErrorOnInvalidToken = false;
export const __setThrowErrorOnInvalidToken__ = (value: boolean) => {
  throwErrorOnInvalidToken = value;
};

export const neutral = {
  n100: new Var('neutral-100', tokenColors.n100),
  n200: new Var('neutral-200', tokenColors.n200),
  n250: new Var('neutral-250', tokenColors.n250),
  n300: new Var('neutral-300', tokenColors.n300),
  n400: new Var('neutral-400', tokenColors.n400),
  n450: new Var('neutral-450', tokenColors.n450),
  n500: new Var('neutral-500', tokenColors.n500),
  n600: new Var('neutral-600', tokenColors.n600),
  n700: new Var('neutral-700', tokenColors.n700),
  n800: new Var('neutral-800', tokenColors.n800),
  n850: new Var('neutral-850', tokenColors.n850),
  n900: new Var('neutral-900', tokenColors.n900),
};

const primary = {
  p100: new Var('primary-100', tokenColors.p100),
  p200: new Var('primary-200', tokenColors.p200),
  p300: new Var('primary-300', tokenColors.p300),
  p400: new Var('primary-400', tokenColors.p400),
  p500: new Var('primary-500', tokenColors.p500),
  p550: new Var('primary-550', tokenColors.p550),
  p600: new Var('primary-600', tokenColors.p600),
  p700: new Var('primary-700', tokenColors.p700),
  p800: new Var('primary-800', tokenColors.p800),
  p900: new Var('primary-900', tokenColors.p900),
};

const info = {
  i100: new Var('info-100', tokenColors.i100),
  i200: new Var('info-200', tokenColors.i200),
  i300: new Var('info-300', tokenColors.i300),
  i400: new Var('info-400', tokenColors.i400),
  i500: new Var('info-500', tokenColors.i500),
  i600: new Var('info-600', tokenColors.i600),
  i700: new Var('info-700', tokenColors.i700),
  i800: new Var('info-800', tokenColors.i800),
  i900: new Var('info-900', tokenColors.i900),
};

const success = {
  s100: new Var('success-100', tokenColors.s100),
  s200: new Var('success-200', tokenColors.s200),
  s300: new Var('success-300', tokenColors.s300),
  s400: new Var('success-400', tokenColors.s400),
  s500: new Var('success-500', tokenColors.s500),
  s600: new Var('success-600', tokenColors.s600),
  s700: new Var('success-700', tokenColors.s700),
  s800: new Var('success-800', tokenColors.s800),
  s900: new Var('success-900', tokenColors.s900),
};

const warning = {
  w100: new Var('warning-100', tokenColors.w100),
  w150: new Var('warning-150', tokenColors.w150),
  w200: new Var('warning-200', tokenColors.w200),
  w300: new Var('warning-300', tokenColors.w300),
  w400: new Var('warning-400', tokenColors.w400),
  w500: new Var('warning-500', tokenColors.w500),
  w600: new Var('warning-600', tokenColors.w600),
  w700: new Var('warning-700', tokenColors.w700),
  w800: new Var('warning-800', tokenColors.w800),
  w900: new Var('warning-900', tokenColors.w900),
};

const danger = {
  d100: new Var('danger-100', tokenColors.d100),
  d200: new Var('danger-200', tokenColors.d200),
  d300: new Var('danger-300', tokenColors.d300),
  d400: new Var('danger-400', tokenColors.d400),
  d500: new Var('danger-500', tokenColors.d500),
  d550: new Var('danger-550', tokenColors.d550),
  d600: new Var('danger-600', tokenColors.d600),
  d700: new Var('danger-700', tokenColors.d700),
  d800: new Var('danger-800', tokenColors.d800),
  d900: new Var('danger-900', tokenColors.d900),
};

const service1 = {
  100: new Var('service-1-100', tokenColors['s1-100']),
  200: new Var('service-1-200', tokenColors['s1-200']),
  300: new Var('service-1-300', tokenColors['s1-300']),
  400: new Var('service-1-400', tokenColors['s1-400']),
  500: new Var('service-1-500', tokenColors['s1-500']),
  600: new Var('service-1-600', tokenColors['s1-600']),
  700: new Var('service-1-700', tokenColors['s1-700']),
  800: new Var('service-1-800', tokenColors['s1-800']),
  900: new Var('service-1-900', tokenColors['s1-900']),
};

const service2 = {
  100: new Var('service-2-100', tokenColors['s2-100']),
  200: new Var('service-2-200', tokenColors['s2-200']),
  300: new Var('service-2-300', tokenColors['s2-300']),
  400: new Var('service-2-400', tokenColors['s2-400']),
  500: new Var('service-2-500', tokenColors['s2-500']),
  600: new Var('service-2-600', tokenColors['s2-600']),
  700: new Var('service-2-700', tokenColors['s2-700']),
  800: new Var('service-2-800', tokenColors['s2-800']),
  900: new Var('service-2-900', tokenColors['s2-900']),
};

export const surfaceColors = {
  'surface-light': white.theme('surface-light'),
  'surface-tint': neutral.n100.theme('surface-tint'),
  'surface-room': white.theme('surface-room'),
  'surface-neutral': neutral.n400.theme('surface-neutral'),
  'surface-disabled': neutral.n100.theme('surface-disabled'),
  'surface-hover': neutral.n200.theme('surface-hover'),
  'surface-selected': neutral.n450.theme('surface-selected'),
  'surface-dark': neutral.n800.theme('surface-dark'),
  'surface-featured': service2['700'].theme('surface-featured'),
  'surface-featured-hover': service2['800'].theme('surface-featured-hover'),
  'surface-overlay': neutral.n850.theme('surface-overlay'),
  'surface-transparent': 'transparent',
};

type SurfaceColors = keyof typeof surfaceColors;

export const strokeColors = {
  'stroke-extra-light': neutral.n250.theme('stroke-extra-light'),
  'stroke-light': neutral.n500.theme('stroke-light'),
  'stroke-medium': neutral.n600.theme('stroke-medium'),
  'stroke-dark': neutral.n700.theme('stroke-dark'),
  'stroke-extra-dark': neutral.n800.theme('stroke-extra-dark'),
  'stroke-extra-light-highlight': primary.p200.theme(
    'stroke-extra-light-highlight'
  ),
  'stroke-highlight': primary.p500.theme('stroke-highlight'),
  'stroke-extra-light-error': danger.d200.theme('stroke-extra-light-error'),
  'stroke-error': danger.d500.theme('stroke-error'),
};

type StrokeColor = keyof typeof strokeColors;

export const textIconColors = {
  'font-white': white.theme('font-white'),
  'font-disabled': neutral.n500.theme('font-disabled'),
  'font-annotation': neutral.n600.theme('font-annotation'),
  'font-hint': neutral.n700.theme('font-hint'),
  'font-secondary-info': neutral.n700.theme('font-secondary-info'),
  'font-default': neutral.n800.theme('font-default'),
  'font-titles-labels': neutral.n900.theme('font-titles-labels'),
  'font-info': primary.p600.theme('font-info'),
  'font-danger': danger.d600.theme('font-danger'),
  'font-pure-black': neutral.n800.theme('font-pure-black'),
  'font-pure-white': white.theme('font-pure-white'),
};

type TextIconColors = keyof typeof textIconColors;

export const statusBackgroundColors = {
  'status-background-info': info.i200.theme('status-background-info'),
  'status-background-success': success.s200.theme('status-background-success'),
  'status-background-danger': danger.d200.theme('status-background-danger'),
  'status-background-warning': warning.w200.theme('status-background-warning'),
  'status-background-warning-2': warning.w150.theme(
    'status-background-warning-2'
  ),
  'status-background-service-1': service1['200'].theme(
    'status-background-service-1'
  ),
  'status-background-service-2': service2['200'].theme(
    'status-background-service-2'
  ),
};

type StatusBackgroundColors = keyof typeof statusBackgroundColors;

export const statusColors = {
  'status-font-on-info': info.i600.theme('status-font-on-info'),
  'status-font-on-success': success.s800.theme('status-font-on-success'),
  'status-font-on-warning': warning.w800.theme('status-font-on-warning'),
  'status-font-on-warning-2': neutral.n800.theme('status-font-on-warning-2'),
  'status-font-on-danger': danger.d800.theme('status-font-on-danger'),
  'status-font-on-service-1': service1[800].theme('status-font-on-service-1'),
  'status-font-on-service-2': service2[600].theme('status-font-on-service-2'),
};

type StatusColors = keyof typeof statusColors;

export const badgeBackgroundColors = {
  'badge-background-level-0': neutral.n400.theme('badge-background-level-0'),
  'badge-background-level-1': neutral.n600.theme('badge-background-level-1'),
  'badge-background-level-2': primary.p550.theme('badge-background-level-2'),
  'badge-background-level-3': service1[500].theme('badge-background-level-3'),
  'badge-background-level-4': danger.d550.theme('badge-background-level-4'),
};

type BadgeBackgroundColors = keyof typeof badgeBackgroundColors;

export const shadowColors = {
  'shadow-elevation-border': strokeColors['stroke-extra-light'].theme(
    'shadow-elevation-border'
  ),
  'shadow-elevation-1': new Var(
    'shadow-elevation-1',
    getPaletteColor('neutral', 800, 0.1)[1]
  ),
  'shadow-elevation-2x': new Var(
    'shadow-elevation-2x',
    getPaletteColor('neutral', 800, 0.08)[1]
  ),
  'shadow-elevation-2y': new Var(
    'shadow-elevation-2y',
    getPaletteColor('neutral', 800, 0.12)[1]
  ),
  'shadow-highlight': primary.p200.theme('shadow-highlight'),
  'shadow-danger': danger.d100.theme('shadow-danger'),
};

type ShadowColors = keyof typeof shadowColors;

export const isSurfaceColor = (color: unknown): color is SurfaceColors =>
  typeof color === 'string' && color in surfaceColors;

export const isStrokeColor = (color: unknown): color is StrokeColor =>
  typeof color === 'string' && color in strokeColors;

export const isTextIconColor = (color: unknown): color is TextIconColors =>
  typeof color === 'string' && color in textIconColors;

export const isBadgeColor = (color: unknown): color is BadgeBackgroundColors =>
  typeof color === 'string' && color in badgeBackgroundColors;

export const isStatusBackgroundColor = (
  color: unknown
): color is StatusBackgroundColors =>
  typeof color === 'string' && color in statusBackgroundColors;

export const isStatusColor = (color: unknown): color is StatusColors =>
  typeof color === 'string' && color in statusColors;

export const isShadowColor = (color: unknown): color is ShadowColors =>
  typeof color === 'string' && color in shadowColors;

export const Palette = {
  surface: surfaceColors,
  status: statusBackgroundColors,
  statusColor: statusColors,
  badge: badgeBackgroundColors,
  text: textIconColors,
  stroke: strokeColors,
  shadow: shadowColors,
};
