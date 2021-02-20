import { v1 as uuid } from 'uuid';

import { BlockElementType } from '../../enums/BlockElementType';
import { LayoutBlockType } from '../../enums/LayoutBlockType';
import { TextObjectType } from '../../enums/TextObjectType';
import { Actionable } from './element/Actionable';
import { ActionableElement } from './element/ActionableElement';
import { BlockElement } from './element/BlockElement';
import { ButtonElement } from './element/ButtonElement';
import { ImageElement } from './element/ImageElement';
import { InputElement } from './element/InputElement';
import { MultiStaticSelectElement } from './element/MultiStaticSelectElement';
import { OverflowElement } from './element/OverflowElement';
import { PlainTextInputElement } from './element/PlainTextInputElement';
import { SelectElement } from './element/SelectElement';
import { StaticSelectElement } from './element/StaticSelectElement';
import { ActionsBlock } from './layout/ActionsBlock';
import { ConditionalBlock } from './layout/ConditionalBlock';
import { ContextBlock } from './layout/ContextBlock';
import { ImageBlock } from './layout/ImageBlock';
import { InputBlock } from './layout/InputBlock';
import { LayoutBlock } from './layout/LayoutBlock';
import { SectionBlock } from './layout/SectionBlock';
import { TextObject } from './text/TextObject';

type LayoutBlockOptions<LB extends LayoutBlock> = Omit<LB, 'type'>;
type BlockElementOptions<BE extends BlockElement> = BE extends ActionableElement
  ? Omit<BE, 'type' | 'actionId'> & Partial<Pick<BE, 'actionId'>>
  : Omit<BE, 'type'>;

type MaybeWithActionId<BE extends BlockElement> = (BE extends ActionableElement
  ? Omit<BE, 'actionId'>
  : BE) & { actionId?: ActionableElement['actionId'] };

export class BlockBuilder {
  private readonly blocks: LayoutBlock[];

  constructor(private readonly appId: Required<LayoutBlock>['appId']) {
    this.blocks = [];
  }

  public addSectionBlock(
    options: LayoutBlockOptions<SectionBlock>
  ): BlockBuilder {
    this.addBlock({
      type: LayoutBlockType.SECTION,
      ...options,
    });

    return this;
  }

  public addImageBlock(options: LayoutBlockOptions<ImageBlock>): BlockBuilder {
    this.addBlock({
      type: LayoutBlockType.IMAGE,
      ...options,
    });

    return this;
  }

  public addDividerBlock(): BlockBuilder {
    this.addBlock({
      type: LayoutBlockType.DIVIDER,
    });

    return this;
  }

  public addActionsBlock(
    options: LayoutBlockOptions<ActionsBlock>
  ): BlockBuilder {
    this.addBlock({
      type: LayoutBlockType.ACTIONS,
      ...options,
    });

    return this;
  }

  public addContextBlock(
    options: LayoutBlockOptions<ContextBlock>
  ): BlockBuilder {
    this.addBlock({
      type: LayoutBlockType.CONTEXT,
      ...options,
    });

    return this;
  }

  public addInputBlock(options: LayoutBlockOptions<InputBlock>): BlockBuilder {
    this.addBlock({
      type: LayoutBlockType.INPUT,
      ...options,
    });

    return this;
  }

  public addConditionalBlock(
    innerBlocks: BlockBuilder | Exclude<LayoutBlock, ConditionalBlock>[],
    condition?: ConditionalBlock['when']
  ): BlockBuilder {
    const isNotConditionalBlock = (
      block: LayoutBlock
    ): block is Exclude<LayoutBlock, ConditionalBlock> =>
      block.type !== LayoutBlockType.CONDITIONAL;

    const render = (innerBlocks instanceof BlockBuilder
      ? innerBlocks.getBlocks()
      : innerBlocks
    ).filter(isNotConditionalBlock);

    this.addBlock({
      type: LayoutBlockType.CONDITIONAL,
      render,
      when: condition,
    });

    return this;
  }

  public getBlocks() {
    return this.blocks;
  }

  public newPlainTextObject(text: string, emoji = false): TextObject {
    return {
      type: TextObjectType.PLAIN_TEXT,
      text,
      emoji,
    };
  }

  public newMarkdownTextObject(text: string): TextObject {
    return {
      type: TextObjectType.MARKDOWN,
      text,
    };
  }

  public newButtonElement(
    options: BlockElementOptions<ButtonElement>
  ): ButtonElement {
    return this.newInteractiveElement<ButtonElement>({
      type: BlockElementType.BUTTON,
      ...options,
    });
  }

  public newImageElement(
    options: BlockElementOptions<ImageElement>
  ): ImageElement {
    return {
      type: BlockElementType.IMAGE,
      ...options,
    };
  }

  public newOverflowMenuElement(
    options: BlockElementOptions<OverflowElement>
  ): OverflowElement {
    return this.newInteractiveElement<OverflowElement>({
      type: BlockElementType.OVERFLOW,
      ...options,
    });
  }

  public newPlainTextInputElement(
    options: BlockElementOptions<PlainTextInputElement>
  ): PlainTextInputElement {
    return this.newInputElement<PlainTextInputElement>({
      type: BlockElementType.PLAIN_TEXT_INPUT,
      ...options,
    });
  }

  public newStaticSelectElement(
    options: BlockElementOptions<StaticSelectElement>
  ): StaticSelectElement {
    return this.newSelectElement<StaticSelectElement>({
      type: BlockElementType.STATIC_SELECT,
      ...options,
    });
  }

  public newMultiStaticElement(
    info: BlockElementOptions<MultiStaticSelectElement>
  ): MultiStaticSelectElement {
    return this.newSelectElement<MultiStaticSelectElement>({
      type: BlockElementType.MULTI_STATIC_SELECT,
      ...info,
    });
  }

  private newInteractiveElement<T extends BlockElement>(
    element: MaybeWithActionId<T>
  ): Actionable<T> {
    if (!element.actionId) {
      element.actionId = this.generateActionId();
    }

    return element as Actionable<T>;
  }

  private newInputElement<T extends InputElement>(
    element: MaybeWithActionId<T>
  ): Actionable<T> {
    if (!element.actionId) {
      element.actionId = this.generateActionId();
    }

    return element as Actionable<T>;
  }

  private newSelectElement<T extends SelectElement>(
    element: MaybeWithActionId<T>
  ): Actionable<T> {
    if (!element.actionId) {
      element.actionId = this.generateActionId();
    }

    return element as Actionable<T>;
  }

  private addBlock<T extends LayoutBlock>(block: T): void {
    if (!block.blockId) {
      block.blockId = this.generateBlockId();
    }

    block.appId = this.appId;

    this.blocks.push(block);
  }

  private generateBlockId(): Required<LayoutBlock>['blockId'] {
    return uuid();
  }

  private generateActionId(): Required<ActionableElement>['actionId'] {
    return uuid();
  }
}
