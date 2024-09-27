import type { StoryFn, Meta } from '@storybook/react';

import Box from './Box';

export default {
  title: 'Layout/Box/Rich content/Block',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Here is how rich content will be rendered, in details.',
      },
    },
  },
} satisfies Meta<typeof Box>;

export const hx: StoryFn<typeof Box> = () => (
  <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </>
);
hx.storyName = 'hx';

export const p: StoryFn<typeof Box> = () => <p>Paragraph</p>;
p.storyName = 'p';

export const ul: StoryFn<typeof Box> = () => (
  <ul>
    <li>unordered list item 1</li>
    <li>unordered list item 2</li>
    <li>unordered list item 3</li>
  </ul>
);
ul.storyName = 'ul';

export const ol: StoryFn<typeof Box> = () => (
  <ol>
    <li>ordered list item 1</li>
    <li>ordered list item 2</li>
    <li>ordered list item 3</li>
  </ol>
);
ol.storyName = 'ol';

export const dl: StoryFn<typeof Box> = () => (
  <dl>
    <dt>description list term 1</dt>
    <dd>description list description 1</dd>
    <dt>description list term 2</dt>
    <dd>description list description 2</dd>
    <dt>description list term 3</dt>
    <dd>description list description 3</dd>
  </dl>
);
dl.storyName = 'dl';

export const table: StoryFn<typeof Box> = () => (
  <table>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Item 1 of row 1</td>
        <td>Item 2 of row 1</td>
        <td>Item 3 of row 1</td>
      </tr>
      <tr>
        <td>Item 1 of row 2</td>
        <td>Item 2 of row 2</td>
        <td>Item 3 of row 2</td>
      </tr>
      <tr>
        <td>Item 1 of row 3</td>
        <td>Item 2 of row 3</td>
        <td>Item 3 of row 3</td>
      </tr>
    </tbody>
  </table>
);
table.storyName = 'table';

export const table_complex: StoryFn<typeof Box> = () => (
  <table>
    <caption>Caption</caption>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>Item 1 of row 1</td>
        <td>Item 2 of row 1</td>
        <td>Item 3 of row 1</td>
      </tr>
      <tr>
        <td>Item 1 of row 2</td>
        <td>Item 2 of row 2</td>
        <td>Item 3 of row 2</td>
      </tr>
      <tr>
        <td>Item 1 of row 3</td>
        <td>Item 2 of row 3</td>
        <td>Item 3 of row 3</td>
      </tr>
    </tbody>
  </table>
);
table_complex.storyName = 'table (complex)';

export const blockquote_and_cite: StoryFn<typeof Box> = () => (
  <blockquote>
    <p>
      Words can be like X-rays, if you use them properly — they’ll go through
      anything. You read and you’re pierced.
    </p>
    <footer>
      — Aldous Huxley, <cite>Brave New World</cite>
    </footer>
  </blockquote>
);
blockquote_and_cite.storyName = 'blockquote and cite';

export const pre: StoryFn<typeof Box> = () => (
  <pre>
    # A UNINTENDED LOL-ZONE: SORRY FOR THIS{'\n'}#
    ------------+----------+-------------{'\n'}# /\O | _O | O {'\n'}# /\/ | //|_
    | /_ {'\n'}# /\ | | | |\ {'\n'}# / \ | /| | / | {'\n'}# LOL LOL | LLOL |
    LOLLOL {'\n'}# ------------+----------+-------------{'\n'}# BLACK MAGIC FULL
    FEATURED ENABLED
  </pre>
);
pre.storyName = 'pre';

export const pre_with_code: StoryFn<typeof Box> = () => (
  <pre>
    <code>
      # A UNINTENDED LOL-ZONE: SORRY FOR THIS{'\n'}#
      ------------+----------+-------------{'\n'}# /\O | _O | O {'\n'}# /\/ |
      //|_ | /_ {'\n'}# /\ | | | |\ {'\n'}# / \ | /| | / | {'\n'}# LOL LOL |
      LLOL | LOLLOL {'\n'}# ------------+----------+-------------{'\n'}# BLACK
      MAGIC FULL FEATURED ENABLED
    </code>
  </pre>
);
pre_with_code.storyName = 'pre with code';
