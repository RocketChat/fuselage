import hash from '@emotion/hash';
import Stylis from '@emotion/stylis';
import { useLayoutEffect, useMemo } from 'react';

const stylis = new Stylis();

export const css = (strings, ...values) => (postStrings = []) => {
  const replacements = values.map((value) => {
    if (value === 0) {
      return '0';
    }

    if (!value) {
      return '';
    }

    if (typeof value === 'function') {
      return String(value(postStrings));
    }

    return String(value);
  });

  return String.raw(strings, ...replacements);
};

export const keyframes = (strings, ...values) => (postStrings = []) => {
  const replacements = values.map((value) => {
    if (value === 0) {
      return '0';
    }

    if (!value) {
      return '';
    }

    if (typeof value === 'function') {
      return String(value(postStrings));
    }

    return String(value);
  });

  const content = String.raw(strings, ...replacements);
  const animationName = `rcx-animation-${ hash(content) }`;
  postStrings.push(`@keyframes ${ animationName } {${ content }}`);

  return animationName;
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

const attachRule = (className, rule) => {
  const textNode = document.createTextNode(rule);
  styleTag.appendChild(textNode);
  return () => textNode.remove();
};

const getRuleAttacher = (className, rule) => {
  if (!className || !rule) {
    return () => {};
  }

  if (ruleAttachers.has(className)) {
    return ruleAttachers.get(className);
  }

  ensureStyleSheet();

  let count = 0;
  let detachRule;

  ruleAttachers.set(className, () => {
    if (count === 0) {
      detachRule = attachRule(className, rule);
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
    const postStrings = [];
    const css = [
      ...Array.isArray(cssFn)
        ? cssFn.map((fn) => fn && fn(postStrings)).filter(Boolean)
        : [cssFn(postStrings)],
      ...postStrings,
    ].join('');

    if (!css) {
      return [];
    }

    const cssHash = hash(css);
    return [`rcx${ cssHash }`, stylis(`.rcx-box.rcx${ cssHash }`, css)];
  }, deps);

  useLayoutEffect(getRuleAttacher(className, rule), [className, rule]);

  return className;
};
