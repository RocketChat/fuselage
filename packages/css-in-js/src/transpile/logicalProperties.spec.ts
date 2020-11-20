import { createTranspileMiddleware } from '.';
import { transpile } from '..';

it('transpiles simple properties', () => {
  expect(transpile('div', 'color: inherit;')).toBe('div{color:inherit;}');
});

it('transpiles with vendor prefixing', () => {
  expect(transpile('div', 'display: flex;')).toBe(
    'div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}'
  );
});

const propertiesWithLogicalValues = [
  ['float'],
  ['clear', '-webkit-clear'],
  ['text-align', '-webkit-text-align'],
];

const unilateralInlineProperties = [
  [
    'border-start-start-radius',
    'border-top-left-radius',
    'border-top-right-radius',
  ],
  [
    'border-start-end-radius',
    'border-top-right-radius',
    'border-top-left-radius',
  ],
  [
    'border-end-start-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
  ],
  [
    'border-end-end-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',
  ],
  ['inset-inline-start', 'left', 'right'],
  ['inset-inline-end', 'right', 'left'],
  ['border-inline-start', 'border-left', 'border-right'],
  ['border-inline-end', 'border-right', 'border-left'],
  ['border-inline-start-width', 'border-left-width', 'border-right-width'],
  ['border-inline-end-width', 'border-right-width', 'border-left-width'],
  ['border-inline-start-style', 'border-left-style', 'border-right-style'],
  ['border-inline-end-style', 'border-right-style', 'border-left-style'],
  ['border-inline-start-color', 'border-left-color', 'border-right-color'],
  ['border-inline-end-color', 'border-right-color', 'border-left-color'],
];

const vendorPrefixedUnilateralInlineProperties = [
  [
    'margin-inline-start',
    '-webkit-margin-start',
    'margin-left',
    'margin-right',
  ],
  ['margin-inline-end', '-webkit-margin-end', 'margin-right', 'margin-left'],
  [
    'padding-inline-start',
    '-webkit-padding-start',
    'padding-left',
    'padding-right',
  ],
  [
    'padding-inline-end',
    '-webkit-padding-end',
    'padding-right',
    'padding-left',
  ],
];

const bilateralInlineProperties = [
  [
    'border-inline',
    'border-inline-start',
    'border-inline-end',
    'border-left',
    'border-right',
  ],
  [
    'border-inline-width',
    'border-inline-start-width',
    'border-inline-end-width',
    'border-left-width',
    'border-right-width',
  ],
  [
    'border-inline-style',
    'border-inline-start-style',
    'border-inline-end-style',
    'border-left-style',
    'border-right-style',
  ],
  [
    'border-inline-color',
    'border-inline-start-color',
    'border-inline-end-color',
    'border-left-color',
    'border-right-color',
  ],
  ['inset-inline', 'inset-inline-start', 'inset-inline-end', 'left', 'right'],
  [
    'margin-inline',
    'margin-inline-start',
    'margin-inline-end',
    'margin-left',
    'margin-right',
  ],
  [
    'padding-inline',
    'padding-inline-start',
    'padding-inline-end',
    'padding-left',
    'padding-right',
  ],
];

const unilateralBlockProperties = [
  ['inset-block-start', 'top'],
  ['inset-block-end', 'bottom'],
  ['margin-block-start', 'margin-top'],
  ['margin-block-end', 'margin-bottom'],
  ['padding-block-start', 'padding-top'],
  ['padding-block-end', 'padding-bottom'],
  ['border-block-start', 'border-top'],
  ['border-block-end', 'border-bottom'],
  ['border-block-start-width', 'border-top-width'],
  ['border-block-end-width', 'border-bottom-width'],
  ['border-block-start-style', 'border-top-style'],
  ['border-block-end-style', 'border-bottom-style'],
  ['border-block-start-color', 'border-top-color'],
  ['border-block-end-color', 'border-bottom-color'],
];

