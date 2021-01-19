import { InputBox } from '@rocket.chat/fuselage';
import {
  BlockContext,
  uiKitBanner,
  UiKitParserBanner,
} from '@rocket.chat/ui-kit';
import React from 'react';

import { MessageImage } from '../Image';
import { Overflow } from '../Overflow';
import { MultiStaticSelect, StaticSelect } from '../StaticSelect';
import { UIKitButton } from '../UIKitButton';
import ActionsBlock from '../blocks/ActionsBlock';
import ContextBlock from '../blocks/ContextBlock';
import DividerBlock from '../blocks/DividerBlock';
import ImageBlock from '../blocks/ImageBlock';
import SectionBlock from '../blocks/SectionBlock';
import { useBlockContext } from '../hooks';
import { mrkdwn, plainText, text } from '../text';

class BannerParser extends UiKitParserBanner {
  mrkdwn(...args) {
    return mrkdwn(...args);
  }

  plainText(...args) {
    return plainText(...args);
  }

  text(...args) {
    return text(...args);
  }

  overflow(element, context) {
    return <Overflow context={context} {...element} parser={this} />;
  }

  button(element, context, key) {
    return (
      <UIKitButton
        element={element}
        context={context}
        key={key}
        parser={this}
      />
    );
  }

  divider(_, __, key) {
    return <DividerBlock key={key} />;
  }

  section(args, context, index) {
    return <SectionBlock key={index} {...args} parser={this} />;
  }

  actions(args, _, key) {
    return <ActionsBlock {...args} key={key} parser={this} />;
  }

  datePicker(element, context, key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ loading, value, error }, action] = useBlockContext(
      element,
      context
    );
    const { actionId, placeholder } = element;
    return (
      <InputBox
        key={key}
        error={error}
        value={value}
        disabled={loading}
        id={actionId}
        name={actionId}
        rows={6}
        onInput={action}
        placeholder={this.plainText(placeholder)}
        type='date'
      />
    );
  }

  image(element, context, key) {
    switch (context) {
      case BlockContext.BLOCK:
        return <ImageBlock key={key} element={element} surface='banner' />;

      case BlockContext.SECTION:
        return <MessageImage key={key} element={element} context={context} />;

      case BlockContext.CONTEXT:
        return <MessageImage key={key} element={element} context={context} />;

      default:
        return null;
    }
  }

  context({ elements }, context, key) {
    return (
      <ContextBlock
        key={key}
        elements={elements}
        renderContext={this.renderContext.bind(this)}
      />
    );
  }

  multiStaticSelect(element, context, key) {
    return (
      <MultiStaticSelect
        {...element}
        key={key}
        parser={this}
        context={context}
      />
    );
  }

  staticSelect(element, context, key) {
    return (
      <StaticSelect key={key} context={context} {...element} parser={this} />
    );
  }
}

export const bannerParser = new BannerParser();
export const UiKitBanner = (blocks, conditions = {}) =>
  uiKitBanner(bannerParser, { engine: 'rocket.chat', ...conditions })(blocks);
