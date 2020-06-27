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
export const holdContext = (): [EvaluationContext, (() => string)] => {
  if (currentContext) {
    return [currentContext, () => ''];
  }

  currentContext = [];

  return [currentContext, () => {
    const additions = (currentContext || []).join('');
    currentContext = undefined;
    return additions;
  }];
};

/**
 * A function that lazily evaluates a special string interpolation.
 */
type Evaluable = (...args: unknown[]) => string;

const isEvaluable = (x: unknown): x is Evaluable => typeof x === 'function';

export type cssFn = Evaluable & {
  className?: string;
};

export type keyframesFn = Evaluable & {
  animationName?: string;
};

const evaluateValue = (value: unknown, args: unknown[]): string => {
  if (isEvaluable(value) || typeof value === 'function') {
    return evaluateValue(value(...args), args);
  }

  if (value === false || value === undefined || value === null) {
    return '';
  }

  return String(value);
};

/**
 * Template string tag to declare CSS content chunks.
 *
 * @returns a callback to render the CSS content
 */
export const css = (slices: TemplateStringsArray, ...values: readonly unknown[]): cssFn => {
  if (!slices || slices.length === 0 || slices.some((slice) => typeof slice !== 'string')) {
    return () => '';
  }

  const [first, ...rest] = slices;

  if (!values.some((value) => typeof value === 'function')) {
    const content = values.reduce<string>(
      (string, value, i) => string + evaluateValue(value, []) + rest[i],
      first,
    ).trim();

    return () => content;
  }

  return (...args: unknown[]): string => {
    const [, freeContext] = holdContext();

    const content = values.reduce<string>(
      (string, value, i) => string + evaluateValue(value, args) + rest[i],
      first,
    ).trim();

    return content + freeContext();
  };
};

/**
 * Template string tag to declare CSS `@keyframe` at-rules.
 *
 * @returns a callback to render the CSS at-rule content
 */
export const keyframes = (slices: TemplateStringsArray, ...values: unknown[]): keyframesFn => {
  if (!slices || slices.length === 0 || slices.some((slice) => typeof slice !== 'string')) {
    return () => 'none';
  }

  const [first, ...rest] = slices;

  const fn: keyframesFn = (...args: unknown[]): string => {
    const [context, freeContext] = holdContext();

    const content = values.reduce<string>(
      (string, value, i) => string + evaluateValue(value, args) + rest[i],
      first,
    ).trim();

    const animationName = createAnimationName(fn.animationName, content);
    const escapedAnimationName = escapeName(animationName);

    context.push(`@keyframes ${ escapedAnimationName }{${ content }}`);

    freeContext();

    return escapedAnimationName;
  };

  return fn;
};
