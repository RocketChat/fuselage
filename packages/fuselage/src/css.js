import hash from '@emotion/hash';
import Stylis from '@emotion/stylis';
import { useLayoutEffect, useMemo } from 'react';

const stylis = new Stylis();

export const css = (strings, ...values) => () => {
  const rule = String.raw(strings, ...values);
  const className = hash(rule);
  return [className, stylis(`.rcx-box.${ className }`, rule)];
};

const styleTagId = `rcx-styles-${ Math.random().toString(36).slice(2) }`;
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

const ruleAttachers = {};

const getRuleAttacher = (className, rule) => {
  if (ruleAttachers[className]) {
    return ruleAttachers[className];
  }

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

  ruleAttachers[className] = () => {
    ++count;
    if (count === 1) {
      detachRule = attachRule();
    }

    return () => {
      --count;
      if (count === 0) {
        detachRule();
        delete ruleAttachers[className];
      }
    };
  };

  return ruleAttachers[className];
};

export const useCss = (cssFn, deps) => {
  ensureStyleSheet();

  const [className, rule] = useMemo(cssFn, deps);
  useLayoutEffect(getRuleAttacher(className, rule), [className, rule]);

  return className;
};
