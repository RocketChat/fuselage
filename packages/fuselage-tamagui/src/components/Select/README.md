# Select

A dropdown select component with customizable options and styling.

## Usage

```tsx
import { Select } from '@rocket.chat/fuselage-tamagui';

function MyForm() {
  const options = [
    ['option1', 'Option 1'],
    ['option2', 'Option 2'],
    ['option3', 'Option 3'],
  ];

  return (
    <Select
      options={options}
      placeholder="Choose an option"
      onChange={(value) => console.log('Selected:', value)}
      aria-label="Select option"
    />
  );
}
```

## Props

### Required Props

- `options` - Array of options in format `[value, label]`

### Optional Props

- `value` - Currently selected value
- `onChange` - Callback when selection changes
- `placeholder` - Placeholder text when no option is selected
- `error` - Error message to display
- `disabled` - Whether the select is disabled
- `small` - Whether to use small size
- `aria-label` - Accessibility label for screen readers

## Features

- **Dropdown Interface**: Click to open/close options list
- **Keyboard Navigation**: Full keyboard accessibility
- **Visual States**: Hover, focus, disabled, and error states
- **Responsive**: Works on all screen sizes
- **Customizable**: Supports different sizes and styling
- **Accessibility**: Proper ARIA attributes and keyboard support

## Examples

### Basic Usage
```tsx
<Select
  options={[
    ['1', 'Option 1'],
    ['2', 'Option 2'],
    ['3', 'Option 3'],
  ]}
  placeholder="Select an option"
  aria-label="Basic select"
/>
```

### Controlled Component
```tsx
const [value, setValue] = useState('1');

<Select
  options={options}
  value={value}
  onChange={setValue}
  aria-label="Controlled select"
/>
```

### With Error State
```tsx
<Select
  options={options}
  error="Please select an option"
  aria-label="Error select"
/>
```

### Small Size
```tsx
<Select
  options={options}
  small
  placeholder="Small select"
  aria-label="Small select"
/>
```

### Disabled State
```tsx
<Select
  options={options}
  disabled
  aria-label="Disabled select"
/>
```

## Accessibility

- Proper ARIA attributes (`aria-haspopup`, `aria-expanded`)
- Keyboard navigation support
- Screen reader friendly
- Focus management
- High contrast support
