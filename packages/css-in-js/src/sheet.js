// @flow

const styleTagId = 'rcx-styles';
let styleTag;
const getStyleTag = (): HTMLStyleElement => {
  if (!styleTag) {
    styleTag = document.getElementById(styleTagId) || document.createElement('style');
    styleTag.id = styleTagId;
    styleTag.appendChild(document.createTextNode(''));
    if (document.head) {
      document.head.appendChild(styleTag);
    }
  }

  /* ::
    if (!(styleTag instanceof HTMLStyleElement)) {
      throw new Error();
    }
  */

  return styleTag;
};

let styleSheet;
const getStyleSheet = (): CSSStyleSheet => {
  if (!styleSheet) {
    const styleTag = getStyleTag();
    styleSheet = styleTag.sheet || Array.from(document.styleSheets).find(({ ownerNode }) => ownerNode === styleTag);
  }

  /* ::
    if (!(styleSheet instanceof CSSStyleSheet)) {
      throw new Error();
    }
  */

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

/**
 * Imediately attaches CSS rules into the style sheet.
 *
 * @return a callback to detach the rules
 */
export const attachRules = (rules: string) => {
  if (process.env.NODE_ENV === 'production' && !!CSSStyleSheet.prototype.insertRule) {
    return attachRulesIntoSheet(rules);
  }

  return attachRulesIntoTag(rules);
};

const references = {};

/**
 * References CSS rules into the style sheet.
 *
 * Each time this function is called with the same rules a internal reference counter for it
 * is incremented; when the unreference callback returned by this function is called, the reference
 * counter is decremented. If the counter reaches zero references, the rules are detached from
 * style sheet.
 *
 * @return a callback to unreference the rules
 */
export const referenceRules = (rules: string) => {
  if (!rules) {
    return () => {};
  }

  const reference = { count: 0, ...references[rules] };

  if (reference.count === 0) {
    reference.detachRules = attachRules(rules);
  }
  ++reference.count;

  return () => {
    --reference.count;
    if (reference.count === 0) {
      (0, reference.detachRules)();
    }
  };
};
