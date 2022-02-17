import type { RuleSet, Declaration } from './elements';
import { attachDeclaration } from './elements';

export type Operation = (
  value: Declaration['children'],
  ruleSet: Readonly<RuleSet>,
  ltrRuleSet: Readonly<RuleSet>,
  rtlRuleSet: Readonly<RuleSet>
) => void;

export const compileOperations = ({
  isPropertySupported,
  isPropertyValueSupported,
}: {
  isPropertySupported: (property: string) => boolean;
  isPropertyValueSupported: (property: string, value: string) => boolean;
}): Map<string, Operation> => {
  const ops = new Map<string, Operation>();

  const withLogicalValues = (property: string): void => {
    const logicalValues = new Map<string, boolean>(
      ['start', 'inline-start', 'end', 'inline-end'].map((logicalValue) => [
        logicalValue,
        isPropertyValueSupported(property, logicalValue),
      ])
    );

    if (Array.from(logicalValues.values()).every((supported) => supported)) {
      return;
    }

    const op: Operation = (value, ruleSet, _ltrRuleSet, rtlRuleSet) => {
      switch (value) {
        case 'start':
        case 'inline-start':
          if (!logicalValues.get(value)) {
            attachDeclaration(property, 'left', ruleSet);
            attachDeclaration(property, 'right', rtlRuleSet);
            return;
          }
          break;

        case 'end':
        case 'inline-end':
          if (!logicalValues.get(value)) {
            attachDeclaration(property, 'right', ruleSet);
            attachDeclaration(property, 'left', rtlRuleSet);
            return;
          }
          break;
      }

      attachDeclaration(property, value, ruleSet);
    };

    ops.set(property, op);
  };

  const withDirectionalFallback = (
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

  const withFallback = (
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

  withLogicalValues('float');
  withLogicalValues('clear');
  withLogicalValues('text-align');

  withDirectionalFallback(
    'border-start-start-radius',
    'border-top-left-radius',
    'border-top-right-radius'
  );
  withDirectionalFallback(
    'border-start-end-radius',
    'border-top-right-radius',
    'border-top-left-radius'
  );
  withDirectionalFallback(
    'border-end-start-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius'
  );
  withDirectionalFallback(
    'border-end-end-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius'
  );
  withDirectionalFallback('inset-inline-start', 'left', 'right');
  withDirectionalFallback('inset-inline-end', 'right', 'left');
  withDirectionalFallback('border-inline-start', 'border-left', 'border-right');
  withDirectionalFallback('border-inline-end', 'border-right', 'border-left');
  withDirectionalFallback(
    'border-inline-start-width',
    'border-left-width',
    'border-right-width'
  );
  withDirectionalFallback(
    'border-inline-end-width',
    'border-right-width',
    'border-left-width'
  );

  withDirectionalFallback(
    'border-inline-start-style',
    'border-left-style',
    'border-right-style'
  );
  withDirectionalFallback(
    'border-inline-end-style',
    'border-right-style',
    'border-left-style'
  );
  withDirectionalFallback(
    'border-inline-start-color',
    'border-left-color',
    'border-right-color'
  );
  withDirectionalFallback(
    'border-inline-end-color',
    'border-right-color',
    'border-left-color'
  );
  withDirectionalFallback('margin-inline-start', 'margin-left', 'margin-right');
  withDirectionalFallback('margin-inline-end', 'margin-right', 'margin-left');
  withDirectionalFallback(
    'padding-inline-start',
    'padding-left',
    'padding-right'
  );
  withDirectionalFallback(
    'padding-inline-end',
    'padding-right',
    'padding-left'
  );

  withFallback('border-inline', 'border-inline-start', 'border-inline-end');
  withFallback(
    'border-inline-width',
    'border-inline-start-width',
    'border-inline-end-width'
  );
  withFallback(
    'border-inline-style',
    'border-inline-start-style',
    'border-inline-end-style'
  );
  withFallback(
    'border-inline-color',
    'border-inline-start-color',
    'border-inline-end-color'
  );
  withFallback('inset-inline', 'inset-inline-start', 'inset-inline-end');
  withFallback('margin-inline', 'margin-inline-start', 'margin-inline-end');
  withFallback('padding-inline', 'padding-inline-start', 'padding-inline-end');

  withFallback('border-block-start', 'border-top');
  withFallback('border-block-end', 'border-bottom');
  withFallback('border-block-start-width', 'border-top-width');
  withFallback('border-block-end-width', 'border-bottom-width');
  withFallback('border-block-start-style', 'border-top-style');
  withFallback('border-block-end-style', 'border-bottom-style');
  withFallback('border-block-start-color', 'border-top-color');
  withFallback('border-block-end-color', 'border-bottom-color');
  withFallback('inset-block-start', 'top');
  withFallback('inset-block-end', 'bottom');
  withFallback('margin-block-start', 'margin-top');
  withFallback('margin-block-end', 'margin-bottom');
  withFallback('padding-block-start', 'padding-top');
  withFallback('padding-block-end', 'padding-bottom');

  withFallback('border-block', 'border-block-start', 'border-block-end');
  withFallback(
    'border-block-width',
    'border-block-start-width',
    'border-block-end-width'
  );
  withFallback(
    'border-block-style',
    'border-block-start-style',
    'border-block-end-style'
  );
  withFallback(
    'border-block-color',
    'border-block-start-color',
    'border-block-end-color'
  );
  withFallback('inset-block', 'inset-block-start', 'inset-block-end');
  withFallback('margin-block', 'margin-block-start', 'margin-block-end');
  withFallback('padding-block', 'padding-block-start', 'padding-block-end');

  withFallback('inset', 'inset-inline', 'inset-block');

  withFallback('inline-size', 'width');
  withFallback('min-inline-size', 'min-width');
  withFallback('max-inline-size', 'max-width');
  withFallback('block-size', 'height');
  withFallback('min-block-size', 'min-height');
  withFallback('max-block-size', 'max-height');

  return ops;
};
