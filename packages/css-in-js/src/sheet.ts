const styleTagId = 'rcx-styles';
let styleTag: HTMLStyleElement;
const getStyleTag = (): HTMLStyleElement => {
  if (!styleTag) {
    styleTag = (document.getElementById(styleTagId) || document.createElement('style')) as HTMLStyleElement;
    styleTag.id = styleTagId;
    styleTag.appendChild(document.createTextNode(''));
    if (document.head) {
      document.head.appendChild(styleTag);
    }
  }

  return styleTag;
};

let styleSheet: CSSStyleSheet;
const getStyleSheet = (): CSSStyleSheet => {
  if (!styleSheet) {
    const styleTag = getStyleTag();
    const _styleSheet = styleTag.sheet || Array.from(document.styleSheets).find(({ ownerNode }) => ownerNode === styleTag);

    if (!_styleSheet) {
      throw Error('could not get style sheet');
    }

    styleSheet = _styleSheet;
  }

  return styleSheet;
};

const attachRulesIntoTag = (rules: string): (() => void) => {
  const styleTag = getStyleTag();

  const textNode = document.createTextNode(rules);
  styleTag.appendChild(textNode);

  return () => textNode.remove();
};

const attachRulesIntoSheet = (rules: string): (() => void) => {
  const styleSheet = getStyleSheet();

  const index = styleSheet.insertRule(`@media all{${ rules }}`, styleSheet.cssRules.length);
  const insertedRule = styleSheet.cssRules[index];
  const findPredicate = (cssRule: CSSRule): boolean => cssRule === insertedRule;

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
export const attachRules = (rules: string): (() => void) => {
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
export const referenceRules = (rules: string): (() => void) => {
  if (!rules) {
    return () => undefined;
  }

  const reference = references[rules] || { count: 0 };
  references[rules] = reference;

  if (reference.count === 0) {
    reference.detachRules = attachRules(rules);
  }
  ++reference.count;

  return () => {
    --reference.count;
    if (reference.count === 0) {
      reference.detachRules();
    }
  };
};
