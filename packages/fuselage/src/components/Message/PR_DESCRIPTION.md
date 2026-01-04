# Accessibility & Responsiveness Improvements for Message Components

Closes #1819

## Description

This PR enhances accessibility and responsiveness across all Message components in `packages/fuselage/src/components/Message/`. The changes ensure WCAG 2.1 compliance, improve screen reader support, add comprehensive keyboard navigation, and implement responsive design patterns for all device sizes.

## Key Changes

### Accessibility Enhancements
- **Message**: Added `role="article"`, `aria-label`, `aria-busy`, `aria-selected`, and keyboard navigation (`tabIndex`)
- **MessageHeader**: Added `role="group"` and `aria-label="Message header"`
- **MessageBody**: Added `role="region"` and `aria-label="Message content"`
- **MessageTimestamp**: Changed from `<span>` to semantic `<time>` element with `dateTime` prop
- **MessageReactions**: Added `role="group"` and `aria-label="Message reactions"`
- **MessageReaction**: Added descriptive `aria-label`, `aria-pressed`, and keyboard handlers (Enter/Space)
- **MessageReactionAction**: Added `aria-label="Add reaction"` and keyboard support
- **MessageMetrics**: Added `role="group"` and `aria-label="Message metrics"`

### Responsive Design
- **Fluid Padding**: Implemented `clamp(8px, 3vw, 20px)` for adaptive spacing
- **Breakpoint Layouts**: Mobile (column) vs tablet/desktop (row) layouts
- **Responsive Typography**: Font sizing with `clamp(0.875rem, 2.5vw, 1rem)` and `line-height: 1.5`

### Testing
- Enhanced `Message.spec.tsx` with accessibility and keyboard navigation tests
- Created `MessageBody.spec.tsx` with comprehensive test coverage
- Created `MessageHeader.spec.tsx` for ARIA validation
- Created `MessageTimestamp.spec.tsx` for semantic HTML tests
- Created `MessageReaction.spec.tsx` for keyboard interaction tests
- All tests include `jest-axe` accessibility validation

### WCAG 2.1 Compliance
- ✅ 1.3.1 Info and Relationships (semantic structure)
- ✅ 2.1.1 Keyboard (full keyboard accessibility)
- ✅ 4.1.2 Name, Role, Value (proper ARIA)
- ✅ 1.4.4 Resize Text (responsive typography)
- ✅ 1.4.10 Reflow (responsive layouts)

## Build Status
✅ All changes compile successfully  
✅ No TypeScript errors  
✅ Backward compatible
