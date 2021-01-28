import {
  ElementType,
  IInputBlock,
  IPlainTextInput,
  ILinearScaleElement,
} from '../blocks';
import { createElementRenderer, createSurfaceRenderer } from '../functions';
import { IParser } from '../parsers/IParser';
import { ElementRenderer } from '../renderers/ElementRenderer';
import { UiKitParserMessage } from './message';

export abstract class UiKitParserModal
  extends UiKitParserMessage
  implements IParser<unknown> {
  input: ElementRenderer<unknown, IInputBlock>;

  plainInput: ElementRenderer<unknown, IPlainTextInput>;

  linearScale: ElementRenderer<unknown, ILinearScaleElement>;

  renderInputs = createElementRenderer(this, [
    ElementType.STATIC_SELECT,
    ElementType.PLAIN_TEXT_INPUT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.LINEAR_SCALE,
  ]);
}

export const uiKitModal = createSurfaceRenderer<unknown>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
  ElementType.INPUT,
]);
