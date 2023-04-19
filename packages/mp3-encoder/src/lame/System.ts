import type { ArrayOf } from './ArrayOf';

export class System {
  static arraycopy<T extends ArrayOf<any>>(
    src: T,
    srcPos: number,
    dest: T,
    destPos: number,
    length: number
  ) {
    const srcEnd = srcPos + length;
    while (srcPos < srcEnd) dest[destPos++] = src[srcPos++];
  }

  static readonly out = {
    println(message: unknown) {
      console.log(message);
    },

    printf(...args: unknown[]) {
      console.log(...args);
    },
  };

  static readonly err = {
    println(message: unknown) {
      console.error(message);
    },

    printf(...args: unknown[]) {
      console.error(...args);
    },
  };
}
