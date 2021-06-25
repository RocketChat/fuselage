/* eslint-disable @typescript-eslint/no-empty-interface */
import { LayoutBlock } from '..';
import { Actionable } from './Actionable';
import { Block } from './Block';
import { Option } from './Option';
import { TextObject } from './TextObject';
import { ButtonElement } from './elements/ButtonElement';
import { DatePickerElement } from './elements/DatePickerElement';
import { ImageElement } from './elements/ImageElement';
import { LinearScaleElement } from './elements/LinearScaleElement';
import { MultiStaticSelectElement } from './elements/MultiStaticSelectElement';
import { OverflowElement } from './elements/OverflowElement';
import { PlainTextInputElement } from './elements/PlainTextInputElement';
import { StaticSelectElement } from './elements/StaticSelectElement';
import { ActionsBlock } from './layout/ActionsBlock';
import { ConditionalBlock } from './layout/ConditionalBlock';
import { ContextBlock } from './layout/ContextBlock';
import { DividerBlock } from './layout/DividerBlock';
import { ImageBlock } from './layout/ImageBlock';
import { InputBlock } from './layout/InputBlock';
import { SectionBlock } from './layout/SectionBlock';
import { Markdown } from './text/Markdown';
import { PlainText } from './text/PlainText';

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
  IInputElement & PlainTextInputElement
>;

export type ISelectElement = InterfaceOf<
  IInputElement & {
    type: StaticSelectElement['type'] | MultiStaticSelectElement['type'];
  }
>;

export {
  /** @deprecated */
  ButtonStyle,
} from './ButtonStyle';
export {
  /** @deprecated */
  ConditionalBlockFiltersEngine,
} from '../rendering/ConditionalBlockFiltersEngine';
export {
  /** @deprecated */
  LayoutBlockType as BlockType,
} from './LayoutBlockType';

export {
  ElementType,
  /** @deprecated */
  ElementType as ELEMENT_TYPES,
} from './ElementType';

export {
  /** @deprecated */
  BlockContext as BLOCK_CONTEXT,
} from '../rendering/BlockContext';
