import type { StoryFn, Meta } from '@storybook/react-webpack5';
import { Box } from '@rocket.chat/fuselage';
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

// --- UPDATED HELPER COMPONENT ---
const ResponsiveLayout = ({ component: Component, common, xAxis, yAxis }: any) => (
  <Box display="flex" flexDirection="column">
    {Object.entries(yAxis).map(([yLabel, yProps]: [string, any]) => (
      <Box key={yLabel} display="flex" flexWrap="wrap" alignItems="center" marginBlockEnd="x24">
        
        {/* Row Label (Left Side) */}
        <Box width="x120" paddingInlineEnd="x16" color="default" fontScale="p2">
          {yLabel}
        </Box>

        {/* Inputs Container */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {Object.entries(xAxis).map(([xLabel, xProps]: [string, any]) => (
            // 👇 UPDATED: Wrapped in a Box to show the Label on top
            <Box key={xLabel} display="flex" flexDirection="column">
              {/* The Column Label (e.g. "With Placeholder") */}
              <Box fontScale="c1" color="default" marginBlockEnd="x8">
                {xLabel}
              </Box>
              
              {/* The Input Component */}
              <Component
                {...common}
                {...yProps}
                {...xProps}
                aria-label={xLabel}
              />
            </Box>
          ))}
        </div>
      </Box>
    ))}
  </Box>
);

// --- STATES STORY ---
export const States: StoryFn<typeof SearchInput> = () => (
  <Box padding="x24">
    <Box fontScale="h2" marginBlockEnd="x24">Standard Size</Box>
    {/* Standard Size */}
    <ResponsiveLayout
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


    {/* Small Size */}
    <Box marginBlockStart="x48">
      <Box fontScale="h2" marginBlockEnd="x24">Small Size</Box>
      <ResponsiveLayout
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
    </Box>
  </Box>

);