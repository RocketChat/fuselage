import { failure, Parser, success } from './parsing';

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

export const str = <S extends string>(match: S): Parser<S> => {
  return (ctx) => {
    const endIndex = ctx.index + match.length;
    if (ctx.text.slice(ctx.index, ctx.index + match.length) === match) {
      return success({ ...ctx, index: endIndex }, match);
    }

    return failure(ctx, JSON.stringify(match));
  };
};

export const regex = (
  regex: RegExp,
  group: number | string = 0
): Parser<string> => {
  return (ctx) => {
    const match = regex.exec(ctx.text.slice(ctx.index));

    if (match === null) {
      return failure(ctx, String(regex));
    }

    const endIndex = ctx.index + match.index + match[0].length;
    const value =
      typeof group === 'string' ? match?.groups?.[group] ?? '' : match[group];

    return success({ ...ctx, index: endIndex }, value);
  };
};

export const characterSet = <S extends string[]>(
  ...characters: S
): Parser<S[number]> => {
  return (ctx) => {
    const endIndex = ctx.index + 1;
    const character = ctx.text.slice(ctx.index, endIndex);
    if (characters.includes(character)) {
      return success({ ...ctx, index: endIndex }, character);
    }

    return failure(
      ctx,
      characters.map((character) => `'${character}'`).join('|')
    );
  };
};

const isCharacterSet = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every((str) => typeof str === 'string');
};

export const auto: {
  <S extends string>(match: S): Parser<S>;
  (regex: RegExp): Parser<string>;
  <S extends readonly string[]>(characters: S): Parser<S[number]>;
  <T>(parser: Parser<T>): Parser<T>;
} = <T>(
  value: string | RegExp | string[] | Parser<T>
): Parser<string> | Parser<T> => {
  if (typeof value === 'string') {
    return str(value);
  }

  if (value instanceof RegExp) {
    return regex(value);
  }

  if (isCharacterSet(value)) {
    return characterSet(...value);
  }

  return value;
};
