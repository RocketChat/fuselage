import { transpile } from '..';

describe('border-inline', () => {
  it('supports border-inline', () => {
    expect(
      transpile('div', 'border-inline: inherit;', {
        supportedProperties: ['border-inline'],
      })
    ).toBe('div{border-inline:inherit;}');
  });

  it('supports border-inline-start and border-inline-end', () => {
    expect(
      transpile('div', 'border-inline: inherit;', {
        supportedProperties: ['border-inline-start', 'border-inline-end'],
      })
    ).toBe('div{border-inline-start:inherit;border-inline-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-left:inherit;border-right:inherit;}[dir=rtl] div{border-right:inherit;border-left:inherit;}'
    );
  });
});

describe('border-inline-start', () => {
  it('supports border-inline-start and border-inline-end', () => {
    expect(
      transpile('div', 'border-inline-start: inherit;', {
        supportedProperties: ['border-inline-start'],
      })
    ).toBe('div{border-inline-start:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-start: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-left:inherit;}[dir=rtl] div{border-right:inherit;}'
    );
  });
});

describe('border-inline-end', () => {
  it('supports border-inline-start and border-inline-end', () => {
    expect(
      transpile('div', 'border-inline-end: inherit;', {
        supportedProperties: ['border-inline-end'],
      })
    ).toBe('div{border-inline-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-end: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-right:inherit;}[dir=rtl] div{border-left:inherit;}'
    );
  });
});

describe('border-block', () => {
  it('supports border-block', () => {
    expect(
      transpile('div', 'border-block: inherit;', {
        supportedProperties: ['border-block'],
      })
    ).toBe('div{border-block:inherit;}');
  });

  it('supports border-block-start and border-block-end', () => {
    expect(
      transpile('div', 'border-block: inherit;', {
        supportedProperties: ['border-block-start', 'border-block-end'],
      })
    ).toBe('div{border-block-start:inherit;border-block-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block: inherit;')).toBe(
      'div{border-top:inherit;border-bottom:inherit;}'
    );
  });
});

describe('border-block-start', () => {
  it('supports border-block-start and border-block-end', () => {
    expect(
      transpile('div', 'border-block-start: inherit;', {
        supportedProperties: ['border-block-start'],
      })
    ).toBe('div{border-block-start:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-start: inherit;')).toBe(
      'div{border-top:inherit;}'
    );
  });
});

describe('border-block-end', () => {
  it('supports border-block-start and border-block-end', () => {
    expect(
      transpile('div', 'border-block-end: inherit;', {
        supportedProperties: ['border-block-end'],
      })
    ).toBe('div{border-block-end:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-end: inherit;')).toBe(
      'div{border-bottom:inherit;}'
    );
  });
});

describe('border-inline-width', () => {
  it('supports border-inline-width', () => {
    expect(
      transpile('div', 'border-inline-width: inherit;', {
        supportedProperties: ['border-inline-width'],
      })
    ).toBe('div{border-inline-width:inherit;}');
  });

  it('supports border-inline-start-width and border-inline-end-width', () => {
    expect(
      transpile('div', 'border-inline-width: inherit;', {
        supportedProperties: [
          'border-inline-start-width',
          'border-inline-end-width',
        ],
      })
    ).toBe(
      'div{border-inline-start-width:inherit;border-inline-end-width:inherit;}'
    );
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-width: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-left-width:inherit;border-right-width:inherit;}[dir=rtl] div{border-right-width:inherit;border-left-width:inherit;}'
    );
  });
});

describe('border-inline-start-width', () => {
  it('supports border-inline-start-width and border-inline-end-width', () => {
    expect(
      transpile('div', 'border-inline-start-width: inherit;', {
        supportedProperties: ['border-inline-start-width'],
      })
    ).toBe('div{border-inline-start-width:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-start-width: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-left-width:inherit;}[dir=rtl] div{border-right-width:inherit;}'
    );
  });
});

