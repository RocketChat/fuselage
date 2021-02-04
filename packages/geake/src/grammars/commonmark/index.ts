import { allOf, anyOf, maybeSomeOf, not, someOf } from '../../combinators';
import { parseWith } from '../../parsing';
import { auto, eof } from '../../terminals';
import * as characterSets from './characterSets';

const whitespaceCharacter = auto(characterSets.whitespace);
const unicodeWhitespaceCharacter = auto(characterSets.unicodeWhitespace);
const nonWhitespaceCharacter = not(whitespaceCharacter);
const asciiPunctuationCharacter = auto(characterSets.asciiPunctuation);

const unicodeWhitespace = someOf(unicodeWhitespaceCharacter);

const lineEnding = anyOf(auto('\r\n'), auto('\n'), auto('\r'));
const blankLine = allOf(maybeSomeOf(anyOf(auto(' '), auto('\t'))), lineEnding);
const line = allOf(someOf(not(lineEnding)), anyOf(lineEnding, eof));

export const parseDocument = parseWith(line);
