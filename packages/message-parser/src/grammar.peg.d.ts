import { ASTMessage } from './definitions';

interface Grammar {
  parse: (input: string) => ASTMessage;
}

declare const grammar: Grammar;

export = grammar;
