import { parser } from '../src';
import { unorderedList, plain, listItem, bold } from '../src/utils';

test.each([
  [
    `
- First item
- Second item
- Third item
- *Fourth item*
`.trim(),
    [
      unorderedList([
        listItem([plain('First item')]),
        listItem([plain('Second item')]),
        listItem([plain('Third item')]),
        listItem([bold([plain('Fourth item')])]),
      ]),
    ],
  ],
  [
    `
* First item
* Second item
* Third item
* *Fourth item*
`.trim(),
    [
      unorderedList([
        listItem([plain('First item')]),
        listItem([plain('Second item')]),
        listItem([plain('Third item')]),
        listItem([bold([plain('Fourth item')])]),
      ]),
    ],
  ],

  [
    `
- First item
* Second item
* Third item
* *Fourth item*
`.trim(),
    [
      unorderedList([listItem([plain('First item')])]),
      unorderedList([
        listItem([plain('Second item')]),
        listItem([plain('Third item')]),
        listItem([bold([plain('Fourth item')])]),
      ]),
    ],
  ],
  //   [
  //     `
  // * First item
  // * Second item
  // * Third item
  //     * Indented item
  //     * Indented item
  // * Fourth item
  // `.trim(),
  //     [paragraph([])],
  //   ],
  //   [
  //     `
  // - First item
  // - Second item
  // - Third item
  //     - Indented item
  //     - Indented item
  // - Fourth item
  // `.trim(),
  //     [paragraph([])],
  //   ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
