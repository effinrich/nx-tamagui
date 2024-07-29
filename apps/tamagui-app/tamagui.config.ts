/* eslint-disable @typescript-eslint/no-empty-interface */
import { config as configBase } from '@tamagui/config';
import { createTamagui } from 'tamagui';

export const config = createTamagui(configBase);

type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
