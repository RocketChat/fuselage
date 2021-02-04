import PcCategory from 'unicode/category/Pc';
import PdCategory from 'unicode/category/Pd';
import PeCategory from 'unicode/category/Pe';
import PfCategory from 'unicode/category/Pf';
import PiCategory from 'unicode/category/Pi';
import PoCategory from 'unicode/category/Po';
import PsCategory from 'unicode/category/Ps';
import ZsCategory from 'unicode/category/Zs';

export const whitespace = [' ', '\t', '\n', '\v', '\f', '\r'] as const;

export const asciiPunctuation = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '\u0021',
  '\u0022',
  '\u0023',
  '\u0024',
  '\u0025',
  '\u0026',
  '\u0027',
  '\u0028',
  '\u0029',
  '\u002a',
  '\u002b',
  '\u002c',
  '\u002d',
  '\u002e',
  '\u002f',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '\u003a',
  '\u003b',
  '\u003c',
  '\u003d',
  '\u003e',
  '\u003f',
  '\u0040',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '\u005b',
  '\u005c',
  '\u005d',
  '\u005e',
  '\u005f',
  '\u0060',
  '{',
  '|',
  '}',
  '\u007b',
  '\u007c',
  '\u007d',
  '\u007e',
] as const;

export const Zs = Object.values(ZsCategory).map((char) => char.symbol);
export const Pc = Object.values(PcCategory).map((char) => char.symbol);
export const Pd = Object.values(PdCategory).map((char) => char.symbol);
export const Pe = Object.values(PeCategory).map((char) => char.symbol);
export const Pf = Object.values(PfCategory).map((char) => char.symbol);
export const Pi = Object.values(PiCategory).map((char) => char.symbol);
export const Po = Object.values(PoCategory).map((char) => char.symbol);
export const Ps = Object.values(PsCategory).map((char) => char.symbol);

export const unicodeWhitespace = ['\t', '\r', '\n', '\f', ...Zs] as const;

export const punctuation = [
  ...asciiPunctuation,
  ...Zs,
  ...Pc,
  ...Pd,
  ...Pe,
  ...Pf,
  ...Pi,
  ...Po,
  ...Ps,
] as const;
