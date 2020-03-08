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

const ensureStyleTag = () => {
  if (styleTag) {
    return;
  }

  const styleTagId = 'rcx-styles';

  styleTag = document.getElementById(styleTagId) || document.createElement('style');
  if (!styleTag.parentElement) {
    styleTag.id = styleTagId;
    styleTag.appendChild(document.createTextNode(''));
    document.head.appendChild(styleTag);
  }
};

const attachRulesIntoTag = (rules) => {
  ensureStyleTag();

  const textNode = document.createTextNode(rules);
  styleTag.appendChild(textNode);

  return () => textNode.remove();
};

let sheet;

const attachRulesIntoSheet = (rules) => {
  ensureStyleTag();

  if (!sheet) {
    sheet = styleTag.sheet || Array.from(document.styleSheets).find(({ ownerNode }) => ownerNode === styleTag);
  }

  const index = sheet.insertRule(`@media all{${ rules }}`, sheet.cssRules.length);
  const insertedRule = sheet.cssRules[index];

  return () => {
    const index = Array.prototype.findIndex.call(sheet.cssRules, (currentRule) => currentRule === insertedRule);
    sheet.deleteRule(index);
  };
};

const canInsertIntoSheet = process.env.NODE_ENV === 'production' && !!CSSStyleSheet.prototype.insertRule;

const attachRules = canInsertIntoSheet ? attachRulesIntoSheet : attachRulesIntoTag;

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

const stylis = new Stylis();

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
    return [`rcx-@${ contentHash }`, stylis(`.rcx-box.rcx-\\@${ contentHash }`, content)];
  }, deps);

  useLayoutEffect(getRulesAttachmentEffect(rules), [rules]);

  return className;
};
