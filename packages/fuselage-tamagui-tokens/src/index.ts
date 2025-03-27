import buttons from '@rocket.chat/fuselage-tokens/dist/button.json';
import fonts from '@rocket.chat/fuselage-tokens/dist/font.json';
import shadows from '@rocket.chat/fuselage-tokens/dist/shadow.json';
import strokes from '@rocket.chat/fuselage-tokens/dist/stroke.json';
import surfaces from '@rocket.chat/fuselage-tokens/dist/surface.json';
import { createTamagui } from '@tamagui/core';

const { surface } = surfaces;
const { button } = buttons;
const { font } = fonts;
const { shadow } = shadows;
const { stroke } = strokes;

// import button from './app/tokens/button';
// import { colors } from './app/tokens/colors';
// import font from './app/tokens/font';
// import shadow from './app/tokens/shadow';
// import stroke from './app/tokens/stroke';
// import surface from './app/tokens/surface';

// const fuselageColors = {
//   white: '#FFFFFF',
//   n100: '#F7F8FA',
//   n200: '#F2F3F5',
//   n250: '#EBECEF',
//   n300: '#EEEFF1',
//   n400: '#E4E7EA',
//   n450: '#D7DBE0',
//   n500: '#CBCED1',
//   n600: '#9EA2A8',
//   n700: '#6C737A',
//   n800: '#2F343D',
//   n900: '#1F2329',
//   r100: '#FFE9EC',
//   r200: '#FFC1C9',
//   r300: '#F98F9D',
//   r400: '#F5455C',
//   r500: '#EC0D2A',
//   r600: '#D40C26',
//   r700: '#BB0B21',
//   r800: '#9B1325',
//   r900: '#8B0719',
//   r1000: '#6B0513',
//   o100: '#FDE8D7',
//   o200: '#FAD1B0',
//   o300: '#F7B27B',
//   o400: '#F59B53',
//   o500: '#F38C39',
//   o600: '#E26D0E',
//   o700: '#BD5A0B',
//   o800: '#974809',
//   o900: '#713607',
//   o1000: '#5B2C06',
//   p100: '#F9EFFC',
//   p200: '#EDD0F7',
//   p300: '#DCA0EF',
//   p400: '#CA71E7',
//   p500: '#9F22C7',
//   p600: '#7F1B9F',
//   p700: '#5F1477',
//   p800: '#4A105D',
//   p900: '#350B42',
//   y100: '#FFF8E0',
//   y200: '#FFECAD',
//   y300: '#FFE383',
//   y400: '#FFD95A',
//   y500: '#FFD031',
//   y600: '#F3BE08',
//   y700: '#DFAC00',
//   y800: '#AC892F',
//   y900: '#8E6300',
//   y1000: '#573D00',
//   g100: '#E5FBF4',
//   g200: '#C0F6E4',
//   g300: '#96F0D2',
//   g400: '#6CE9C0',
//   g500: '#2DE0A5',
//   g600: '#1ECB92',
//   g700: '#19AC7C',
//   g800: '#148660',
//   g900: '#106D4F',
//   g1000: '#0D5940',
//   b100: '#E8F2FF',
//   b200: '#D1EBFE',
//   b300: '#76B7FC',
//   b400: '#549DF9',
//   b500: '#156FF5',
//   b600: '#095AD2',
//   b700: '#10529E',
//   b800: '#01336B',
//   b900: '#012247',
// };

// const fuselageTokens = {
//   color: fuselageColors,
//   space: {
//     '4xs': 2,
//     '3xs': 4,
//     '2xs': 8,
//     'xs': 12,
//     'sm': 16,
//     'md': 20,
//     'lg': 24,
//     'xl': 32,
//     '2xl': 40,
//     '3xl': 48,
//     '4xl': 56,
//   },
//   size: {
//     '4xs': 2,
//     '3xs': 4,
//     '2xs': 8,
//     'xs': 12,
//     'sm': 16,
//     'md': 20,
//     'lg': 24,
//     'xl': 32,
//     '2xl': 40,
//     '3xl': 48,
//     '4xl': 56,
//   },
//   radius: {
//     none: 0,
//     sm: 2,
//     md: 4,
//     lg: 8,
//     xl: 12,
//     full: 9999,
//   },
//   zIndex: {
//     dropdown: 1000,
//     modal: 1300,
//     tooltip: 1500,
//   },
//   font: {
//     body: {
//       family: 'Inter, sans-serif',
//       size: {
//         xs: 12,
//         sm: 14,
//         md: 16,
//         lg: 18,
//         xl: 20,
//       },
//       weight: {
//         light: '300',
//         normal: '400',
//         medium: '500',
//         bold: '700',
//       },
//       lineHeight: {
//         xs: 16,
//         sm: 20,
//         md: 24,
//         lg: 28,
//         xl: 32,
//       },
//       letterSpacing: {
//         tight: -0.5,
//         normal: 0,
//         wide: 0.5,
//       },
//     },
//   },
// };

const reMapSurface = <K extends string, S extends { [key: string]: string }>(
  prefix: K,
  surface: S,
): {
  [I in keyof S as `${K}-${I extends string ? I : never}`]: S[I];
} => {
  return Object.keys(surface).reduce((acc, key) => {
    acc[`${prefix}-${key}`] = surface[key];
    return acc;
  }, {} as any);
};

export const config = createTamagui({
  tokens: {
    colors: {
      ...reMapSurface('surface', surface.light),
      ...reMapSurface('shadow', shadow.light),
      ...reMapSurface('stroke', stroke.light),
      ...reMapSurface('font', font.light),
      ...reMapSurface('button', button.light),
      backgroundColor: surface.light.neutral,
      background: surface.light.neutral,
      borderColor: stroke.light.medium,
    },
  },
  themes: {
    light: {
      ...reMapSurface('surface', surface.light),
      ...reMapSurface('shadow', shadow.light),
      ...reMapSurface('stroke', stroke.light),
      ...reMapSurface('font', font.light),
      ...reMapSurface('button', button.light),
      backgroundColor: surface.light.neutral,
      background: surface.light.neutral,
      borderColor: stroke.light.medium,
    },
    dark: {
      ...reMapSurface('surface', surface.dark),
      ...reMapSurface('shadow', shadow.dark),
      ...reMapSurface('stroke', stroke.dark),
      ...reMapSurface('font', font.dark),
      ...reMapSurface('button', button.dark),
      backgroundColor: surface.dark.neutral,
      background: surface.dark.neutral,
      borderColor: stroke.dark.medium,
    },
  },
});

export default config;

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends AppConfig {}
}
