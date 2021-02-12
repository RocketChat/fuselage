import { Conditions } from './definition/Conditions';
import {
  Block,
  ConditionalBlock,
  LayoutBlock,
  Markdown,
  PlainText,
  TextObject,
} from './definition/blocks';
import { ISurfaceRenderer } from './definition/rendering/ISurfaceRenderer';
import { BlockContext, TextObjectType } from './enums';
import {
  isAllowedLayoutBlock,
  isNotNull,
  renderLayoutBlock,
  resolveConditionalBlocks,
} from './rendering';

export abstract class BaseSurfaceRenderer<OutputElement>
  implements ISurfaceRenderer<OutputElement> {
  public constructor(
    public allowedLayoutBlockTypes?: Exclude<
      LayoutBlock,
      ConditionalBlock
    >['type'][]
  ) {}

  public render(blocks: readonly Block[], conditions?: Conditions) {
    if (!Array.isArray(blocks)) {
      return [];
    }

    return blocks
      .flatMap(resolveConditionalBlocks(conditions))
      .filter(isAllowedLayoutBlock(this.allowedLayoutBlockTypes))
      .map(renderLayoutBlock(this))
      .filter(isNotNull);
  }

  public plainText(
    _element: PlainText,
    _context: BlockContext,
    _index: number
  ): OutputElement | null {
    return null;
  }

  public mrkdwn(
    _element: Markdown,
    _context: BlockContext,
    _index: number
  ): OutputElement | null {
    return null;
  }

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
}
