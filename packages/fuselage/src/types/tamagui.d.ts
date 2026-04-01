declare module 'tamagui' {
  import type { ComponentType, ReactNode } from 'react';

  // Token types
  export function createTokens<T extends Record<string, Record<string, any>>>(
    tokens: T
  ): T;

  // Font types
  interface FontConfig {
    family: string;
    size: Record<string, number>;
    lineHeight: Record<string, number>;
    weight: Record<string, string>;
    letterSpacing: Record<string, number>;
    face: Array<{ normal: string; bold?: string }> | Record<string, { normal: string }>;
  }

  export function createFont(config: FontConfig): FontConfig;

  // Tamagui config
  interface TamaguiConfig {
    tokens: any;
    themes: Record<string, any>;
    fonts: Record<string, any>;
    media: Record<string, any>;
    defaultFont?: string;
    shouldAddPrefersColorThemes?: boolean;
    themeClassNameOnRoot?: boolean;
  }

  interface TamaguiInternalConfig extends TamaguiConfig {
    parsed: boolean;
  }

  export function createTamagui(config: TamaguiConfig): TamaguiInternalConfig;

  // Provider
  interface TamaguiProviderProps {
    config: TamaguiInternalConfig;
    defaultTheme?: string;
    children?: ReactNode;
    disableInjectCSS?: boolean;
    disableRootThemeClass?: boolean;
  }

  export const TamaguiProvider: ComponentType<TamaguiProviderProps>;

  // styled
  type StyledOptions = {
    name?: string;
    className?: string;
    focusable?: boolean;
    cursor?: string;
    variants?: Record<string, any>;
    defaultVariants?: Record<string, any>;
    context?: any;
    acceptsClassName?: boolean;
  } & Record<string, any>;

  export function styled<P extends ComponentType<any>>(
    component: P,
    options?: StyledOptions
  ): P;

  // Primitives
  export const View: ComponentType<any>;
  export const Text: ComponentType<any>;

  // Utility types
  export type GetProps<T> = T extends ComponentType<infer P> ? P : never;

  // Hooks
  export function useTheme(): Record<string, { val: string }>;
  export function useMedia(): Record<string, boolean>;

  // Context
  export function createStyledContext<T>(defaultValue: T): {
    Provider: ComponentType<{ children?: ReactNode } & Partial<T>>;
    useStyledContext: () => T;
  };

  // HOC
  export function withStaticProperties<
    A extends ComponentType<any>,
    B extends Record<string, any>,
  >(
    component: A,
    staticProps: B
  ): A & B;
}
