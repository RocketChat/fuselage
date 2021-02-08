import { LayoutBlock } from '../..';
import { Block } from './Block';
import { Option } from './Option';
import { Actionable } from './element/Actionable';
import { ButtonElement } from './element/ButtonElement';
import { DatePickerElement } from './element/DatePickerElement';
import { ImageElement } from './element/ImageElement';
import { LinearScaleElement } from './element/LinearScaleElement';
import { MultiStaticSelectElement } from './element/MultiStaticSelectElement';
import { OverflowElement } from './element/OverflowElement';
import { PlainTextInputElement } from './element/PlainTextInputElement';
import { StaticSelectElement } from './element/StaticSelectElement';
import { ActionsBlock } from './layout/ActionsBlock';
import { ConditionalBlock } from './layout/ConditionalBlock';
import { ContextBlock } from './layout/ContextBlock';
import { DividerBlock } from './layout/DividerBlock';
import { ImageBlock } from './layout/ImageBlock';
import { InputBlock } from './layout/InputBlock';
import { SectionBlock } from './layout/SectionBlock';
import { Markdown } from './text/Markdown';
import { PlainText } from './text/PlainText';
import { TextObject } from './text/TextObject';

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
export type IElement = Block;

/** @deprecated */
export type ITextObject = TextObject & { emoji?: boolean };

/** @deprecated */
export type IOptionObject = Omit<Option, 'description' | 'url'>;

/** @deprecated */
export type IBlockElement = Pick<Block, 'type'>;

/** @deprecated */
export type IInteractiveElement = IBlockElement & {
  actionId: string;
};

/** @deprecated */
export type IInputElement = IBlockElement & {
  actionId: string;
  placeholder: ITextObject;
  initialValue?: string | string[];
};

export type IOverflowMenuElement = IInteractiveElement & {
  type: OverflowElement['type'];
  options: IOptionObject[];
};

export type IPlainTextInputElement = IInputElement & {
  type: PlainTextInputElement['type'];
  initialValue?: string;
  multiline?: boolean;
};

export type ISelectElement = IInputElement & {
  type: StaticSelectElement['type'] | MultiStaticSelectElement['type'];
};

/** @deprecated */
export type IConditionalBlockFilters = ConditionalBlock['when'];