describe('border-inline-end-width', () => {
  it('supports border-inline-start-width and border-inline-end-width', () => {
    expect(
      transpile('div', 'border-inline-end-width: inherit;', {
        supportedProperties: ['border-inline-end-width'],
      })
    ).toBe('div{border-inline-end-width:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-end-width: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-right-width:inherit;}[dir=rtl] div{border-left-width:inherit;}'
    );
  });
});

describe('border-block-width', () => {
  it('supports border-block-width', () => {
    expect(
      transpile('div', 'border-block-width: inherit;', {
        supportedProperties: ['border-block-width'],
      })
    ).toBe('div{border-block-width:inherit;}');
  });

  it('supports border-block-start-width and border-block-end-width', () => {
    expect(
      transpile('div', 'border-block-width: inherit;', {
        supportedProperties: [
          'border-block-start-width',
          'border-block-end-width',
        ],
      })
    ).toBe(
      'div{border-block-start-width:inherit;border-block-end-width:inherit;}'
    );
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-width: inherit;')).toBe(
      'div{border-top-width:inherit;border-bottom-width:inherit;}'
    );
  });
});

describe('border-block-start-width', () => {
  it('supports border-block-start-width and border-block-end-width', () => {
    expect(
      transpile('div', 'border-block-start-width: inherit;', {
        supportedProperties: ['border-block-start-width'],
      })
    ).toBe('div{border-block-start-width:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-start-width: inherit;')).toBe(
      'div{border-top-width:inherit;}'
    );
  });
});

describe('border-block-end-width', () => {
  it('supports border-block-start-width and border-block-end-width', () => {
    expect(
      transpile('div', 'border-block-end-width: inherit;', {
        supportedProperties: ['border-block-end-width'],
      })
    ).toBe('div{border-block-end-width:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-end-width: inherit;')).toBe(
      'div{border-bottom-width:inherit;}'
    );
  });
});

describe('border-inline-style', () => {
  it('supports border-inline-style', () => {
    expect(
      transpile('div', 'border-inline-style: inherit;', {
        supportedProperties: ['border-inline-style'],
      })
    ).toBe('div{border-inline-style:inherit;}');
  });

  it('supports border-inline-start-style and border-inline-end-style', () => {
    expect(
      transpile('div', 'border-inline-style: inherit;', {
        supportedProperties: [
          'border-inline-start-style',
          'border-inline-end-style',
        ],
      })
    ).toBe(
      'div{border-inline-start-style:inherit;border-inline-end-style:inherit;}'
    );
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-style: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-left-style:inherit;border-right-style:inherit;}[dir=rtl] div{border-right-style:inherit;border-left-style:inherit;}'
    );
  });
});

describe('border-inline-start-style', () => {
  it('supports border-inline-start-style and border-inline-end-style', () => {
    expect(
      transpile('div', 'border-inline-start-style: inherit;', {
        supportedProperties: ['border-inline-start-style'],
      })
    ).toBe('div{border-inline-start-style:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-start-style: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-left-style:inherit;}[dir=rtl] div{border-right-style:inherit;}'
    );
  });
});

describe('border-inline-end-style', () => {
  it('supports border-inline-start-style and border-inline-end-style', () => {
    expect(
      transpile('div', 'border-inline-end-style: inherit;', {
        supportedProperties: ['border-inline-end-style'],
      })
    ).toBe('div{border-inline-end-style:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-end-style: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-right-style:inherit;}[dir=rtl] div{border-left-style:inherit;}'
    );
  });
});

describe('border-block-style', () => {
  it('supports border-block-style', () => {
    expect(
      transpile('div', 'border-block-style: inherit;', {
        supportedProperties: ['border-block-style'],
      })
    ).toBe('div{border-block-style:inherit;}');
  });

  it('supports border-block-start-style and border-block-end-style', () => {
    expect(
      transpile('div', 'border-block-style: inherit;', {
        supportedProperties: [
          'border-block-start-style',
          'border-block-end-style',
        ],
      })
    ).toBe(
      'div{border-block-start-style:inherit;border-block-end-style:inherit;}'
    );
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-style: inherit;')).toBe(
      'div{border-top-style:inherit;border-bottom-style:inherit;}'
    );
  });
});

