# IconButton

A circular button component designed to display icons with various styling options.

## Usage

```tsx
import { IconButton } from '@rocket.chat/fuselage-tamagui';

function MyComponent() {
  return (
    <IconButton
      icon="chat"
      size="medium"
      aria-label="Chat"
      onClick={() => console.log('Clicked!')}
    />
  );
}
```

## Props

### Required Props

- `icon` - The icon to display. Can be a string (icon name) or a React element

### Optional Props

- `size` - Size of the button: `'large' | 'medium' | 'small' | 'tiny' | 'mini'` (default: `'large'`)
- `primary` - Primary variant styling
- `secondary` - Secondary variant styling
- `info` - Info variant styling (blue)
- `success` - Success variant styling (green)
- `warning` - Warning variant styling (yellow)
- `danger` - Danger variant styling (red)
- `pressed` - Pressed state styling
- `disabled` - Disabled state
- `position` - Position styling: `'relative' | 'absolute' | 'fixed'`
- `overflow` - Overflow behavior: `'visible' | 'hidden'`

### Variant Combinations

The IconButton supports various combinations of variants:

- **Default** - Basic styling
- **Primary** - Blue background with white text
- **Secondary** - Gray background with dark text
- **Info** - Blue background with white text
- **Success** - Green background with white text
- **Warning** - Yellow background with dark text
- **Danger** - Red background with white text
- **Secondary + Info** - Gray background with blue text
- **Secondary + Success** - Gray background with green text
- **Secondary + Warning** - Gray background with yellow text
- **Secondary + Danger** - Gray background with red text

## Icon Sizes

The icon size is automatically determined based on the button size:

- `large` - 28px icon
- `medium` - 24px icon
- `small` - 20px icon
- `tiny` - 16px icon
- `mini` - 12px icon

## Examples

### Basic Usage
```tsx
<IconButton icon="chat" aria-label="Chat" />
```

### With Variants
```tsx
<IconButton icon="chat" info aria-label="Info chat" />
<IconButton icon="chat" secondary danger aria-label="Danger chat" />
```

### Different Sizes
```tsx
<IconButton icon="chat" size="large" aria-label="Large" />
<IconButton icon="chat" size="small" aria-label="Small" />
```

### With Custom Icon
```tsx
<IconButton 
  icon={<span>🤘🏾</span>} 
  aria-label="Custom emoji" 
/>
```

### With Badge
```tsx
<IconButton 
  icon="chat" 
  position="relative" 
  overflow="visible"
  aria-label="Chat with badge"
>
  <View
    position="absolute"
    backgroundColor="$red10"
    borderRadius={1000}
    minWidth={16}
    height={16}
    alignItems="center"
    justifyContent="center"
    top={0}
    right={0}
    transform="translate(30%, -30%)"
  >
    <Text color="white" fontSize={10}>2</Text>
  </View>
</IconButton>
```

## Accessibility

- Always provide an `aria-label` for screen readers
- The component supports keyboard navigation
- Proper focus states are included for accessibility
