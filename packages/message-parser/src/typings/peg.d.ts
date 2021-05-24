declare module '*.pegjs' {
  export const parse: (
    input: string,
    options?: import('peggy').ParserOptions
  ) => import('../definitions').ASTMessage;
}
