import { failure, Parser, success } from './parsing';

export const str = <S extends string>(match: S): Parser<S> => {
  return (ctx) => {
    const endIndex = ctx.index + match.length;
    if (ctx.text.slice(ctx.index, ctx.index + match.length) === match) {
      return success({ ...ctx, index: endIndex }, match);
    }

    return failure(ctx, `"${match}"`);
  };
};

export const successful = <T>(value: T): Parser<T> => {
  return (ctx) => success(ctx, value);
};

export const failed = (expected: string): Parser<void> => {
  return (ctx) => failure(ctx, expected);
};

export const epsilon = successful<void>(undefined);

export const eof: Parser<void> = (ctx) => {
  if (ctx.index === ctx.text.length) {
    return success(ctx, undefined);
  }

  return failure(ctx, 'end of input');
};