const bilateralBlockProperties = [
  [
    'border-block',
    'border-block-start',
    'border-block-end',
    'border-top',
    'border-bottom',
  ],
  [
    'border-block-width',
    'border-block-start-width',
    'border-block-end-width',
    'border-top-width',
    'border-bottom-width',
  ],
  [
    'border-block-style',
    'border-block-start-style',
    'border-block-end-style',
    'border-top-style',
    'border-bottom-style',
  ],
  [
    'border-block-color',
    'border-block-start-color',
    'border-block-end-color',
    'border-top-color',
    'border-bottom-color',
  ],
  ['inset-block', 'inset-block-start', 'inset-block-end', 'top', 'bottom'],
  [
    'margin-block',
    'margin-block-start',
    'margin-block-end',
    'margin-top',
    'margin-bottom',
  ],
  [
    'padding-block',
    'padding-block-start',
    'padding-block-end',
    'padding-top',
    'padding-bottom',
  ],
];

const omnilateralProperties = [
  [
    'inset',
    'inset-inline',
    'inset-block',
    'inset-inline-start',
    'inset-inline-end',
    'inset-block-start',
    'inset-block-end',
    'left',
    'right',
    'top',
    'bottom',
  ],
];

const sizeProperties = [
  ['inline-size', 'width'],
  ['min-inline-size', 'min-width'],
  ['max-inline-size', 'max-width'],
  ['block-size', 'height'],
  ['min-block-size', 'min-height'],
  ['max-block-size', 'max-height'],
];

describe.each(propertiesWithLogicalValues)('%s', (property: string) => {
  describe.each([
    ['start', 'left', 'right'],
    ['inline-start', 'left', 'right'],
    ['end', 'right', 'left'],
    ['inline-end', 'right', 'left'],
  ])('%s', (value: string, startValue: string, endValue: string) => {
    it('is supported', () => {
      expect(
        transpile(
          'div',
          `${property}: ${value};`,
          createTranspileMiddleware({
            isPropertyValueSupported: (p, v) => p === property && v === value,
          })
        )
      ).toMatch(new RegExp(`^div\\{(.*;)?${property}:${value};\\}$`));
    });

    it('fallbacks', () => {
      expect(transpile('div', `${property}: ${value};`)).toMatch(
        new RegExp(
          `^\\[dir=rtl\\] div\\{(.*;)?${property}:${endValue};\\}div\\{(.*;)?${property}:${startValue};\\}$`
        )
      );
    });
  });
});

describe.each(unilateralInlineProperties)(
  `Unilateral inline property %s`,
  (property: string, startProperty: string, endProperty: string) => {
    it(`supports ${property}`, () => {
      expect(
        transpile(
          'div',
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) => p === property,
          })
        )
      ).toBe(`div{${property}:inherit;}`);
    });

    it(`fallbacks ${property} to ${startProperty} and ${endProperty}`, () => {
      expect(transpile(`div`, `${property}: inherit;`)).toBe(
        `html:not([dir=rtl]) div{${startProperty}:inherit;}[dir=rtl] div{${endProperty}:inherit;}`
      );
    });
  }
);

describe.each(vendorPrefixedUnilateralInlineProperties)(
  `Inline property %s with vendor-prefixed variant %s`,
  (
    property: string,
    prefixedProperty: string,
    startProperty: string,
    endProperty: string
  ) => {
    it(`supports ${property} (with prefixed ${prefixedProperty})`, () => {
      expect(
        transpile(
          'div',
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) => p === property,
          })
        )
      ).toBe(`div{${prefixedProperty}:inherit;${property}:inherit;}`);
    });

    it(`fallbacks ${property} to ${startProperty} and ${endProperty}`, () => {
      expect(transpile(`div`, `${property}: inherit;`)).toBe(
        `html:not([dir=rtl]) div{${startProperty}:inherit;}[dir=rtl] div{${endProperty}:inherit;}`
      );
    });
  }
);

describe.each(bilateralInlineProperties)(
  `Bilateral inline property %s`,
  (
    property: string,
    startProperty: string,
    endProperty: string,
    startFallbackProperty: string,
    endFallbackProperty: string
  ) => {
    it(`supports ${property}`, () => {
      expect(
        transpile(
          `div`,
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) => p === property,
          })
        )
      ).toBe(`div{${property}:inherit;}`);
    });

    it(`fallbacks ${property} to ${startProperty} and ${endProperty}`, () => {
      expect(
        transpile(
          `div`,
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) =>
              p === startProperty || p === endProperty,
          })
        )
      ).toBe(`div{${startProperty}:inherit;${endProperty}:inherit;}`);
    });

    it(`fallbacks ${property} to ${startFallbackProperty} and ${endFallbackProperty}`, () => {
      expect(transpile(`div`, `${property}: inherit;`)).toBe(
        `html:not([dir=rtl]) div{${startFallbackProperty}:inherit;${endFallbackProperty}:inherit;}[dir=rtl] div{${endFallbackProperty}:inherit;${startFallbackProperty}:inherit;}`
      );
    });
  }
);

