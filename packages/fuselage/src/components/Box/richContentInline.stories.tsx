import type { StoryFn, Meta } from '@storybook/react';

import Box from './Box';

export default {
  title: 'Layout/Box/Rich content/Inline',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Here is how rich content will be rendered, in details.',
      },
    },
  },
} satisfies Meta<typeof Box>;

export const strong: StoryFn<typeof Box> = () => (
  <strong>strong importance</strong>
);
strong.storyName = 'strong';

export const em: StoryFn<typeof Box> = () => <em>emphasis</em>;
em.storyName = 'em';

export const b: StoryFn<typeof Box> = () => <b>bring attention</b>;
b.storyName = 'b';

export const i: StoryFn<typeof Box> = () => (
  <i>
    technical terms, foreign language phrases, or fictional character thoughts
  </i>
);
i.storyName = 'i';

export const a: StoryFn<typeof Box> = () => (
  <>
    <div>
      <a href='#'>Normal</a>
    </div>
    <br />
    <div>
      <a href='#' className='is-focused'>
        Focused
      </a>
    </div>
  </>
);
a.storyName = 'a';

export const q_and_cite: StoryFn<typeof Box> = () => (
  <q>
    The problem with quotes found on the internet is that they are often not
    true. <cite>Abraham Lincoln</cite>
  </q>
);
q_and_cite.storyName = 'q and cite';

export const code: StoryFn<typeof Box> = () => <code>inline code</code>;
code.storyName = 'code';

export const time: StoryFn<typeof Box> = () => (
  <time dateTime='20220101 10:00'>January 1th 2022, 10 a.m.</time>
);
time.storyName = 'time';

export const dfn: StoryFn<typeof Box> = () => (
  <>
    <dfn>Definition:</dfn> description.
  </>
);
dfn.storyName = 'dfn';

export const abbr: StoryFn<typeof Box> = () => (
  <abbr title='Source Development Kit'>SDK</abbr>
);
abbr.storyName = 'abbr';

export const sup_and_sub: StoryFn<typeof Box> = () => (
  <>
    <sup>superscript</sup> <sub>subscript</sub>
  </>
);
sup_and_sub.storyName = 'sup and sub';

export const kbd: StoryFn<typeof Box> = () => <kbd>Ctrl + Alt + Del</kbd>;
kbd.storyName = 'kbd';

export const small: StoryFn<typeof Box> = () => <small>small text</small>;
small.storyName = 'small';
