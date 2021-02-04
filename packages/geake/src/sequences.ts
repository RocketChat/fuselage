import { Parser, Result, success } from './parsing';
import { failed } from './terminals';

export const sequence = <T>(
  createSequence: () => Generator<Parser<unknown | void>, T, unknown | void>
): Parser<T> => {
  return (ctx) => {
    const sequence = createSequence();
    let currentResult: Result<unknown> = success<unknown>(ctx, undefined);

    try {
      while (true) {
        const iteration = (currentResult.success
          ? sequence.next(currentResult.value)
          : sequence.throw(currentResult)) as IteratorResult<
          Parser<unknown>,
          T
        >;

        if (iteration.done) {
          return success(currentResult.ctx, iteration.value);
        }

        const parser = iteration.value;
        currentResult = parser(currentResult.ctx);
      }
    } catch (failure) {
      return failure;
    }
  };
};

export function* takeAny(...parsers: readonly Parser<unknown>[]) {
  const expectations = [];
  for (const parser of parsers) {
    try {
      return yield parser;
    } catch (failure) {
      expectations.push(failure.expected);
    }
  }

  yield failed(expectations.join(' or '));
}

export function* takeSomeMaybe<T>(parser: Parser<T>) {
  const values = [];

  try {
    while (true) {
      const value = yield parser;
      values.push(value);
    }
  } finally {
    return values;
  }
}

export function* takeSomeUpTo<T>(parser: Parser<T>, count: number) {
  const values = [];

  for (let i = 0; i < count; ++i) {
    values.push(yield parser);
  }

  return values;
}

export function* takeSome<T>(parser: Parser<T>) {
  const head = yield parser;
  const tails = yield* takeSomeMaybe(parser);

  return [head, ...tails];
}
