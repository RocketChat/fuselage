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
  100: new Var('neutral-100', tokenColors.n100),
  200: new Var('neutral-200', tokenColors.n200),
  250: new Var('neutral-250', tokenColors.n250),
  300: new Var('neutral-300', tokenColors.n300),
  400: new Var('neutral-400', tokenColors.n400),
  450: new Var('neutral-450', tokenColors.n450),
  500: new Var('neutral-500', tokenColors.n500),
  600: new Var('neutral-600', tokenColors.n600),
  700: new Var('neutral-700', tokenColors.n700),
  800: new Var('neutral-800', tokenColors.n800),
  900: new Var('neutral-900', tokenColors.n900),
};

const blue = {
  100: new Var('primary-100', tokenColors.b100),
  200: new Var('primary-200', tokenColors.b200),
  300: new Var('primary-300', tokenColors.b300),
  400: new Var('primary-400', tokenColors.b400),
  500: new Var('primary-500', tokenColors.b500),
  600: new Var('primary-600', tokenColors.b600),
  700: new Var('primary-700', tokenColors.b700),
  800: new Var('primary-800', tokenColors.b800),
  900: new Var('primary-900', tokenColors.b900),
};

const green = {
  100: new Var('success-100', tokenColors.g100),
  200: new Var('success-200', tokenColors.g200),
  300: new Var('success-300', tokenColors.g300),
  400: new Var('success-400', tokenColors.g400),
  500: new Var('success-500', tokenColors.g500),
  600: new Var('success-600', tokenColors.g600),
  700: new Var('success-700', tokenColors.g700),
  800: new Var('success-800', tokenColors.g800),
  900: new Var('success-900', tokenColors.g900),
};

const yellow = {
  100: new Var('warning-100', tokenColors.y100),
  200: new Var('warning-200', tokenColors.y200),
  300: new Var('warning-300', tokenColors.y300),
  400: new Var('warning-400', tokenColors.y400),
  500: new Var('warning-500', tokenColors.y500),
  600: new Var('warning-600', tokenColors.y600),
  700: new Var('warning-700', tokenColors.y700),
  800: new Var('warning-800', tokenColors.y800),
  900: new Var('warning-900', tokenColors.y900),
};

const red = {
  100: new Var('danger-100', tokenColors.r100),
  200: new Var('danger-200', tokenColors.r200),
  300: new Var('danger-300', tokenColors.r300),
  400: new Var('danger-400', tokenColors.r400),
  500: new Var('danger-500', tokenColors.r500),
  600: new Var('danger-600', tokenColors.r600),
  700: new Var('danger-700', tokenColors.r700),
  800: new Var('danger-800', tokenColors.r800),
  900: new Var('danger-900', tokenColors.r900),
};

const orange = {
  100: new Var('service-1-100', tokenColors.o100),
  200: new Var('service-1-200', tokenColors.o200),
  300: new Var('service-1-300', tokenColors.o300),
  400: new Var('service-1-400', tokenColors.o400),
  500: new Var('service-1-500', tokenColors.o500),
  600: new Var('service-1-600', tokenColors.o600),
  700: new Var('service-1-700', tokenColors.o700),
  800: new Var('service-1-800', tokenColors.o800),
  900: new Var('service-1-900', tokenColors.o900),
};

const purple = {
  100: new Var('service-2-100', tokenColors.p100),
  200: new Var('service-2-200', tokenColors.p200),
  300: new Var('service-2-300', tokenColors.p300),
  400: new Var('service-2-400', tokenColors.p400),
  500: new Var('service-2-500', tokenColors.p500),
  600: new Var('service-2-600', tokenColors.p600),
  700: new Var('service-2-700', tokenColors.p700),
  800: new Var('service-2-800', tokenColors.p800),
  900: new Var('service-2-900', tokenColors.p900),
};

