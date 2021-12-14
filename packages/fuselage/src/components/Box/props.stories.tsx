import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
  Subtitle,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box, Button } from '../..';

export default {
  title: 'Box/Props_new',
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          'Most of the props are designed to change styles by creating CSS rules at runtime.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <ArgsTable />
          <Primary />
          <Stories title={'Space'} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Box>;

export const isProp: ComponentStory<typeof Box> = () => (
  <Box is={Button}>A Box rendering a Button</Box>
);
isProp.storyName = 'is prop';

const marginElements = (
  <>
    <Box m='x16' />
    <Box margin='x16' />
    <Box mb='x16' />
    <Box marginBlock='x16' />
    <Box mbs='x16' />
    <Box marginBlockStart='x16' />
    <Box mbe='x16' />
    <Box marginBlockEnd='x16' />
    <Box mi='x16' />
    <Box marginInline='x16' />
    <Box mis='x16' />
    <Box marginInlineStart='x16' />
    <Box mie='x16' />
    <Box marginInlineEnd='x16' />
  </>
);

export const Margins: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(marginElements).map((child) => (
      <Box key={child} bg='neutral-200' m='x16'>
        {React.cloneElement(
          child,
          { bg: 'primary-200' },
          <Box bg='neutral-500' size='x16' />
        )}
      </Box>
    ))}
  </Box>
);

const paddingElements = (
  <>
    <Box p='x16' />
    <Box padding='x16' />
    <Box pb='x16' />
    <Box paddingBlock='x16' />
    <Box pbs='x16' />
    <Box paddingBlockStart='x16' />
    <Box pbe='x16' />
    <Box paddingBlockEnd='x16' />
    <Box pi='x16' />
    <Box paddingInline='x16' />
    <Box pis='x16' />
    <Box paddingInlineStart='x16' />
    <Box pie='x16' />
    <Box paddingInlineEnd='x16' />
  </>
);

export const Paddings: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(paddingElements).map((child) => (
      <Box key={child} bg='neutral-200' m='x16'>
        {React.cloneElement(
          child,
          { bg: 'primary-200' },
          <Box bg='neutral-500' size='x16' />
        )}
      </Box>
    ))}
  </Box>
);

const colorElements = (
  <>
    <Box color='neutral-500' />
    <Box color='neutral-500-50' />
    <Box color='primary-500' />
    <Box color='primary-500-50' />
    <Box color='info-500' />
    <Box color='info-500-50' />
    <Box color='success-500' />
    <Box color='success-500-50' />
    <Box color='warning-500' />
    <Box color='warning-500-50' />
    <Box color='danger-500' />
    <Box color='danger-500-50' />
    <Box color='surface' />
    <Box color='default' />
    <Box color='info' />
    <Box color='hint' />
    <Box color='disabled' />
    <Box color='alternative' />
    <Box color='primary' />
    <Box color='success' />
    <Box color='danger' />
    <Box color='warning' />
    <Box color='link' />
    <Box color='visited-link' />
    <Box color='active-link' />
    <Box color='rebeccapurple' />
  </>
);
export const Colors: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center' overflow='hidden'>
    {flattenChildren(colorElements).map((child) =>
      React.cloneElement(
        child,
        { bg: 'neutral-200', m: 'x4', p: 'x4' },
        child.props.color
      )
    )}
  </Box>
);

const bgElements = (
  <>
    <Box bg='neutral-500' />
    <Box bg='neutral-500-50' />
    <Box bg='primary-500' />
    <Box bg='primary-500-50' />
    <Box bg='info-500' />
    <Box bg='info-500-50' />
    <Box bg='success-500' />
    <Box bg='success-500-50' />
    <Box bg='warning-500' />
    <Box bg='warning-500-50' />
    <Box bg='danger-500' />
    <Box bg='danger-500-50' />
    <Box bg='surface' />
    <Box bg='default' />
    <Box bg='info' />
    <Box bg='hint' />
    <Box bg='disabled' />
    <Box bg='alternative' />
    <Box bg='primary' />
    <Box bg='success' />
    <Box bg='danger' />
    <Box bg='warning' />
    <Box bg='link' />
    <Box bg='visited-link' />
    <Box bg='active-link' />
    <Box bg='rebeccapurple' />
  </>
);

