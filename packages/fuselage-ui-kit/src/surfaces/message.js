import { Box, Divider, InputBox, Margins } from '@rocket.chat/fuselage';
import {
  BlockContext,
  ElementType,
  uiKitMessage,
  UiKitParserMessage,
} from '@rocket.chat/ui-kit';
import React from 'react';

import { Actions as ActionsLayoutBlock } from '../Actions';
import { Block } from '../Block';
import { MessageImage } from '../Image';
import { Overflow } from '../Overflow';
import { Section as SectionLayoutBlock } from '../Section';
import { MultiStaticSelect, StaticSelect } from '../StaticSelect';
import { UIKitButton } from '../UIKitButton';
import { useBlockContext } from '../hooks';
import { mrkdwn, plainText, text } from '../text';

class MessageParser extends UiKitParserMessage {
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
    return <Divider mb='x24' key={key} />;
  }

  section(args, context, index) {
    return <SectionLayoutBlock key={index} {...args} parser={this} />;
  }

  actions(args, _, key) {
    return <ActionsLayoutBlock {...args} key={key} parser={this} />;
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
    return <MessageImage key={key} element={element} context={context} />;
  }

  context({ elements }, context, key) {
    return (
      <Block key={key}>
        <Box display='flex' alignItems='center' m='neg-x4'>
          {elements.map((element, i) => (
            <Margins all='x4' key={i}>
              {[ElementType.PLAIN_TEXT, ElementType.MARKDOWN].includes(
                element.type
              ) ? (
                <Box is='span' fontScale='c1' color='info'>
                  {this.renderContext(element, BlockContext.CONTEXT, this)}
                </Box>
              ) : (
                this.renderContext(element, BlockContext.CONTEXT, this) ||
                element.type
              )}
            </Margins>
          ))}
        </Box>
      </Block>
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

  // selectInput(element, context, key) {
  //   const [{ loading, value }, action] = useBlockContext(element, context);
  //   return (
  //     <SelectInput key={key} value={value} onChange={action} mod-loading={loading} placeholder={element.type} disabled />
  //   );
  // }
}

export const messageParser = new MessageParser();
export const UiKitMessage = (blocks, conditions = {}) =>
  uiKitMessage(messageParser, { engine: 'rocket.chat', ...conditions })(blocks);