export const surfaceColors = {
  'surface-light': white.theme('surface-light'),
  'surface-tint': neutral[100].theme('surface-tint'),
  'surface-room': white.theme('surface-room'),
  'surface-neutral': neutral[400].theme('surface-neutral'),
  'surface-disabled': neutral[100].theme('surface-disabled'),
  'surface-hover': neutral[200].theme('surface-hover'),
  'surface-selected': neutral[450].theme('surface-selected'),
  'surface-dark': neutral[800].theme('surface-dark'),
  'surface-featured': purple['700'].theme('surface-featured'),
  'surface-featured-hover': purple['800'].theme('surface-featured-hover'),
  'surface-overlay': neutral[800].theme('surface-overlay'),
  'surface-transparent': 'transparent',
  'surface-sidebar': neutral[400].theme('surface-sidebar'),
};

type SurfaceColors = keyof typeof surfaceColors;

export const strokeColors = {
  'stroke-extra-light': neutral[250].theme('stroke-extra-light'),
  'stroke-light': neutral[500].theme('stroke-light'),
  'stroke-medium': neutral[600].theme('stroke-medium'),
  'stroke-dark': neutral[700].theme('stroke-dark'),
  'stroke-extra-dark': neutral[800].theme('stroke-extra-dark'),
  'stroke-extra-light-highlight': blue[200].theme(
    'stroke-extra-light-highlight'
  ),
  'stroke-highlight': blue[500].theme('stroke-highlight'),
  'stroke-extra-light-error': red[200].theme('stroke-extra-light-error'),
  'stroke-error': red[500].theme('stroke-error'),
};

type StrokeColor = keyof typeof strokeColors;

export const textIconColors = {
  'font-white': white.theme('font-white'),
  'font-disabled': neutral[500].theme('font-disabled'),
  'font-annotation': neutral[600].theme('font-annotation'),
  'font-hint': neutral[700].theme('font-hint'),
  'font-secondary-info': neutral[700].theme('font-secondary-info'),
  'font-default': neutral[800].theme('font-default'),
  'font-titles-labels': neutral[900].theme('font-titles-labels'),
  'font-info': blue[600].theme('font-info'),
  'font-danger': red[600].theme('font-danger'),
  'font-pure-black': neutral[800].theme('font-pure-black'),
  'font-pure-white': white.theme('font-pure-white'),
};

type TextIconColors = keyof typeof textIconColors;

export const statusBackgroundColors = {
  'status-background-info': blue[200].theme('status-background-info'),
  'status-background-success': green[200].theme('status-background-success'),
  'status-background-danger': red[200].theme('status-background-danger'),
  'status-background-warning': yellow[200].theme('status-background-warning'),
  'status-background-warning-2': yellow[100].theme(
    'status-background-warning-2'
  ),
  'status-background-service-1': orange[200].theme(
    'status-background-service-1'
  ),
  'status-background-service-2': purple[200].theme(
    'status-background-service-2'
  ),
};

type StatusBackgroundColors = keyof typeof statusBackgroundColors;

export const statusColors = {
  'status-font-on-info': blue[600].theme('status-font-on-info'),
  'status-font-on-success': green[800].theme('status-font-on-success'),
  'status-font-on-warning': yellow[800].theme('status-font-on-warning'),
  'status-font-on-warning-2': neutral[800].theme('status-font-on-warning-2'),
  'status-font-on-danger': red[800].theme('status-font-on-danger'),
  'status-font-on-service-1': orange[800].theme('status-font-on-service-1'),
  'status-font-on-service-2': purple[600].theme('status-font-on-service-2'),
};

type StatusColors = keyof typeof statusColors;

export const badgeBackgroundColors = {
  'badge-background-level-0': neutral[400].theme('badge-background-level-0'),
  'badge-background-level-1': neutral[600].theme('badge-background-level-1'),
  'badge-background-level-2': blue[500].theme('badge-background-level-2'),
  'badge-background-level-3': orange[500].theme('badge-background-level-3'),
  'badge-background-level-4': red[500].theme('badge-background-level-4'),
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
  'shadow-highlight': blue[200].theme('shadow-highlight'),
  'shadow-danger': red[100].theme('shadow-danger'),
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
