import { ASTMessage } from './definitions';
import { parse } from './grammar.pegjs';

export const parser = (input: string): ASTMessage => parse(input);
