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

export type LogicalPropertiesOptions = {
  supportedProperties?: string[];
};

const createPropertyName = (...parts: (string | undefined)[]): string =>
  parts.filter(Boolean).join('-');

export const createLogicalPropertiesMiddleware = (
  options: LogicalPropertiesOptions = {}
): Middleware => {
  const supportedProperties = new Set(options.supportedProperties);

  const isSupported = (property: string): boolean =>
    supportedProperties.has(property) || cssSupports(`${property}:inherit`);

  const transforms = new Map<
    string,
    (
      element: Element,
      child: Element,
      newRules: Element[],
      prependedRuleSets: Element[]
    ) => void
  >();

  const inlineReplacementTransform = (ltr: string[], rtl: string[]) => (
    element: Element,
    child: Element,
    _newRules: Element[],
    prependedRuleSets: Element[]
  ): void => {
    prependedRuleSets.push(
      node(
        (element.props as string[])
          .map((selector) => `html:not([dir=rtl]) ${selector}`)
          .join(','),
        element.root ?? null,
        element.parent ?? null,
        RULESET,
        (element.props as string[]).map(
          (selector) => `html:not([dir=rtl]) ${selector}`
        ),
        ltr.map((property) =>
          node(
            `${property}:${child.children};`,
            element,
            element,
            DECLARATION,
            (property as unknown) as string[],
            child.children as Element[],
            0
          )
        ),
        0
      ),
      node(
        (element.props as string[])
          .map((selector) => `[dir=rtl] ${selector}`)
          .join(','),
        element.root ?? null,
        element.parent ?? null,
        RULESET,
        (element.props as string[]).map((selector) => `[dir=rtl] ${selector}`),
        rtl.map((property) =>
          node(
            `${property}:${child.children};`,
            element,
            element,
            DECLARATION,
            (property as unknown) as string[],
            child.children as Element[],
            0
          )
        ),
        0
      )
    );
  };

  const replacementTransform = (replacement: string[]) => (
    element: Element,
    child: Element,
    newRules: Element[]
  ): void => {
    newRules.push(
      ...replacement.map((property) =>
        node(
          `${property}:${child.children};`,
          element,
          element,
          DECLARATION,
          (property as unknown) as string[],
          child.children as Element[],
          0
        )
      )
    );
  };

  const replaceValueTransform = (
    property: string,
    originalValue: string,
    ltr: string,
    rtl: string
  ) => (
    element: Element,
    child: Element,
    newRules: Element[],
    prependedRuleSets: Element[]
  ): void => {
    prependedRuleSets.push(
      node(
        (element.props as string[])
          .map((selector) => `[dir=rtl] ${selector}`)
          .join(','),
        element.root ?? null,
        element.parent ?? null,
        RULESET,
        (element.props as string[]).map((selector) => `[dir=rtl] ${selector}`),
        [
          node(
            `${property}:${
              child.children === originalValue ? rtl : child.children
            };`,
            element,
            element,
            DECLARATION,
            (property as unknown) as string[],
            (child.children === originalValue
              ? rtl
              : child.children) as Element[],
            0
          ),
        ],
        0
      )
    );

    newRules.push(
      node(
        `${property}:${
          child.children === originalValue ? ltr : child.children
        };`,
        element,
        element,
        DECLARATION,
        (property as unknown) as string[],
        (child.children === originalValue ? ltr : child.children) as Element[],
        0
      )
    );
  };

  ['clear', 'float', 'text-align'].forEach((property) => {
    if (!cssSupports(`${property}: start`)) {
      transforms.set(
        property,
        replaceValueTransform(property, 'start', 'left', 'right')
      );
    }

    if (!cssSupports(`${property}: inline-start`)) {
      transforms.set(
        property,
        replaceValueTransform(property, 'inline-start', 'left', 'right')
      );
    }

    if (!cssSupports(`${property}: end`)) {
      transforms.set(
        property,
        replaceValueTransform(property, 'end', 'right', 'left')
      );
    }

    if (!cssSupports(`${property}: inline-end`)) {
      transforms.set(
        property,
        replaceValueTransform(property, 'inline-end', 'right', 'left')
      );
    }
  });

  [
    {
      base: 'border',
      suffix: 'radius',
      fallbackBase: 'border',
    },
  ].forEach((property) => {
    const startStart = createPropertyName(
      property.base,
      'start-start',
      property.suffix
    );
    const startEnd = createPropertyName(
      property.base,
      'start-end',
      property.suffix
    );
    const endStart = createPropertyName(
      property.base,
      'end-start',
      property.suffix
    );
    const endEnd = createPropertyName(
      property.base,
      'end-end',
      property.suffix
    );
    const fallbackStartStart = createPropertyName(
      property.base,
      'top-left',
      property.suffix
    );
    const fallbackStartEnd = createPropertyName(
      property.base,
      'top-right',
      property.suffix
    );
    const fallbackEndStart = createPropertyName(
      property.base,
      'bottom-left',
      property.suffix
    );
    const fallbackEndEnd = createPropertyName(
      property.base,
      'bottom-right',
      property.suffix
    );

    if (!isSupported(startStart)) {
      transforms.set(
        startStart,
        inlineReplacementTransform([fallbackStartStart], [fallbackStartEnd])
      );
    }

    if (!isSupported(startEnd)) {
      transforms.set(
        startEnd,
        inlineReplacementTransform([fallbackStartEnd], [fallbackStartStart])
      );
    }

    if (!isSupported(endStart)) {
      transforms.set(
        endStart,
        inlineReplacementTransform([fallbackEndStart], [fallbackEndEnd])
      );
    }

    if (!isSupported(endEnd)) {
      transforms.set(
        endEnd,
        inlineReplacementTransform([fallbackEndEnd], [fallbackEndStart])
      );
    }
  });

  [
    {
      base: 'size',
    },
    {
      prefix: 'min',
      base: 'size',
    },
    {
      prefix: 'max',
      base: 'size',
    },
  ].forEach((property) => {
    const inline = createPropertyName(property.prefix, 'inline', property.base);
    const block = createPropertyName(property.prefix, 'block', property.base);
    const fallbackInline = createPropertyName(property.prefix, 'width');
    const fallbackBlock = createPropertyName(property.prefix, 'height');

    if (!isSupported(inline)) {
      transforms.set(inline, replacementTransform([fallbackInline]));
    }

    if (!isSupported(block)) {
      transforms.set(block, replacementTransform([fallbackBlock]));
    }
  });

  [
    {
      base: 'border',
      suffix: 'radius',
      fallbackBase: 'border',
    },
  ].forEach((property) => {
    const startStart = createPropertyName(
      property.base,
      'start-start',
      property.suffix
    );
    const startEnd = createPropertyName(
      property.base,
      'start-end',
      property.suffix
    );
    const endStart = createPropertyName(
      property.base,
      'end-start',
      property.suffix
    );
    const endEnd = createPropertyName(
      property.base,
      'end-end',
      property.suffix
    );
    const fallbackStartStart = createPropertyName(
      property.base,
      'top-left',
      property.suffix
    );
    const fallbackStartEnd = createPropertyName(
      property.base,
      'top-right',
      property.suffix
    );
    const fallbackEndStart = createPropertyName(
      property.base,
      'bottom-left',
      property.suffix
    );
    const fallbackEndEnd = createPropertyName(
      property.base,
      'bottom-right',
      property.suffix
    );

    if (!isSupported(startStart)) {
      transforms.set(
        startStart,
        inlineReplacementTransform([fallbackStartStart], [fallbackStartEnd])
      );
    }

    if (!isSupported(startEnd)) {
      transforms.set(
        startEnd,
        inlineReplacementTransform([fallbackStartEnd], [fallbackStartStart])
      );
    }

    if (!isSupported(endStart)) {
      transforms.set(
        endStart,
        inlineReplacementTransform([fallbackEndStart], [fallbackEndEnd])
      );
    }

    if (!isSupported(endEnd)) {
      transforms.set(
        endEnd,
        inlineReplacementTransform([fallbackEndEnd], [fallbackEndStart])
      );
    }
  });
  [
    {
      base: 'margin',
      fallbackBase: 'margin',
    },
    {
      base: 'padding',
      fallbackBase: 'padding',
    },
    {
      base: 'inset',
    },
    {
      base: 'border',
      fallbackBase: 'border',
    },
    {
      base: 'border',
      suffix: 'width',
      fallbackBase: 'border',
    },
    {
      base: 'border',
      suffix: 'style',
      fallbackBase: 'border',
    },
    {
      base: 'border',
      suffix: 'color',
      fallbackBase: 'border',
    },
  ].forEach((property) => {
    const all = createPropertyName(property.base, property.suffix);
    const inline = createPropertyName(property.base, 'inline', property.suffix);
    const inlineStart = createPropertyName(
      property.base,
      'inline-start',
      property.suffix
    );
    const inlineEnd = createPropertyName(
      property.base,
      'inline-end',
      property.suffix
    );
    const block = createPropertyName(property.base, 'block', property.suffix);
    const blockStart = createPropertyName(
      property.base,
      'block-start',
      property.suffix
    );
    const blockEnd = createPropertyName(
      property.base,
      'block-end',
      property.suffix
    );
    const fallbackInlineStart = createPropertyName(
      property.fallbackBase,
      'left',
      property.suffix
    );
    const fallbackInlineEnd = createPropertyName(
      property.fallbackBase,
      'right',
      property.suffix
    );
    const fallbackBlockStart = createPropertyName(
      property.fallbackBase,
      'top',
      property.suffix
    );
    const fallbackBlockEnd = createPropertyName(
      property.fallbackBase,
      'bottom',
      property.suffix
    );

    const hasInlineStart = isSupported(inlineStart);
    const hasInlineEnd = isSupported(inlineEnd);
    const hasBlockStart = isSupported(blockStart);
    const hasBlockEnd = isSupported(blockEnd);
    const hasInline = isSupported(inline);
    const hasBlock = isSupported(block);
    const hasAll = isSupported(all);

    if (!hasInlineStart) {
      transforms.set(
        inlineStart,
        inlineReplacementTransform([fallbackInlineStart], [fallbackInlineEnd])
      );
    }

    if (!hasInlineEnd) {
      transforms.set(
        inlineEnd,
        inlineReplacementTransform([fallbackInlineEnd], [fallbackInlineStart])
      );
    }

    if (!hasBlockStart) {
      transforms.set(blockStart, replacementTransform([fallbackBlockStart]));
    }

    if (!hasBlockEnd) {
      transforms.set(blockEnd, replacementTransform([fallbackBlockEnd]));
    }

    if (!hasInline) {
      if (hasInlineStart && hasInlineEnd) {
        transforms.set(inline, replacementTransform([inlineStart, inlineEnd]));
      } else {
        transforms.set(
          inline,
          inlineReplacementTransform(
            [fallbackInlineStart, fallbackInlineEnd],
            [fallbackInlineEnd, fallbackInlineStart]
          )
        );
      }
    }

    if (!hasBlock) {
      if (hasBlockStart && hasBlockEnd) {
        transforms.set(block, replacementTransform([blockStart, blockEnd]));
      } else {
        transforms.set(
          block,
          replacementTransform([fallbackBlockStart, fallbackBlockEnd])
        );
      }
    }

    if (!hasAll) {
      if (hasInline && hasBlock) {
        transforms.set(all, replacementTransform([inline, block]));
      } else if (
        hasInlineStart &&
        hasInlineEnd &&
        hasBlockStart &&
        hasBlockEnd
      ) {
        transforms.set(
          all,
          replacementTransform([inlineStart, inlineEnd, blockStart, blockEnd])
        );
      } else {
        transforms.set(
          all,
          inlineReplacementTransform(
            [
              fallbackInlineStart,
              fallbackBlockStart,
              fallbackInlineEnd,
              fallbackBlockEnd,
            ],
            [
              fallbackInlineEnd,
              fallbackBlockStart,
              fallbackInlineStart,
              fallbackBlockEnd,
            ]
          )
        );
      }
    }
  });

  return (element): undefined | string => {
    if (element.type !== RULESET || element.root !== null) {
      return undefined;
    }

    const newRules: Element[] = [];
    const prependedRuleSets: Element[] = [];

    for (const child of element.children as Element[]) {
      if (child.type !== DECLARATION) {
        newRules.push(child);
        continue;
      }

      const transform = transforms.get(child.props as string);

      if (!transform) {
        newRules.push(child);
        continue;
      }

      transform(element, child, newRules, prependedRuleSets);
    }

    element.children = newRules;
    element.return = '';
    return serialize(prependedRuleSets, stringify);
  };
};
