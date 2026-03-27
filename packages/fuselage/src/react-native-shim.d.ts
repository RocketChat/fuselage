// Stub for react-native types required by @tamagui/element source files.
// Tamagui points "types" to its src/ directory, which imports react-native.
// On web we use react-native-web at runtime; this shim satisfies the type checker.
declare module 'react-native' {
  export type View = any;
  export type Text = any;
  export type ViewProps = any;
  export type TextProps = any;
  export type ImageProps = any;
  export type TextStyle = any;
  export type ViewStyle = any;
  export type ImageStyle = any;
  export type StyleProp<T> = T | T[] | null | undefined;
  export type ColorValue = string;
  export type GestureResponderEvent = any;
  export type LayoutChangeEvent = any;
  export type NativeSyntheticEvent<T> = any;
  export type TextInput = any;
  export type TextInputProps = any;
  export type Animated = any;
  export const Platform: { OS: string; select: (obj: any) => any };
  export const StyleSheet: { create: (styles: any) => any; flatten: (style: any) => any };
}
