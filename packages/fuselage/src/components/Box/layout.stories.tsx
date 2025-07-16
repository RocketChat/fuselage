import type { StoryFn, Meta } from '@storybook/react-webpack5';
import { cloneElement } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Divider } from '../Divider';

import Box from './Box';

export default {
  title: 'Layout/Box/Layout',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Here is how rich content will be rendered, in details.',
      },
    },
  },
} satisfies Meta<typeof Box>;

export const Borders: StoryFn<typeof Box> = () => (
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
        cloneElement(child, {
          size: 'x32',
          m: 'x16',
          borderColor: 'stroke-dark',
        }),
      )}
    </Box>
  ),
];
Borders.parameters = {
  loki: {
    skip: true,
  },
};

export const BorderRadii: StoryFn<typeof Box> = () => (
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
        cloneElement(child, {
          bg: 'dark',
          size: 'x32',
          m: 'x16',
        }),
      )}
    </Box>
  ),
];
BorderRadii.parameters = {
  loki: {
    skip: true,
  },
};

export const Display: StoryFn<typeof Box> = () => (
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
        cloneElement(child, {
          children: child.props.display,
          border: '1px solid',
          borderColor: 'stroke-light',
          m: 'x4',
          p: 'x4',
        }),
      )}
    </Box>
  ),
];
Display.parameters = {
  loki: {
    skip: true,
  },
};

export const Elevation: StoryFn<typeof Box> = () => (
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
        cloneElement(child, {
          bg: 'light',
          size: 'x32',
          m: 'x16',
        }),
      )}
    </Box>
  ),
];
Elevation.parameters = {
  loki: {
    skip: true,
  },
};

export const Heights: StoryFn<typeof Box> = () => (
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
        cloneElement(child, { bg: 'neutral', w: 'x32', m: 'x4' }),
      )}
    </Box>
  ),
];
Heights.parameters = {
  loki: {
    skip: true,
  },
};

export const Insets: StoryFn<typeof Box> = () => (
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
          {cloneElement(child, {
            bg: 'neutral',
            position: 'absolute',
            minSize: 'x16',
          })}
        </Box>
      ))}
    </Box>
  ),
];
Insets.parameters = {
  loki: {
    skip: true,
  },
};

export const Invisible: StoryFn<typeof Box> = () => <Box invisible />;
Invisible.parameters = {
  loki: {
    skip: true,
  },
};

export const Margins: StoryFn<typeof Box> = () => (
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
          {cloneElement(
            child,
            { bg: 'primary-200' },
            <Box bg='neutral-500' size='x16' />,
          )}
        </Box>
      ))}
    </Box>
  ),
];
Margins.parameters = {
  loki: {
    skip: true,
  },
};

export const Opacity: StoryFn<typeof Box> = () => (
  <Box display='flex'>
    <Box size={32} opacity={0.1} bg='dark' />
    <Box size={32} opacity={0.3} bg='dark' />
    <Box size={32} opacity={0.5} bg='dark' />
    <Box size={32} opacity={0.7} bg='dark' />
    <Box size={32} opacity={0.9} bg='dark' />
    <Box size={32} opacity={1} bg='dark' />
  </Box>
);

export const Paddings: StoryFn<typeof Box> = () => (
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
          {cloneElement(
            child,
            { bg: 'primary-200' },
            <Box bg='neutral-500' size='x16' />,
          )}
        </Box>
      ))}
    </Box>
  ),
];
Paddings.parameters = {
  loki: {
    skip: true,
  },
};

export const Position: StoryFn<typeof Box> = () => (
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
        cloneElement(child, {
          bg: 'neutral',
          size: 'x32',
          m: 'x16',
        }),
      )}
    </Box>
  ),
];
Position.parameters = {
  loki: {
    skip: true,
  },
};

export const Widths: StoryFn<typeof Box> = () => (
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
        cloneElement(child, { bg: 'neutral', h: 'x32', m: 'x4' }),
      )}
    </Box>
  ),
];
Widths.parameters = {
  loki: {
    skip: true,
  },
};

export const Sizes: StoryFn<typeof Box> = () => (
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
        cloneElement(child, { bg: 'neutral', m: 'x4' }),
      )}
    </Box>
  ),
];
Sizes.parameters = {
  loki: {
    skip: true,
  },
};

export const TextAlign: StoryFn<typeof Box> = () => (
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

export const VerticalAlign: StoryFn<typeof Box> = () => (
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
        cloneElement(child, {
          display: 'inline',
          children: child.props.verticalAlign,
          color: 'default',
          border: '1px solid',
          borderColor: 'stroke-dark',
          borderRadius: 'x4',
          m: 'x4',
          p: 'x4',
        }),
      )}
    </Box>
  ),
];
VerticalAlign.parameters = {
  loki: {
    skip: true,
  },
};

export const ZIndex: StoryFn<typeof Box> = () => (
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
        cloneElement(child, {
          bg: 'neutral',
          borderWidth: 'x4',
          size: 'x32',
          m: 'neg-x2',
        }),
      )}
    </Box>
  ),
];
ZIndex.parameters = {
  loki: {
    skip: true,
  },
};

export const Focusable: StoryFn<typeof Box> = () => (
  <Box color='default' is='span' role='button' tabIndex={0} focusable>
    Focus me
  </Box>
);
