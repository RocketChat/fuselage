import { parser } from '../src';
import { heading, plain } from '../src/utils';

test.each([['# h1', [heading([plain('h1')])]]])(
  'parses %p',
  (input, output) => {
    expect(parser(input)).toMatchObject(output);
  }
);
