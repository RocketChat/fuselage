import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import { exampleAvatar, blankAvatar } from '../../../.storybook/helpers';
import Box from '../Box';
import Margins from '../Margins';
import { Chip } from './Chip';

export default {
  title: 'Data Display/Chip',
  component: Chip,
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args) => (
  <Chip {...args}>Marie Rowe</Chip>
);

export const Default = Template.bind({});

export const WithThumbUrl = Template.bind({});
WithThumbUrl.args = {
  thumbUrl: exampleAvatar,
  onClick: action('click'),
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  onClick: action('click'),
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithThumb = () => (
  <Box display='flex' margin='-x4'>
    <Margins all='x4'>
      <Chip thumbUrl={blankAvatar}>Chip</Chip>
      <Chip thumbUrl={blankAvatar} onClick={action('click')}>
        Chip
      </Chip>
    </Margins>
  </Box>
);
