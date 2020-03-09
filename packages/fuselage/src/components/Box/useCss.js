import { referenceRules, transpile, createSelector } from '@rocket.chat/css-in-js';
import { useLayoutEffect, useMemo } from 'react';

export const useCss = (css, deps) => {
  const [className, rules] = useMemo(() => {
    const cssFns = (Array.isArray(css) ? css : [css]).filter(Boolean);
    const rules = [];
    rules.push(...cssFns.map((cssFn) => cssFn(rules)));
    const content = rules.filter(Boolean).join('') || undefined;

    if (!content) {
      return [];
    }

    const [className, encodedClassName] = createSelector(content);

    return [className, transpile(`.rcx-box.${ encodedClassName }`, content)];
  }, deps);

  useLayoutEffect(() => referenceRules(rules), [rules]);

  return className;
};
