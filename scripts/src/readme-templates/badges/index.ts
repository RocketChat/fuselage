export const badges = (
  ...badges: (string | null | undefined | false)[]
): string => badges.filter(Boolean).join(' ');