export const BackgroundColors: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center' overflow='hidden'>
    {flattenChildren(bgElements).map((child) =>
      React.cloneElement(child, { m: 'x4', size: 'x32' })
    )}
  </Box>
);
export const Opacity: ComponentStory<typeof Box> = () => (
  <Box size='x32' bg='neutral-500' opacity={0.5} />
);

export const FontFamilies: ComponentStory<typeof Box> = () => (
  <>
    <Box fontFamily='sans'>The quick brown fox jumps over the lazy dog</Box>
    <Box fontFamily='mono'>The quick brown fox jumps over the lazy dog</Box>
  </>
);

export const FontSizes: ComponentStory<typeof Box> = () => (
  <>
    <Box fontSize='x12'>x12</Box>
    <Box fontSize='x16'>x16</Box>
    <Box fontSize='x20'>x20</Box>
    <Box fontSize='x24'>x24</Box>
    <Box fontSize='x32'>x32</Box>
    <Box fontSize='hero'>hero</Box>
    <Box fontSize='h1'>h1</Box>
    <Box fontSize='h2'>h2</Box>
    <Box fontSize='h3'>h3</Box>
    <Box fontSize='h4'>h4</Box>
    <Box fontSize='h5'>h5</Box>
    <Box fontSize='p1'>p1</Box>
    <Box fontSize='p2'>p2</Box>
    <Box fontSize='p3'>p3</Box>
    <Box fontSize='p4'>p4</Box>
    <Box fontSize='c1'>c1</Box>
    <Box fontSize='c2'>c2</Box>
    <Box fontSize='micro'>micro</Box>
  </>
);

export const FontWeights: ComponentStory<typeof Box> = () => (
  <>
    <Box fontWeight={100}>100</Box>
    <Box fontWeight={200}>200</Box>
    <Box fontWeight={300}>300</Box>
    <Box fontWeight={400}>400</Box>
    <Box fontWeight={500}>500</Box>
    <Box fontWeight={600}>600</Box>
    <Box fontWeight={700}>700</Box>
    <Box fontWeight={800}>800</Box>
    <Box fontWeight={900}>900</Box>
    <Box fontWeight='hero'>hero</Box>
    <Box fontWeight='h1'>h1</Box>
    <Box fontWeight='h2'>h2</Box>
    <Box fontWeight='h3'>h3</Box>
    <Box fontWeight='h4'>h4</Box>
    <Box fontWeight='h5'>h5</Box>
    <Box fontWeight='p1'>p1</Box>
    <Box fontWeight='p2'>p2</Box>
    <Box fontWeight='p3'>p3</Box>
    <Box fontWeight='p4'>p4</Box>
    <Box fontWeight='c1'>c1</Box>
    <Box fontWeight='c2'>c2</Box>
    <Box fontWeight='micro'>micro</Box>
  </>
);
export const FontHeights: ComponentStory<typeof Box> = () => (
  <>
    <Box lineHeight='1'>1</Box>
    <Box lineHeight='1.25'>1.25</Box>
    <Box lineHeight='1.5'>1.5</Box>
    <Box lineHeight='2'>2</Box>
    <Box lineHeight='hero'>hero</Box>
    <Box lineHeight='h1'>h1</Box>
    <Box lineHeight='h2'>h2</Box>
    <Box lineHeight='h3'>h3</Box>
    <Box lineHeight='h4'>h4</Box>
    <Box lineHeight='h5'>h5</Box>
    <Box lineHeight='p1'>p1</Box>
    <Box lineHeight='p2'>p2</Box>
    <Box lineHeight='p3'>p3</Box>
    <Box lineHeight='p4'>p4</Box>
    <Box lineHeight='c1'>c1</Box>
    <Box lineHeight='c2'>c2</Box>
    <Box lineHeight='micro'>micro</Box>
  </>
);

