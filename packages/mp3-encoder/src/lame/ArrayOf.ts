export type ArrayOf<T> = {
  [index: number]: T;
  readonly length: number;
  [Symbol.iterator](): IterableIterator<T>;
};
