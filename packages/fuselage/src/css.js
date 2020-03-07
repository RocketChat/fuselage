import hash from '@emotion/hash';
import Stylis from '@emotion/stylis';
import { useLayoutEffect, useMemo } from 'react';

const stylis = new Stylis();

export const css = (strings, ...values) => () => {
  const replacements = values.map((value) => {
    if (value === 0) {
      return '0';
    }

    if (!value) {
      return '';
    }

    if (typeof value === 'function') {
      return String(value());
    }

    return String(value);
  });
  return String.raw(strings, ...replacements);
};

const styleTagId = 'rcx-styles';
let styleTag;
let sheet;

const ensureStyleSheet = () => {
  if (styleTag && sheet) {
    return;
  }

  styleTag = document.getElementById(styleTagId) || document.createElement('style');
  if (!styleTag.parentElement) {
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  sheet = Array.from(document.styleSheets).find(({ ownerNode }) => ownerNode === styleTag);
};

const ruleAttachers = new Map();

const getRuleAttacher = (className, rule) => {
  if (ruleAttachers.has(className)) {
    return ruleAttachers.get(className);
  }

  ensureStyleSheet();

  let count = 0;

  const attachRule = () => {
    if (process.env.NODE_ENV === 'production') {
      const index = sheet.insertRule(rule);
      return () => sheet.deleteRule(index);
    }

    const textNode = document.createTextNode(rule);
    styleTag.appendChild(textNode);
    return () => textNode.remove();
  };

  let detachRule;

  ruleAttachers.set(className, () => {
    if (count === 0) {
      detachRule = attachRule();
    }
    ++count;

    return () => {
      --count;
      if (count === 0) {
        detachRule();
        ruleAttachers.delete(className);
      }
    };
  });

  return ruleAttachers.get(className);
};

export const useCss = (cssFn, deps) => {
  const [className, rule] = useMemo(() => {
    const css = Array.isArray(cssFn)
      ? cssFn.map((fn) => fn && fn()).filter(Boolean).join('')
      : cssFn();
    const cssHash = hash(css);
    return [`_${ cssHash }`, stylis(`.rcx-box._${ cssHash }`, css)];
  }, deps);
  useLayoutEffect(getRuleAttacher(className, rule), [className, rule]);

  return className;
};