describe.each(unilateralBlockProperties)(
  `Block property %s`,
  (property: string, fallbackProperty: string) => {
    it(`supports ${property}`, () => {
      expect(
        transpile(
          'div',
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) => p === property,
          })
        )
      ).toBe(`div{${property}:inherit;}`);
    });

    it(`fallbacks ${property} to ${fallbackProperty}`, () => {
      expect(transpile(`div`, `${property}: inherit;`)).toBe(
        `div{${fallbackProperty}:inherit;}`
      );
    });
  }
);

describe.each(bilateralBlockProperties)(
  'Bilateral block property %s',
  (
    property: string,
    startProperty: string,
    endProperty: string,
    startFallbackProperty: string,
    endFallbackProperty: string
  ) => {
    it(`supports ${property}`, () => {
      expect(
        transpile(
          `div`,
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) => p === property,
          })
        )
      ).toBe(`div{${property}:inherit;}`);
    });

    it(`fallbacks ${property} to ${startProperty} and ${endProperty}`, () => {
      expect(
        transpile(
          `div`,
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) =>
              p === startProperty || p === endProperty,
          })
        )
      ).toBe(`div{${startProperty}:inherit;${endProperty}:inherit;}`);
    });

    it(`fallbacks ${property} to ${startFallbackProperty} and ${endFallbackProperty}`, () => {
      expect(transpile(`div`, `${property}: inherit;`)).toBe(
        `div{${startFallbackProperty}:inherit;${endFallbackProperty}:inherit;}`
      );
    });
  }
);

describe.each(omnilateralProperties)(
  `Omnilateral property %s`,
  (
    property: string,
    inlineProperty: string,
    blockProperty: string,
    inlineStartProperty: string,
    inlineEndProperty: string,
    blockStartProperty: string,
    blockEndProperty: string,
    inlineStartFallbackProperty: string,
    inlineEndFallbackProperty: string,
    blockStartFallbackProperty: string,
    blockEndFallbackProperty: string
  ) => {
    it(`supports ${property}`, () => {
      expect(
        transpile(
          `div`,
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) => p === property,
          })
        )
      ).toBe(`div{${property}:inherit;}`);
    });

    it(`supports ${inlineProperty} and ${blockProperty}`, () => {
      expect(
        transpile(
          `div`,
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) =>
              p === inlineProperty || p === blockProperty,
          })
        )
      ).toBe(`div{${inlineProperty}:inherit;${blockProperty}:inherit;}`);
    });

    it(`supports ${inlineStartProperty}, ${inlineEndProperty}, ${blockStartProperty}, and ${blockEndProperty}`, () => {
      expect(
        transpile(
          `div`,
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) =>
              p === inlineStartProperty ||
              p === inlineEndProperty ||
              p === blockStartProperty ||
              p === blockEndProperty,
          })
        )
      ).toBe(
        `div{${inlineStartProperty}:inherit;${inlineEndProperty}:inherit;${blockStartProperty}:inherit;${blockEndProperty}:inherit;}`
      );
    });

    it(`fallbacks`, () => {
      expect(transpile(`div`, `${property}: inherit;`)).toBe(
        `html:not([dir=rtl]) div{${inlineStartFallbackProperty}:inherit;${inlineEndFallbackProperty}:inherit;}[dir=rtl] div{${inlineEndFallbackProperty}:inherit;${inlineStartFallbackProperty}:inherit;}div{${blockStartFallbackProperty}:inherit;${blockEndFallbackProperty}:inherit;}`
      );
    });
  }
);

describe.each(sizeProperties)(
  `Size property %s`,
  (property: string, fallbackProperty: string) => {
    it(`supports ${property}`, () => {
      expect(
        transpile(
          'div',
          `${property}: inherit;`,
          createTranspileMiddleware({
            isPropertySupported: (p: string) => p === property,
          })
        )
      ).toBe(`div{${property}:inherit;}`);
    });

    it(`fallbacks ${property} to ${fallbackProperty}`, () => {
      expect(transpile(`div`, `${property}: inherit;`)).toBe(
        `div{${fallbackProperty}:inherit;}`
      );
    });
  }
);
