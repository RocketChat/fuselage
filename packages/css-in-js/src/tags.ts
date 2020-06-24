import { createSelector } from './selectors';

export type cssFn = (rules: string[]) => string;

export type classNameFn = {
  (rules: string[]): string;
  className: string;
};

const createReplacementsMapping = (rules = []) => (value: unknown) => {
  if (value === 0) {
    return '0';
  }

  if (!value) {
    return '';
  }

  if (typeof value === 'function') {
    return value(rules);
  }

  return String(value);
};

/**
 * Template string tag to declare CSS content chunks.
 *
 * @return a callback to render the CSS content
 */
export const css = (slices: TemplateStringsArray, ...values: string[]): cssFn => (rules: string[] = []) => {
  const replacements = values.map(createReplacementsMapping(rules));
  return Array.from({ length: slices.length + replacements.length }, (_, i) => (i - (i % 2)) / 2).map((j, i) => (i % 2 === 0 ? slices[j] : replacements[j])).join('');
};

/**
 * Template string tag to declare CSS content within a className.
 *
 * @return a callback to render the CSS content
 */
export const className = (className: string) =>
  (slices: TemplateStringsArray, ...values: string[]): classNameFn =>
    Object.assign(css(slices, ...values), { className });

/**
 * Template string tag to declare CSS `@keyframe` at-rules.
 *
 * @return a callback to render the CSS at-rule content
 */
export const keyframes = (slices: TemplateStringsArray, ...values: string[]): ((rules: string[]) => string) =>
  (rules: string[] = []) => {
    const replacements = values.map(createReplacementsMapping(rules));
    const content = String.raw(slices, ...replacements);
    const [, encodedAnimationName] = createSelector(content);
    rules.push(`@keyframes ${ encodedAnimationName }{${ content }}`);
    return encodedAnimationName;
  };
