import {
  createClassName,
  escapeName,
  transpile,
  attachRules,
} from '@rocket.chat/css-in-js';
import { useDebugValue, useEffect, useMemo } from 'react';

export const useStyle = (cssFn, arg) => {
  const content = useMemo(() => (cssFn ? cssFn(arg) : undefined), [arg, cssFn]);

  const className = useMemo(() => {
    if (!content) {
      return;
    }

    return content ? createClassName(content) : undefined;
  }, [content]);

  useDebugValue(className);

  const transpiledContent = useMemo(() => {
    if (!content || !className) {
      return;
    }

    const escapedClassName = escapeName(className);
    const transpiledContent = transpile(`.${ escapedClassName }`, content);

    return transpiledContent;
  }, [className, content]);

  useEffect(() => {
    if (!transpiledContent) {
      return;
    }

    return attachRules(transpiledContent);
  }, [transpiledContent]);

  return className;
};
