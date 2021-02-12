import { BlockContext, BlockElementType, TextObjectType } from '../../enums';
import { LayoutBlockType } from '../../enums/LayoutBlockType';
import {
  TextObject,
  PlainText,
  SectionBlock,
  ActionsBlock,
  ContextBlock,
  DatePickerElement,
  StaticSelectElement,
  MultiStaticSelectElement,
  InputBlock,
  PlainTextInputElement,
  LinearScaleElement,
} from '../blocks';
import { BlockElementMap } from '../blocks/element/BlockElement';
import { LayoutBlockMap } from '../blocks/layout/LayoutBlock';
import { TextObjectMap } from '../blocks/text/TextObject';
import { ElementRenderer } from './ElementRenderer';
import { ElementSetRenderer } from './ElementSetRenderer';

type TextObjectRenderer<OutputElement> = {
  [Type in TextObjectType]: (
    textObject: TextObjectMap[Type],
    context: BlockContext,
    index: number
  ) => OutputElement | null;
};

type BlockElementRenderer<OutputElement> = {
  [Type in BlockElementType]: (
    blockElement: BlockElementMap[Type],
    context: BlockContext,
    index: number
  ) => OutputElement | null;
};

type LayoutBlockRenderer<OutputElement> = {
  [Type in LayoutBlockType]: (
    layoutBlock: LayoutBlockMap[Type],
    context: BlockContext.BLOCK,
    index: number
  ) => OutputElement | null;
};

type BlockRenderers<OutputElement> = Partial<
  TextObjectRenderer<OutputElement>
> &
  Partial<BlockElementRenderer<OutputElement>> &
  Partial<LayoutBlockRenderer<OutputElement>>;

export interface ISurfaceRenderer<OutputElement>
  extends BlockRenderers<OutputElement> {
  /** @deprecated */
  plainText: ElementRenderer<OutputElement, PlainText>;

  /** @deprecated */
  text: ElementRenderer<OutputElement, TextObject>;

  /** @deprecated */
  datePicker?: ElementRenderer<OutputElement, DatePickerElement>;

  /** @deprecated */
  staticSelect?: ElementRenderer<OutputElement, StaticSelectElement>;

  /** @deprecated */
  multiStaticSelect?: ElementRenderer<OutputElement, MultiStaticSelectElement>;

  /** @deprecated */
  plainInput?: ElementRenderer<OutputElement, PlainTextInputElement>;

  /** @deprecated */
  linearScale?: ElementRenderer<OutputElement, LinearScaleElement>;

  /** @deprecated */
  renderAccessories?: ElementSetRenderer<
    OutputElement,
    Exclude<SectionBlock['accessory'], undefined>
  >;

  /** @deprecated */
  renderActions?: ElementSetRenderer<
    OutputElement,
    ActionsBlock['elements'][number]
  >;

  /** @deprecated */
  renderContext?: ElementSetRenderer<
    OutputElement,
    ContextBlock['elements'][number]
  >;

  /** @deprecated */
  renderInputs?: ElementSetRenderer<OutputElement, InputBlock['element']>;
}
