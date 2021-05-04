import { ASTMessage } from './definitions';
import { parse } from './grammar.pegjs';

export * from './definitions';

export const parser = (input: string): ASTMessage => parse(input);
