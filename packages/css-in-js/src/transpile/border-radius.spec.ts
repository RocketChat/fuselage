import { transpile } from '..';

describe('border-start-start-radius', () => {
  it('supports border-start-start-radius', () => {
    expect(transpile('div', 'border-start-start-radius: inherit;', {
      supportedProperties: ['border-start-start-radius'],
      prefix: false,
    }))
      .toBe('div{border-start-start-radius:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-start-start-radius: inherit;'))
      .toBe('html:not([dir=rtl]) div{border-top-left-radius:inherit;}[dir=rtl] div{border-top-right-radius:inherit;}');
  });
});

describe('border-start-end-radius', () => {
  it('supports border-start-end-radius', () => {
    expect(transpile('div', 'border-start-end-radius: inherit;', {
      supportedProperties: ['border-start-end-radius'],
      prefix: false,
    }))
      .toBe('div{border-start-end-radius:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-start-end-radius: inherit;'))
      .toBe('html:not([dir=rtl]) div{border-top-right-radius:inherit;}[dir=rtl] div{border-top-left-radius:inherit;}');
  });
});

describe('border-end-start-radius', () => {
  it('supports border-end-start-radius', () => {
    expect(transpile('div', 'border-end-start-radius: inherit;', {
      supportedProperties: ['border-end-start-radius'],
      prefix: false,
    }))
      .toBe('div{border-end-start-radius:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-end-start-radius: inherit;'))
      .toBe('html:not([dir=rtl]) div{border-bottom-left-radius:inherit;}[dir=rtl] div{border-bottom-right-radius:inherit;}');
  });
});

describe('border-end-end-radius', () => {
  it('supports border-end-end-radius', () => {
    expect(transpile('div', 'border-end-end-radius: inherit;', {
      supportedProperties: ['border-end-end-radius'],
      prefix: false,
    }))
      .toBe('div{border-end-end-radius:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-end-end-radius: inherit;'))
      .toBe('html:not([dir=rtl]) div{border-bottom-right-radius:inherit;}[dir=rtl] div{border-bottom-left-radius:inherit;}');
  });
});
