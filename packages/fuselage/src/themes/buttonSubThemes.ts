/**
 * Generate Button sub-themes from existing button tokens in a base theme.
 * Each variant maps button-specific tokens to Tamagui standard theme keys
 * (background, backgroundHover, backgroundPress, etc.)
 *
 * This allows ONE ButtonFrame styled component to handle ALL color variants
 * via <Theme name="Button_primary"> instead of separate PrimaryButton/DangerButton etc.
 */

type BaseTheme = Record<string, string>;

const BUTTON_VARIANTS = [
  'secondary',
  'primary',
  'danger',
  'warning',
  'success',
  'secondaryDanger',
  'secondaryWarning',
  'secondarySuccess',
] as const;

// Focus shadow per variant
const FOCUS_SHADOW: Record<string, string> = {
  secondary: '0 0 0 2px var(--shadowHighlight)',
  primary: '0 0 0 2px var(--shadowHighlight)',
  danger: '0 0 0 2px var(--strokeExtraLightError)',
  warning: '0 0 0 2px var(--shadowHighlight)',
  success: '0 0 0 2px var(--shadowHighlight)',
  secondaryDanger: '0 0 0 2px var(--strokeExtraLightError)',
  secondaryWarning: '0 0 0 2px var(--shadowHighlight)',
  secondarySuccess: '0 0 0 2px var(--shadowHighlight)',
};

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function createButtonSubThemes(baseTheme: BaseTheme) {
  const subThemes: Record<string, BaseTheme> = {};

  for (const variant of BUTTON_VARIANTS) {
    const cap = capitalize(variant);
    const bg = baseTheme[`button${cap}Bg`];
    const hoverBg = baseTheme[`button${cap}HoverBg`];
    const pressBg = baseTheme[`button${cap}PressBg`];
    const focusBg = baseTheme[`button${cap}FocusBg`];
    const disabledBg = baseTheme[`button${cap}DisabledBg`];
    const color = baseTheme[`button${cap}Color`];
    const disabledColor = baseTheme[`button${cap}DisabledColor`];

    if (!bg) continue;

    subThemes[`Button_${variant}`] = {
      // Tamagui standard theme keys
      background: bg,
      backgroundHover: hoverBg || bg,
      backgroundPress: pressBg || bg,
      backgroundFocus: focusBg || bg,
      backgroundDisabled: disabledBg || bg,
      color: color || baseTheme.color || '#000',
      colorDisabled: disabledColor || color || baseTheme.color || '#000',
      // Border = background for buttons
      borderColor: bg,
      borderColorHover: hoverBg || bg,
      borderColorPress: pressBg || bg,
      borderColorFocus: baseTheme.strokeExtraDark || '#000',
      borderColorDisabled: disabledBg || bg,
      // Focus shadow
      shadowColor: FOCUS_SHADOW[variant] || '0 0 0 2px var(--shadowHighlight)',
    };
  }

  return subThemes;
}
