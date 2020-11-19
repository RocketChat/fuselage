import { transpile } from '..';

describe('inset', () => {
  it('supports inset', () => {
    expect(
      transpile('div', 'inset: inherit;', {
        supportedProperties: ['inset'],
      })
    ).toBe('div{inset:inherit;}');
  });

  it('supports inset-inline and inset-block', () => {
    expect(
      transpile('div', 'inset: inherit;', {
        supportedProperties: ['inset-inline', 'inset-block'],
      })
    ).toBe('div{inset-inline:inherit;inset-block:inherit;}');
  });

  it('supports inset-inline-start, inset-inline-end, inset-block-start, and inset-block-end', () => {
    expect(
      transpile('div', 'inset: inherit;', {
        supportedProperties: [
          'inset-inline-start',
          'inset-inline-end',
          'inset-block-start',
          'inset-block-end',
        ],
        prefix: false,
      })
    ).toBe(
      'div{inset-inline-start:inherit;inset-inline-end:inherit;inset-block-start:inherit;inset-block-end:inherit;}'
    );
  });

  it('fallbacks', () => {
    expect(transpile('div', 'inset: inherit;')).toBe(
      'html:not([dir=rtl]) div{left:inherit;right:inherit;}[dir=rtl] div{right:inherit;left:inherit;}div{top:inherit;bottom:inherit;}'
    );
  });
});

describe('inset-inline', () => {
  it('supports inset-inline', () => {
    expect(
      transpile('div', 'inset-inline: inherit;', {
        supportedProperties: ['inset-inline'],
        prefix: false,
      })
    ).toBe('div{inset-inline:inherit;}');
  });

  it('supports inset-inline-start and inset-inline-end', () => {
    expect(
      transpile('div', 'inset-inline: inherit;', {
        supportedProperties: ['inset-inline-start', 'inset-inline-end'],
        prefix: false,
      })
    ).toBe('div{inset-inline-start:inherit;inset-inline-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'inset-inline: inherit;')).toBe(
      'html:not([dir=rtl]) div{left:inherit;right:inherit;}[dir=rtl] div{right:inherit;left:inherit;}'
    );
  });
});

describe('inset-inline-start', () => {
  it('supports inset-inline-start and inset-inline-end', () => {
    expect(
      transpile('div', 'inset-inline-start: inherit;', {
        supportedProperties: ['inset-inline-start'],
        prefix: false,
      })
    ).toBe('div{inset-inline-start:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'inset-inline-start: inherit;')).toBe(
      'html:not([dir=rtl]) div{left:inherit;}[dir=rtl] div{right:inherit;}'
    );
  });
});

describe('inset-inline-end', () => {
  it('supports inset-inline-start and inset-inline-end', () => {
    expect(
      transpile('div', 'inset-inline-end: inherit;', {
        supportedProperties: ['inset-inline-end'],
        prefix: false,
      })
    ).toBe('div{inset-inline-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'inset-inline-end: inherit;')).toBe(
      'html:not([dir=rtl]) div{right:inherit;}[dir=rtl] div{left:inherit;}'
    );
  });
});

describe('inset-block', () => {
  it('supports inset-block', () => {
    expect(
      transpile('div', 'inset-block: inherit;', {
        supportedProperties: ['inset-block'],
        prefix: false,
      })
    ).toBe('div{inset-block:inherit;}');
  });

  it('supports inset-block-start and inset-block-end', () => {
    expect(
      transpile('div', 'inset-block: inherit;', {
        supportedProperties: ['inset-block-start', 'inset-block-end'],
        prefix: false,
      })
    ).toBe('div{inset-block-start:inherit;inset-block-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'inset-block: inherit;')).toBe(
      'div{top:inherit;bottom:inherit;}'
    );
  });
});

describe('inset-block-start', () => {
  it('supports inset-block-start and inset-block-end', () => {
    expect(
      transpile('div', 'inset-block-start: inherit;', {
        supportedProperties: ['inset-block-start'],
        prefix: false,
      })
    ).toBe('div{inset-block-start:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'inset-block-start: inherit;')).toBe(
      'div{top:inherit;}'
    );
  });
});

describe('inset-block-end', () => {
  it('supports inset-block-start and inset-block-end', () => {
    expect(
      transpile('div', 'inset-block-end: inherit;', {
        supportedProperties: ['inset-block-end'],
        prefix: false,
      })
    ).toBe('div{inset-block-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'inset-block-end: inherit;')).toBe(
      'div{bottom:inherit;}'
    );
  });
});