export const LetterSpacing: ComponentStory<typeof Box> = () => (
  <>
    <Box letterSpacing='4px'>4px</Box>
    <Box letterSpacing='-4px'>-4px</Box>
    <Box letterSpacing='hero'>hero</Box>
    <Box letterSpacing='h1'>h1</Box>
    <Box letterSpacing='h2'>h2</Box>
    <Box letterSpacing='h3'>h3</Box>
    <Box letterSpacing='h4'>h4</Box>
    <Box letterSpacing='h5'>h5</Box>
    <Box letterSpacing='p1'>p1</Box>
    <Box letterSpacing='p2'>p2</Box>
    <Box letterSpacing='p3'>p3</Box>
    <Box letterSpacing='p4'>p4</Box>
    <Box letterSpacing='c1'>c1</Box>
    <Box letterSpacing='c2'>c2</Box>
    <Box letterSpacing='micro'>micro</Box>
  </>
);

export const FontScales: ComponentStory<typeof Box> = () => (
  <>
    <Box fontScale='hero'>hero</Box>
    <Box fontScale='h1'>h1</Box>
    <Box fontScale='h2'>h2</Box>
    <Box fontScale='h3'>h3</Box>
    <Box fontScale='h4'>h4</Box>
    <Box fontScale='h5'>h5</Box>
    <Box fontScale='p1'>p1</Box>
    <Box fontScale='p2'>p2</Box>
    <Box fontScale='p3'>p3</Box>
    <Box fontScale='p4'>p4</Box>
    <Box fontScale='c1'>c1</Box>
    <Box fontScale='c2'>c2</Box>
    <Box fontScale='micro'>micro</Box>
  </>
);

export const FontStyles: ComponentStory<typeof Box> = () => (
  <>
    <Box fontStyle='normal'>normal</Box>
    <Box fontStyle='italic'>italic</Box>
  </>
);

export const TextAlignment: ComponentStory<typeof Box> = () => (
  <>
    <Box textAlign='start'>start</Box>
    <Box textAlign='end'>end</Box>
    <Box textAlign='center'>center</Box>
    <Box textAlign='justify'>justify</Box>
  </>
);

export const TextTransform: ComponentStory<typeof Box> = () => (
  <>
    <Box textTransform='none'>none</Box>
    <Box textTransform='uppercase'>uppercase</Box>
    <Box textTransform='lowercase'>lowercase</Box>
    <Box textTransform='capitalize'>capitalize</Box>
  </>
);

export const TextDecoration: ComponentStory<typeof Box> = () => (
  <>
    <Box textDecorationLine='none'>none</Box>
    <Box textDecorationLine='underline'>underline</Box>
    <Box textDecorationLine='overline'>overline</Box>
    <Box textDecorationLine='line-through'>line-through</Box>
  </>
);

const widthElements = (
  <>
    <Box w='x64' />
    <Box width='x64' />
    <Box w='none' minWidth='x64' />
    <Box w='sw' maxWidth='x64' />
  </>
);

export const Widths: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(widthElements).map((child) =>
      React.cloneElement(child, { bg: 'primary-200', h: 'x32', m: 'x4' })
    )}
  </Box>
);

const heightElements = (
  <>
    <Box h='x64' />
    <Box height='x64' />
    <Box h='none' minHeight='x64' />
    <Box h='sw' maxHeight='x64' />
  </>
);
export const Heights: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(heightElements).map((child) =>
      React.cloneElement(child, { bg: 'primary-200', w: 'x32', m: 'x4' })
    )}
  </Box>
);

