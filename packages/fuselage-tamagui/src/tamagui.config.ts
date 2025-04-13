import { tokens } from '@rocket.chat/fuselage-tamagui-tokens';
import { shorthands } from '@tamagui/shorthands';
import { createTamagui } from 'tamagui';

const config = createTamagui({
  tokens,
  shorthands,
  themes: {
    light: {
      // Use tokens from fuselage-tamagui-tokens
    },
    dark: {
      // Use tokens from fuselage-tamagui-tokens
    },
  },
});

export type AppConfig = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
