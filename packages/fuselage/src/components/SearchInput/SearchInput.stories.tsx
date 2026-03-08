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
### Visual States and Interaction Documentation
This story demonstrates the **SearchInput** component's appearance across different state combinations and sizes.

#### Y-Axis: Component States
The vertical axis illustrates how the input responds to different interaction and validation logic:
- **Default / Small:** The base state of the component.
- **Hover:** The visual style when the user's cursor is over the input.
- **Active:** The state when the input is being actively pressed or clicked.
- **Focus:** The state when the component is selected via mouse or keyboard (**Tab** key), showing the focus ring for accessibility.
- **Disabled:** Prevents interaction and reduces opacity to signal the input is unavailable.
- **Errored:** Applies a validation error style (red border). The story also shows combined states (e.g., **Errored + Focus**) to ensure accessibility is maintained even during validation failures.

#### X-Axis: Content Variations
The horizontal axis shows how states interact with different internal configurations:
- **With Placeholder:** Showing the hint text style.
- **With Value:** Showing standard typed text.
- **With Icon:** Showing the alignment and spacing when an 'addon' (magnifier icon) is present.
`,
		},
	},
};