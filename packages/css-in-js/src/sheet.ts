const elementId = 'rcx-styles';
let element: HTMLStyleElement;
const getStyleTag = (): HTMLStyleElement => {
  if (!element) {
    element = (document.getElementById(elementId) || document.createElement('style')) as HTMLStyleElement;
    element.id = elementId;
    element.appendChild(document.createTextNode(''));
    if (document.head) {
      document.head.appendChild(element);
    }
  }

  return element;
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

type RuleAttacher = (rules: string) => () => void;

const discardRules: RuleAttacher = () => () => undefined;

const attachRulesIntoElement: RuleAttacher = (rules) => {
  const element = getStyleTag();

  const textNode = document.createTextNode(rules);
  element.appendChild(textNode);

  return () => textNode.remove();
};

const attachRulesIntoStyleSheet: RuleAttacher = (rules) => {
  const styleSheet = getStyleSheet();
  const index = styleSheet.insertRule(`@media all{${ rules }}`, styleSheet.cssRules.length);
  const insertedRule = styleSheet.cssRules[index];

  return () => {
    const index = Array.prototype.findIndex.call(
      styleSheet.cssRules,
      (cssRule: CSSRule): boolean => cssRule === insertedRule,
    );
    styleSheet.deleteRule(index);
  };
};

/**
 * Imediately attaches CSS rules into the style sheet.
 *
 * @returns a callback to detach the rules
 */
export const attachRules: RuleAttacher = (
  (typeof window === 'undefined' && discardRules)
  || (
    process.env.NODE_ENV === 'production'
    && !!CSSStyleSheet.prototype.insertRule
    && attachRulesIntoStyleSheet
  )
  || attachRulesIntoElement
);
