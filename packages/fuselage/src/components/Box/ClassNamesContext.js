import { createClassName, escapeName, transpile, attachRules } from '@rocket.chat/css-in-js';
import React, { createContext, useContext, useMemo, useRef, useLayoutEffect, useCallback, useEffect } from 'react';

import { appendClassName } from '../../helpers/appendClassName';

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

export const ClassNamesContext = createContext();

export function ClassNamesProvider({ children, value }) {
  const parentValue = useContext(ClassNamesContext);

  const mergedValue = useMemo(() => {
    if (!value) {
      return parentValue;
    }

    if (!parentValue) {
      return value;
    }

    return [].concat(value, parentValue);
  }, [value, parentValue]);

  return <ClassNamesContext.Provider children={children} value={mergedValue} />;
}

export const ClassNamesConsumer = ({
  children,
  sourceProps: {
    className,
    ...remainingProps
  },
  props,
  createClassName,
}) => {
  const extraClassNames = useContext(ClassNamesContext);

  if (extraClassNames) {
    props.className = extraClassNames.reduce((className, value) => {
      if (typeof value === 'function') {
        value = createClassName(value);
      }

      if (typeof value === 'string') {
        return appendClassName(className, value);
      }

      return className;
    }, props.className);
  }

  if (className) {
    props.className = [].concat(className).reduce((className, value) => {
      if (typeof value === 'function') {
        value = createClassName(value);
      }

      if (typeof value === 'string') {
        return appendClassName(className, value);
      }

      return className;
    }, props.className);
  }

  if (extraClassNames) {
    return <ClassNamesContext.Provider children={children(props, remainingProps)} />;
  }

  return children(props, remainingProps);
};
