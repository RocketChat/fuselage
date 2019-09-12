import typography from '../tokens/typography';
import { toREM } from '../helpers';


const mapFontFamily = (fontFamily) => fontFamily.map((x) => (x.indexOf(' ') < 0 ? x : `'${ x }'`)).join(', ');

export default {
  h1: {
    fontFamily: mapFontFamily(typography.h1.fontFamily),
    fontSize: toREM(typography.h1.fontSize),
    fontWeight: typography.h1.fontWeight,
    letterSpacing: toREM(typography.h1.letterSpacing),
    lineHeight: toREM(typography.h1.lineHeight),
  },
  s1: {
    fontFamily: mapFontFamily(typography.s1.fontFamily),
    fontSize: toREM(typography.s1.fontSize),
    fontWeight: typography.s1.fontWeight,
    letterSpacing: toREM(typography.s1.letterSpacing),
    lineHeight: toREM(typography.s1.lineHeight),
  },
  s2: {
    fontFamily: mapFontFamily(typography.s2.fontFamily),
    fontSize: toREM(typography.s2.fontSize),
    fontWeight: typography.s2.fontWeight,
    letterSpacing: toREM(typography.s2.letterSpacing),
    lineHeight: toREM(typography.s2.lineHeight),
  },
  p1: {
    fontFamily: mapFontFamily(typography.p1.fontFamily),
    fontSize: toREM(typography.p1.fontSize),
    fontWeight: typography.p1.fontWeight,
    letterSpacing: toREM(typography.p1.letterSpacing),
    lineHeight: toREM(typography.p1.lineHeight),
  },
  p2: {
    fontFamily: mapFontFamily(typography.p2.fontFamily),
    fontSize: toREM(typography.p2.fontSize),
    fontWeight: typography.p2.fontWeight,
    letterSpacing: toREM(typography.p2.letterSpacing),
    lineHeight: toREM(typography.p2.lineHeight),
  },
  c1: {
    fontFamily: mapFontFamily(typography.c1.fontFamily),
    fontSize: toREM(typography.c1.fontSize),
    fontWeight: typography.c1.fontWeight,
    letterSpacing: toREM(typography.c1.letterSpacing),
    lineHeight: toREM(typography.c1.lineHeight),
  },
  c2: {
    fontFamily: mapFontFamily(typography.c2.fontFamily),
    fontSize: toREM(typography.c2.fontSize),
    fontWeight: typography.c2.fontWeight,
    letterSpacing: toREM(typography.c2.letterSpacing),
    lineHeight: toREM(typography.c2.lineHeight),
  },
  micro: {
    fontFamily: mapFontFamily(typography.micro.fontFamily),
    fontSize: toREM(typography.micro.fontSize),
    fontWeight: typography.micro.fontWeight,
    letterSpacing: toREM(typography.micro.letterSpacing),
    lineHeight: toREM(typography.micro.lineHeight),
  },
};
