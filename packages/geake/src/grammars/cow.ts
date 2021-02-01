import { parseWith } from '../parsing';
import { sequence, takeAny, takeSome } from '../sequences';
import { eof, str } from '../terminals';

const cow = str('cow');
const says = str('says');
const moo = str('moo');
const wtf = str('wtf');
const space = str(' ');

export const parse = parseWith(
  sequence(function* () {
    const resultA = yield cow;

    yield* takeSome(space);

    const resultB = yield says;

    yield* takeSome(space);

    const resultC = yield* takeAny(moo, wtf);

    yield eof;

    return [resultA, resultB, resultC];
  })
);
