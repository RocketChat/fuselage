import { theme } from '../helpers';
import typography from '../tokens/typography';


const mapFontFamily = (fontFamily) => fontFamily.map((x) => (x.indexOf(' ') < 0 ? x : `'${ x }'`)).join(', ');

export default {
  h1: {
    fontFamily: theme('text-styles-h1-font-family', mapFontFamily(typography.h1.fontFamily)),
    fontSize: theme('text-styles-h1-font-size', typography.h1.fontSize, { rem: true }),
    fontWeight: theme('text-styles-h1-font-weight', typography.h1.fontWeight),
    letterSpacing: theme('text-styles-h1-letter-spacing', typography.h1.letterSpacing, { rem: true }),
    lineHeight: theme('text-styles-h1-line-height', typography.h1.lineHeight, { rem: true }),
  },
  s1: {
    fontFamily: theme('text-styles-s1-font-family', mapFontFamily(typography.s1.fontFamily)),
    fontSize: theme('text-styles-s1-font-size', typography.s1.fontSize, { rem: true }),
    fontWeight: theme('text-styles-s1-font-weight', typography.s1.fontWeight),
    letterSpacing: theme('text-styles-s1-letter-spacing', typography.s1.letterSpacing, { rem: true }),
    lineHeight: theme('text-styles-s1-line-height', typography.s1.lineHeight, { rem: true }),
  },
  s2: {
    fontFamily: theme('text-styles-s2-font-family', mapFontFamily(typography.s2.fontFamily)),
    fontSize: theme('text-styles-s2-font-size', typography.s2.fontSize, { rem: true }),
    fontWeight: theme('text-styles-s2-font-weight', typography.s2.fontWeight),
    letterSpacing: theme('text-styles-s2-letter-spacing', typography.s2.letterSpacing, { rem: true }),
    lineHeight: theme('text-styles-s2-line-height', typography.s2.lineHeight, { rem: true }),
  },
  p1: {
    fontFamily: theme('text-styles-p1-font-family', mapFontFamily(typography.p1.fontFamily)),
    fontSize: theme('text-styles-p1-font-size', typography.p1.fontSize, { rem: true }),
    fontWeight: theme('text-styles-p1-font-weight', typography.p1.fontWeight),
    letterSpacing: theme('text-styles-p1-letter-spacing', typography.p1.letterSpacing, { rem: true }),
    lineHeight: theme('text-styles-p1-line-height', typography.p1.lineHeight, { rem: true }),
  },
  p2: {
    fontFamily: theme('text-styles-p2-font-family', mapFontFamily(typography.p2.fontFamily)),
    fontSize: theme('text-styles-p2-font-size', typography.p2.fontSize, { rem: true }),
    fontWeight: theme('text-styles-p2-font-weight', typography.p2.fontWeight),
    letterSpacing: theme('text-styles-p2-letter-spacing', typography.p2.letterSpacing, { rem: true }),
    lineHeight: theme('text-styles-p2-line-height', typography.p2.lineHeight, { rem: true }),
  },
  c1: {
    fontFamily: theme('text-styles-c1-font-family', mapFontFamily(typography.c1.fontFamily)),
    fontSize: theme('text-styles-c1-font-size', typography.c1.fontSize, { rem: true }),
    fontWeight: theme('text-styles-c1-font-weight', typography.c1.fontWeight),
    letterSpacing: theme('text-styles-c1-letter-spacing', typography.c1.letterSpacing, { rem: true }),
    lineHeight: theme('text-styles-c1-line-height', typography.c1.lineHeight, { rem: true }),
  },
  c2: {
    fontFamily: theme('text-styles-c2-font-family', mapFontFamily(typography.c2.fontFamily)),
    fontSize: theme('text-styles-c2-font-size', typography.c2.fontSize, { rem: true }),
    fontWeight: theme('text-styles-c2-font-weight', typography.c2.fontWeight),
    letterSpacing: theme('text-styles-c2-letter-spacing', typography.c2.letterSpacing, { rem: true }),
    lineHeight: theme('text-styles-c2-line-height', typography.c2.lineHeight, { rem: true }),
  },
  micro: {
    fontFamily: theme('text-styles-micro-font-family', mapFontFamily(typography.micro.fontFamily)),
    fontSize: theme('text-styles-micro-font-size', typography.micro.fontSize, { rem: true }),
    fontWeight: theme('text-styles-micro-font-weight', typography.micro.fontWeight),
    letterSpacing: theme('text-styles-micro-letter-spacing', typography.micro.letterSpacing, { rem: true }),
    lineHeight: theme('text-styles-micro-line-height', typography.micro.lineHeight, { rem: true }),
  },
};
