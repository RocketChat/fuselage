---
'@rocket.chat/fuselage-hooks': minor
'@rocket.chat/fuselage': patch
---

feat(fuselage-hooks): Deprecate `useEffectEvent` in favor of `useStableCallback`

The `useEffectEvent` hook has been renamed to `useStableCallback` to better reflect its purpose and behavior. The new
name emphasizes that the hook provides a stable callback function that maintains a consistent identity across renders
while always having access to the latest values of props and state. It differs from `useEffectEvent` from React 19,
which returns functions that can only be called from inside effects and other effect events.
