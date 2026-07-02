---
'@rocket.chat/stylis-logical-props-middleware': patch
'@rocket.chat/fuselage-forms': patch
'@rocket.chat/onboarding-ui': patch
'@rocket.chat/css-in-js': patch
'@rocket.chat/fuselage': patch
---

chore(deps): bump the prod-deps group (stylis, react-aria, react-stately, react-keyed-flatten-children, react-hook-form)

Updates the `AriaSelectProps` import in `Select` to come from `react-aria` (its `@react-types/select` re-export path was dropped) and accounts for the new selection-mode generic introduced in `react-aria` 3.50.
