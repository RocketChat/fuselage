import { transpile } from '..';

describe('padding-inline', () => {
  it('supports padding-inline', () => {
    expect(
      transpile('div', 'padding-inline: inherit;', {
        supportedProperties: ['padding-inline'],
        prefix: false,
      })
    ).toBe('div{padding-inline:inherit;}');
  });

  it('supports padding-inline-start and padding-inline-end', () => {
    expect(
      transpile('div', 'padding-inline: inherit;', {
        supportedProperties: ['padding-inline-start', 'padding-inline-end'],
        prefix: false,
      })
    ).toBe('div{padding-inline-start:inherit;padding-inline-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'padding-inline: inherit;')).toBe(
      'html:not([dir=rtl]) div{padding-left:inherit;padding-right:inherit;}[dir=rtl] div{padding-right:inherit;padding-left:inherit;}'
    );
  });
});

describe('padding-inline-start', () => {
  it('supports padding-inline-start', () => {
    expect(
      transpile('div', 'padding-inline-start: inherit;', {
        supportedProperties: ['padding-inline-start'],
        prefix: false,
      })
    ).toBe('div{padding-inline-start:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'padding-inline-start: inherit;')).toBe(
      'html:not([dir=rtl]) div{padding-left:inherit;}[dir=rtl] div{padding-right:inherit;}'
    );
  });
});

describe('padding-inline-end', () => {
  it('supports padding-inline-end', () => {
    expect(
      transpile('div', 'padding-inline-end: inherit;', {
        supportedProperties: ['padding-inline-end'],
        prefix: false,
      })
    ).toBe('div{padding-inline-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'padding-inline-end: inherit;')).toBe(
      'html:not([dir=rtl]) div{padding-right:inherit;}[dir=rtl] div{padding-left:inherit;}'
    );
  });
});

describe('padding-block', () => {
  it('supports padding-block', () => {
    expect(
      transpile('div', 'padding-block: inherit;', {
        supportedProperties: ['padding-block'],
        prefix: false,
      })
    ).toBe('div{padding-block:inherit;}');
  });

  it('supports padding-block-start and padding-block-end', () => {
    expect(
      transpile('div', 'padding-block: inherit;', {
        supportedProperties: ['padding-block-start', 'padding-block-end'],
        prefix: false,
      })
    ).toBe('div{padding-block-start:inherit;padding-block-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'padding-block: inherit;')).toBe(
      'div{padding-top:inherit;padding-bottom:inherit;}'
    );
  });
});

describe('padding-block-start', () => {
  it('supports padding-block-start and padding-block-end', () => {
    expect(
      transpile('div', 'padding-block-start: inherit;', {
        supportedProperties: ['padding-block-start'],
        prefix: false,
      })
    ).toBe('div{padding-block-start:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'padding-block-start: inherit;')).toBe(
      'div{padding-top:inherit;}'
    );
  });
});

describe('padding-block-end', () => {
  it('supports padding-block-start and padding-block-end', () => {
    expect(
      transpile('div', 'padding-block-end: inherit;', {
        supportedProperties: ['padding-block-end'],
        prefix: false,
      })
    ).toBe('div{padding-block-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'padding-block-end: inherit;')).toBe(
      'div{padding-bottom:inherit;}'
    );
  });
});
