declare module '*.pegjs' {
  export const parse: (input: string) => import('../definitions').ASTMessage;
}
