import type { ArrayOf } from './ArrayOf';

type MultidimensionalTypedArray<
  N extends readonly number[],
  T extends ArrayOf<any>
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
    return new Int16Array(args[0]);
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
    return new Int32Array(args[0]);
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
    return new Float32Array(args[0]);
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
