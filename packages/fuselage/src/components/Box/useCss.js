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
const getStyleTag = () => {
  if (!styleTag) {
    const styleTagId = 'rcx-styles';
    styleTag = document.getElementById(styleTagId) || document.createElement('style');
    styleTag.id = styleTagId;
    styleTag.appendChild(document.createTextNode(''));
    document.head.appendChild(styleTag);
  }

  return styleTag;
};

let styleSheet;
const getStyleSheet = () => {
  if (!styleSheet) {
    const styleTag = getStyleTag();
    styleSheet = styleTag.sheet || Array.from(document.styleSheets).find(({ ownerNode }) => ownerNode === styleTag);
  }

  return styleSheet;
};

const attachRulesIntoTag = (rules) => {
  const styleTag = getStyleTag();

  const textNode = document.createTextNode(rules);
  styleTag.appendChild(textNode);

  return () => textNode.remove();
};

const attachRulesIntoSheet = (rules) => {
  const styleSheet = getStyleSheet();

  const index = styleSheet.insertRule(`@media all{${ rules }}`, styleSheet.cssRules.length);
  const insertedRule = styleSheet.cssRules[index];
  const findPredicate = (cssRule) => cssRule === insertedRule;

  return () => {
    const index = Array.prototype.findIndex.call(styleSheet.cssRules, findPredicate);
    styleSheet.deleteRule(index);
  };
};

let attachRules = (...args) => {
  if (process.env.NODE_ENV === 'production' && !!CSSStyleSheet.prototype.insertRule) {
    attachRules = attachRulesIntoSheet;
    return attachRules(...args);
  }

  attachRules = attachRulesIntoTag;
  return attachRules(...args);
};

const emptyEffect = () => {};

const createRulesAttachmentEffect = (rules) => {
  let count = 0;
  let detachRules;

  return () => {
    if (count === 0) {
      detachRules = attachRules(rules);
    }
    ++count;

    return () => {
      --count;
      if (count === 0) {
        detachRules();
      }
    };
  };
};

const rulesAttachmentEffects = {};

const getRulesAttachmentEffect = (rules) => {
  if (!rules) {
    return emptyEffect;
  }

  if (!rulesAttachmentEffects[rules]) {
    rulesAttachmentEffects[rules] = createRulesAttachmentEffect(rules);
  }

  return rulesAttachmentEffects[rules];
};

let stylisInstance;
const transpile = (contentHash, content) => {
  if (!stylisInstance) {
    stylisInstance = new Stylis();
  }

  return stylisInstance(`.rcx-box.rcx-\\@${ contentHash }`, content);
};

export const useCss = (css, deps) => {
  const [className, rules] = useMemo(() => {
    const cssFns = (Array.isArray(css) ? css : [css]).filter(Boolean);
    const rules = [];
    rules.push(...cssFns.map((cssFn) => cssFn(rules)));
    const content = rules.filter(Boolean).join('') || undefined;

    if (!content) {
      return [];
    }

    const contentHash = hash(content);
    return [`rcx-@${ contentHash }`, transpile(contentHash, content)];
  }, deps);

  useLayoutEffect(getRulesAttachmentEffect(rules), [rules]);

  return className;
};
