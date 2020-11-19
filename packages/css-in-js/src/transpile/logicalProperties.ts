import {
  DECLARATION,
  Element,
  Middleware,
  node,
  RULESET,
  serialize,
  stringify,
} from 'stylis';

import { cssSupports } from '../cssSupports';

type RuleSet = Element & {
  type: typeof RULESET;
  children: Element[];
  props: string[];
};

type Declaration = Element & {
  type: typeof DECLARATION;
  props: string;
  children: string;
};

type Operation = (
  value: Declaration['children'],
  ruleSet: Readonly<RuleSet>,
  ltrRuleSet: Readonly<RuleSet>,
  rtlRuleSet: Readonly<RuleSet>
) => void;

const isRuleSet = (element: Element): element is RuleSet =>
  element.type === RULESET;

const isDeclaration = (element: Element): element is Declaration =>
  element.type === DECLARATION;

const attachDeclaration = (
  property: string,
  value: string,
  ruleSet: RuleSet
): void => {
  const declaration = node(
    `${property}:${value};`,
    ruleSet,
    ruleSet,
    DECLARATION,
    (property as unknown) as string[],
    (value as unknown) as Element[],
    property.length + value.length + 1
  );

  ruleSet.children.push(declaration);
};

export const createLogicalPropertiesMiddleware = (
  supportedProperties: string[]
): Middleware => {
  const supportedPropertiesSet = new Set(supportedProperties);

  const isPropertySupported = (property: string): boolean =>
    supportedPropertiesSet.has(property) || cssSupports(`${property}:inherit`);

  const isPropertyValueSupported = (property: string, value: string): boolean =>
    cssSupports(`${property}:${value}`);

  const ops = new Map<string, Operation>();

  const handleLogicalValues = (property: string): void => {
    for (const logicalValue of ['start', 'inline-start']) {
      if (isPropertyValueSupported(property, logicalValue)) {
        continue;
      }

      const op: Operation = (value, ruleSet, _ltrRuleSet, rtlRuleSet) => {
        attachDeclaration(
          property,
          value === logicalValue ? 'left' : logicalValue,
          ruleSet
        );

        attachDeclaration(
          property,
          value === logicalValue ? 'right' : logicalValue,
          rtlRuleSet
        );
      };

      ops.set(property, op);
    }

    for (const logicalValue of ['end', 'inline-end']) {
      if (isPropertyValueSupported(property, logicalValue)) {
        continue;
      }

      const op: Operation = (value, ruleSet, _ltrRuleSet, rtlRuleSet) => {
        attachDeclaration(
          property,
          value === logicalValue ? 'right' : logicalValue,
          ruleSet
        );

        attachDeclaration(
          property,
          value === logicalValue ? 'left' : logicalValue,
          rtlRuleSet
        );
      };

      ops.set(property, op);
    }
  };

  const replaceInlineProperty = (
    property: string,
    ltrFallbackProperty: string,
    rtlFallbackProperty: string
  ): void => {
    if (isPropertySupported(property)) {
      return;
    }

    const op: Operation = (value, _ruleSet, ltrRuleSet, rtlRuleSet): void => {
      attachDeclaration(ltrFallbackProperty, value, ltrRuleSet);
      attachDeclaration(rtlFallbackProperty, value, rtlRuleSet);
    };

    ops.set(property, op);
  };

  const replaceProperty = (
    property: string,
    ...fallbackProperties: string[]
  ): void => {
    if (isPropertySupported(property)) {
      return;
    }

    const op: Operation = (value, ruleSet, ltrRuleSet, rtlRuleSet): void => {
      for (const fallbackProperty of fallbackProperties) {
        const fallbackTransform = ops.get(fallbackProperty);

        if (fallbackTransform) {
          fallbackTransform(value, ruleSet, ltrRuleSet, rtlRuleSet);
          continue;
        }

        attachDeclaration(fallbackProperty, value, ruleSet);
      }
    };

    ops.set(property, op);
  };

  handleLogicalValues('clear');
  handleLogicalValues('float');
  handleLogicalValues('text-align');
  replaceInlineProperty(
    'border-start-start-radius',
    'border-top-left-radius',
    'border-top-right-radius'
  );
  replaceInlineProperty(
    'border-start-end-radius',
    'border-top-right-radius',
    'border-top-left-radius'
  );
  replaceInlineProperty(
    'border-end-start-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius'
  );
  replaceInlineProperty(
    'border-end-end-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius'
  );
  replaceProperty('inline-size', 'width');
  replaceProperty('min-inline-size', 'min-width');
  replaceProperty('max-inline-size', 'max-width');
  replaceProperty('block-size', 'height');
  replaceProperty('min-block-size', 'min-height');
  replaceProperty('max-block-size', 'max-height');

  replaceProperty('inset', 'inset-inline', 'inset-block');
  replaceProperty('inset-inline', 'inset-inline-start', 'inset-inline-end');
  replaceProperty('inset-block', 'inset-block-start', 'inset-block-end');
  replaceInlineProperty('inset-inline-start', 'left', 'right');
  replaceInlineProperty('inset-inline-end', 'right', 'left');
  replaceProperty('inset-block-start', 'top');
  replaceProperty('inset-block-end', 'bottom');

  replaceProperty('margin-inline', 'margin-inline-start', 'margin-inline-end');
  replaceProperty('margin-block', 'margin-block-start', 'margin-block-end');
  replaceInlineProperty('margin-inline-start', 'margin-left', 'margin-right');
  replaceInlineProperty('margin-inline-end', 'margin-right', 'margin-left');
  replaceProperty('margin-block-start', 'margin-top');
  replaceProperty('margin-block-end', 'margin-bottom');

  replaceProperty(
    'padding-inline',
    'padding-inline-start',
    'padding-inline-end'
  );
  replaceProperty('padding-block', 'padding-block-start', 'padding-block-end');
  replaceInlineProperty(
    'padding-inline-start',
    'padding-left',
    'padding-right'
  );
  replaceInlineProperty('padding-inline-end', 'padding-right', 'padding-left');
  replaceProperty('padding-block-start', 'padding-top');
  replaceProperty('padding-block-end', 'padding-bottom');

  replaceProperty('border-inline', 'border-inline-start', 'border-inline-end');
  replaceProperty('border-block', 'border-block-start', 'border-block-end');
  replaceInlineProperty('border-inline-start', 'border-left', 'border-right');
  replaceInlineProperty('border-inline-end', 'border-right', 'border-left');
  replaceProperty('border-block-start', 'border-top');
  replaceProperty('border-block-end', 'border-bottom');

  replaceProperty(
    'border-inline-width',
    'border-inline-start-width',
    'border-inline-end-width'
  );
  replaceProperty(
    'border-block-width',
    'border-block-start-width',
    'border-block-end-width'
  );
  replaceInlineProperty(
    'border-inline-start-width',
    'border-left-width',
    'border-right-width'
  );
  replaceInlineProperty(
    'border-inline-end-width',
    'border-right-width',
    'border-left-width'
  );
  replaceProperty('border-block-start-width', 'border-top-width');
  replaceProperty('border-block-end-width', 'border-bottom-width');

  replaceProperty(
    'border-inline-style',
    'border-inline-start-style',
    'border-inline-end-style'
  );
  replaceProperty(
    'border-block-style',
    'border-block-start-style',
    'border-block-end-style'
  );
  replaceInlineProperty(
    'border-inline-start-style',
    'border-left-style',
    'border-right-style'
  );
  replaceInlineProperty(
    'border-inline-end-style',
    'border-right-style',
    'border-left-style'
  );
  replaceProperty('border-block-start-style', 'border-top-style');
  replaceProperty('border-block-end-style', 'border-bottom-style');

  replaceProperty(
    'border-inline-color',
    'border-inline-start-color',
    'border-inline-end-color'
  );
  replaceProperty(
    'border-block-color',
    'border-block-start-color',
    'border-block-end-color'
  );
  replaceInlineProperty(
    'border-inline-start-color',
    'border-left-color',
    'border-right-color'
  );
  replaceInlineProperty(
    'border-inline-end-color',
    'border-right-color',
    'border-left-color'
  );
  replaceProperty('border-block-start-color', 'border-top-color');
  replaceProperty('border-block-end-color', 'border-bottom-color');

  return (ruleSet: RuleSet): undefined | string => {
    if (!isRuleSet(ruleSet) || ruleSet.root !== null) {
      return undefined;
    }

    const ltrRuleSet = node(
      ruleSet.props
        .map((selector) => `html:not([dir=rtl]) ${selector}`)
        .join(','),
      ruleSet.root ?? null,
      ruleSet.parent ?? null,
      RULESET,
      ruleSet.props.map((selector) => `html:not([dir=rtl]) ${selector}`),
      [],
      0
    ) as RuleSet;

    const rtlRuleSet = node(
      ruleSet.props.map((selector) => `[dir=rtl] ${selector}`).join(','),
      ruleSet.root ?? null,
      ruleSet.parent ?? null,
      RULESET,
      ruleSet.props.map((selector) => `[dir=rtl] ${selector}`),
      [],
      0
    ) as RuleSet;

    const rules = ruleSet.children;
    ruleSet.children = [];
    ruleSet.return = '';

    for (const rule of rules as Element[]) {
      if (!isDeclaration(rule)) {
        ruleSet.children.push(rule);
        continue;
      }

      const op = ops.get(rule.props);

      if (op) {
        op(rule.children, ruleSet, ltrRuleSet, rtlRuleSet);
        continue;
      }

      ruleSet.children.push(rule);
    }

    return serialize([ltrRuleSet, rtlRuleSet], stringify);
  };
};
