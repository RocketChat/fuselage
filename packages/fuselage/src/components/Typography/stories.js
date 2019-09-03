import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { createPropsFromKnobs, verticallyCentered } from '../../helpers/storybook';
import { Headline, Subtitle, Paragraph, Text } from './index';
import typography from '../../theme/typography';


const textVariants = Object.keys(typography.variants);
const textAlignments = ['left', 'center', 'right'];
const textColors = Object.keys(typography.colors);

const headingProps = createPropsFromKnobs({
  children: 'The quick brown fox jumps over the lazy dog.',
  textAlignment: ['', textAlignments],
  textColor: ['default', textColors],
});

storiesOf('Elements|Headline', module)
  .addDecorator(withKnobs)
  .addDecorator(verticallyCentered)
  .addParameters({ jest: ['Typography/spec'] })
  .add('default', () => <Headline {...headingProps()} />);

const subtitleProps = createPropsFromKnobs({
  children: 'The quick brown fox jumps over the lazy dog.',
  emphasis: false,
  textAlignment: ['', textAlignments],
  textColor: ['default', textColors],
});

storiesOf('Elements|Subtitle', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Typography/spec'] })
  .add('default', () => <Subtitle {...subtitleProps()} />)
  .add('with emphasis', () => <Subtitle {...subtitleProps({ emphasis: true })} />);

const paragraphProps = createPropsFromKnobs({
  children: 'The quick brown fox jumps over the lazy dog.',
  emphasis: false,
  textAlignment: ['', textAlignments],
  textColor: ['default', textColors],
});

storiesOf('Elements|Paragraph', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Typography/spec'] })
  .add('default', () => <Paragraph {...paragraphProps()} />)
  .add('with emphasis', () => <Paragraph {...paragraphProps({ emphasis: true })} />);

const textProps = createPropsFromKnobs({
  children: 'The quick brown fox jumps over the lazy dog.',
  textVariant: ['', textVariants],
  textAlignment: ['', textAlignments],
  textColor: ['default', textColors],
});

storiesOf('Elements|Text', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['Typography/spec'] })
  .add('default', () => <Text {...textProps()} />);
