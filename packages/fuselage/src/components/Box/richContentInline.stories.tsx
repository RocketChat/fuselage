import type { StoryFn, Meta } from '@storybook/react-webpack5';

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

export const Strong: StoryFn<typeof Box> = () => (
  <strong>strong importance</strong>
);
Strong.storyName = 'strong';

export const Em: StoryFn<typeof Box> = () => <em>emphasis</em>;
Em.storyName = 'em';

export const B: StoryFn<typeof Box> = () => <b>bring attention</b>;
B.storyName = 'b';

export const I: StoryFn<typeof Box> = () => (
  <i>
    technical terms, foreign language phrases, or fictional character thoughts
  </i>
);
I.storyName = 'i';

export const A: StoryFn<typeof Box> = () => (
  <>
    <div>
      <a href='#any'>Normal</a>
    </div>
    <br />
    <div>
      <a href='#any' className='is-focused'>
        Focused
      </a>
    </div>
  </>
);
A.storyName = 'a';

export const QAndCite: StoryFn<typeof Box> = () => (
  <q>
    The problem with quotes found on the internet is that they are often not
    true. <cite>Abraham Lincoln</cite>
  </q>
);
QAndCite.storyName = 'q and cite';

export const Code: StoryFn<typeof Box> = () => <code>inline code</code>;
Code.storyName = 'code';

export const Time: StoryFn<typeof Box> = () => (
  <time dateTime='20220101 10:00'>January 1th 2022, 10 a.m.</time>
);
Time.storyName = 'time';

export const Dfn: StoryFn<typeof Box> = () => (
  <>
    <dfn>Definition:</dfn> description.
  </>
);
Dfn.storyName = 'dfn';

export const Abbr: StoryFn<typeof Box> = () => (
  <abbr title='Source Development Kit'>SDK</abbr>
);
Abbr.storyName = 'abbr';

export const SupAndSub: StoryFn<typeof Box> = () => (
  <>
    <sup>superscript</sup> <sub>subscript</sub>
  </>
);
SupAndSub.storyName = 'sup and sub';

export const Kbd: StoryFn<typeof Box> = () => <kbd>Ctrl + Alt + Del</kbd>;
Kbd.storyName = 'kbd';

export const Small: StoryFn<typeof Box> = () => <small>small text</small>;
Small.storyName = 'small';
