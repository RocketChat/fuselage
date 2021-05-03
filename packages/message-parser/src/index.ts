import { ASTMessage } from './definitions';
import grammar from './grammar.peg';

export const parser = (input: string): ASTMessage => grammar.parse(input);
