import { IInputBlock, IPlainTextInput, InputElement } from '../blocks';
import { BlockRenderer } from '../renderers/BlockRenderer';
import { ElementRenderer } from '../renderers/ElementRenderer';
import { ElementSetRenderer } from '../renderers/ElementSetRenderer';
import { IParserMessage } from './IParserMessage';

export interface IParserModal<T> extends IParserMessage<T> {
  input: BlockRenderer<T, IInputBlock>;

  plainInput: ElementRenderer<T, IPlainTextInput>;

  renderInputs: ElementSetRenderer<T, InputElement>;
}
