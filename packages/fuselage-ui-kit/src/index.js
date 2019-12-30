import React, { useContext, useState } from 'react';
import {
  Divider,
  Button,
  SelectInput,
  Flex,
  Margins,
  MarginsWrapper,
  TextAreaInput,
  TextInput,
  InputBox,
  Box,
} from '@rocket.chat/fuselage';
import {
  uiKitMessage,
  uiKitModal,
  BLOCK_CONTEXT,
  UiKitParserMessage,
  ELEMENT_TYPES,
  UiKitParserModal,
  UiKitParserButtons,
  uiKitText,
  uiKitButtons,
  UiKitParserText,
} from '@rocket.chat/ui-kit';

import { Section as SectionLayoutBlock } from './Section';
import { Actions as ActionsLayoutBlock } from './Actions';
import { Input as InputLayoutBlock } from './Input';
import { MessageImage, ModalImage } from './Image';
import { StaticSelect, MultiStaticSelect } from './StaticSelect';
import { Block } from './Block';
import { Overflow } from './Overflow';

export const defaultContext = {
  action: (...args) => console.log(JSON.stringify(args)),
  state: console.log,
  appId: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
};

export const kitContext = React.createContext(defaultContext);

const useBlockContext = ({ blockId, actionId, appId }, context) => {
  const [loading, setLoading] = useState(false);
  const { action, appId: appIdFromContext, state } = useContext(kitContext);
  if ([BLOCK_CONTEXT.SECTION, BLOCK_CONTEXT.ACTION].includes(context)) {
    return [{ loading, setLoading }, async ({ target: { value } }) => {
      setLoading(true);
      await action({ blockId, appId: appId || appIdFromContext, actionId, value });
      setLoading(false);
    }];
  }

  return [{ loading, setLoading }, async ({ target: { value } }) => {
    setLoading(true);
    await state({ blockId, appId, actionId, value });
    setLoading(false);
  }];
};

const getStyle = (style) => {
  switch (style) {
  case 'primary':
  case 'danger':
    return {
      [style]: true,
    };
  }
};


function mrkdwn({ text/* , type = 'plain_text'*/ } = { text: '' }) {
  return text;
}

function plainText({ text /* , type = 'plain_text'*/ } = { text: '' }) {
  return text;
}

function text({ text /* , type = 'plain_text'*/ } = { text: '' }) {
  return text;
}

class TextParser extends UiKitParserText {
  mrkdwn(...args) { return mrkdwn(...args); }

  plainText(...args) { return plainText(...args); }

  text(...args) { return text(...args); }
}

class ButtonsParser extends UiKitParserButtons {
  button(element, context) {
    const [{ loading }, action] = useBlockContext(element, context);
    return (
      <Button
        mod-mod-loading={loading}
        {...getStyle(element.style)}
        small={context === BLOCK_CONTEXT.SECTION}
        data-group={element.groupId}
        key={element.actionId}
        children={this.plainText(element.text)}
        onClick={action}
        value={element.value}
      />
    );
  }
}


class MessageParser extends UiKitParserMessage {
  mrkdwn(...args) { return mrkdwn(...args); }

  plainText(...args) { return plainText(...args); }

  text(...args) { return text(...args); }

  overflow(element, context) {
    const [{ loading }, action] = useBlockContext(element, context);
    return <Overflow loading={loading} {...element} onChange={action} parser={this}/>;
  }

  button(element, context) {
    const [{ loading }, action] = useBlockContext(element, context);
    return (
      <Button
        mod-mod-loading={loading}
        {...getStyle(element.style)}
        small
        data-group={element.groupId}
        key={element.actionId}
        children={this.plainText(element.text)}
        onClick={action}
        value={element.value}
      />
    );
  }

  divider() {
    return <Block><Divider /></Block>;
  }

  section(args, context, index) {
    return (
      <SectionLayoutBlock key={index} {...args} parser={this} />
    );
  }

  actions(args) {
    return (
      <ActionsLayoutBlock {...args} parser={this} />
    );
  }

  datePicker(element, context, index) {
    const [{ loading }, action] = useBlockContext(element, context);
    const { actionId, placeholder } = element;
    return (
      <InputBox
        key={index}
        mod-mod-loading={loading}
        id={actionId}
        name={actionId}
        rows={6}
        onInput={action}
        placeholder={this.plainText(placeholder)}
        type='date'
      />
    );
  }

  image(element, context, index) {
    return <MessageImage key={index} element={element} context={context}/>;
  }

  context({ elements }, context, index) {
    return (
      <Block>
        <Box is='div' className='TESTE'>
          <Flex.Container alignItems='center' key={index}>
            <MarginsWrapper all={4}>
              <Box is='div'>
                {elements.map((element, i) => (
                  <Margins all={4} key={i}>
                    <Flex.Item>
                      {[
                        ELEMENT_TYPES.PLAIN_TEXT_INPUT,
                        ELEMENT_TYPES.MARKDOWN,
                      ].includes(element.type) ? (
                          <Box is='span' textStyle='caption'>
                            {this.renderContext(element, BLOCK_CONTEXT.CONTEXT, this)}
                          </Box>
                        )
                        : this.renderContext(element, BLOCK_CONTEXT.CONTEXT, this)
                    || element.type
                      }
                    </Flex.Item>
                  </Margins>
                ))}
              </Box>
            </MarginsWrapper>
          </Flex.Container>
        </Box>
      </Block>
    );
  }

  multiStaticSelect(element, context) {
    const [{ loading }, action] = useBlockContext(element, context);
    return (
      <MultiStaticSelect
        {...element}
        mod-loading={loading}
        onChange={action}
        parser={this}
      />
    );
  }

  staticSelect(element, context) {
    const [{ loading }, action] = useBlockContext(element, context);
    return <StaticSelect {...element} mod-loading={loading} onChange={action} parser={this} />;
  }

  selectInput(element, context) {
    const [{ loading }, action] = useBlockContext(element, context);
    return (
      <SelectInput onChange={action} mod-loading={loading} placeholder={element.type} disabled />
    );
  }
}

class ModalParser extends UiKitParserModal {
  constructor() {
    super();
    Object.getOwnPropertyNames(MessageParser.prototype).forEach((method) => {
      ModalParser.prototype[method] = ModalParser.prototype[method] || MessageParser.prototype[method];
    });
  }

  input({ element, label, blockId, appId }, context, index) {
    return (
      <InputLayoutBlock
        key={index}
        index={index}
        parser={this}
        element={{ ...element, appId, blockId }}
        label={this.plainText(label)}
      />
    );
  }

  image(element, context, index) {
    return <ModalImage key={index} element={element} context={context}/>;
  }

  plainInput(element, context, index) {
    const [{ loading }, action] = useBlockContext(element, context);
    const { multiline, actionId, placeholder } = element;
    const Component = multiline ? TextAreaInput : TextInput;
    return (
      <Component
        key={index}
        mod-loading={loading}
        id={actionId}
        name={actionId}
        rows={6}
        onInput={action}
        placeholder={this.plainText(placeholder)}
      />
    );
  }
}

export const textParser = new TextParser();
export const messageParser = new MessageParser();
export const modalParser = new ModalParser();
export const buttonsParser = new ButtonsParser();

export const UiKitButtons = uiKitButtons();
export const UiKitText = uiKitText(textParser);
export const UiKitMessage = uiKitMessage(messageParser);
export const UiKitModal = uiKitModal(modalParser);
