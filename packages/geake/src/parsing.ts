type Context = Readonly<{
  text: string;
  index: number;
}>;

type Success<T> = Readonly<{
  success: true;
  value: T;
  ctx: Context;
}>;

type Failure = Readonly<{
  success: false;
  expected: string;
  ctx: Context;
}>;

type Result<T> = Success<T> | Failure;

export type Parser<T> = (ctx: Context) => Result<T>;

export const success = <T>(ctx: Context, value: T): Success<T> => {
  return { success: true, value, ctx };
};

export const failure = (ctx: Context, expected: string): Failure => {
  return { success: false, expected, ctx };
};

type Parsers<Ts extends unknown[]> = { [K in keyof Ts]: Parser<Ts[K]> };

type ParserValues<Ts extends unknown[]> = {
  [K in keyof Ts]: Ts[K] extends void ? never : Ts[K];
};

export const sequence = <Ts extends unknown[]>(
  ...parsers: Parsers<Ts>
): Parser<ParserValues<Ts>> => (ctx) => {
  const values = ([] as unknown[]) as {
    [K in keyof Ts]: Ts[K] extends void ? never : Ts[K];
  };
  let nextCtx: Context = ctx;

  for (const parser of parsers) {
    const result = parser(nextCtx);

    if (!result.success) {
      return result;
    }

    if (typeof result.value !== 'undefined') {
      values.push(result.value);
    }

    nextCtx = result.ctx;
  }

  return success(nextCtx, values);
};

export const optional = <T>(parser: Parser<T>): Parser<T | void> => (ctx) => {
  const result = parser(ctx);

  if (result.success) {
    return result;
  }

  return success(ctx, undefined);
};

export const str = <S extends string>(match: S): Parser<S> => (ctx) => {
  const endIndex = ctx.index + match.length;
  if (ctx.text.slice(ctx.index, ctx.index + match.length) === match) {
    return success({ ...ctx, index: endIndex }, match);
  }

  return failure(ctx, `"${match}"`);
};

export const epsilon: Parser<void> = (ctx) => {
  if (ctx.index === ctx.text.length) {
    return success(ctx, undefined);
  }

  return failure(ctx, 'end of input');
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
