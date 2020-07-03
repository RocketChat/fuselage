import { createClassName, escapeName, transpile, attachRules } from '@rocket.chat/css-in-js';
import { useRef, useLayoutEffect, useCallback, useEffect } from 'react';

export const useClassNameMapping = (...args) => {
  const argsRef = useRef(args);

  useLayoutEffect(() => {
    argsRef.current = args;
  });

  const unrefsRef = useRef([]);

  useEffect(() => () => {
    unrefsRef.current.forEach((unref) => {
      unref();
    });
  }, []);

  return useCallback((value) => {
    if (typeof value === 'function') {
      const content = value(...argsRef.current);

      if (!content) {
        return;
      }

      const className = createClassName(content);
      const escapedClassName = escapeName(className);
      const transpiledContent = transpile(`.${ escapedClassName }`, content);
      unrefsRef.current.push(attachRules(transpiledContent));

      return className;
    }

    if (typeof value === 'string') {
      return value.trim();
    }

    return undefined;
  }, []);
};
