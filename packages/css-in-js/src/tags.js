// @flow

import { createSelector } from './selectors';

declare class TemplateStringsArray extends $ReadOnlyArray<string> {
  +raw: string;
}

const createReplacementsMapping = (rules = []) => (value) => {
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
export const css = (slices: TemplateStringsArray, ...values: string[]) => (rules: string[] = []) => {
  const replacements = values.map(createReplacementsMapping(rules));
  return String.raw(slices, ...replacements);
};

/**
 * Template string tag to declare CSS `@keyframe` at-rules.
 *
 * @return a callback to render the CSS at-rule content
 */
export const keyframes = (slices: TemplateStringsArray, ...values: string[]) => (rules: string[] = []) => {
  const replacements = values.map(createReplacementsMapping(rules));
  const content = String.raw(slices, ...replacements);
  const [, encodedAnimationName] = createSelector(content);
  rules.push(`@keyframes ${ encodedAnimationName }{${ content }}`);
  return encodedAnimationName;
};
