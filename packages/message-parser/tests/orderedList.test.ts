import { parser } from '../src';
import { bold, plain, orderedList, listItem } from '../src/utils';

test.each([
  [
    `
1. First item
2. Second item
3. Third item
4. *Fourth item*
`.trim(),
    [
      orderedList([
        listItem([plain('First item')]),
        listItem([plain('Second item')]),
        listItem([plain('Third item')]),
        listItem([bold([plain('Fourth item')])]),
      ]),
    ],
  ],

  //   [
  //     `
  // 1. First item
  // 2. Second item
  // 3. Third item
  //     1. First item
  //     2. Second item
  // 4. *Fourth item*
  // `.trim(),
  //     [
  //       orderedList([
  //         listItem([plain('First item')]),
  //         listItem([plain('Second item')]),
  //         listItem([plain('Third item')]),
  //         listItem([bold([plain('Fourth item')])]),
  //       ]),
  //     ],
  //   ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
