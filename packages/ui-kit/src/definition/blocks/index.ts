import { Block } from '../..';
import { Actionable } from './Actionable';
import { ActionsBlock } from './ActionsBlock';
import { ButtonElement } from './ButtonElement';
import { ConditionalBlock } from './ConditionalBlock';
import { ContextBlock } from './ContextBlock';
import { DatePickerElement } from './DatePickerElement';
import { DividerBlock } from './DividerBlock';
import { ImageBlock } from './ImageBlock';
import { ImageElement } from './ImageElement';
import { InputBlock } from './InputBlock';
import { LinearScaleElement } from './LinearScaleElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { OverflowElement } from './OverflowElement';
import { PlainTextInputElement } from './PlainTextInputElement';
import { SectionBlock } from './SectionBlock';
import { StaticSelectElement } from './StaticSelectElement';

export { ConfirmationDialog } from './ConfirmationDialog';
export { ActionsBlock } from './ActionsBlock';
export { Block } from './Block';
export { ButtonElement } from './ButtonElement';
export { ConditionalBlock } from './ConditionalBlock';
export { ContextBlock } from './ContextBlock';
export { DatePickerElement } from './DatePickerElement';
export { DividerBlock } from './DividerBlock';
export { IElement } from './IElement';
export { ImageBlock } from './ImageBlock';
export { ImageElement } from './ImageElement';
export { InputBlock } from './InputBlock';
export { LinearScaleElement } from './LinearScaleElement';
export { IMarkdown } from './IMarkdown';
export { MultiStaticSelectElement } from './MultiStaticSelectElement';
export { OverflowElement } from './OverflowElement';
export { IPlainText } from './IPlainText';
export { PlainTextInputElement } from './PlainTextInputElement';
export { SectionBlock } from './SectionBlock';
export { StaticSelectElement } from './StaticSelectElement';
export { Option } from './Option';
export { OptionGroup } from './OptionGroup';
export { TextObject } from './TextObject';

export {
  ElementType,
  /** @deprecated */
  ElementType as ELEMENT_TYPES,
} from './ElementType';

export {
  BlockContext,
  /** @deprecated */
  BlockContext as BLOCK_CONTEXT,
} from './BlockContext';

/** @deprecated */
export type ILinearScaleElement = LinearScaleElement;
/** @deprecated */
export type IPlainTextInput = PlainTextInputElement;
/** @deprecated */
export type IStaticSelectElement = StaticSelectElement;
/** @deprecated */
export type IMultiStaticSelectElement = MultiStaticSelectElement;
/** @deprecated */
export type IDatePickerElement = DatePickerElement;
/** @deprecated */
export type IButtonElement = ButtonElement;
/** @deprecated */
export type IOverflowElement = OverflowElement;
/** @deprecated */
export type IImageElement = ImageElement;
/** @deprecated */
export type IActionableElement = Actionable<Record<never, never>>;
/** @deprecated */
export type IActionsBlock = ActionsBlock;
/** @deprecated */
export type ActionElement = ActionsBlock['elements'][number];
/** @deprecated */
export type ISectionBlock = SectionBlock;
/** @deprecated */
export type SectionAccessoryElement = Exclude<
  SectionBlock['accessory'],
  undefined
>;
/** @deprecated */
export type IImageBlock = ImageBlock;
/** @deprecated */
export type IDividerBlock = DividerBlock;
/** @deprecated */
export type IInputBlock = InputBlock;
/** @deprecated */
export type InputElement = InputBlock['element'];
/** @deprecated */
export type IContextBlock = ContextBlock;
/** @deprecated */
export type ContextElement = ContextBlock['elements'][number];
/** @deprecated */
export type IConditionalBlock = ConditionalBlock;
/** @deprecated */
export type ConditionalBlockFilters = Exclude<
  ConditionalBlock['when'],
  undefined
>;
/** @deprecated */
export type IBlock = Block;

// from Apps Engine
export { BlockType } from './BlockType';
export { BlockElementType } from './BlockElementType';
export { TextObjectType } from './TextObjectType';
export { ITextObject } from './ITextObject';
export { IOptionObject } from './IOptionObject';
export { IBlockElement } from './IBlockElement';
export { IInteractiveElement } from './IInteractiveElement';
export { IInputElement } from './IInputElement';
export { ButtonStyle } from './ButtonStyle';
export { IOverflowMenuElement } from './IOverflowMenuElement';
export { IPlainTextInputElement } from './IPlainTextInputElement';
export { ISelectElement } from './ISelectElement';
export { ConditionalBlockFiltersEngine } from './ConditionalBlockFiltersEngine';
export { IConditionalBlockFilters } from './IConditionalBlockFilters';
