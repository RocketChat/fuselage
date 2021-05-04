import { parser } from '../src';
import { color, paragraph, plain } from '../src/utils';

it('should match color:#ccc', () => {
  const [tokens] = parser('color:#ccc');
  expect(tokens).toMatchObject(paragraph([color('#ccc')]));
});

it('should match color:#cccc', () => {
  const [tokens] = parser('color:#cccc');
  expect(tokens).toMatchObject(paragraph([color('#cccc')]));
});

it('should match color:#c7c7c7', () => {
  const [tokens] = parser('color:#c7c7c7');
  expect(tokens).toMatchObject(paragraph([color('#c7c7c7')]));
});

it('should match color:#c7c7c7c7', () => {
  const [tokens] = parser('color:#c7c7c7c7');
  expect(tokens).toMatchObject(paragraph([color('#c7c7c7c7')]));
});

it('should not match color:#c7c7c7c7c7', () => {
  const [tokens] = parser('color:#c7c7c7c7c7');
  expect(tokens).toMatchObject(paragraph([plain('color:#c7c7c7c7c7')]));
});

it('should not match color:#c7', () => {
  const [tokens] = parser('color:#c7');
  expect(tokens).toMatchObject(paragraph([plain('color:#c7')]));
});
