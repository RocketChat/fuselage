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
  plainText: ElementRenderer<OutputElement, PlainText>;
  text: ElementRenderer<OutputElement, TextObject>;

  datePicker?: ElementRenderer<OutputElement, DatePickerElement>;
  staticSelect?: ElementRenderer<OutputElement, StaticSelectElement>;
  multiStaticSelect?: ElementRenderer<OutputElement, MultiStaticSelectElement>;
  plainInput?: ElementRenderer<OutputElement, PlainTextInputElement>;
  linearScale?: ElementRenderer<OutputElement, LinearScaleElement>;

  renderAccessories?: ElementSetRenderer<
    OutputElement,
    Exclude<SectionBlock['accessory'], undefined>
  >;
  renderActions?: ElementSetRenderer<
    OutputElement,
    ActionsBlock['elements'][number]
  >;
  renderContext?: ElementSetRenderer<
    OutputElement,
    ContextBlock['elements'][number]
  >;
  renderInputs?: ElementSetRenderer<OutputElement, InputBlock['element']>;
}
