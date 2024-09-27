import type { StoryFn, Meta } from '@storybook/react';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Icon } from '../Icon';
import { SearchInput } from './SearchInput';

export default {
  title: 'Inputs/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

const Template: StoryFn<typeof SearchInput> = (args) => (
  <SearchInput aria-label='search' {...args} />
);

export const Default: StoryFn<typeof SearchInput> = Template.bind({});

export const WithIconAddon: StoryFn<typeof SearchInput> = Template.bind({});
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: StoryFn<typeof SearchInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: StoryFn<typeof SearchInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: StoryFn<typeof SearchInput> = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: StoryFn<typeof SearchInput> = Template.bind({});
WithValue.args = {
  defaultValue: 'cat rooms',
};

export const States: StoryFn<typeof SearchInput> = () => (
  <>
    <PropsVariationSection
      component={SearchInput}
      common={{ 'onChange': () => {}, 'aria-label': 'search' }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'Value' },
        'with icon': {
          addon: <Icon name='magnifier' size='x20' />,
          value: 'Value',
        },
      }}
      yAxis={{
        'default': {},
        'hover': { className: 'hover' },
        'active': { className: 'active' },
        'focus': { className: 'focus' },
        'disabled': { disabled: true },
        'errored': { error: 'Error' },
        'errored + hover': { className: 'hover', error: 'Error' },
        'errored + active': { className: 'active', error: 'Error' },
        'errored + focus': { className: 'focus', error: 'Error' },
      }}
    />
    <PropsVariationSection
      component={SearchInput}
      common={{ 'onChange': () => {}, 'small': true, 'aria-label': 'search' }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'Value' },
        'with icon': {
          addon: <Icon name='magnifier' size='x20' />,
          value: 'Value',
        },
      }}
      yAxis={{
        'small': {},
        'hover': { className: 'hover' },
        'active': { className: 'active' },
        'focus': { className: 'focus' },
        'disabled': { disabled: true },
        'errored': { error: 'Error' },
        'errored + hover': { className: 'hover', error: 'Error' },
        'errored + active': { className: 'active', error: 'Error' },
        'errored + focus': { className: 'focus', error: 'Error' },
      }}
    />
  </>
);
