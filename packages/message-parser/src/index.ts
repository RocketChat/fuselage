import type { MarkdownAST } from './definitions';
import { parse } from './grammar.pegjs';

export * from './definitions';

export { isNodeOfType } from './guards';
export { MarkdownAST };
export const parser = (input: string): MarkdownAST => parse(input);
