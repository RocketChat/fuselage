import { BaseSurfaceRenderer } from '../BaseSurfaceRenderer';
import { ActionsBlock, ContextBlock, SectionBlock } from '../definition/blocks';
import { ElementSetRenderer } from '../definition/rendering/ElementSetRenderer';
import { ElementType } from '../enums';
import { LayoutBlockType } from '../enums/LayoutBlockType';
import { createElementRenderer } from '../functions';
import { createSurfaceRenderer } from '../rendering';

export abstract class UiKitParserMessage<
  OutputElement
> extends BaseSurfaceRenderer<OutputElement> {
  public constructor() {
    super([
      LayoutBlockType.ACTIONS,
      LayoutBlockType.CONTEXT,
      LayoutBlockType.DIVIDER,
      LayoutBlockType.IMAGE,
      LayoutBlockType.SECTION,
    ]);
  }

  renderAccessories: ElementSetRenderer<
    OutputElement,
    Exclude<SectionBlock['accessory'], undefined>
  > = createElementRenderer(this, [
    ElementType.BUTTON,
    ElementType.IMAGE,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.USER_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.OVERFLOW,
  ]);

  renderActions: ElementSetRenderer<
    OutputElement,
    ActionsBlock['elements'][number]
  > = createElementRenderer(this, [
    ElementType.BUTTON,
    ElementType.STATIC_SELECT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.LINEAR_SCALE,
  ]);

  renderContext: ElementSetRenderer<
    OutputElement,
    ContextBlock['elements'][number]
  > = createElementRenderer(this, [
    ElementType.IMAGE,
    ElementType.PLAIN_TEXT,
    ElementType.MARKDOWN,
  ]);
}

export const uiKitMessage = createSurfaceRenderer();
