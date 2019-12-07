import React, { useContext } from 'react';
import {
  Divider,
  Button,
  SelectInput,
  Flex,
  Margins,
  TextAreaInput,
  TextInput,
  InputBox,
  Box,
  Text,
} from '@rocket.chat/fuselage';
import {
  uiKitMessage,
  uiKitModal,
  BLOCK_CONTEXT,
  UiKitParserMessage,
  ELEMENT_TYPES,
  UiKitParserModal,
} from '@rocket.chat/ui-kit';

import { Section as SectionLayoutBlock } from './Section';
import { Actions as ActionsLayoutBlock } from './Actions';
import { Input as InputLayoutBlock } from './Input';
import { MessageImage, ModalImage } from './Image';
import { StaticSelect } from './StaticSelect';
import { Block } from './Block';

export const defaultContext = {
  action: (...args) => alert(JSON.stringify(args)),
  state: console.log,
  appId: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
};

export const kitContext = React.createContext(defaultContext);

const useBlockContext = ({ blockId, actionId, appId }, context) => {
  const { action, appId: appIdFromContext, state } = useContext(kitContext);
  if ([BLOCK_CONTEXT.SECTION, BLOCK_CONTEXT.ACTION].includes(context)) {
    return ({ target: { value } }) => {
      action({ blockId, appId: appId || appIdFromContext, actionId, value });
    };
  }

  return ({ target: { value } }) => {
    state({ blockId, appId, actionId, value });
  };
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

class MessageParser extends UiKitParserMessage {
  button(element, context) {
    const action = useBlockContext(element, context);
    return (
      <Button
        {...getStyle(element.style)}
        small
        data-group={element.groupId}
        key={element.actionId}
        children={this.text(element.text)}
        onClick={action}
        value={element.value}
      />
    );
  }

  divider() {
    return <Divider />;
  }

  text({ text/* , type = 'plain_text'*/ } = { text: '' }) {
    return text;
  }

  section(args) {
    return (
      <SectionLayoutBlock {...args} parser={this} />
    );
  }

  actions(args) {
    return (
      <ActionsLayoutBlock {...args} parser={this} />
    );
  }

  datePicker(element, context) {
    const action = useBlockContext(element, context);
    const { actionId, placeholder } = element;
    return (
      <InputBox
        id={actionId}
        name={actionId}
        rows={6}
        onInput={action}
        placeholder={this.text(placeholder)}
        type='date'
      />
    );
  }

  image(element, context) {
    return <MessageImage element={element} context={context}/>;
  }

  context({ elements }/* , context*/) {
    return (
      <Flex.Container alignItems='center'>
        <Block>
          <Box is='div'>
            {elements.map((element) => (
              <Margins all={4}>
                <Flex.Item>
                  {[
                    ELEMENT_TYPES.PLAIN_TEXT_INPUT,
                    ELEMENT_TYPES.MARKDOWN,
                  ].includes(element.type) ? (
                      <Text>
                        {this.renderContext(element, BLOCK_CONTEXT.CONTEXT, this)}
                      </Text>
                    )
                    : this.renderContext(element, BLOCK_CONTEXT.CONTEXT, this)
                    || element.type
                  }
                </Flex.Item>
              </Margins>
            ))}
          </Box>
        </Block>
      </Flex.Container>
    );
  }

  multiStaticSelect(element, context) {
    const action = useBlockContext(element, context);
    return (
      <StaticSelect
        size={3}
        multiple
        {...element}
        onChange={action}
        parser={this}
      />
    );
  }

  staticSelect(element, context) {
    const action = useBlockContext(element, context);
    return <StaticSelect {...element} onChange={action} parser={this} />;
  }

  selectInput(element, context) {
    const action = useBlockContext(element, context);
    return (
      <SelectInput onChange={action} placeholder={element.type} disabled />
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

  input({ element, label, blockId, appId }) {
    return (
      <InputLayoutBlock
        parser={this}
        element={{ ...element, appId, blockId }}
        label={this.text(label)}
      />
    );
  }

  image(element, context) {
    return <ModalImage element={element} context={context}/>;
  }

  plainInput(element, context) {
    const action = useBlockContext(element, context);
    const { multiline, actionId, placeholder } = element;
    const Component = multiline ? TextAreaInput : TextInput;
    return (
      <Component
        id={actionId}
        name={actionId}
        rows={6}
        onInput={action}
        placeholder={this.text(placeholder)}
      />
    );
  }
}

const messageParser = new MessageParser();
const modalParser = new ModalParser();

export const UiKitMessage = uiKitMessage(messageParser);
export const UiKitModal = uiKitModal(modalParser);
