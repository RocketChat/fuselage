export function new_byte(count: number) {
  return new Int8Array(count);
}

export function new_short(count: number) {
  return new Int16Array(count);
}

export function new_int(count: number) {
  return new Int32Array(count);
}

export function new_float(count: number) {
  return new Float32Array(count);
}

export function new_double(count: number) {
  return new Float64Array(count);
}

type MultidimensionalTypedArray<
  N extends readonly number[],
  T extends { [index: number]: any }
> = N extends readonly []
  ? []
  : N extends readonly [number]
  ? T
  : N extends readonly [number, ...infer P extends readonly number[]]
  ? MultidimensionalTypedArray<P, T>[]
  : never;

export function new_short_n<N extends readonly number[]>(
  args: N
): MultidimensionalTypedArray<N, Int16Array>;
export function new_short_n(args: readonly number[]) {
  if (args.length === 1) {
    return new_short(args[0]);
  }
  const sz = args[0];
  args = args.slice(1);
  const A: unknown[] = [];
  for (let i = 0; i < sz; i++) {
    A.push(new_short_n(args));
  }
  return A;
}

export function new_int_n<N extends readonly number[]>(
  args: N
): MultidimensionalTypedArray<N, Int32Array>;
export function new_int_n(args: number[]) {
  if (args.length === 1) {
    return new_int(args[0]);
  }
  const sz = args[0];
  args = args.slice(1);
  const A: unknown[] = [];
  for (let i = 0; i < sz; i++) {
    A.push(new_int_n(args));
  }
  return A;
}

export function new_float_n<N extends readonly number[]>(
  args: N
): MultidimensionalTypedArray<N, Float32Array>;
export function new_float_n(args: number[]) {
  if (args.length === 1) {
    return new_float(args[0]);
  }
  const sz = args[0];
  args = args.slice(1);
  const A: unknown[] = [];
  for (let i = 0; i < sz; i++) {
    A.push(new_float_n(args));
  }
  return A;
}

export function new_array_n<T, N extends readonly number[]>(
  args: N
): MultidimensionalTypedArray<N, T[]>;
export function new_array_n<T>(args: number[]) {
  if (args.length === 1) {
    return new Array<T>(args[0]);
  }
  const sz = args[0];
  args = args.slice(1);
  const A: unknown[] = [];
  for (let i = 0; i < sz; i++) {
    A.push(new_array_n(args));
  }
  return A;
}

export class Arrays {
  static fill<T>(a: T[], val: T): void;

  static fill<T>(a: T[], fromIndex: number, toIndex: number, val: T): void;

  static fill<T>(
    ...args:
      | [a: T[], val: T]
      | [a: T[], fromIndex: number, toIndex: number, val: T]
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
}

export class System {
  static arraycopy<T extends { [index: number]: any }>(
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
}

export class Util {
  static SQRT2 = Math.SQRT2;

  static FAST_LOG10(x: number) {
    return Math.log10(x);
  }

  static FAST_LOG10_X(x: number, y: number) {
    return Math.log10(x) * y;
  }
}

export class ShortBlock {
  private constructor(public ordinal: number) {}

  /**
   * LAME may use them, even different block types for L/R.
   */
  static readonly short_block_allowed = new ShortBlock(0);

  /**
   * LAME may use them, but always same block types in L/R.
   */
  static readonly short_block_coupled = new ShortBlock(1);

  /**
   * LAME will not use short blocks, long blocks only.
   */
  static readonly short_block_dispensed = new ShortBlock(2);

  /**
   * LAME will not use long blocks, short blocks only.
   */
  static readonly short_block_forced = new ShortBlock(3);
}

export class Float {
  static MAX_VALUE = 3.4028235e38;
}

export class VbrMode {
  private constructor(public ordinal: number) {}

  static readonly vbr_off = new VbrMode(0);

  static readonly vbr_mt = new VbrMode(1);

  static readonly vbr_rh = new VbrMode(2);

  static readonly vbr_abr = new VbrMode(3);

  static readonly vbr_mtrh = new VbrMode(4);

  static readonly vbr_default = VbrMode.vbr_mtrh;
}

export function assert(x: unknown): void {
  console.assert(x);
}
