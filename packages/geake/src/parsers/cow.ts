import { epsilon, parseWith, sequence, str } from '../parsing';

const cow = str('cow');
const says = str('says');
const moo = str('moo');
const space = str(' ');

export const parse = parseWith(sequence(cow, space, says, space, moo, epsilon));
