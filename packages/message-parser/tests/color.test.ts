import assert from 'assert';

import { parser } from '../src';
import { color, paragraph, plain } from '../src/utils';

describe('Color', () => {
  it('should match color:#ccc', () => {
    const [tokens] = parser('color:#ccc');
    assert.deepEqual(tokens, paragraph([color('#ccc')]));
  });

  it('should match color:#cccc', () => {
    const [tokens] = parser('color:#cccc');
    assert.deepEqual(tokens, paragraph([color('#cccc')]));
  });

  it('should match color:#c7c7c7', () => {
    const [tokens] = parser('color:#c7c7c7');
    assert.deepEqual(tokens, paragraph([color('#c7c7c7')]));
  });
  it('should match color:#c7c7c7c7', () => {
    const [tokens] = parser('color:#c7c7c7c7');
    assert.deepEqual(tokens, paragraph([color('#c7c7c7c7')]));
  });

  it('should not match color:#c7c7c7c7c7', () => {
    const [tokens] = parser('color:#c7c7c7c7c7');
    assert.deepEqual(tokens, paragraph([plain('color:#c7c7c7c7c7')]));
  });

  it('should not match color:#c7', () => {
    const [tokens] = parser('color:#c7');
    assert.deepEqual(tokens, paragraph([plain('color:#c7')]));
  });
});
