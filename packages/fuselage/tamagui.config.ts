import { config } from '@rocket.chat/fuselage-core/src';

export type Conf = typeof config;

declare module 'tamagui' {
  type TamaguiCustomConfig = Conf;
}

export default config;
