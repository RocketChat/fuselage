import { parser } from '../src';
import { paragraph, emoji } from '../src/utils';

it('should return the token and the inner text', () => {
  const [tokens] = parser(':smile:');
  expect(tokens).toMatchObject(paragraph([emoji('smile')]));
});
