import { LayoutBlock } from '../..';
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
import { Markdown } from './Markdown';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { OverflowElement } from './OverflowElement';
import { PlainText } from './PlainText';
import { PlainTextInputElement } from './PlainTextInputElement';
import { RenderableBlock } from './RenderableBlock';
import { SectionBlock } from './SectionBlock';
import { StaticSelectElement } from './StaticSelectElement';

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
export type IBlock = LayoutBlock;

/** @deprecated */
export type IPlainText = PlainText;
/** @deprecated */
export type IMarkdown = Markdown;

/** @deprecated */
export type IElement = RenderableBlock;
