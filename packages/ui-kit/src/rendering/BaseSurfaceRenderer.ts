import { Block } from '../blocks/Block';
import { BlockElement } from '../blocks/BlockElement';
import { LayoutBlock } from '../blocks/LayoutBlock';
import { LayoutBlockType } from '../blocks/LayoutBlockType';
import { TextObject } from '../blocks/TextObject';
import { TextObjectType } from '../blocks/TextObjectType';
import { isActionsBlockElement } from '../blocks/isActionsBlockElement';
import { isContextBlockElement } from '../blocks/isContextBlockElement';
import { isInputBlockElement } from '../blocks/isInputBlockElement';
import { isSectionBlockAccessoryElement } from '../blocks/isSectionBlockAccessoryElement';
import { isTextObject } from '../blocks/isTextObject';
import { ActionsBlock } from '../blocks/layout/ActionsBlock';
import { ConditionalBlock } from '../blocks/layout/ConditionalBlock';
import { ContextBlock } from '../blocks/layout/ContextBlock';
import { InputBlock } from '../blocks/layout/InputBlock';
import { SectionBlock } from '../blocks/layout/SectionBlock';
import { Markdown } from '../blocks/text/Markdown';
import { PlainText } from '../blocks/text/PlainText';
import { isNotNull } from '../isNotNull';
import { BlockContext } from './BlockContext';
import { Conditions } from './Conditions';
import { ISurfaceRenderer } from './ISurfaceRenderer';
import { isAllowedLayoutBlock } from './isAllowedLayoutBlock';
import { renderBlockElement } from './renderBlockElement';
import { renderLayoutBlock } from './renderLayoutBlock';
import { renderTextObject } from './renderTextObject';
import { resolveConditionalBlocks } from './resolveConditionalBlocks';

export type PossibleAllowedLayouts = Exclude<
  LayoutBlock,
  ConditionalBlock
>['type'];
export abstract class BaseSurfaceRenderer<
  OutputElement,
  AllowedLayoutItems extends PossibleAllowedLayouts = PossibleAllowedLayouts
> implements ISurfaceRenderer<OutputElement>
{
  public constructor(readonly allowedLayoutBlockTypes?: AllowedLayoutItems[]) {
    this.allowedLayoutBlockTypes = allowedLayoutBlockTypes;
  }

  public render(
    blocks: readonly Block[],
    conditions?: Conditions
  ): OutputElement[] {
    if (!Array.isArray(blocks)) {
      return [];
    }

    return blocks
      .flatMap(resolveConditionalBlocks(conditions))
      .filter(isAllowedLayoutBlock(this.allowedLayoutBlockTypes))
      .map(renderLayoutBlock(this))
      .filter(isNotNull);
  }

  public renderTextObject(
    textObject: TextObject,
    index: number,
    context: BlockContext
  ): OutputElement | null {
    return renderTextObject(this, context)(textObject, index);
  }

  public renderActionsBlockElement(
    block: BlockElement,
    index: number
  ): OutputElement | null {
    if (
      (this.allowedLayoutBlockTypes as string[])?.includes(
        LayoutBlockType.ACTIONS
      ) === false &&
      !isActionsBlockElement(block)
    ) {
      return null;
    }

    return renderBlockElement(this, BlockContext.ACTION)(block, index);
  }

  /** @deprecated */
  public renderActions(
    element: ActionsBlock['elements'][number],
    _context: BlockContext,
    _: undefined,
    index: number
  ): OutputElement | null {
    return this.renderActionsBlockElement(element, index);
  }

  public renderContextBlockElement(
    block: TextObject | BlockElement,
    index: number
  ): OutputElement | null {
    if (
      (this.allowedLayoutBlockTypes as string[])?.includes(
        LayoutBlockType.CONTEXT
      ) === false &&
      !isContextBlockElement(block)
    ) {
      return null;
    }

    if (isTextObject(block)) {
      return renderTextObject(this, BlockContext.CONTEXT)(block, index);
    }

    return renderBlockElement(this, BlockContext.CONTEXT)(block, index);
  }

  /** @deprecated */
  public renderContext(
    element: ContextBlock['elements'][number],
    _context: BlockContext,
    _: undefined,
    index: number
  ): OutputElement | null {
    return this.renderContextBlockElement(element, index);
  }

  public renderInputBlockElement(
    block: BlockElement,
    index: number
  ): OutputElement | null {
    if (
      (this.allowedLayoutBlockTypes as string[])?.includes(
        LayoutBlockType.INPUT
      ) === false &&
      !isInputBlockElement(block)
    ) {
      return null;
    }

    return renderBlockElement(this, BlockContext.FORM)(block, index);
  }

  /** @deprecated */
  public renderInputs(
    element: InputBlock['element'],
    _context: BlockContext,
    _: undefined,
    index: number
  ): OutputElement | null {
    return this.renderInputBlockElement(element, index);
  }

  public renderSectionAccessoryBlockElement(
    block: BlockElement,
    index: number
  ): OutputElement | null {
    if (
      (this.allowedLayoutBlockTypes as string[])?.includes(
        LayoutBlockType.SECTION
      ) === false &&
      !isSectionBlockAccessoryElement(block)
    ) {
      return null;
    }

    return renderBlockElement(this, BlockContext.SECTION)(block, index);
  }

  /** @deprecated */
  public renderAccessories(
    element: Exclude<SectionBlock['accessory'], undefined>,
    _context: BlockContext,
    _: undefined,
    index: number
  ): OutputElement | null {
    return this.renderSectionAccessoryBlockElement(element, index);
  }

  /** @deprecated */
  public plainText(
    element: PlainText,
    context: BlockContext,
    index: number
  ): OutputElement | null {
    return this[TextObjectType.PLAIN_TEXT](element, context, index);
  }

  /** @deprecated */
  public [TextObjectType.MARKDOWN](
    _element: Markdown,
    _context: BlockContext,
    _index: number
  ): OutputElement | null {
    return null;
  }

  /** @deprecated */
  public text(
    textObject: TextObject,
    context: BlockContext,
    index: number
  ): OutputElement | null {
    switch (textObject.type) {
      case TextObjectType.PLAIN_TEXT:
        return this.plainText(textObject, context, index);

      case TextObjectType.MARKDOWN:
        return this.mrkdwn(textObject, context, index);

      default:
        return null;
    }
  }

  public abstract [TextObjectType.PLAIN_TEXT](
    textObject: PlainText,
    context: BlockContext,
    index: number
  ): OutputElement | null;
}
