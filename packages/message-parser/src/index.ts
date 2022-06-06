import type { MarkdownAST } from './definitions';
import { parse } from './grammar.pegjs';

export * from './definitions';

export { isNodeOfType } from './guards';
export { MarkdownAST };

type Options = {
  hexColor?: boolean;
};

export const parser = (input: string, options?: Options): MarkdownAST =>
  parse(input, options);
