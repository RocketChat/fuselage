# Divider

A simple divider component that can be used to separate content horizontally or vertically.

## Usage

```tsx
import { Divider } from '@rocket.chat/fuselage-tamagui';

// Basic horizontal divider
<Divider />

// Divider with text
<Divider>Section Title</Divider>

// Vertical divider
<Divider vertical />

// Danger variant
<Divider variation="danger">Error Section</Divider>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Text content to display in the center of the divider |
| `vertical` | `boolean` | `false` | Whether to render as a vertical divider |
| `variation` | `'danger'` | - | Visual variation (danger shows red color) |

## Examples

### Basic Horizontal Divider
```tsx
<Divider />
```

### Divider with Text
```tsx
<Divider>Section Title</Divider>
```

### Vertical Divider
```tsx
<XStack alignItems="center" gap="$2">
  <Button>Left</Button>
  <Divider vertical />
  <Button>Right</Button>
</XStack>
```

### Danger Variant
```tsx
<Divider variation="danger">Error Section</Divider>
```

## Accessibility

- Uses `accessibilityRole="separator"` for screen readers
- Properly indicates content separation
