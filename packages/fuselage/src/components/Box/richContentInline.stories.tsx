import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
  Subtitle,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box } from '../..';

export default {
  title: 'Layout/Box/Rich content/Inline',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Here is how rich content will be rendered, in details.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <ArgsTable />
          <Primary />
          <Stories title={'Inline'} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Box>;

export const strong: ComponentStory<typeof Box> = () => (
  <strong>strong importance</strong>
);
strong.storyName = 'strong';

export const em: ComponentStory<typeof Box> = () => <em>emphasis</em>;
em.storyName = 'em';

export const b: ComponentStory<typeof Box> = () => <b>bring attention</b>;
b.storyName = 'b';

export const i: ComponentStory<typeof Box> = () => (
  <i>
    technical terms, foreign language phrases, or fictional character thoughts
  </i>
);
i.storyName = 'i';

export const a: ComponentStory<typeof Box> = () => (
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
a.storyName = 'a';

export const q_and_cite: ComponentStory<typeof Box> = () => (
  <q>
    The problem with quotes found on the internet is that they are often not
    true. <cite>Abraham Lincoln</cite>
  </q>
);
q_and_cite.storyName = 'q and cite';

export const code: ComponentStory<typeof Box> = () => <code>inline code</code>;
code.storyName = 'code';

export const time: ComponentStory<typeof Box> = () => (
  <time dateTime='20220101 10:00'>January 1th 2022, 10 a.m.</time>
);
time.storyName = 'time';

export const dfn: ComponentStory<typeof Box> = () => (
  <>
    <dfn>Definition:</dfn> description.
  </>
);
dfn.storyName = 'dfn';

export const abbr: ComponentStory<typeof Box> = () => (
  <abbr title='Source Development Kit'>SDK</abbr>
);
abbr.storyName = 'abbr';

export const sup_and_sub: ComponentStory<typeof Box> = () => (
  <>
    <sup>superscript</sup> <sub>subscript</sub>
  </>
);
sup_and_sub.storyName = 'sup and sub';

export const kbd: ComponentStory<typeof Box> = () => (
  <kbd>Ctrl + Alt + Del</kbd>
);
kbd.storyName = 'kbd';

export const small: ComponentStory<typeof Box> = () => (
  <small>small text</small>
);
small.storyName = 'small';
