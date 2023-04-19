import type { ArrayOf } from './ArrayOf';

// TODO: This is a hack to get around the fact that we can't import
export function newString(
  buf: ArrayOf<number>,
  bufPos: number,
  len: number,
  _charset: unknown
) {
  const slice = [];
  for (let i = 0; i < len; i++) {
    slice.push(buf[bufPos + i]);
  }

  return String.fromCharCode(...slice);
}
