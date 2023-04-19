import type { ArrayOf } from './ArrayOf';

export class Arrays {
  static fill<T>(a: ArrayOf<T>, val: T): void;

  static fill<T>(
    a: ArrayOf<T>,
    fromIndex: number,
    toIndex: number,
    val: T
  ): void;

  static fill<T>(
    ...args:
      | [a: ArrayOf<T>, val: T]
      | [a: ArrayOf<T>, fromIndex: number, toIndex: number, val: T]
  ) {
    if (args.length === 2) {
      const [a, val] = args;
      for (let i = 0; i < a.length; i++) {
        a[i] = val;
      }
    } else {
      const [a, fromIndex, toIndex, val] = args;
      for (let i = fromIndex; i < toIndex; i++) {
        a[i] = val;
      }
    }
  }

  static sort<T>(a: ArrayOf<T>, fromIndex: number, toIndex: number) {
    const sorted = Array.from(a).slice(fromIndex, toIndex).sort();
    for (let i = fromIndex; i < toIndex; i++) {
      a[i] = sorted[i - fromIndex];
    }
  }
}
