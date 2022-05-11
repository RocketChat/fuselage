import { parser } from '../src';
import { bold, plain, orderedList, orderedListItem } from '../src/utils';

test.each([
  [
    `
7. First item
2. Second item
8. Third item
4. *Fourth item*
15. *Fifteenth item*
`.trim(),
    [
      orderedList([
        orderedListItem('7', [plain('First item')]),
        orderedListItem('2', [plain('Second item')]),
        orderedListItem('8', [plain('Third item')]),
        orderedListItem('4', [bold([plain('Fourth item')])]),
        orderedListItem('15', [bold([plain('Fifteenth item')])]),
      ]),
    ],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
