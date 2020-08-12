import { uiKitGeneric } from '.';

describe('uiKitGeneric with an empty parser', () => {
  const parse = uiKitGeneric()({});

  it('should parse an empty payload', () => {
    const payload = [];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('should ignore any blocks', () => {
    const payload = [
      {},
    ];
    expect(parse(payload)).toStrictEqual([]);
  });
});
