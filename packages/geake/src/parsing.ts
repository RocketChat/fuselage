export type Context = Readonly<{
  text: string;
  index: number;
}>;

type Success<T> = Readonly<{
  success: true;
  value: T;
  ctx: Context;
}>;

export type Failure = Readonly<{
  success: false;
  expected: string;
  ctx: Context;
}>;

export type Result<T> = Success<T> | Failure;

export type Parser<T> = (ctx: Context) => Result<T>;

export const success = <T>(ctx: Context, value: T): Success<T> => {
  return { success: true, value, ctx };
};

export const failure = (ctx: Context, expected: string): Failure => {
  return { success: false, expected, ctx };
};

export const parseWith = <T, P extends Parser<T>>(parser: P) => (
  input: string
): T => {
  const ctx: Context = { text: input, index: 0 };

  const result = parser(ctx);
  if (result.success) {
    return result.value;
  }

  throw Error(`expected ${result.expected} at index ${result.ctx.index}`);
};
