import { ASTMessage } from './definitions';

export interface parser {
  parse: (string: string) => ASTMessage;
}
