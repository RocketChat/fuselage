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

import { Box, Divider } from '../..';

export default {
  title: 'Layout/Box/Layout',
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

export const Widths: ComponentStory<typeof Box> = () => (
  <>
    <Box w='x64' />
    <Box width='x64' />
    <Box w='none' minWidth='x64' />
    <Box w='sw' maxWidth='x64' />
  </>
);
Widths.decorators = [
  (fn: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, { bg: 'neutral', h: 'x32', m: 'x4' })
      )}
    </Box>
  ),
];

export const Heights: ComponentStory<typeof Box> = () => (
  <>
    <Box h='x64' />
    <Box height='x64' />
    <Box h='none' minHeight='x64' />
    <Box h='sw' maxHeight='x64' />
  </>
);
Heights.decorators = [
  (fn: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, { bg: 'neutral', w: 'x32', m: 'x4' })
      )}
    </Box>
  ),
];

export const Sizes: ComponentStory<typeof Box> = () => (
  <>
    <Box size='x64' />
    <Box size='none' minSize='x64' />
    <Box size={9999} maxSize='x64' />
  </>
);
Sizes.decorators = [
  (fn: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, { bg: 'neutral', m: 'x4' })
      )}
    </Box>
  ),
];

export const Margins: ComponentStory<typeof Box> = () => (
  <>
    <Box bg='neutral'>
      <Box m={16} bg='tint' size='x16' />
    </Box>
    <Box margin={16} />
    <Box mb={16} />
    <Box marginBlock={16} />
    <Box mbs={16} />
    <Box marginBlockStart={16} />
    <Box mbe={16} />
    <Box marginBlockEnd={16} />
    <Box mi={16} />
    <Box marginInline={16} />
    <Box mis={16} />
    <Box marginInlineStart={16} />
    <Box mie={16} />
    <Box marginInlineEnd={16} />
  </>
);
Margins.decorators = [
  (story: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(story().props.children).map((child: any, i) => (
        <Box key={i} bg='neutral-200' m={16}>
          {React.cloneElement(
            child,
            { bg: 'primary-200' },
            <Box bg='neutral-500' size='x16' />
          )}
        </Box>
      ))}
    </Box>
  ),
];

export const Paddings: ComponentStory<typeof Box> = () => (
  <>
    <Box bg='neutral'>
      <Box p={16} bg='tint' size='x16' />
    </Box>
    <Box padding={16} />
    <Box pb={16} />
    <Box paddingBlock={16} />
    <Box pbs={16} />
    <Box paddingBlockStart={16} />
    <Box pbe={16} />
    <Box paddingBlockEnd={16} />
    <Box pi={16} />
    <Box paddingInline={16} />
    <Box pis={16} />
    <Box paddingInlineStart={16} />
    <Box pie={16} />
    <Box paddingInlineEnd={16} />
  </>
);
Paddings.decorators = [
  (story: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(story().props.children).map((child: any, i) => (
        <Box key={i} bg='neutral-200' m={16}>
          {React.cloneElement(
            child,
            { bg: 'primary-200' },
            <Box bg='neutral-500' size='x16' />
          )}
        </Box>
      ))}
    </Box>
  ),
];

export const Display: ComponentStory<typeof Box> = () => (
  <>
    <Box display='none' />
    <Box display='inline' />
    <Box display='inline-block' />
    <Box display='inline-flex' />
    <Box display='block' />
    <Box display='flex' />
  </>
);
Display.decorators = [
  (fn: any) => (
    <Box color='default'>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, {
          children: child.props.display,
          border: '1px solid',
          borderColor: 'stroke-light',
          m: 'x4',
          p: 'x4',
        })
      )}
    </Box>
  ),
];
export const TextAlign: ComponentStory<typeof Box> = () => (
  <Box display='flex' color='default' flexDirection='column'>
    <Box textAlign='left'>left</Box>
    <Divider />
    <Box textAlign='center'>center</Box>
    <Divider />
    <Box textAlign='right'>right</Box>
    <Divider />
    <Box textAlign='justify'>justify</Box>
    <Divider />
  </Box>
);

export const VerticalAlign: ComponentStory<typeof Box> = () => (
  <>
    <Box verticalAlign='top' />
    <Box verticalAlign='baseline' />
    <Box verticalAlign='sub' />
    <Box verticalAlign='middle' />
    <Box verticalAlign='bottom' />
    <Box verticalAlign='-40px' />
    <Box verticalAlign='40px' />
  </>
);
VerticalAlign.decorators = [
  (fn: any) => (
    <Box>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, {
          display: 'inline',
          children: child.props.verticalAlign,
          color: 'default',
          border: '1px solid',
          borderColor: 'stroke-dark',
          borderRadius: 'x4',
          m: 'x4',
          p: 'x4',
        })
      )}
    </Box>
  ),
];

export const Position: ComponentStory<typeof Box> = () => (
  <>
    <Box position='static' />
    <Box position='relative' />
    <Box position='absolute' />
    <Box position='fixed' />
  </>
);
Position.decorators = [
  (fn: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, {
          bg: 'neutral',
          size: 'x32',
          m: 'x16',
        })
      )}
    </Box>
  ),
];

export const ZIndex: ComponentStory<typeof Box> = () => (
  <>
    <Box zIndex={2} borderColor='stroke-extra-light-highlight' />
    <Box zIndex={1} borderColor='stroke-highlight' />
    <Box zIndex={2} borderColor='stroke-extra-light-error' />
    <Box zIndex={1} borderColor='stroke-error' />
  </>
);
ZIndex.decorators = [
  (fn: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, {
          bg: 'neutral',
          borderWidth: 'x4',
          size: 'x32',
          m: 'neg-x2',
        })
      )}
    </Box>
  ),
];

export const Insets: ComponentStory<typeof Box> = () => (
  <>
    <Box inset='none' />
    <Box inset='x1' />
    <Box inset='x2' />
    <Box inset='x4' />
    <Box inset='x8' />
    <Box inset='x16' />
    <Box insetBlock='x16' />
    <Box insetBlockStart='x16' />
    <Box insetBlockEnd='x16' />
    <Box insetInline='x16' />
    <Box insetInlineStart='x16' />
    <Box insetInlineEnd='x16' />
  </>
);
Insets.decorators = [
  (fn: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(fn().props.children).map((child: any) => (
        <Box
          key={child.key}
          position='relative'
          bg='selected'
          m={16}
          size='x64'
        >
          {React.cloneElement(child, {
            bg: 'neutral',
            position: 'absolute',
            minSize: 'x16',
          })}
        </Box>
      ))}
    </Box>
  ),
];

export const Elevation: ComponentStory<typeof Box> = () => (
  <>
    <Box elevation='0' />
    <Box elevation='1' />
    <Box elevation='2' />
    <Box elevation='1nb' />
    <Box elevation='2nb' />
  </>
);
Elevation.decorators = [
  (fn: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(fn().props.children).map((child: any) =>
        React.cloneElement(child, {
          bg: 'light',
          size: 'x32',
          m: 'x16',
        })
      )}
    </Box>
  ),
];

export const Invisible: ComponentStory<typeof Box> = () => <Box invisible />;
