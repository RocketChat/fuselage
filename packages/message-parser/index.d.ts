import { ASTMessage } from './src/definitions';

export interface parser {
  parse: (string: string) => ASTMessage;
}
