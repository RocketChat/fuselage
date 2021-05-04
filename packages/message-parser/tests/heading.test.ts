import { parser } from '../src';
import { heading, plain } from '../src/utils';

it('should return the token and the inner text', () => {
  const [tokens] = parser('# h1');
  expect(tokens).toMatchObject(heading([plain('h1')]));
});
