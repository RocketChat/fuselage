import type { StoryFn, Meta } from '@storybook/react';
import type { ComponentType } from 'react';

import Box from '../Box';
import Margins from '../Margins';

import { Avatar } from './Avatar';
import { AvatarContainer } from './AvatarContainer';
import { AvatarStack } from './AvatarStack';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  subcomponents: {
    'Avatar.Stack': Avatar.Stack as ComponentType<any>,
    'AvatarStack': AvatarStack as ComponentType<any>,
    'AvatarContainer': AvatarContainer as ComponentType<any>,
  },
} satisfies Meta<typeof Avatar>;

const sizes: (
  | 'x16'
  | 'x18'
  | 'x20'
  | 'x24'
  | 'x28'
  | 'x32'
  | 'x36'
  | 'x40'
  | 'x48'
  | 'x124'
  | 'x200'
  | 'x332'
)[] = ['x16', 'x18', 'x28', 'x32', 'x36', 'x48', 'x124', 'x200', 'x332'];

const Template: StoryFn<typeof Avatar> = (args) => (
  <Margins all='x16'>
    {sizes.map((size, i) => (
      <Box display='inline-flex' verticalAlign='middle' key={i}>
        <Avatar url={args.url} size={size} rounded={args.rounded} alt='' />
      </Box>
    ))}
  </Margins>
);

const imgUrl =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z';

export const Default = Template.bind({});
Default.args = {
  url: imgUrl,
};

export const Rounded = Template.bind({});
Rounded.args = {
  url: imgUrl,
  rounded: true,
};

const StackTemplate: StoryFn<typeof Avatar> = (args) => (
  <Margins all='x16'>
    {sizes.map((size, i) => (
      <Box key={i}>
        <Avatar.Stack className={args.className}>
          <Avatar url={args.url} size={size} rounded={args.rounded} alt='' />
          <Avatar url={args.url} size={size} rounded={args.rounded} alt='' />
          <Avatar url={args.url} size={size} rounded={args.rounded} alt='' />
        </Avatar.Stack>
      </Box>
    ))}
  </Margins>
);

export const Stack = StackTemplate.bind({});
Stack.args = {
  url: imgUrl,
};

export const StackRounded = StackTemplate.bind({});
StackRounded.args = {
  url: imgUrl,
  rounded: true,
};
