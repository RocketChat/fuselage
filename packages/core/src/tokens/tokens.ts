import { createTokens } from "@tamagui/core";
import { colors } from "./colors";

export const tokens = createTokens({
  color: colors,
  size: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  radius: {
    default: 4,
  },
  space: {
    hero: 64,
  }
});
