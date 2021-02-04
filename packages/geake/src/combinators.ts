import { failure, Parser, success } from './parsing';

type MapIntoParsers<Values extends readonly unknown[]> = {
  [K in keyof Values]: Parser<Values[K]>;
};

export const allOf = <Values extends readonly unknown[]>(
  ...parsers: MapIntoParsers<Values>
): Parser<Values> => {
  return (ctx) => {
    const values: Values[number][] = [];
    let currentCtx = ctx;

    for (const parser of parsers) {
      const result = parser(currentCtx);

      if (!result.success) {
        return failure(ctx, result.expected);
      }

      values.push(result.value);
      currentCtx = result.ctx;
    }

    return success(currentCtx, (values as unknown) as Values);
  };
};

export const anyOf = <Values extends unknown[]>(
  ...parsers: MapIntoParsers<Values>
): Parser<Values[number]> => {
  return (ctx) => {
    const expectations: string[] = [];
    let currentCtx = ctx;

    for (const parser of parsers) {
      const result = parser(currentCtx);

      if (result.success) {
        return result;
      }

      expectations.push(result.expected);
      currentCtx = result.ctx;
    }

    return failure(currentCtx, expectations.join(' or '));
  };
};

export const maybeSomeOf = <Value>(parser: Parser<Value>): Parser<Value[]> => {
  return (ctx) => {
    const values: Value[] = [];
    let currentCtx = ctx;

    do {
      const result = parser(currentCtx);

      if (!result.success) {
        return success(currentCtx, values);
      }

      values.push(result.value);
      currentCtx = result.ctx;
    } while (true);
  };
};

export const someOfUpTo = <Value>(
  parser: Parser<Value>,
  count: number
): Parser<Value[]> => {
  const parsers = Array.from({ length: count }, () => parser);
  return allOf(...parsers);
};

export const someOf = <Value>(
  parser: Parser<Value>
): Parser<[Value, ...Value[]]> => {
  const headParser = parser;
  const tailsParser = maybeSomeOf(parser);

  return (ctx) => {
    const headResult = headParser(ctx);

    if (!headResult.success) {
      return headResult;
    }

    const tailsResult = tailsParser(headResult.ctx);

    if (!tailsResult.success) {
      return failure(ctx, tailsResult.expected);
    }

    return success(tailsResult.ctx, [headResult.value, ...tailsResult.value]);
  };
};

export const not = (parser: Parser<unknown>): Parser<unknown> => {
  return (ctx) => {
    if (ctx.index === ctx.text.length) {
      return failure(ctx, 'not eof');
    }

    const result = parser(ctx);

    if (result.success) {
      const matched = result.ctx.text.slice(ctx.index, result.ctx.index);
      return failure(ctx, `not ${JSON.stringify(matched)}`);
    }

    const endIndex = ctx.index + 1;
    return success(
      { ...ctx, index: endIndex },
      ctx.text.slice(ctx.index, endIndex)
    );
  };
};
