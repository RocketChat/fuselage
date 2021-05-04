import { parser } from '../src';
import { paragraph, emoji } from '../src/utils';

test.each([[':smile:', [paragraph([emoji('smile')])]]])(
  'parses %p',
  (input, output) => {
    expect(parser(input)).toMatchObject(output);
  }
);
