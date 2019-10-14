import typography from '@rocket.chat/fuselage-tokens/typography';

import { theme, toRem } from '../helpers';

export default {
  h1: {
    fontFamily: theme('text-styles-h1-font-family', typography.h1.fontFamily),
    fontSize: theme('text-styles-h1-font-size', toRem(typography.h1.fontSize)),
    fontWeight: theme('text-styles-h1-font-weight', typography.h1.fontWeight),
    letterSpacing: theme('text-styles-h1-letter-spacing', toRem(typography.h1.letterSpacing)),
    lineHeight: theme('text-styles-h1-line-height', toRem(typography.h1.lineHeight)),
  },

  s1: {
    fontFamily: theme('text-styles-s1-font-family', typography.s1.fontFamily),
    fontSize: theme('text-styles-s1-font-size', toRem(typography.s1.fontSize)),
    fontWeight: theme('text-styles-s1-font-weight', typography.s1.fontWeight),
    letterSpacing: theme('text-styles-s1-letter-spacing', toRem(typography.s1.letterSpacing)),
    lineHeight: theme('text-styles-s1-line-height', toRem(typography.s1.lineHeight)),
  },

  s2: {
    fontFamily: theme('text-styles-s2-font-family', typography.s2.fontFamily),
    fontSize: theme('text-styles-s2-font-size', toRem(typography.s2.fontSize)),
    fontWeight: theme('text-styles-s2-font-weight', typography.s2.fontWeight),
    letterSpacing: theme('text-styles-s2-letter-spacing', toRem(typography.s2.letterSpacing)),
    lineHeight: theme('text-styles-s2-line-height', toRem(typography.s2.lineHeight)),
  },

  p1: {
    fontFamily: theme('text-styles-p1-font-family', typography.p1.fontFamily),
    fontSize: theme('text-styles-p1-font-size', toRem(typography.p1.fontSize)),
    fontWeight: theme('text-styles-p1-font-weight', typography.p1.fontWeight),
    letterSpacing: theme('text-styles-p1-letter-spacing', toRem(typography.p1.letterSpacing)),
    lineHeight: theme('text-styles-p1-line-height', toRem(typography.p1.lineHeight)),
  },

  p2: {
    fontFamily: theme('text-styles-p2-font-family', typography.p2.fontFamily),
    fontSize: theme('text-styles-p2-font-size', toRem(typography.p2.fontSize)),
    fontWeight: theme('text-styles-p2-font-weight', typography.p2.fontWeight),
    letterSpacing: theme('text-styles-p2-letter-spacing', toRem(typography.p2.letterSpacing)),
    lineHeight: theme('text-styles-p2-line-height', toRem(typography.p2.lineHeight)),
  },

  c1: {
    fontFamily: theme('text-styles-c1-font-family', typography.c1.fontFamily),
    fontSize: theme('text-styles-c1-font-size', toRem(typography.c1.fontSize)),
    fontWeight: theme('text-styles-c1-font-weight', typography.c1.fontWeight),
    letterSpacing: theme('text-styles-c1-letter-spacing', toRem(typography.c1.letterSpacing)),
    lineHeight: theme('text-styles-c1-line-height', toRem(typography.c1.lineHeight)),
  },

  c2: {
    fontFamily: theme('text-styles-c2-font-family', typography.c2.fontFamily),
    fontSize: theme('text-styles-c2-font-size', toRem(typography.c2.fontSize)),
    fontWeight: theme('text-styles-c2-font-weight', typography.c2.fontWeight),
    letterSpacing: theme('text-styles-c2-letter-spacing', toRem(typography.c2.letterSpacing)),
    lineHeight: theme('text-styles-c2-line-height', toRem(typography.c2.lineHeight)),
  },

  micro: {
    fontFamily: theme('text-styles-micro-font-family', typography.micro.fontFamily),
    fontSize: theme('text-styles-micro-font-size', toRem(typography.micro.fontSize)),
    fontWeight: theme('text-styles-micro-font-weight', typography.micro.fontWeight),
    letterSpacing: theme('text-styles-micro-letter-spacing', toRem(typography.micro.letterSpacing)),
    lineHeight: theme('text-styles-micro-line-height', toRem(typography.micro.lineHeight)),
  },
};
