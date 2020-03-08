import hash from '@emotion/hash';
import Stylis from '@emotion/stylis';
import { useLayoutEffect, useMemo } from 'react';

const createReplacementsMapping = (rules = []) => (value) => {
  if (value === 0) {
    return '0';
  }

  if (!value) {
    return '';
  }

  if (typeof value === 'function') {
    return value(rules);
  }

  return String(value);
};

export const css = (slices, ...values) => (rules = []) => {
  const replacements = values.map(createReplacementsMapping(rules));
  return String.raw(slices, ...replacements);
};

export const keyframes = (slices, ...values) => (rules = []) => {
  const replacements = values.map(createReplacementsMapping(rules));
  const content = String.raw(slices, ...replacements);
  const encodedAnimationName = `rcx-\\\@${ hash(content) }`;
  rules.push(`@keyframes ${ encodedAnimationName }{${ content }}`);
  return encodedAnimationName;
};

let styleTag;
let sheet;

const ensureStyleSheet = () => {
  if (styleTag && sheet) {
    return;
  }

  const styleTagId = 'rcx-styles';

  styleTag = document.getElementById(styleTagId) || document.createElement('style');
  if (!styleTag.parentElement) {
    styleTag.id = styleTagId;
    styleTag.appendChild(document.createTextNode(''));
    document.head.appendChild(styleTag);
  }

  sheet = styleTag.sheet || Array.from(document.styleSheets).find(({ ownerNode }) => ownerNode === styleTag);
};

const attachRulesInProduction = (rules) => {
  ensureStyleSheet();

  const index = sheet.insertRule(`@media all{${ rules }}`);
  const insertedRule = sheet.rules[index];

  return () => {
    const index = Array.prototype.findIndex.call(sheet.rules, (currentRule) => currentRule === insertedRule);
    sheet.deleteRule(index);
  };
};

const attachRulesInDevelopment = (rules) => {
  ensureStyleSheet();

  const textNode = document.createTextNode(rules);
  styleTag.appendChild(textNode);

  return () => textNode.remove();
};

const attachRules = (process.env.NODE_ENV === 'production' && attachRulesInProduction)
  || attachRulesInDevelopment;

const ruleAttachers = new Map();
const emptyEffect = () => {};

const getRuleAttacher = (className, rule) => {
  if (!className) {
    return emptyEffect;
  }

  if (ruleAttachers.has(className)) {
    return ruleAttachers.get(className);
  }

  let count = 0;
  let detachRule;

  ruleAttachers.set(className, () => {
    if (count === 0) {
      detachRule = attachRules(rule);
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

const stylis = new Stylis();

export const useCss = (css, deps) => {
  const [className, rules] = useMemo(() => {
    const cssFns = (Array.isArray(css) ? css : [css]).filter(Boolean);
    const rules = [];
    rules.push(...cssFns.map((cssFn) => cssFn(rules)));
    const content = rules.filter(Boolean).join('');

    if (!content) {
      return [];
    }

    const className = `rcx-@${ hash(content) }`;
    const encodedClassName = `rcx-\\@${ hash(content) }`;
    const transpiledContent = stylis(`.rcx-box.${ encodedClassName }`, content);
    return [className, transpiledContent];
  }, deps);

  useLayoutEffect(getRuleAttacher(className, rules), [className, rules]);

  return className;
};
