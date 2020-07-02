import { createClassName, escapeName, transpile, attachRules } from '@rocket.chat/css-in-js';
import { useRef, useLayoutEffect, useCallback, useEffect } from 'react';

const cssRulesDetachers = {};

const referenceCSSRules = (className, content) => {
  if (!cssRulesDetachers[className]) {
    cssRulesDetachers[className] = {
      count: 0,
      detach: attachRules(content),
    };
  }

  ++cssRulesDetachers[className].count;

  return () => {
    --cssRulesDetachers[className].count;
    if (cssRulesDetachers[className].count === 0) {
      cssRulesDetachers[className].detach();
      delete cssRulesDetachers[className];
    }
  };
};

export const useClassNameMapping = (...args) => {
  const argsRef = useRef(args);

  useLayoutEffect(() => {
    argsRef.current = args;
  });

  const unrefsRef = useRef([]);

  useEffect(() => () => {
    unrefsRef.current.forEach((unref) => {
      if (typeof window.queueMicrotask !== 'function') {
        Promise.resolve().then(unref);
        return;
      }

      queueMicrotask(unref);
    });
  }, []);

  return useCallback((value) => {
    if (typeof value === 'function') {
      const content = value(...argsRef.current);

      if (!content) {
        return;
      }

      const className = createClassName(value.className, content);
      const escapedClassName = escapeName(className);
      const transpiledContent = transpile(`.${ escapedClassName }`, content);
      unrefsRef.current.push(referenceCSSRules(className, transpiledContent));

      return className;
    }

    if (typeof value === 'string') {
      return value.trim();
    }

    return undefined;
  }, []);
};
