import * as UiKit from '@rocket.chat/ui-kit';
import React, { Fragment } from 'react';

import ActionsBlock from './blocks/ActionsBlock';
import ContextBlock from './blocks/ContextBlock';
import DividerBlock from './blocks/DividerBlock';
import ImageBlock from './blocks/ImageBlock';
import InputBlock from './blocks/InputBlock';
import SectionBlock from './blocks/SectionBlock';
import ButtonElement from './elements/ButtonElement';
import DatePickerElement from './elements/DatePickerElement';
import ImageElement from './elements/ImageElement';
import LinearScaleElement from './elements/LinearScaleElement';
import MultiStaticSelectElement from './elements/MultiStaticSelectElement';
import OverflowElement from './elements/OverflowElement';
import PlainTextInputElement from './elements/PlainTextInputElement';
import StaticSelectElement from './elements/StaticSelectElement';

export function plain_text({ text = '' }, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return null;
  }

  return text ? <Fragment key={index}>{text}</Fragment> : null;
}

export function mrkdwn({ text = '' }, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return null;
  }

  return text ? <Fragment key={index}>{text}</Fragment> : null;
}

export function actions(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return (
      <ActionsBlock
        key={index}
        blockElement={element}
        context={context}
        index={index}
        parser={this}
      />
    );
  }

  return null;
}

export function context(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return (
      <ContextBlock
        key={index}
        blockElement={element}
        context={context}
        index={index}
        parser={this}
      />
    );
  }

  return null;
}

export function divider(block, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return (
      <DividerBlock
        key={index}
        blockElement={block}
        context={context}
        index={index}
        parser={this}
      />
    );
  }

  return null;
}

export function image(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return (
      <ImageBlock
        key={index}
        blockElement={element}
        context={context}
        index={index}
        parser={this}
      />
    );
  }

  return (
    <ImageElement
      key={index}
      element={element}
      context={context}
      index={index}
      parser={this}
    />
  );
}

export function input(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return (
      <InputBlock
        key={index}
        blockElement={element}
        context={context}
        index={index}
        parser={this}
      />
    );
  }

  return null;
}

export function section(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return (
      <SectionBlock
        key={index}
        blockElement={element}
        context={context}
        index={index}
        parser={this}
      />
    );
  }

  return null;
}

export function button(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return null;
  }

  return (
    <ButtonElement
      key={index}
      element={element}
      context={context}
      parser={this}
    />
  );
}

export function datepicker(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return null;
  }

  return (
    <DatePickerElement
      key={index}
      element={element}
      context={context}
      parser={this}
    />
  );
}

export function static_select(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return null;
  }

  return (
    <StaticSelectElement
      key={index}
      element={element}
      context={context}
      parser={this}
    />
  );
}

export function multi_static_select(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return null;
  }

  return (
    <MultiStaticSelectElement
      key={index}
      element={element}
      context={context}
      parser={this}
    />
  );
}

export function overflow(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return null;
  }

  return (
    <OverflowElement
      key={index}
      element={element}
      context={context}
      parser={this}
    />
  );
}

export function plain_text_input(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return null;
  }

  return (
    <PlainTextInputElement
      key={index}
      element={element}
      context={context}
      parser={this}
    />
  );
}

export function linear_scale(element, context, index) {
  if (context === UiKit.BlockContext.BLOCK) {
    return null;
  }

  return (
    <LinearScaleElement
      key={index}
      element={element}
      context={context}
      parser={this}
    />
  );
}
