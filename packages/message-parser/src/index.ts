import { ASTMessage } from './definitions';
import { parse } from './grammar.pegjs';

export * from './definitions';

export { isNodeOfType } from './guards';

export const parser = (input: string): ASTMessage => parse(input);
