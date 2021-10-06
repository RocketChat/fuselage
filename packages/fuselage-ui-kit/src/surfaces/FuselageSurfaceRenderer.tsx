import * as UiKit from '@rocket.chat/ui-kit';
import React, { Fragment, ReactElement } from 'react';

import ActionsBlock from '../blocks/ActionsBlock';
import ContextBlock from '../blocks/ContextBlock';
import DividerBlock from '../blocks/DividerBlock';
import ImageBlock from '../blocks/ImageBlock';
import InputBlock from '../blocks/InputBlock';
import SectionBlock from '../blocks/SectionBlock';
import ButtonElement from '../elements/ButtonElement';
import DatePickerElement from '../elements/DatePickerElement';
import ImageElement from '../elements/ImageElement';
import LinearScaleElement from '../elements/LinearScaleElement';
import MultiStaticSelectElement from '../elements/MultiStaticSelectElement';
import OverflowElement from '../elements/OverflowElement';
import PlainTextInputElement from '../elements/PlainTextInputElement';
import StaticSelectElement from '../elements/StaticSelectElement';

export class FuselageSurfaceRenderer extends UiKit.SurfaceRenderer<ReactElement> {
  public constructor() {
    super(['actions', 'context', 'divider', 'image', 'input', 'section']);
  }

  public plain_text(
    { text = '' }: UiKit.PlainText,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return null;
    }

    return text ? <Fragment key={index}>{text}</Fragment> : null;
  }

  public mrkdwn(
    { text = '' }: UiKit.Markdown,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return null;
    }

    return text ? <Fragment key={index}>{text}</Fragment> : null;
  }

  actions(
    block: UiKit.ActionsBlock,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return (
        <ActionsBlock
          key={index}
          block={block}
          context={context}
          index={index}
          surfaceRenderer={this}
        />
      );
    }

    return null;
  }

  context(
    block: UiKit.ContextBlock,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return (
        <ContextBlock
          key={index}
          block={block}
          context={context}
          index={index}
          surfaceRenderer={this}
        />
      );
    }

    return null;
  }

  divider(
    block: UiKit.DividerBlock,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return (
        <DividerBlock
          key={index}
          block={block}
          context={context}
          index={index}
          surfaceRenderer={this}
        />
      );
    }

    return null;
  }

  image(
    block: UiKit.ImageBlock | UiKit.ImageElement,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return (
        <ImageBlock
          key={index}
          block={block}
          context={context}
          index={index}
          surfaceRenderer={this}
        />
      );
    }

    return (
      <ImageElement
        key={index}
        block={block}
        context={context}
        index={index}
        surfaceRenderer={this}
      />
    );
  }

  input(
    block: UiKit.InputBlock,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return (
        <InputBlock
          key={index}
          block={block}
          context={context}
          index={index}
          surfaceRenderer={this}
        />
      );
    }

    return null;
  }

  section(
    block: UiKit.SectionBlock,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return (
        <SectionBlock
          key={index}
          block={block}
          context={context}
          index={index}
          surfaceRenderer={this}
        />
      );
    }

    return null;
  }

  button(
    block: UiKit.ButtonElement,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return null;
    }

    return (
      <ButtonElement
        key={index}
        block={block}
        context={context}
        index={index}
        surfaceRenderer={this}
      />
    );
  }

  datepicker(
    block: UiKit.DatePickerElement,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return null;
    }

    return (
      <DatePickerElement
        key={index}
        block={block}
        context={context}
        index={index}
        surfaceRenderer={this}
      />
    );
  }

  static_select(
    block: UiKit.StaticSelectElement,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return null;
    }

    return (
      <StaticSelectElement
        key={index}
        block={block}
        context={context}
        index={index}
        surfaceRenderer={this}
      />
    );
  }

  multi_static_select(
    block: UiKit.MultiStaticSelectElement,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return null;
    }

    return (
      <MultiStaticSelectElement
        key={index}
        block={block}
        context={context}
        index={index}
        surfaceRenderer={this}
      />
    );
  }

  overflow(
    block: UiKit.OverflowElement,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return null;
    }

    return (
      <OverflowElement
        key={index}
        block={block}
        context={context}
        index={index}
        surfaceRenderer={this}
      />
    );
  }

  plain_text_input(
    block: UiKit.PlainTextInputElement,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return null;
    }

    return (
      <PlainTextInputElement
        key={index}
        block={block}
        context={context}
        index={index}
        surfaceRenderer={this}
      />
    );
  }

  linear_scale(
    block: UiKit.LinearScaleElement,
    context: UiKit.BlockContext,
    index: number
  ): ReactElement | null {
    if (context === UiKit.BlockContext.BLOCK) {
      return null;
    }

    return (
      <LinearScaleElement
        key={index}
        block={block}
        context={context}
        index={index}
        surfaceRenderer={this}
      />
    );
  }
}