const sizeElements = (
  <>
    <Box size='x64' />
    <Box size='none' minSize='x64' />
    <Box size={9999} maxSize='x64' />
  </>
);
export const Sizes: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(sizeElements).map((child) =>
      React.cloneElement(child, { bg: 'primary-200', m: 'x4' })
    )}
  </Box>
);

const displayElements = (
  <>
    <Box display='none' />
    <Box display='inline' />
    <Box display='inline-block' />
    <Box display='inline-flex' />
    <Box display='block' />
    <Box verticalAlign='-40px' />
    <Box verticalAlign='40px' />
  </>
);

export const Display: ComponentStory<typeof Box> = () => (
  <Box>
    {flattenChildren(displayElements).map((child) =>
      React.cloneElement(child, { children: child.props.display })
    )}
  </Box>
);

const borderElements = (
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

export const Borders: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(borderElements).map((child) =>
      React.cloneElement(child, {
        bg: 'primary-200',
        size: 'x32',
        m: 'x16',
      })
    )}
  </Box>
);

const borderRadioElements = (
  <>
    <Box borderRadius='full' />
    <Box borderStartStartRadius='full' />
    <Box borderStartEndRadius='full' />
    <Box borderEndStartRadius='full' />
    <Box borderEndEndRadius='full' />
  </>
);
export const BorderRadio: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(borderRadioElements).map((child) =>
      React.cloneElement(child, {
        bg: 'primary-200',
        size: 'x32',
        m: 'x16',
      })
    )}
  </Box>
);

const positionElements = (
  <>
    <Box position='static' />
    <Box position='relative' />
    <Box position='absolute' />
    <Box position='fixed' />
  </>
);
export const Position: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(positionElements).map((child) =>
      React.cloneElement(child, {
        bg: 'primary-200',
        size: 'x32',
        m: 'x16',
      })
    )}
  </Box>
);

const zIndexElements = (
  <>
    <Box zIndex='2' borderColor='success-300' />
    <Box zIndex='1' borderColor='info-300' />
    <Box zIndex='2' borderColor='warning-300' />
    <Box zIndex='1' borderColor='danger-300' />
  </>
);
export const ZIndex: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(zIndexElements).map((child) =>
      React.cloneElement(child, {
        bg: 'primary-200',
        borderWidth: 'x4',
        size: 'x32',
        m: 'neg-x2',
      })
    )}
  </Box>
);

const insetElements = (
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
export const Inset: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(insetElements).map((child) => (
      <Box
        key={child.key}
        position='relative'
        bg='neutral-200'
        m='x16'
        size='x64'
      >
        {React.cloneElement(child, {
          bg: 'primary-200',
          position: 'absolute',
          minSize: 'x16',
        })}
      </Box>
    ))}
  </Box>
);

const elevationElements = (
  <>
    <Box elevation='0' />
    <Box elevation='1' />
    <Box elevation='2' />
  </>
);
export const Elevation: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(elevationElements).map((child) =>
      React.cloneElement(child, {
        bg: 'primary-100',
        m: 'x16',
        size: 'x64',
      })
    )}
  </Box>
);

const invisibleElements = <Box invisible />;
export const Invisible: ComponentStory<typeof Box> = () => (
  <Box display='flex' flexWrap='wrap' alignItems='center'>
    {flattenChildren(invisibleElements).map((child) => (
      <Box key={child.key} bg='neutral-200' p='x16'>
        {React.cloneElement(child, { bg: 'primary-200', size: 'x16' })}
      </Box>
    ))}
  </Box>
);

export const WithRichContent: ComponentStory<typeof Box> = () => (
  <Box withRichContent>
    <p>
      <strong>This text is strong</strong>
    </p>
    <p>
      <em>This text has emphasis</em>
    </p>
    <p>
      This is<sub> subscript</sub> and <sup>superscript</sup>
    </p>
  </Box>
);

export const WithTruncatedText: ComponentStory<typeof Box> = () => (
  <Box withTruncatedText w='x80'>
    This text is truncated.
  </Box>
);
