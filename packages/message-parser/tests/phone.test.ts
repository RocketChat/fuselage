import assert from 'assert';

import { parser } from '../src';
import { link, paragraph, plain, bold } from '../src/utils';

describe('Phone', () => {
  it('should match a phone number +07563546725', () => {
    const [tokens] = parser('+07563546725');
    assert.deepEqual(tokens, paragraph([link('+07563546725')]));
  });

  it('should match a phone number +075-63546725', () => {
    const [tokens] = parser('+075-63546725');
    assert.deepEqual(tokens, paragraph([link('+075-63546725')]));
  });

  it('should match a phone number +(075)-63546725', () => {
    const [tokens] = parser('+(075)-63546725');
    assert.deepEqual(tokens, paragraph([link('+(075)-63546725')]));
  });

  it('should match a phone number +(075)63546725', () => {
    const [tokens] = parser('+(075)63546725');
    assert.deepEqual(tokens, paragraph([link('+(075)63546725')]));
  });

  it('should match a phone number inside a markup [here](+(075)63546725)', () => {
    const [tokens] = parser('[here](+(075)63546725)');
    assert.deepEqual(
      tokens,
      paragraph([link('+(075)63546725', plain('here'))])
    );
  });
  it('should match a phone number inside a markup [**here**](+(075)63546725)', () => {
    const [tokens] = parser('[**here**](+(075)63546725)');
    assert.deepEqual(
      tokens,
      paragraph([link('+(075)63546725', bold([plain('here')]))])
    );
  });
});
