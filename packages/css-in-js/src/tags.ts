import { memoize } from '@rocket.chat/memo';

import { createAnimationName, escapeName } from './names';

/**
 * A shared state created by the upmost Evaluable in the call stack
 */
type EvaluationContext = string[];

/**
 * It can be stored at this module scope because all Evaluable calls are
 * synchronous, therefore the first call must create and destroy this context.
 */
let currentContext: EvaluationContext | undefined = undefined;

/**
 * Holds to the evaluation context inside a Evaluable.
 *
 * @returns a pair of the evaluation context and a function to free it,
 *          returning the additional evaluation stored at the context.
 */
export const holdContext = (): [EvaluationContext, () => string] => {
  if (currentContext) {
    return [currentContext, () => ''];
  }

  currentContext = [];

  return [
    currentContext,
    () => {
      const additions = (currentContext || []).join('');
      currentContext = undefined;
      return additions;
    },
  ];
};

type EvaluablePrimitiveValue =
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined;

type EvaluableValue<TArgs extends readonly unknown[]> =
  | EvaluablePrimitiveValue
  | { toString(): string }
  | ((...args: TArgs) => Evaluable<TArgs> | EvaluablePrimitiveValue)
  | Evaluable<TArgs>
  | EvaluableValue<TArgs>[];

/**
 * A function that lazily evaluates a special string interpolation.
 */
type Evaluable<TArgs extends readonly unknown[] = readonly any[]> = (
  ...args: TArgs
) => string;

const isEvaluable = <TArgs extends readonly unknown[]>(
  x: unknown
): x is Evaluable<TArgs> => typeof x === 'function';

const staticEvaluable = memoize(
  <TArgs extends readonly unknown[]>(content: string) =>
    Object.freeze(() => content) as Evaluable<TArgs>
);

export type cssFn<TArgs extends readonly unknown[] = readonly any[]> =
  Evaluable<TArgs>;

export type keyframesFn<TArgs extends readonly unknown[] = readonly any[]> =
  Evaluable<TArgs>;

const evaluateValue = <TArgs extends readonly unknown[]>(
  value: EvaluableValue<TArgs>,
  args: TArgs
): string => {
  if (isEvaluable(value) || typeof value === 'function') {
    return evaluateValue(value(...args), args);
  }

  if (value === false || value === undefined || value === null) {
    return '';
  }

  if (Array.isArray(value)) {
    return value.map((innerValue) => evaluateValue(innerValue, args)).join('');
  }

  return String(value);
};

const reduceEvaluable = <TArgs extends readonly unknown[]>(
  [first, ...rest]: readonly string[],
  values: EvaluableValue<TArgs>[],
  args: TArgs
): string =>
  values
    .reduce<string>(
      (string, value, i) => string + evaluateValue(value, args) + rest[i],
      first
    )
    .trim();

const isEachOneStatic = <TArgs extends readonly unknown[]>(
  values: EvaluableValue<TArgs>[]
): values is EvaluablePrimitiveValue[] =>
  values.every((value) => typeof value !== 'function');

/**
 * Template string tag to declare CSS content chunks.
 *
 * @returns a callback to render the CSS content
 */
export const css = <TArgs extends readonly unknown[]>(
  slices: TemplateStringsArray,
  ...values: EvaluableValue<TArgs>[]
): cssFn<TArgs> => {
  if (
    !slices ||
    slices.length === 0 ||
    slices.some((slice) => typeof slice !== 'string')
  ) {
    return staticEvaluable('');
  }

  if (isEachOneStatic(values)) {
    const content = reduceEvaluable(slices, values, []);

    return staticEvaluable(content);
  }

  return (...args: TArgs): string => {
    const [, freeContext] = holdContext();

    const content = reduceEvaluable(slices, values, args);

    return content + freeContext();
  };
};

/**
 * Template string tag to declare CSS `@keyframe` at-rules.
 *
 * @returns a callback to render the CSS at-rule content
 */
export const keyframes = <TArgs extends readonly unknown[]>(
  slices: TemplateStringsArray,
  ...values: EvaluableValue<TArgs>[]
): keyframesFn<TArgs> => {
  if (
    !slices ||
    slices.length === 0 ||
    slices.some((slice) => typeof slice !== 'string')
  ) {
    return staticEvaluable('none');
  }

  const fn: keyframesFn = (...args: TArgs): string => {
    const [context, freeContext] = holdContext();

    const content = reduceEvaluable(slices, values, args);

    const animationName = createAnimationName(content);
    const escapedAnimationName = escapeName(animationName);

    context.push(`@keyframes ${escapedAnimationName}{${content}}`);

    freeContext();

    return escapedAnimationName;
  };

  return fn;
};

css<[123]>`
  ${(p) =>
    p
      ? css`
          ${(p) => {
            const x: 123 = p;
            return x;
          }}
        `
      : false}
`;
