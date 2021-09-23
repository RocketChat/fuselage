export type Permutation<T, C = T> = [T] extends [never]
  ? []
  : C extends infer U
  ? [U, ...Permutation<Exclude<T, U>>]
  : [];
