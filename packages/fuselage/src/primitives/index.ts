import { styled, Text, View } from '@tamagui/core';

// Only use 'rcx-box' (NOT 'rcx-box--full') to avoid margin/padding/border
// conflicts with SCSS classes from non-migrated components.
// Tamagui already resets margin/padding via .is_View/.is_Text.
// rcx-box provides: flex:0 1 auto, box-sizing, font-variant-numeric, outline, font-smoothing.

export const RcxView = styled(View, {
  name: 'RcxView',
  className: 'rcx-box',
});

export const RcxText = styled(Text, {
  name: 'RcxText',
  className: 'rcx-box',
});

// NOTE: Do NOT use focusable:true — Tamagui v2 RC forces tabIndex:-1 which
// overrides our tabIndex:0. Use only tabIndex for keyboard accessibility.
export const RcxInteractive = styled(View, {
  name: 'RcxInteractive',
  className: 'rcx-box',
  cursor: 'pointer',
});

export const RcxInteractiveText = styled(Text, {
  name: 'RcxInteractiveText',
  className: 'rcx-box',
  cursor: 'pointer',
});
