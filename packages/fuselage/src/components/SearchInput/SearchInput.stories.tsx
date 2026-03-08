import type { StoryFn, Meta } from '@storybook/react-webpack5';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Icon } from '../Icon';

import SearchInput from './SearchInput';

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
States.parameters = {
  docs: {
    description: {
      story: `
This story visualizes the **SearchInput** across all supported interactive states and sizes.

- **Default**: The standard resting state of the component.
- **Hover**: Triggered when the mouse cursor is positioned over the input field.
- **Active**: Triggered momentarily while the user is clicking or pressing down on the input.
- **Focus**: Triggered when the user selects the input (via click or keyboard \`Tab\`). This state highlights the border to indicate it is ready for typing.
- **Disabled**: The input is non-interactive and visually dimmed to indicate unavailability.
- **Errored**: Indicates a validation failure, typically changing the border color to red.
      `,
    },
  },
};
