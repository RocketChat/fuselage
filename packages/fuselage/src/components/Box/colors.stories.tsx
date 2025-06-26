import type { StoryFn, Meta } from '@storybook/react-webpack5';
import { cloneElement } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import Box from './Box';

export default {
  title: 'Layout/Box/Colors',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Here are the available color props and values.',
      },
    },
  },
} satisfies Meta<typeof Box>;

export const SurfaceColors: StoryFn<typeof Box> = () => (
  <>
    <Box bg='light' />
    <Box bg='tint' />
    <Box bg='room' />
    <Box bg='neutral' />
    <Box bg='disabled' />
    <Box bg='hover' />
    <Box bg='selected' />
    <Box bg='dark' />
    <Box bg='featured' />
    <Box bg='featured-hover' />
    <Box bg='transparent' />
  </>
);
SurfaceColors.decorators = [
  (story: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center'>
      {flattenChildren(story().props.children).map((child: any) =>
        cloneElement(
          child,
          {
            m: 'x4',
            size: 'x122',
            color: 'annotation',
            border: '2px solid',
            borderColor: 'stroke light',
            borderRadius: 4,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          child.props.bg,
        ),
      )}
    </Box>
  ),
];
SurfaceColors.parameters = {
  loki: {
    skip: true,
  },
};

export const StatusColors: StoryFn<typeof Box> = () => (
  <>
    <Box bg='status-background-info' color='status-font-on-info' />
    <Box bg='status-background-success' color='status-font-on-success' />
    <Box bg='status-background-danger' color='status-font-on-danger' />
    <Box bg='status-background-warning' color='status-font-on-warning' />
    <Box bg='status-background-service-1' color='status-font-on-service-1' />
    <Box bg='status-background-service-2' color='status-font-on-service-2' />
  </>
);
StatusColors.decorators = [
  (story: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center' overflow='hidden'>
      {flattenChildren(story().props.children).map((child: any) =>
        cloneElement(
          child,
          {
            m: 'x4',
            size: 'x122',
            border: '2px solid',
            borderRadius: 4,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          child.props.bg.replace('status-background-', ''),
        ),
      )}
    </Box>
  ),
];
StatusColors.parameters = {
  loki: {
    skip: true,
  },
};

export const StrokeColors: StoryFn<typeof Box> = () => (
  <>
    <Box borderColor='stroke-extra-light' />
    <Box borderColor='stroke-light' />
    <Box borderColor='stroke-medium' />
    <Box borderColor='stroke-dark' />
    <Box borderColor='stroke-extra-dark' />
    <Box borderColor='stroke-extra-light-highlight' />
    <Box borderColor='stroke-highlight' />
    <Box borderColor='stroke-extra-light-error' />
    <Box borderColor='stroke-error' />
  </>
);
StrokeColors.decorators = [
  (story: any) => (
    <Box display='flex' flexWrap='wrap' alignItems='center' overflow='hidden'>
      {flattenChildren(story().props.children).map((child: any) =>
        cloneElement(
          child,
          {
            m: 'x4',
            textAlign: 'center',
            size: 'x122',
            color: 'default',
            borderWidth: 'x8',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 8,
          },
          child.props.borderColor,
        ),
      )}
    </Box>
  ),
];
StrokeColors.parameters = {
  loki: {
    skip: true,
  },
};

export const FontColors: StoryFn<typeof Box> = () => (
  <>
    <Box color='font-white' bg='dark' borderRadius={4} />
    <Box color='font-disabled' />
    <Box color='font-annotation' />
    <Box color='font-secondary-info' />
    <Box color='font-hint' />
    <Box color='font-default' />
    <Box color='font-titles-labels' />
    <Box color='font-info' />
    <Box color='font-danger' />
  </>
);
FontColors.decorators = [
  (story: any) => (
    <Box
      display='flex'
      alignItems='flex-start'
      overflow='hidden'
      flexDirection='column'
    >
      {flattenChildren(story().props.children).map((child: any) =>
        cloneElement(child, { m: 'x4', p: 'x4' }, child.props.color),
      )}
    </Box>
  ),
];
FontColors.parameters = {
  loki: {
    skip: true,
  },
};