describe('border-block-start-style', () => {
  it('supports border-block-start-style and border-block-end-style', () => {
    expect(
      transpile('div', 'border-block-start-style: inherit;', {
        supportedProperties: ['border-block-start-style'],
      })
    ).toBe('div{border-block-start-style:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-start-style: inherit;')).toBe(
      'div{border-top-style:inherit;}'
    );
  });
});

describe('border-block-end-style', () => {
  it('supports border-block-start-style and border-block-end-style', () => {
    expect(
      transpile('div', 'border-block-end-style: inherit;', {
        supportedProperties: ['border-block-end-style'],
      })
    ).toBe('div{border-block-end-style:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-end-style: inherit;')).toBe(
      'div{border-bottom-style:inherit;}'
    );
  });
});

describe('border-inline-color', () => {
  it('supports border-inline-color', () => {
    expect(
      transpile('div', 'border-inline-color: inherit;', {
        supportedProperties: ['border-inline-color'],
      })
    ).toBe('div{border-inline-color:inherit;}');
  });

  it('supports border-inline-start-color and border-inline-end-color', () => {
    expect(
      transpile('div', 'border-inline-color: inherit;', {
        supportedProperties: [
          'border-inline-start-color',
          'border-inline-end-color',
        ],
      })
    ).toBe(
      'div{border-inline-start-color:inherit;border-inline-end-color:inherit;}'
    );
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-color: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-left-color:inherit;border-right-color:inherit;}[dir=rtl] div{border-right-color:inherit;border-left-color:inherit;}'
    );
  });
});

describe('border-inline-start-color', () => {
  it('supports border-inline-start-color and border-inline-end-color', () => {
    expect(
      transpile('div', 'border-inline-start-color: inherit;', {
        supportedProperties: ['border-inline-start-color'],
      })
    ).toBe('div{border-inline-start-color:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-start-color: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-left-color:inherit;}[dir=rtl] div{border-right-color:inherit;}'
    );
  });
});

describe('border-inline-end-color', () => {
  it('supports border-inline-start-color and border-inline-end-color', () => {
    expect(
      transpile('div', 'border-inline-end-color: inherit;', {
        supportedProperties: ['border-inline-end-color'],
      })
    ).toBe('div{border-inline-end-color:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-inline-end-color: inherit;')).toBe(
      'html:not([dir=rtl]) div{border-right-color:inherit;}[dir=rtl] div{border-left-color:inherit;}'
    );
  });
});

describe('border-block-color', () => {
  it('supports border-block-color', () => {
    expect(
      transpile('div', 'border-block-color: inherit;', {
        supportedProperties: ['border-block-color'],
      })
    ).toBe('div{border-block-color:inherit;}');
  });

  it('supports border-block-start-color and border-block-end-color', () => {
    expect(
      transpile('div', 'border-block-color: inherit;', {
        supportedProperties: [
          'border-block-start-color',
          'border-block-end-color',
        ],
      })
    ).toBe(
      'div{border-block-start-color:inherit;border-block-end-color:inherit;}'
    );
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-color: inherit;')).toBe(
      'div{border-top-color:inherit;border-bottom-color:inherit;}'
    );
  });
});

describe('border-block-start-color', () => {
  it('supports border-block-start-color and border-block-end-color', () => {
    expect(
      transpile('div', 'border-block-start-color: inherit;', {
        supportedProperties: ['border-block-start-color'],
      })
    ).toBe('div{border-block-start-color:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-start-color: inherit;')).toBe(
      'div{border-top-color:inherit;}'
    );
  });
});

describe('border-block-end-color', () => {
  it('supports border-block-start-color and border-block-end-color', () => {
    expect(
      transpile('div', 'border-block-end-color: inherit;', {
        supportedProperties: ['border-block-end-color'],
      })
    ).toBe('div{border-block-end-color:inherit;}');
  });

  it('fallbacks', () => {
    expect(transpile('div', 'border-block-end-color: inherit;')).toBe(
      'div{border-bottom-color:inherit;}'
    );
  });
});
