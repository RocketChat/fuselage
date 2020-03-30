import { referenceRules, transpile, createSelector } from '@rocket.chat/css-in-js';
import { useLayoutEffect, useMemo } from 'react';

export const useCss = (css, deps) => {
  const [className, rules] = useMemo(() => {
    if (!css) {
      return [];
    }

    const cssFns = (Array.isArray(css) ? css : [css]).filter(Boolean);
    const rules = [];
    rules.push(...cssFns.map((cssFn) => cssFn(rules)));
    const content = rules.filter(Boolean).join('') || undefined;

    if (!content) {
      return [];
    }

    const [className, encodedClassName] = createSelector(content);

    return [className, transpile(`.rcx-box.${ encodedClassName }`, content)];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useLayoutEffect(() => rules && referenceRules(rules), [rules]);

  return className;
};
