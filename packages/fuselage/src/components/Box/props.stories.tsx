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
import flattenChildren from 'react-keyed-flatten-children';

import { Box, Button, Divider } from '../..';

export default {
  title: 'Layout/Box/Props',
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
          <Primary />
          <Stories />
          <ArgsTable />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Box>;

export const isProp: ComponentStory<typeof Box> = () => (
  <Box is={Button}>A Box rendering a Button</Box>
);
isProp.parameters = {
  docs: {
    storyDescription:
      'The `is` prop is used to render the Box as a different HTML tag.',
  },
};

export const Opacity: ComponentStory<typeof Box> = () => (
  <Box display='flex'>
    <Box size={32} opacity={0.1} bg='dark' />
    <Box size={32} opacity={0.3} bg='dark' />
    <Box size={32} opacity={0.5} bg='dark' />
    <Box size={32} opacity={0.7} bg='dark' />
    <Box size={32} opacity={0.9} bg='dark' />
    <Box size={32} opacity={1} bg='dark' />
  </Box>
);

export const Borders: ComponentStory<typeof Box> = () => (
  <>
    <Box border='2px solid currentColor' />
    <Box borderBlock='2px solid currentColor' />
    <Box borderBlockStart='2px solid currentColor' />
    <Box borderBlockEnd='2px solid currentColor' />
    <Box borderInline='2px solid currentColor' />
    <Box borderInlineStart='2px solid currentColor' />
    <Box borderInlineEnd='2px solid currentColor' />
    <Box borderWidth='x2' />
    <Box borderBlockWidth='x2' />
    <Box borderBlockStartWidth='x2' />
    <Box borderBlockEndWidth='x2' />
    <Box borderInlineWidth='x2' />
    <Box borderInlineStartWidth='x2' />
    <Box borderInlineEndWidth='x2' />
    <Box borderWidth='x1' borderStyle='dashed' />
    <Box borderWidth='x1' borderBlockStyle='dashed' />
    <Box borderWidth='x1' borderBlockStartStyle='dashed' />
    <Box borderWidth='x1' borderBlockEndStyle='dashed' />
    <Box borderWidth='x1' borderInlineStyle='dashed' />
    <Box borderWidth='x1' borderInlineStartStyle='dashed' />
    <Box borderWidth='x1' borderInlineEndStyle='dashed' />
    <Box borderWidth='x4' borderColor='primary-500' />
    <Box borderWidth='x4' borderBlockColor='primary-500' />
    <Box borderWidth='x4' borderBlockStartColor='primary-500' />
    <Box borderWidth='x4' borderBlockEndColor='primary-500' />
    <Box borderWidth='x4' borderInlineColor='primary-500' />
    <Box borderWidth='x4' borderInlineStartColor='primary-500' />
    <Box borderWidth='x4' borderInlineEndColor='primary-500' />
  </>
);
Borders.decorators = [
  (fn: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, {
          size: 'x32',
          m: 'x16',
          borderColor: 'stroke-dark',
        })
      )}
    </Box>
  ),
];

export const BorderRadii: ComponentStory<typeof Box> = () => (
  <>
    <Box borderRadius='full' />
    <Box borderStartStartRadius='full' />
    <Box borderStartEndRadius='full' />
    <Box borderEndStartRadius='full' />
    <Box borderEndEndRadius='full' />
  </>
);
BorderRadii.decorators = [
  (fn: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, {
          bg: 'dark',
          size: 'x32',
          m: 'x16',
        })
      )}
    </Box>
  ),
];

export const TextTransform: ComponentStory<typeof Box> = () => (
  <Box color='default'>
    <Box textTransform='none'>none</Box>
    <Box textTransform='uppercase'>uppercase</Box>
    <Box textTransform='lowercase'>lowercase</Box>
    <Box textTransform='capitalize'>capitalize</Box>
  </Box>
);

export const WordBreak: ComponentStory<typeof Box> = () => (
  <Box color='default'>
    <Box wordBreak='break-word'>
      break-word:
      Breakwoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooord
    </Box>
    <Divider />
    <Box wordBreak='break-all'>
      break-all:
      Breakaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaall
    </Box>
  </Box>
);

export const withTruncatedText: ComponentStory<typeof Box> = () => (
  <Box color='default'>
    <Box
      withTruncatedText
      w='x120'
      border='1px solid'
      borderColor='stroke-dark'
      borderRadius={4}
      p={4}
    >
      This text is truncated.
    </Box>
  </Box>
);
