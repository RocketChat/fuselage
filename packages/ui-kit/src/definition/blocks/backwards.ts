/* eslint-disable @typescript-eslint/no-empty-interface */
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

type InterfaceOf<T> = Pick<T, keyof T>;

/** @deprecated */
export type ILinearScaleElement = InterfaceOf<LinearScaleElement>;
/** @deprecated */
export type IPlainTextInput = InterfaceOf<PlainTextInputElement>;
/** @deprecated */
export type IStaticSelectElement = InterfaceOf<StaticSelectElement>;
/** @deprecated */
export type IMultiStaticSelectElement = InterfaceOf<MultiStaticSelectElement>;
/** @deprecated */
export type IDatePickerElement = InterfaceOf<DatePickerElement>;
/** @deprecated */
export type IButtonElement = InterfaceOf<ButtonElement>;
/** @deprecated */
export type IOverflowElement = InterfaceOf<OverflowElement>;
/** @deprecated */
export type IImageElement = InterfaceOf<ImageElement>;
/** @deprecated */
export type IActionableElement = InterfaceOf<Actionable<Record<never, never>>>;

/** @deprecated */
export type IActionsBlock = InterfaceOf<ActionsBlock>;
/** @deprecated */
export type ActionElement = InterfaceOf<ActionsBlock['elements'][number]>;
/** @deprecated */
export type ISectionBlock = InterfaceOf<SectionBlock>;
/** @deprecated */
export type SectionAccessoryElement = InterfaceOf<
  Exclude<SectionBlock['accessory'], undefined>
>;
/** @deprecated */
export type AccessoryElements = InterfaceOf<
  Exclude<SectionBlock['accessory'], undefined>
>;
/** @deprecated */
export type IImageBlock = InterfaceOf<ImageBlock>;
/** @deprecated */
export type IDividerBlock = InterfaceOf<DividerBlock>;
/** @deprecated */
export type IInputBlock = InterfaceOf<InputBlock>;
/** @deprecated */
export type InputElement = InterfaceOf<InputBlock['element']>;
/** @deprecated */
export type IContextBlock = InterfaceOf<ContextBlock>;
/** @deprecated */
export type ContextElement = InterfaceOf<ContextBlock['elements'][number]>;
/** @deprecated */
export type IConditionalBlock = InterfaceOf<ConditionalBlock>;
/** @deprecated */
export type ConditionalBlockFilters = InterfaceOf<
  Exclude<ConditionalBlock['when'], undefined>
>;
/** @deprecated */
export type IConditionalBlockFilters = InterfaceOf<ConditionalBlock['when']>;
/** @deprecated */
export type IBlock = InterfaceOf<LayoutBlock>;

/** @deprecated */
export type IPlainText = InterfaceOf<PlainText>;
/** @deprecated */
export type IMarkdown = InterfaceOf<Markdown>;

/** @deprecated */
export type IElement = InterfaceOf<Block>;

/** @deprecated */
export type ITextObject = InterfaceOf<TextObject & { emoji?: boolean }>;

/** @deprecated */
export type IOptionObject = InterfaceOf<Omit<Option, 'description' | 'url'>>;

/** @deprecated */
export type IBlockElement = Pick<Block, 'type'>;

/** @deprecated */
export type IInteractiveElement = InterfaceOf<
  IBlockElement & {
    actionId: string;
  }
>;

/** @deprecated */
export type IInputElement = InterfaceOf<
  IBlockElement & {
    actionId: string;
    placeholder: ITextObject;
    initialValue?: string | string[];
  }
>;

export type IOverflowMenuElement = InterfaceOf<
  IInteractiveElement & {
    type: OverflowElement['type'];
    options: IOptionObject[];
  }
>;

export type IPlainTextInputElement = InterfaceOf<
  IInputElement & {
    type: PlainTextInputElement['type'];
    initialValue?: string;
    multiline?: boolean;
  }
>;

export type ISelectElement = InterfaceOf<
  IInputElement & {
    type: StaticSelectElement['type'] | MultiStaticSelectElement['type'];
  }
>;
