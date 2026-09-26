---
'@rocket.chat/fuselage': patch
---

fix(fuselage): make InputBox date/time picker addons keyboard accessible

The calendar and clock addons for `InputBox` with `type='date'` or `type='time'`
were rendered as `<i aria-hidden="true">` elements with an `onClick` handler. This
made them unreachable via keyboard navigation and invisible to screen readers.

They are now rendered as `IconButton` elements (`<button type="button">`) with:
- A descriptive `aria-label` ("Open date picker" / "Open time picker")
- Native keyboard focus and activation (Tab, Enter, Space)
- The `disabled` attribute when the associated input is `disabled` or `readOnly`
- A `try/catch` guard around `showPicker()` for unsupported browsers

Fixes: RocketChat/fuselage#2236
