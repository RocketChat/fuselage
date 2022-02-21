import type { cssFn } from '@rocket.chat/css-in-js';
import {
  createClassName,
  escapeName,
  transpile,
  attachRules,
} from '@rocket.chat/css-in-js';
import { useDebugValue, useLayoutEffect, useMemo } from 'react';

export const useStyle = (cssFn: cssFn, arg: unknown) => {
  const content = useMemo(() => (cssFn ? cssFn(arg) : undefined), [arg, cssFn]);

  const className = useMemo(() => {
    if (!content) {
      return;
    }

    return content ? createClassName(content) : undefined;
  }, [content]);

  useDebugValue(className);

  useLayoutEffect(() => {
    if (!content || !className) {
      return;
    }

    const escapedClassName = escapeName(className);
    const transpiledContent = transpile(`.${escapedClassName}`, content);
    const detach = attachRules(transpiledContent);

    return () => {
      setTimeout(detach, 1000);
    };
  }, [className, content]);

  return className;
};
